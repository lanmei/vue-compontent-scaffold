<template>
    <el-col :span="12" class="my-task-container">
        <div class="card-header">
            <span class="title">我的</span>
            <el-tabs type="border-card" class="card-tabs">
                <el-tab-pane :label="'进行中' +　tabNumbers.Responsible"></el-tab-pane>
                <el-tab-pane :label="'收藏' +　tabNumbers.Followed"></el-tab-pane>
                <el-tab-pane :label="'受阻碍' +　tabNumbers.Blocked"></el-tab-pane>
                <el-tab-pane :label="'已创建' +　tabNumbers.Created"></el-tab-pane>
                <el-tab-pane :label="'待验证' +　tabNumbers.Verified"></el-tab-pane>
                <el-tab-pane :label="'已完成' +　tabNumbers.Completed"></el-tab-pane>
            </el-tabs>
        </div>
        <task-card></task-card>
    </el-col>
</template>

<script>
import TaskCard from './TaskCard';
import * as config from 'config/http';

export default {
    name: 'my-card-list',
    components: { TaskCard },
    data () {
        return {
            tabNumbers: {
                Responsible: '',
                Followed: '',
                Blocked: '',
                Created: '',
                Verified: '',
                Completed: ''
            }
        };
    },
    created () {
        this.$http.get(config.myCardListTabsUrl).then((response) => {
            // request success
            this.tabNumbers = response.data;
        });
    }
};
</script>

<style lang="stylus">
.my-task-container
    height: 100%
    padding: 20px 0px 12px

.card-tabs
    position: absolute
    right: 0
    bottom: 0
    background-color: #e3e3e3
    border: none
    box-shadow: none
    .el-tabs__item
        background-color: #d8d8d8
        border-radius: 4px 4px 0 0
        color: #000
        margin: 0 5px -1px
    .el-tabs__content
        display: none
    .el-tabs--border-card
        border: none
        box-shadow: none
    .el-tabs__header
        background-color: #e3e3e3
        border: none

.el-tabs--border-card
    .el-tabs__header
        background-color: #e3e3e3
</style>