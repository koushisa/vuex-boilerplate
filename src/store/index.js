import Vue from "vue";
import Vuex from "vuex";
import {
  generateVuexStoreModuleConfiguration
} from "vuex-module-configuration-composer";

Vue.use(Vuex);

const context = require.context("./modules", true, /index\.js$/);

const storeConfiguration = Object.assign({},
  generateVuexStoreModuleConfiguration(context)
);

export default new Vuex.Store(storeConfiguration);
