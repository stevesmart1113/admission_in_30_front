<template>
  <div>
    <!-- <h4 style="margin-left:20px">Universities.</h4> -->
    <!-- <b-form-input
      v-model="text"
      placeholder="Search..."
      class="search-input"
    ></b-form-input> -->
    <div style="margin: 20px">
      <vcl-facebook v-if="universities.length <= 0"></vcl-facebook>
      <div v-else>
        <div>
          <div
            v-for="(university, key, index) in universities"
            :key="index"
            style="margin-bottom: 15px"
          >
            <b-card class="card-enhanced">
              <!-- <b-img-lazy v-bind:src="{{university.logo}}"></b-img-lazy> -->
              <b-card-title class="title-text-bold">{{
                university.name
              }}</b-card-title>
              <hr />
              <b-card-body>
                <div>{{ university.description }}</div>
              </b-card-body>
              <b-card-footer>
                <b-button-group>
                  <button type="button" class="btn light btn-info"
                    @click="getPrograms(university)"
                    >Apply <b-icon-check
                  />
                  </button>
                  <vue-star-rate
                     style="margin-left: 50px"
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
        <div></div>
        <div class="mt-3" style="margin-left: 25px">
          <!--<b-pagination-nav
            size="md"
            number-of-pages="10"
            base-url="#"
          ></b-pagination-nav>-->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { VclFacebook } from "vue-content-loading";
import vueStarRate from "vue-js-star-rating";
import axios from "axios";
export default {
  name: "Universities",
  components: {
    VclFacebook,
    vueStarRate,
  },
  watch: {},
  created() {
    axios.get("universities/")
      .then((result) => {
        if (result.status == 200 && result.statusText === "OK") {
          for (var i = 0; i < result.data.length; i++) {
               console.log(result.data[i])
               this.universities.push(result.data[i])
          }
          this.viewType = "universities";
        } else {
          this.universities = [];
        }
      })
      .catch((err) => {
        console.log(err);
      });
      this.universities = []
  },

  data() {
    return {
      universities: [],
      programs: [],
      viewType: "",
    };
  },

  methods: {
   getPrograms(university) {
      console.log(university.id);
      let formed_url = `programs/${university.id}`;
      console.log(formed_url)
      axios.get(formed_url)
        .then((data) => {
          if (data.status == 200 && data.statusText === "OK") {
              this.programs = data.data;
              console.log(data.data);
              this.$router.push({
                  name: "courses",
                  params: { data: data, university: university },
               });
          } else {
            console.log("An error occured");
          }
        }).catch((error) => {
            console.log(error);
        });
    },
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
