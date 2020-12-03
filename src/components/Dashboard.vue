<template>
  <div>
    <Header />
    <b-sidebar
      id="sidebar-1"
      title="Menu"
      shadow
      bg-variant="dark"
      text-variant="light"
    >
      <div class="px-3 py-2">
        <div>
          <b-nav vertical class="w-30">
            <b-nav-item
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
    <b-row>
      <b-col>
        <div>
          <b-button
            @click="changeBreadCrumb('universities')"
            class="btn-spacing"
            variant="outline-danger"
            to="/dashboard/universities"
            >Universities</b-button
          >
          <b-button
            @click="changeBreadCrumb('schools')"
            class="btn-spacing"
            variant="outline-success"
            to="/dashboard/schools"
            >Schools</b-button
          >
          <b-button
            @click="changeBreadCrumb('courses')"
            variant="outline-primary"
            to="/dashboard/courses"
            >Courses</b-button
          >
          <div style="height:20px"></div>
          <router-view></router-view>
        </div>
      </b-col>
      <b-col style="height: 100vh">
        <transition name="fade-enter">
          <b-img fluid src="/images/8294.jpg"></b-img>
        </transition>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import Header from "./Header";
export default {
  name: "Dashboard",
  components: {
    Header,
  },
  props: {
    message: String,
  },

  data() {
    return {
      link_name: "",
      items: [
        {
          text: this.link_name,
          href: "#",
        },
      ],
    };
  },

  created() {
    this.items[this.items.length - 1].text = "Home";
  },
  watch: {},
  methods: {
    changeBreadCrumb(linkName) {
      if (linkName === "universities") {
        this.items[this.items.length - 1].text = "Universities";
      } else if (linkName === "schools") {
        this.items[this.items.length - 1].text = "Schools";
      } else if (linkName === "courses") {
        this.items[this.items.length - 1].text = "Courses";
      }
    },
  },
};
</script>

<style>
.btn-spacing {
  margin-right: 10px;
  margin-left: 5px;
}

.sidebar-background {
  background-image: url("");
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.1s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
