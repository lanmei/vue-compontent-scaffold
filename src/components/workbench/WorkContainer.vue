<template>
    <el-row class="workspace-container">
        <todo-list></todo-list>
        <my-card-list></my-card-list>
        <el-col :span="6" class="plan-container">
            <dev-plan-list></dev-plan-list>
            <test-plan-list></test-plan-list>
        </el-col>
    </el-row>
</template>

<script>
import TodoList from './TodoList';
import MyCardList from './MyCardList';
import DevPlanList from './DevPlanList';
import TestPlanList from './TestPlanList';

export default {
    name: 'work-container',
    components: { TodoList, MyCardList, DevPlanList, TestPlanList }
};
</script>

<style lang="stylus">
.workspace-container
    padding-right: 15px
    padding-left: 15px
    height: calc(100% - 50px)

.card-header
    position: relative
    .title
        display: inline-block
        padding: 11px 0
        color: #515c66

.plan-container
    height: 100%

.card-container
    height: calc(100% - 60px)
    background-color: #fff
    padding: 10px 5px 10px 0
    .el-card__body
        height: 100%
        padding: 10px 10px 0 10px
        overflow-x: hidden
        overflow-y: auto
    .el-card__body::-webkit-scrollbar
        width: 5px
        height: 5px
    .el-card__body::-webkit-scrollbar-thumb
    .el-card__body::-webkit-scrollbar-track
        background: #ccd3db
        border: 0px none #ffffff
        border-radius: 50px
    .el-card__body::-webkit-scrollbar-track
        background: #e5e9ee

.card-wrapper
    padding: 11px 0
    cursor: pointer
    overflow: hidden
    margin-left:10px
    background-color: #fff
    position: relative
    border-bottom: 1px solid #e9e9e9
</style>