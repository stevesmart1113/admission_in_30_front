<template>
  <div>
    <Header />
    <b-sidebar id="sidebar-1" title="Menu" shadow class="nav-color">
      <div class="px-3 py-2">
        <div>
          <b-nav vertical class="w-30">
            <b-nav-item to="/approvals"
              >Admission Requests <b-icon-person-check></b-icon-person-check
            ></b-nav-item>
            <b-nav-item>Universities <b-icon-house></b-icon-house></b-nav-item>
            <b-nav-item>Courses <b-icon-book></b-icon-book></b-nav-item>
            <b-nav-item
              >General Setting <b-icon-shield></b-icon-shield
            ></b-nav-item>
            <b-nav-item
              >Logout <b-icon-chevron-right></b-icon-chevron-right
            ></b-nav-item>
          </b-nav>
        </div>
      </div>
    </b-sidebar>
    <b-breadcrumb :items="items"></b-breadcrumb>
    <b-container>
      <b-row>
        <b-col>
          <div>
            <b-button
              @click="changeBreadCrumb('universities')"
              class="btn light btn-info"
              variant="outline-info"
              to="/dashboard/universities"
              >Universities</b-button
            >
            <button
              @click="changeBreadCrumb('schools')"
              class="btn light btn-success"
              variant="outline-info"
              to="/dashboard/schools"
            >
              Schools
            </button>
            <!-- <b-button
            @click="changeBreadCrumb('courses')"
            variant="outline-info"
            to="/dashboard/courses"
            >Courses</b-button
          > -->
            <div style="height:20px"></div>
            <router-view></router-view>
          </div>
        </b-col>
        <!-- <b-col style="height: 100vh" class="border-left">
        <transition name="fade-enter">
          <b-img fluid src="/images/8294.jpg"></b-img>
        </transition>
      </b-col> -->
      </b-row>
    </b-container>
  </div>
</template>

<script>
import Header from './Header';
export default {
  name: 'Dashboard',
  components: {
    Header,
  },
  props: {
    message: String,
  },

  data() {
    return {
      link_name: '',
      universities: [],
      items: [
        {
          text: this.link_name,
          href: '#',
        },
      ],
    };
  },

  created() {
    this.items[this.items.length - 1].text = 'Home';
    this.getUniversities();
  },
  watch: {},
  methods: {
    changeBreadCrumb(linkName) {
      if (linkName === 'universities') {
        this.items[this.items.length - 1].text = 'Universities';
      } else if (linkName === 'schools') {
        this.items[this.items.length - 1].text = 'Schools';
      } else if (linkName === 'courses') {
        this.items[this.items.length - 1].text = 'Courses';
      }
    },

    getUniversities() {
      this.axios
        .get('universities/')
        .then((result) => {
          if (result.status == 200 && result.statusText === 'OK') {
            //console.log(result.data[0].name);
            this.universities = result.data;
          } else {
            this.universities = [];
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },

  mounted() {
    console.log('called');
    this.getUniversities();
  },
};
</script>

<style>
.btn-spacing {
  margin-right: 10px;
  margin-left: 5px;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.1s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

.nav-color {
  background: rgb(2, 0, 36);
  background: linear-gradient(
    76deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(148, 105, 40, 1) 0%,
    rgba(205, 120, 28, 1) 48%,
    rgba(0, 212, 255, 1) 79%
  );
  color: white;
}
</style>
