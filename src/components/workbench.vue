<template>
    <div class="workspace-page">
        <work-header></work-header>
        <work-container></work-container>
    </div>
</template>

<script>
import 'normalize.css';
import 'assets/vendor/bootstrap/css/font-awesome.css';

import WorkHeader from './workbench/WorkHeader';
import WorkContainer from './workbench/WorkContainer';

export default {
    name: 'workbench',
    components: { WorkHeader, WorkContainer }
};
</script>

<style lang="stylus">
html
.workspace-page
    height: 100%

body
    font-family: Arial, 'Microsoft YaHei', sans-serif
    font-size: 14px
    height: 100%
    background-color: #e3e3e3
    overflow: hidden
</style>