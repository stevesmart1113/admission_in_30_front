<template>
  <div>
    <h4 style="margin-left: 25px">
      <b-icon-arrow-left-circle-fill
        style="width: 30px; height: 30px;"
        variant="info"
        @click="getBack"
      >
      </b-icon-arrow-left-circle-fill>
      Programs
    </h4>
    <vcl-facebook v-if="programs.length <= 0"></vcl-facebook>
    <b-card
      @click="getCourses()"
      v-for="program in programs"
      :key="program.programs.program_id"
      class="card-enhanced-one"
    >
      <b-card-title>
        {{ program.programs.program_name }}
      </b-card-title>
    </b-card>
  </div>
</template>

<script>
import { VclFacebook } from "vue-content-loading";
export default {
  name: "programs",
  props: ["school_id"],
  components: {
    VclFacebook,
  },

  data() {
    return {
      programs: [],
    };
  },

  methods: {
    getCourses() {
      this.$router.push({ path: "/dashboard/courses" });
    },

    getBack() {
      this.$router.push({ name: "universities" });
    },
  },

  mounted() {
    let data = this.$route.params.data.results;
    console.log(data.results);
    this.programs = data;
    /**this.axios.get("schools/program?school_id=1").then((data) => {
        if (data.status == 200 && data.statusText === "OK") {
           this.programs = data.data.results;
           console.log(data.data.results);
        } else {
           console.log("An error occured");
        }
      });**/
  },
};
</script>

<style>
.card-enhanced {
  border-width: 2px;
  border-color: rgb(253, 253, 253);
  -webkit-box-shadow: -1px 2px 16px 2px rgba(0, 0, 0, 0.91);
  box-shadow: -1px 1px 12px 2px rgba(185, 183, 183, 0.91);
  border-radius: 15px;
  margin: 25px;
}

.card-enhanced-one {
  border-width: 2px;
  border-color: rgb(253, 253, 253);
  -webkit-box-shadow: -1px 2px 16px 2px rgba(0, 0, 0, 0.91);
  box-shadow: -1px 1px 12px 2px rgba(185, 183, 183, 0.91);
  border-radius: 15px;
  margin: 25px;
  font-weight: 800;
}

.card-enhanced-one :hover {
  background-color: #81d4fa;
  border-width: 2px;
  border-radius: 15px;
  color: white;
  font-weight: 900;
  font-size: 25px;
}
</style>
