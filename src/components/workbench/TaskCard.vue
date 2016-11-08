<template>
    <el-card class="box-card card-container">
        <div v-for="row in rows" class="text item card-wrapper">
            <span class="card-title">{{row.name}}</span>
            <div class="card-info">
                <span v-if="row.type === 'Story'" class="card-type card-tag-story">用户故事</span>
                <span v-if="row.type === 'Defect'" class="card-type card-tag-defect">缺陷</span>
                <el-tooltip placement="bottom">
                   <div slot="content">XXX#{{row.seqNo}}<br/>单击复制至剪切板</div>
                   <span>#{{row.seqNo}}</span>
                </el-tooltip>
                <el-tooltip content="空间" placement="bottom">
                    <span><i class="fa fa-desktop icon-font"></i>{{row.projectName}}</span>
                </el-tooltip>
                <el-tooltip content="状态" placement="bottom">
                    <span><i class="fa fa-tasks icon-font"></i>{{row.stateName}}</span>
                </el-tooltip>
            </div>
        </div>
    </el-card>
</template>

<script>
import * as config from 'config/http';

export default {
    name: 'task-card',
    data () {
        return {
            rows: []
        };
    },
    created () {
        this.$http.get(config.todoListUrl).then((response) => {
            // request success
            this.rows = response.data.rows;
        }, (response) => {
            // request fail
            // [Todo] 显示默认加载状态
            console.log('fail');
        });
    },
    methods: {

    }
};
</script>

<style lang="stylus">
.card-wrapper
    .card-title
    .card-info
        display: block
        text-overflow: ellipsis
        white-space: nowrap
        overflow: hidden
    .card-title
        margin-bottom: 9px
    .card-info
        font-size: 0.8em
        .card-type
        .el-tooltip
            padding-right: 10px
        .el-tooltip
            color: #91a0a8
        .icon-font::before
            margin-right: 3px
        .card-tag-story
            color: #3599d4
        .card-tag-defect
            color: #fc6296
</style>
