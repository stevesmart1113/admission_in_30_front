import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from '@nuxt/ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _6541c53e = () => interopDefault(import('../pages/components/Courses.vue' /* webpackChunkName: "pages/components/Courses" */))
const _9da4d406 = () => interopDefault(import('../pages/components/Dashboard.vue' /* webpackChunkName: "pages/components/Dashboard" */))
const _d5570518 = () => interopDefault(import('../pages/components/Header.vue' /* webpackChunkName: "pages/components/Header" */))
const _13df7fc7 = () => interopDefault(import('../pages/components/HelloWorld.vue' /* webpackChunkName: "pages/components/HelloWorld" */))
const _b2f9d6d4 = () => interopDefault(import('../pages/components/Programs.vue' /* webpackChunkName: "pages/components/Programs" */))
const _2174d1a8 = () => interopDefault(import('../pages/components/Schools.vue' /* webpackChunkName: "pages/components/Schools" */))
const _ecb0a85a = () => interopDefault(import('../pages/components/Universities.vue' /* webpackChunkName: "pages/components/Universities" */))
const _df5a2792 = () => interopDefault(import('../pages/components/formsteps/StepOne.vue' /* webpackChunkName: "pages/components/formsteps/StepOne" */))
const _ae8ac5c6 = () => interopDefault(import('../pages/components/formsteps/StepTwo.vue' /* webpackChunkName: "pages/components/formsteps/StepTwo" */))
const _08958980 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

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
    path: "/components/Courses",
    component: _6541c53e,
    name: "components-Courses"
  }, {
    path: "/components/Dashboard",
    component: _9da4d406,
    name: "components-Dashboard"
  }, {
    path: "/components/Header",
    component: _d5570518,
    name: "components-Header"
  }, {
    path: "/components/HelloWorld",
    component: _13df7fc7,
    name: "components-HelloWorld"
  }, {
    path: "/components/Programs",
    component: _b2f9d6d4,
    name: "components-Programs"
  }, {
    path: "/components/Schools",
    component: _2174d1a8,
    name: "components-Schools"
  }, {
    path: "/components/Universities",
    component: _ecb0a85a,
    name: "components-Universities"
  }, {
    path: "/components/formsteps/StepOne",
    component: _df5a2792,
    name: "components-formsteps-StepOne"
  }, {
    path: "/components/formsteps/StepTwo",
    component: _ae8ac5c6,
    name: "components-formsteps-StepTwo"
  }, {
    path: "/",
    component: _08958980,
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
