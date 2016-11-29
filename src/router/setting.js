import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

import WorkPanel from 'components/setting/WorkPanel';
import MebmersPanel from 'components/setting/MebmersPanel';
import CustomPanel from 'components/setting/CustomPanel';
import ChainPanel from 'components/setting/WorkPanel';
import HistoryPanel from 'components/setting/HistoryPanel';

export default new Router({
    // mode: 'history',
    // scrollBehavior: () => ({ y: 0 }),
    routes: [
        { path: '/workspace', component: WorkPanel },
        { path: '/members', component: MebmersPanel },
        { path: '/custom', component: CustomPanel },
        { path: '/chain', component: ChainPanel },
        { path: '/history', component: HistoryPanel },
        { path: '/', redirect: '/workspace' }
    ]
});
