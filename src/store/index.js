import { createStore, createLogger } from 'vuex'
import { ENV_PROD_FLAG } from '/@HELPER/global';
import profile from './modules/profile';
import component from './modules/component';

const debug = import.meta.env.MODE !== ENV_PROD_FLAG;

export default createStore({
  modules: {
    profile,
    component
  },
  strict: debug,
  plugins: debug ? [createLogger()] : []
})
