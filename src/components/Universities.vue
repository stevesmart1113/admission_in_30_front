<template>
  <div>
    <h4 class="header-text">Universities.</h4>
    <hr />
    <div style="margin: 20px">
      <vcl-facebook></vcl-facebook>
    </div>
  </div>
</template>

<script>
import { VclFacebook } from "vue-content-loading";
export default {
  watch: {
  },
  created () {
      this.axios.get("http://universities.hipolabs.com/search?name=middle").then((result) => {
          
          if (result.status == 200 && result.statusText === "OK") {
              console.log(result);
              this.universities = result;
          }else{
              this.universities = []
          }
      }).catch((err) => {
          console.log(err);
      });
  },
  name: "Universities",
  components: {
    VclFacebook,
  },
  data() {
    return {
        universities: []
    }
  },
  methods: {

  },

  
};
</script>

<style>
.header-text {
  margin: 10px;
}
</style>
