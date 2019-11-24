import Vue from "vue";
import Vuetify from "vuetify/lib";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: "#00363d",
        secondary: "#37b8af",
        accent: "#8c9eff",
        error: "#b71c1c"
      }
    }
  }
});
