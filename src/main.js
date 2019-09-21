import Vue from "vue"
import VueRouter from 'vue-router'
// + 导入App.vue
import App from "@/App"
import Login from "@/pages/Login"

Vue.use(VueRouter)

const routes = [
    { path: "/login", component: Login}
]

const router = new VueRouter({
    routes
})




new Vue({
    el: "#app",

    router,

    render: function(createElement){
        return createElement(App)
    }
})