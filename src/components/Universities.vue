<template>
  <div>
    <h4 style="margin-left:20px">Universities.</h4>
    <b-form-input
      v-model="text"
      placeholder="Search..."
      class="search-input"
    ></b-form-input>
    <div style="margin: 20px">
      <vcl-facebook v-if="universities.length <= 0"></vcl-facebook>
      <div v-else>
        <div>
          <div
            v-for="university in universities"
            :key="university.name"
            style="margin-bottom: 15px"
          >
            <b-card class="card-enhanced">
              <b-card-title class="title-text-bold">{{
                university.name
              }}</b-card-title>
              <hr />
              <b-card-body>
                <div>{{ university.description }}</div>
              </b-card-body>
              <b-card-footer>
                <b-button-group>
                  <b-button
                    variant="info"
                    class="btn-outlined-enhanced spacer"
                    @click="getPrograms(university.id)"
                    >Info <b-icon-info-circle
                  /></b-button>
                  <!-- <b-button variant="outline-info" class="btn-outlined-enhanced"
                  >Apply <b-icon-check
                /></b-button>-->
                  <vue-star-rate
                    :rateRange="university.ranking"
                    :maxIcon="5"
                    :iconHeight="22"
                    :iconWidth="22"
                    :hasCounter="true"
                    iconColor="#FFFF99"
                    iconColorHover="#a89d32"
                    iconShape="star"
                  ></vue-star-rate>
                </b-button-group>
              </b-card-footer>
            </b-card>
          </div>
        </div>
        <div>
          
        </div>
        <div class="mt-3" style="margin-left: 25px">
          <b-pagination-nav
            size="md"
            number-of-pages="10"
            base-url="#"
          ></b-pagination-nav>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { VclFacebook } from "vue-content-loading";
import vueStarRate from "vue-js-star-rating";
export default {
  watch: {},
  created() {
    this.axios
      .get('universities').then((result) => {
        if (result.status == 200 && result.statusText === "OK") {
             console.log(result);
             this.universities = result.data.results;
             this.viewType = "universities";
        } else {
             this.universities = [];
        }
      })
      .catch((err) => {
        console.log(err);
      });
  },

  name: "Universities",
  components: {
    VclFacebook,
    vueStarRate,
  },

  data() {
    return {
      universities: [],
      programs: [],
      viewType: "",
    };
  },

  methods: {
     getPrograms(id){
       console.log(id)
       this.axios.get("schools/program?school_id="+id).then((data) => {
        if (data.status == 200 && data.statusText === "OK") {
           this.programs = data.data.results;
           console.log(data.data.results);
           this.$router.push({name: "courses", params: data })
        } else {
           console.log("An error occured");
        }
      });
     }
  },
};
</script>

<style>
.header-text {
  margin-left: 20px;
}

.spacer {
  margin-right: 50px;
}

.btn-outlined-enhanced {
  border-width: 2px;
}

.card-enhanced {
  border-width: 2px;
  border-color: rgb(253, 253, 253);
  -webkit-box-shadow: -1px 2px 16px 2px rgba(0, 0, 0, 0.91);
  box-shadow: -1px 1px 12px 2px rgba(185, 183, 183, 0.91);
  border-radius: 15px;
  margin: 25px;
}

.title-text-bold {
  font-weight: 900;
}

.search-input {
  margin-left: 50px;
  width: 400px;
  border-width: 2px;
  height: 50px;
  border-radius: 15px;
}
</style>
