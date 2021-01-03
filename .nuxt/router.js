import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from '@nuxt/ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _1df98320 = () => interopDefault(import('../pages/login/index.vue' /* webpackChunkName: "pages/login/index" */))
const _1896d00b = () => interopDefault(import('../pages/components/Courses.vue' /* webpackChunkName: "pages/components/Courses" */))
const _0d434627 = () => interopDefault(import('../pages/components/Dashboard.vue' /* webpackChunkName: "pages/components/Dashboard" */))
const _2c66cd8a = () => interopDefault(import('../pages/components/Header.vue' /* webpackChunkName: "pages/components/Header" */))
const _3a7fd4dd = () => interopDefault(import('../pages/components/HelloWorld.vue' /* webpackChunkName: "pages/components/HelloWorld" */))
const _7b7c91a8 = () => interopDefault(import('../pages/components/Programs.vue' /* webpackChunkName: "pages/components/Programs" */))
const _6cac8452 = () => interopDefault(import('../pages/components/Schools.vue' /* webpackChunkName: "pages/components/Schools" */))
const _ecf1d92e = () => interopDefault(import('../pages/components/Universities.vue' /* webpackChunkName: "pages/components/Universities" */))
const _66f2d261 = () => interopDefault(import('../pages/components/formsteps/StepOne.vue' /* webpackChunkName: "pages/components/formsteps/StepOne" */))
const _7f5a8347 = () => interopDefault(import('../pages/components/formsteps/StepTwo.vue' /* webpackChunkName: "pages/components/formsteps/StepTwo" */))
const _dd826ad4 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/login",
    component: _1df98320,
    name: "login"
  }, {
    path: "/components/Courses",
    component: _1896d00b,
    name: "components-Courses"
  }, {
    path: "/components/Dashboard",
    component: _0d434627,
    name: "components-Dashboard"
  }, {
    path: "/components/Header",
    component: _2c66cd8a,
    name: "components-Header"
  }, {
    path: "/components/HelloWorld",
    component: _3a7fd4dd,
    name: "components-HelloWorld"
  }, {
    path: "/components/Programs",
    component: _7b7c91a8,
    name: "components-Programs"
  }, {
    path: "/components/Schools",
    component: _6cac8452,
    name: "components-Schools"
  }, {
    path: "/components/Universities",
    component: _ecf1d92e,
    name: "components-Universities"
  }, {
    path: "/components/formsteps/StepOne",
    component: _66f2d261,
    name: "components-formsteps-StepOne"
  }, {
    path: "/components/formsteps/StepTwo",
    component: _7f5a8347,
    name: "components-formsteps-StepTwo"
  }, {
    path: "/",
    component: _dd826ad4,
    name: "index"
  }],

  fallback: false
}

function decodeObj(obj) {
  for (const key in obj) {
    if (typeof obj[key] === 'string') {
      obj[key] = decode(obj[key])
    }
  }
}

export function createRouter () {
  const router = new Router(routerOptions)

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    const r = resolve(to, current, append)
    if (r && r.resolved && r.resolved.query) {
      decodeObj(r.resolved.query)
    }
    return r
  }

  return router
}
