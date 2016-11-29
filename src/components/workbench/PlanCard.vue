<template>
    <el-card class="box-card card-container">
        <el-row v-for="row in rows" class="text item card-wrapper">
            <el-row class="plan-content">
                <el-tooltip class="card-name" placement="bottom">
                    <div slot="content">{{row.name}}</div>
                    <a href="#"><span>{{row.name}}</span></a>
                </el-tooltip>
                <el-tooltip class="card-progress" placement="bottom">
                    <div slot="content">已完成：{{row.completeCardCount}} 未完成：{{row.unCompleteCardCount}}</div>
                    <el-progress :text-inside="false" :stroke-width="8" :percentage="100*row.completeCardCount/row.cardCount" :show-text="false"></el-progress>
                </el-tooltip>
            </el-row>
            <el-row class="plan-tags">
                <el-col :span="14" class="tag-wrapper">
                    <el-tooltip placement="bottom">
                        <div slot="content">{{row.projectName}}</div>
                        <span><i class="fa fa-desktop icon-font"></i>{{row.projectName}}</span>
                    </el-tooltip>
                </el-col>
                <div class="icon-wrapper">
                    <el-tooltip content="用户故事" placement="bottom">
                        <span class="card-icon story-icon">{{row.storyCount}}</span>
                    </el-tooltip>
                    <el-tooltip content="缺陷" placement="bottom">
                        <span class="card-icon defect-icon">{{row.defectCount}}</span>
                    </el-tooltip>
                </div>
            </el-row>
        </el-row>
    </el-card>
</template>

<script>
import * as config from 'config/http';

export default {
    name: 'plan-card',
    data () {
        return {
            rows: []
        };
    },
    created () {
        this.$http.get(config.devPlanUrl).then((response) => {
            // request success
            this.rows = response.data.rows;
        }, (response) => {
            // request fail
            // [Todo] 显示加载内容为空组件
            console.log('fail');
        });
    },
    methods: {

    }
};
</script>

<style lang="stylus">
.plan-content
    .card-name
        display: block
        width: 65%
        float: left
        word-break: break-all
    a
        text-decoration: none
        color: #000
    .card-progress
        width: 25%
        float: right
        margin-top: -2px
        .el-tooltip__rel
            width: 100%
.plan-tags
    font-size: 12px
    color: #91a0a8
    margin-top: 10px
    height: 22px
    width: 100%
    float: left
    .icon-font::before
        margin-right: 5px
    .tag-wrapper
        height: 22px
        line-height: 22px
    .icon-wrapper
        float: right
        .card-icon
            width: 22px
            height: 22px
            line-height: 22px
            display: inline-block
            text-align: center
            border-radius: 4px
            margin-right: 6px
            box-sizing: border-box
        .defect-icon
            border: 1px solid #fc6296
            color: #fc6296
        .story-icon
            border: 1px solid #3599d4
            color: #3599d4
</style>
