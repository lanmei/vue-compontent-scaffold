<template>
    <transition name="custom-classes-transition" enter-active-class="animated bounceInRight" leave-active-class="animated bounceOutRight">
        <div v-show="showPanel" class="alm-search-container">
            <div class="header-search-wrapper">
                <el-input placeholder="请输入你要搜索的内容" v-model="input5" class="search-input">
                    <el-button slot="append" icon="search" @click="searchContent"></el-button>
                </el-input>
                <div class="search-quick-label">
                    <span>快捷搜索：</span>
                    <button type="button" name="button">@我</button>
                </div>
                <transition name="custom-classes-transition" enter-active-class="animated fadeInUp" leave-active-class="animated fadeOutDown">
                    <div v-show="isHasSearchResult" class="search-result-list">
                        <div class="search-result-tag">
                            <label class="tag-label">搜索结果：</label>
                            <el-tabs :active-name="first" class="tag-list" @tab-click="switchTabs">
                                <el-tab-pane :label="allTabName" name="all"></el-tab-pane>
                                <el-tab-pane :label="cardTabName" name="card"></el-tab-pane>
                                <el-tab-pane :label="planTabName" name="plan"></el-tab-pane>
                                <el-tab-pane :label="commentTabName" name="comment"></el-tab-pane>
                            </el-tabs>
                        </div>
                        <div>
                            <search-card :isShowTab="isShowCardTab" :cardList="cardList"></search-card>
                            <search-plan :isShowTab="isShowPlanTab" :planList="planList"></search-plan>
                            <search-comment :isShowTab="isShowCommontTab" :commentList="commentList"></search-comment>
                        </div>
                    </div>
                </transition>
                <div class="search-close" @click="closeSearchPanel"><i class="el-icon-close"></i></div>
            </div>
        </div>
    </transition>
</template>

<script>
import SearchCard from './SearchCard';
import SearchPlan from './SearchPlan';
import SearchComment from './SearchComment';
import * as config from 'config/http';

export default {
    name: 'search-panel',
    props: ['showPanel'],
    components: { SearchCard, SearchPlan, SearchComment },
    data () {
        return {
            isHasSearchResult: false,    // 显示查询结果
            isShowCardTab: true,    // 是否显示 card tab 对应的组件
            isShowPlanTab: true,    // 是否显示 plan tab 对应的组件
            isShowCommontTab: true, // 是否显示 comment tab 对应的组件
            // 查询卡片列表
            cardList: {
                total: 0,
                result: []
            },
            // 查询计划列表
            planList: {
                total: 0,
                result: []
            },
            // 查询评论列表
            commentList: {
                total: 0,
                result: []
            }
        };
    },
    computed: {
        // 搜索结果【全部】tab
        allTabName () {
            const total = this.cardList.total + this.planList.total + this.commentList.total;
            return '全部 (' + total + ')';
        },
        // 搜索结果【卡片】tab
        cardTabName () {
            this.cardList.total = this.cardList.total || 0;
            return '卡片 (' + this.cardList.total + ')';
        },
        // 搜索结果【计划】tab
        planTabName () {
            this.planList.total = this.planList.total || 0;
            return '计划 (' + this.planList.total + ')';
        },
        // 搜索结果【评论】tab
        commentTabName () {
            this.commentList.total = this.commentList.total || 0;
            return '评论 (' + this.commentList.total + ')';
        }
    },
    methods: {
        // 查询结果并显示
        searchContent () {
            // 根据输入 ajax 查询结果
            this.$http.get(config.searchUrl).then((response) => {
                // request success
                this.cardList = response.data;
            });
            // 显示查询结果
            this.isHasSearchResult = true;
        },
        // 关闭 search panel
        closeSearchPanel () {
            this.$parent.closeSearchPanel();
        },
        // 切换 tab 操作对应组件的显示
        // 显示当前的 tab 内容，隐藏其它的 tab 内容
        // 默认即显示【全部】 tab
        switchTabs (tab) {
            switch (tab.name) {
                case 'card':
                    this.isShowCardTab = true;
                    this.isShowPlanTab = false;
                    this.isShowCommontTab = false;
                    break;
                case 'plan':
                    this.isShowCardTab = false;
                    this.isShowPlanTab = true;
                    this.isShowCommontTab = false;
                    break;
                case 'comment':
                    this.isShowCardTab = false;
                    this.isShowPlanTab = false;
                    this.isShowCommontTab = true;
                    break;
                default:
                    this.isShowCardTab = true;
                    this.isShowPlanTab = true;
                    this.isShowCommontTab = true;
            }
        }
    }
};
</script>

<style lang="stylus">
.alm-search-container
    position: absolute
    top: 50px
    right: 0
    width: 100%
    height: 100%
    overflow-y: auto
    padding: 22px 35px 50px
    background-color: #fff
    box-shadow: rgba(0, 0, 0, 0.298039) 0px 0px 10px
    opacity: 0.9
    font-size: 15px

.header-search-wrapper
    display: flex
    width: 50%
    flex-flow: row wrap
    justify-content: center
    align-items: center
    margin: 0 auto
    padding: 50px 0

.search-input
    width: 100%

.search-quick-label
    width: 100%
    height: 40px
    display: flex
    align-items: center
    justify-content: flex-end
    margin-top: 15px

    button
        width: 60px
        height: 24px
        font-size: 12px
        color: #666
        border-radius: 4px
        border: 1px solid #ddd
        background-color: #fff

        &:hover
            background-color: #ccc

.search-result-list
    width: 100%
    margin-top: 20px

    .search-result-tag
        display: flex
        align-items: center

        .tag-list
            width: 100%
            margin-left: 10px

            .el-tabs__header
                border: none
                margin: 0 0 0 80px

            .el-tabs__item
                padding: 0 16px
                height: 20px
                line-height: 20px

            .el-tabs__active-bar
                bottom: -3px

        .tag-label
            position: absolute
            margin-top: 2px
            font-size: 14px

.search-result-wrapper
    width: 100%
    margin-top: 30px

    .search-category-label
        margin-bottom: 15px

.search-more
    margin-top: 10px
    display: flex
    justify-content: center
    font-size: 14px

    span
        cursor: pointer

.search-close
    position: absolute
    top: 25px
    right: 50px
    color: #ccc
    cursor: pointer
</style>
