<template>
    <div v-show="isShowCurrTab" class="search-result-wrapper">
        <div class="search-category-label">卡片</div>
        <div v-for="(card, index) in cardList.result" class="search-card-item">
            <div class="card-item-wrapper" :class="[index === 0 ? 'card-item-border' : '']">
                <div class="card-info">
                    <span class="card-wrapper-left">#{{ card.id }}</span>
                    <div class="card-wrapper-right">{{ card.name }}</div>
                </div>
                <div class="card-tag">
                    <div class="card-wrapper-left"><span v-if="card.isArchived">已归档</span></div>
                    <div class="card-wrapper-right"><i class="fa fa-desktop"></i>{{ card.projectName }}</div>
                </div>
            </div>
        </div>
        <div v-show="isShowLoadMore" class="search-more"><span @click="searchMore">加载更多<i class="fa fa-angle-down"></i></span></div>
    </div>
</template>

<script>
import * as config from 'config/http';

export default {
    name: 'search-card',
    props: ['cardList', 'isShowTab'],
    data () {
        return {
            currPage: 1,    // 当前加载的次数
            rowCount: 10   // 每次加载的数量
        };
    },
    computed: {
        // 当 cardList 为空时，不显示
        isShowCurrTab () {
            return this.isShowTab && this.cardList.result && this.cardList.result.length !== 0;
        },
        // 是否显示加载更多
        isShowLoadMore () {
            return this.cardList.total / this.rowCount > this.currPage;
        }
    },
    methods: {
        // 加载更多
        searchMore () {
            this.$http.get(config.searchUrl).then((response) => {
                // request success
                if (response.data.result) {
                    this.currPage++;
                    for (const obj of response.data.result) {
                        this.cardList.result.push(obj);
                    }
                    this.cardList.total = response.data.total;
                } else {
                    this.isShowLoadMore = false;
                }
            });
        }
    }
};
</script>

<style lang="stylus">
.search-card-item
    width: 100%
    height: auto
    position: relative
    border: 1px solid #e6e9ed
    border-top: none

    &::before
        background-color: #3599d4
        content: ''
        position: absolute
        top: 0
        left: 0
        width: 4px
        height: 100%

.card-item-border
    border-top: 1px solid #e6e9ed

.card-item-wrapper
    width: 100%
    height: 100%
    display: flex
    flex-flow: row wrap
    padding: 10px 30px
    font-size: 12px

    .card-tag, .card-info
        width: 100%
        display: flex
        align-items: center

        .card-wrapper-left
            width: 60px

        .card-wrapper-right
            height: 100%
            display: flex
            flex-flow: row wrap
            flex-grow: 1
            flex-basis: 60px

    .card-info
        .card-wrapper-right
            font-size: 14px

    .card-tag
        margin-top: 10px

        .card-wrapper-left
            span
                width: 40px
                height: 20px
                background-color: #a6def4
                color: #fff
                display: flex
                align-items: center
                justify-content: center

        .card-wrapper-right
            color: #aaa

            i
                margin-right: 4px
</style>
