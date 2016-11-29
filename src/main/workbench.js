import Vue from 'vue';
import router from '../router';
import VueResource from 'vue-resource';
import Element from 'element-ui';
import 'element-ui/lib/theme-default/index.css';
import Workbench from 'components/workbench';

Vue.use(Element);
Vue.use(VueResource);

Vue.config.devtools = process.env.NODE_ENV !== 'production';

const app = new Vue({
    router,
    ...Workbench
}).$mount('#app');

export { app, router };
