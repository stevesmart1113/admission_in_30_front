<template>
  <div style="margin: 20px">
    <b-form v-show="true">
      <b-form-group
        id="input-group-1"
        label="Students Name:"
        label-for="input-1"
        description="Your full name."
      >
        <b-form-input
          id="input-1"
          type=""
          placeholder="Full Name"
          v-model="form.fullName"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Your Email:" label-for="input-2">
        <b-form-input
          id="input-2"
          placeholder="Email Address"
          v-model="form.email"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-3" label="Mobile:" label-for="input-3">
        <b-form-input
          id="input-3"
          placeholder="Your Mobile Number"
          v-model="form.mobile"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-3" label="Nationality:" label-for="input-3">
        <b-select
          :options="options"
          id="input-3"
          v-model="form.nationality"
        ></b-select>
      </b-form-group>

      <b-form-group id="input-group-3" label="Address:" label-for="input-3">
        <b-form-input
          id="input-3"
          placeholder="Your House Address"
          v-model="form.address"
        ></b-form-input>
      </b-form-group>
    </b-form>
  </div>
</template>

<script>
import { validationMixin } from "vuelidate";
import { required, email } from "vuelidate/lib/validators";
export default {
  name: "StepOne",
  props: ["clickedNext", "currentStep"],
  mixins: [validationMixin],
  data() {
    return {
      options: [
        { value: "GH", text: "Ghanaian" },
        { value: "NG", text: "Nigerian" },
      ],
      form: {
        fullName: "",
        email: "",
        mobile: "",
        nationality: "",
        address: "",
      },
    };
  },
  validations: {
    form: {
      fullName: {
        required,
      },
      email: {
        required,
        email,
      },
      mobile: {
        required,
      },
      nationality: {
        required,
      },
      address: {
        required,
      },
    },
  },
  watch: {
    $v: {
      handler: function(val) {
        if (!val.$invalid) {
          this.$emit("can-continue", { value: true });
        } else {
          this.$emit("can-continue", { value: false });
          setTimeout(() => {
            this.$emit("change-next", { nextBtnValue: false });
          }, 3000);
        }
      },
      deep: true,
    },

    clickedNext(val) {
      console.log(val);
      if (val === true) {
        this.$v.form.$touch();
      }
    },
  },
  mounted() {
    if (!this.$v.$invalid) {
      this.$emit("can-continue", { value: true });
    } else {
      this.$emit("can-continue", { value: false });
    }
  },
};
</script>

<style>
.header-text {
  margin: 10px;
}
.is-danger {
  color: red;
}
</style>
