import VueRouter from "vue-router";
import { Store } from "vuex";
import Vue from "vue";
import { AxiosInstance } from "axios";

declare module "*.vue" {
  export default Vue;
}
declare module "vue/types/vue" {
  interface Vue {
    $axios: AxiosInstance;
  }
}

declare module "vue/types/options" {
  interface ComponentOptions<V extends Vue> {
    router?: VueRouter;
    store?: Store<any>;
  }
}
