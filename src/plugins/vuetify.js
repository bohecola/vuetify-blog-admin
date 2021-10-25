import '@mdi/font/css/materialdesignicons.css';
import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

// vuetify提供的颜色变量
import colors from 'vuetify/es5/util/colors';

Vue.use(Vuetify);

export default new Vuetify({
  icons: {
    iconfont: 'mdi'
  },
  theme: {
    dark: JSON.parse(localStorage.getItem('dark') || true),
    themes: {
      light: {
        primary: localStorage.getItem('lightPrimary') || '#6200ee',
        secondary: localStorage.getItem('lightSecondary') || '#FFC107',
        accent: '#232f34',
        divder: '#fafafa',
        error: colors.red.base
      },
      dark: {
        primary: localStorage.getItem('darkPrimary') || '#2d3035',
        secondary: localStorage.getItem('darkSecondary') || '#4b89dc',
        accent: '#232f34',
        divder: '#121212',
        error: colors.red.base
      }
    }
  }
});
