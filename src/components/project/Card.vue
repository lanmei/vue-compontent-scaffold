<template>
    <div class="wiz-user-card">
        <div v-if="theme === 'create'" class="wiz-user-card-wrapper card-create">
            <i class="fa-icon fa fa-plus"></i>
            <span>创建新空间</span>
        </div>
        <div v-if="theme !== 'create'" class="wiz-user-card-wrapper card-default">{{ name }}</div>
    </div>
</template>

<script>
export default {
    name: 'project-card',
    props: ['name', 'theme']
};
</script>

<style lang="stylus">
.wiz-user-card
    width: 20%
    height: 150px

.wiz-user-card-wrapper
    display: flex
    height: 130px
    margin: 0 10px 20px 0
    border-radius: 2px
    justify-content: center
    align-items: center
    flex-flow: row wrap
    cursor: pointer

.card-default
    background-color: #fff

    &:hover
        color: #fff
        background-color: #3798e9
        animation: pulse 1s infinite

.card-create
    background-color: #f0f2f5
    color: #999
    border: 1px dashed #ddd

    &:hover
        color: #fff
        background-color: #7e8c9d
        border: none
        animation: pulse 1s infinite

    i
        display: flex
        width: 100%
        height: 50%
        justify-content: center
        align-items: flex-end
        margin-bottom: 5px
        font-size: 20px

    span
        display: flex
        height: 50%
</style>
