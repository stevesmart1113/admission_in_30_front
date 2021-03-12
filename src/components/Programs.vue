<template>
  <div>
    <div class="fill">
      <b-card class="wrap">
        <h2 style="font-weight:bold">{{ university.name }}.</h2>
        <div>4 year</div>
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
      </b-card>
    </div>
    <div class="card">
      <div class="card-header border-0 pb-0">
        <h5 class="card-title">Institution Information</h5>
      </div>
      <div class="card-body">
        <p class="card-text">
          {{university.description}}
        </p>
      </div>
      <div class="card-footer border-0 pt-0">
        <p class="card-text d-inline">Card footer</p>
        <a href="javascript:void()" class="card-link float-right">More Information</a>
      </div>
    </div>
    <b-card>
      <h4 style="margin-left: 25px">
        <!--<b-icon-arrow-left-circle-fill
          style="width: 30px; height: 30px;"
          variant="info"
          @click="getBack"
        >
        </b-icon-arrow-left-circle-fill> -->
        <span style="font-weight:bold">Programs</span>
      </h4>
      <vcl-facebook v-if="programs.length <= 0"></vcl-facebook>
      <b-card @click="getCourses" v-for="(program, key, index) in programs" :key="index" class="card-enhanced-one">
        <b-card-title style="font-size: 18px">
          {{ program.program_name }}
        </b-card-title>
      </b-card>
    </b-card>
  </div>
</template>

<script>
import {VclFacebook} from 'vue-content-loading';
export default {
  name: 'programs',
  props: ['school_id'],
  components: {
    VclFacebook,
  },

  data() {
    return {
      programs: [],
      university: [],
    };
  },

  methods: {
    getCourses() {
      this.$router.push({path: '/dashboard/courses'});
    },

    getBack() {
      this.$router.push({name: 'universities'});
    },
  },

  mounted() {
    let data = this.$route.params.data;
    console.log('--- DATA ---');
    console.log(data.data);
    this.programs = data;
    this.university = this.$route.params.university;

    console.log('-- University ---');
    console.log(this.programs);

    /**this.axios.get('programs').then((data) => {
      if (data.status == 200 && data.statusText === 'OK') {
          this.school = data;
          console.log('**** School ****');
          console.log(data);
      } else {
        console.log('An error occured');
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
  color: black;
}

.card-enhanced-one :hover {
  background-color: #81d4fa;
  border-width: 2px;
  border-radius: 15px;
  color: white;
  font-weight: 900;
  font-size: 25px;
}

.banner {
  height: 200px;
  object-fit: fill;
}

.fill {
  background-image: url('https://d13b2ieg84qqce.cloudfront.net/3dbd39d4c1401beb7773c38566cc4d728d7db4ed.jpg');
  height: 450px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  margin-bottom: 50px;
}
.fill img {
  flex-shrink: 0;
  min-width: 100%;
  min-height: 100%;
}

.wrap {
  height: 170px;
  width: 800px;
  border: 2px solid #aaa;
  margin: 10px;
  display: flex;
  margin-top: 260px;
  margin-right: 300px;
}

.wrap span {
  align-self: flex-end;
}
</style>
