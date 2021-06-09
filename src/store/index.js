import { createStore, createLogger } from 'vuex'
import profile from './modules/profile';
import component from './modules/component';

// const debug = process.env.NODE_ENV !== 'production'

export default createStore({
  modules: {
    profile,
    component
  },
  // strict: debug,
  // plugins: debug ? [createLogger()] : []
})
