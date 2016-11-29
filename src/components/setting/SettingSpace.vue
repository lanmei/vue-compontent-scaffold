<template>
    <div class="alm-setting-space">
        <div class="setting-nav">
            <router-link to="workspace">工作空间</router-link>
            <router-link to="members">成员</router-link>
            <router-link to="custom">自定义属性</router-link>
            <router-link to="chain">审批链</router-link>
            <router-link to="history">历史</router-link>
        </div>
        <div class="line"></div>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: 'setting-space',
    data () {
        return {
            activeName: 'first'
        };
    }
};
</script>

<style lang="stylus" scoped>
.alm-setting-space
    display: flex
    flex-grow: 1
    padding: 0 15px
    background-color: #fff
    flex-flow: row wrap

.setting-nav
    width: 100%
    height: 70px
    font-size: 16px
    display: flex
    justify-content: center
    align-items: center
    border-bottom: 1px solid #eee
    a
        padding: 15px
    .router-link-active
        font-weight: bold
        color: #3b9ad5

.setting-panel
    display: flex
    width: 100%
</style>
