<template>
  <div>
    <h4 class="header-text">Student Application Form</h4>
    <div style="margin: 20px">
      <section class="section">
        <div class="container">
          <div class="columns">
            <div class="column is-8 is-offset-2"> 
              <horizontal-stepper
                :steps="steps"
                :top-buttons="false"
                :keep-alive="true"
                :reset="true"
                @completed-step="completeStep"
                @active-step="isStepActive"
                @stepper-finished="alert"
              >
              </horizontal-stepper>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import HorizontalStepper from "vue-stepper";
import StepOne from "./formsteps/StepOne.vue";
import StepTwo from "./formsteps/StepTwo.vue";
export default {
  name: "courses",
  components: {
    HorizontalStepper,
  },
  data() {
    return {
      steps: [
        {
          icon: "person",
          name: "first",
          title: "Step One",
          subtitle: "Student Info / 1",
          component: StepOne,
          completed: false,
          reset: false,
        },
        {
          icon: "person",
          name: "second",
          title: "Step Two",
          subtitle: "Student Info / 2",
          component: StepTwo,
          completed: false,
        },
      ],
    };
  },
  methods: {
    completeStep(payload) {
      this.steps.forEach((step) => {
        if (step.name === payload.name) {
          step.completed = true;
        }
      });
    },
    currentStep() {
      this.steps.completed = false;
    },
    // Executed when @active-step event is triggered
    isStepActive(payload) {
      this.steps.forEach((step) => {
        if (step.name === payload.name) {
          if (step.completed === true) {
            step.completed = false;
          }
        }
      });
    },
  },
};
</script>

<style>
.header-text {
  margin: 10px;
}

.stepper-box {
  background-color: rgb(255, 255, 255);
  color: #2fa6ba;
  font-weight: 900;
}

.circle {
  margin-bottom: 1rem;
  padding: 0 1rem;
  background-color: #2fa6ba;
  color: #fff;
  border-radius: 100rem;
  padding: 1rem;
}

.next {
  border: 2px solid #2fa6ba;
  color: #2fa6ba;
  right: 1%;
  background: #2fa6ba;
}

.stepper-button {
  padding: 0.5rem 1rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #2fa6ba;
  color: white;
}
</style>
