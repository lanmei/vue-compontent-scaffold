<template>
    <div class="search-result-wrapper">
        <div class="search-category-label">卡片</div>
        <div v-for="card in cardList" class="search-card-item search-card-border">
            <div class="card-item-wrapper">
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
        <div class="search-more"><span @click="searchMore">加载更多<i class="fa fa-angle-down"></i></span></div>
    </div>
</template>

<script>
// import * as config from 'config/http';

export default {
    name: 'search-card',
    props: ['cardList'],
    methods: {
        // [TODO] 加载更多
        searchMore () {
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
