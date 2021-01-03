/* eslint-disable vue/valid-v-on */
<template>
  <b-row class="row-body">
    <b-col>
      <br />
      <h1 class="text-margin-left" style="font-weight: 900">Admission in 30</h1>
      <br />
      <b-form class="container">
        <b-overlay :show="show" rounded="sm">
          <b-form-group
            id="input-group-1"
            label="Email Address"
            class="text-left"
            style="font-weight: 900"
            label-for="input-1"
            description="We'll never share your email with anyone"
          >
            <b-form-input
              id="input-1"
              v-model="form.email"
              type="email"
              placeholder="Enter email"
              class="w-75"
            >
            </b-form-input>
          </b-form-group>
          <b-form-group
            id="input-group-2"
            label="Password"
            class="text-left"
            label-for="input-2"
            style="font-weight: 900"
            description="Should be more than 6 characters"
          >
            <b-form-input
              id="input-2"
              v-model="form.password"
              type="password"
              placeholder="Enter password"
              class="w-75"
            >
            </b-form-input>
          </b-form-group>
          <b-button
            type="submit"
            variant="outline-warning"
            @click="signIn"
            style="margin-right: 10px; font-weight: 900"
            >Sign In <b-icon-chevron-right></b-icon-chevron-right
          ></b-button>

          <b-button type="submit" variant="warning" style="font-weight: 900"
            >Sign Up <b-icon-person></b-icon-person
          ></b-button>
          <div style="height: 30px;" />
          <span style="font-size: 12px"
            >Forgotten password? Kindly click here to reset password
            <b-link>Reset</b-link></span
          >
        </b-overlay>
      </b-form>
    </b-col>
    <b-col class="row-back">
      <h3 style="color: white; margin-top: 100px">
        Student Management Portal.
      </h3>
      <div style="height: 50px"></div>
      <p style="color: white">* Manage Your Applications.</p>
      <p style="color: white">
        * Get Approvals from Selected Schools / universities.
      </p>
      <p style="color: white">
        * Get 24/7 Assistance & Information about our processes.
      </p>
    </b-col>
  </b-row>
</template>

<script>
import router from "../../src/router";
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },

  data() {
    return {
      form: {
        email: "",
        password: "",
        rememberMe: false,
      },
      show: false,
    };
  },

  methods: {
    // Sign in method
    signIn: function() {
      this.show = true;
      setTimeout(function() {
        this.show = false;
        router.push({ path: "dashboard" });
      }, 3000);
    },

    // Sign up method
    signUp: function() {},
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
  margin: 10px;
  padding: 10px;
  background-color: white;
}
.text-left {
  text-align: end;
  color: black;
}

.row-back {
  background-size: cover;
  --background: rgb(34, 193, 195);
  --background: linear-gradient(
    0deg,
    rgba(34, 193, 195, 1) 0%,
    rgb(240, 203, 124) 100%
  );
}

.row-body {
  height: 100%;
}

.text-margin-left {
  margin-left: 20px;
  color: rgb(131, 115, 115);
}

.btn-color {
  background: rgb(2, 0, 36);
  background: linear-gradient(
    76deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(148, 105, 40, 1) 0%,
    rgba(205, 120, 28, 1) 48%,
    rgba(0, 212, 255, 1) 79%
  );
  color: white;
  border-width: 0px;
}
</style>
