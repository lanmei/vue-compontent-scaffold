import Vue from 'vue';
import VueResource from 'vue-resource';
import Element from 'element-ui';
import 'element-ui/lib/theme-default/index.css';
import Workbench from 'components/workbench';

Vue.use(Element);
Vue.use(VueResource);

const app = new Vue(Workbench).$mount('#demo');

export { app };
