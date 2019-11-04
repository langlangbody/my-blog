import Vue from "vue";
import Vuetify from "vuetify/lib";
import colors from 'vuetify/es5/util/colors'
Vue.use(Vuetify)

const opts:any = {
  theme: {
    themes: {
      light: {
        primary: colors.purple,
        secondary: colors.grey.darken1,
        accent: colors.shades.black,
        error: colors.red.accent3,
      },
      dark: {
        primary: colors.blue.lighten3,
      },
    },
  },
  iconfont: "md"
};
export default new Vuetify(opts)