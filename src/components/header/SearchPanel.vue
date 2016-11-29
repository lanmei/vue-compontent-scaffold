<template>
    <transition name="custom-classes-transition" enter-active-class="animated bounceInRight" leave-active-class="animated bounceOutRight">
        <div class="alm-search-container">
            <div class="header-search-wrapper">
                <el-input placeholder="请输入你要搜索的内容" v-model="input5" class="search-input">
                    <el-button slot="append" icon="search" @click="searchContent"></el-button>
                </el-input>
                <div class="search-quick-label">
                    <span>快捷搜索：</span>
                    <button type="button" name="button">@我</button>
                </div>
                <transition name="custom-classes-transition" enter-active-class="animated fadeInUp" leave-active-class="animated fadeOutDown">
                    <!-- <div v-show="isHasSearchResult" class="search-result-list"> -->
                    <div class="search-result-list">
                        <div class="search-result-tag">
                            <label class="tag-label">搜索结果：</label>
                            <el-tabs :active-name="first" class="tag-list">
                                <el-tab-pane label="全部" name="first">
                                    <search-card :cardList="cardList"></search-card>
                                    <search-plan></search-plan>
                                    <search-comment></search-comment>
                                </el-tab-pane>
                                <el-tab-pane label="卡片" name="second">
                                    <search-card :cardList="cardList"></search-card>
                                </el-tab-pane>
                                <el-tab-pane label="计划" name="third">
                                    <search-plan></search-plan>
                                </el-tab-pane>
                                <el-tab-pane label="评论" name="fourth">
                                    <search-comment></search-comment>
                                </el-tab-pane>
                            </el-tabs>
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
            cardList: []   // 查询卡片类型的结果
        };
    },
    computed: {
        // 显示 search panel
        isShowPanel () {
            return this.showPanel;
        }
    },
    methods: {
        // 查询结果并显示
        searchContent () {
            // 根据输入 ajax 查询结果
            this.$http.get(config.searchUrl).then((response) => {
                // request success
                this.cardList = response.data.result;
                console.log(this.cardList);
            });
            // 显示查询结果
            this.isHasSearchResult = true;
        },
        // 关闭 search panel
        closeSearchPanel () {
            this.$parent.closeSearchPanel();
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
