import { createStore } from 'vuex'
import profile from './modules/profile.module';
import settings from './modules/settings.module';

export default createStore({
  modules: {
    profile,
    settings
  }
})
