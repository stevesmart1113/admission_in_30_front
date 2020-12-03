<template>
  <div>
    <h4 class="header-text">Courses</h4>
    <hr />
    <div style="margin: 20px">
      <vcl-facebook></vcl-facebook>
    </div>
  </div>
</template>

<script>
import { VclFacebook } from "vue-content-loading";
export default {
  name: "courses",
  components: {
    VclFacebook,
  },
};
</script>

<style>
.header-text {
  margin: 10px;
}
</style>
