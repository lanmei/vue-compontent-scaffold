<template>
    <!-- 我的工作空间 -->
    <transition name="custom-classes-transition" enter-active-class="animated bounceInDown" leave-active-class="animated bounceOutUp">
    	<div v-show="isShow" class="alm-project-container">
            <div class="user-close" @click="showHeaderProjectPanel"><i class="el-icon-circle-cross"><i></div>
            <label>最近打开</label>
            <div class="user-project-recent">
                <project-card name="122"></project-card>
                <project-card name="12"></project-card>
                <project-card name="21234564212"></project-card>
                <project-card name="13215646"></project-card>
                <project-card name="21649321"></project-card>
            </div>
            <label>我的空间</label>
            <div class="user-project-full">
                <project-card name="sss" theme="create"></project-card>
                <project-card name="122"></project-card>
                <project-card name="12"></project-card>
                <project-card name="21234564212"></project-card>
                <project-card name="13215646"></project-card>
                <project-card name="21649321"></project-card>
                <project-card name="122"></project-card>
                <project-card name="12"></project-card>
                <project-card name="21234564212"></project-card>
                <project-card name="13215646"></project-card>
                <project-card name="21649321"></project-card>
                <project-card name="122"></project-card>
                <project-card name="12"></project-card>
                <project-card name="21234564212"></project-card>
                <project-card name="13215646"></project-card>
                <project-card name="21649321"></project-card>
                <project-card name="122"></project-card>
                <project-card name="12"></project-card>
                <project-card name="21234564212"></project-card>
                <project-card name="13215646"></project-card>
            </div>
            <label>已加入空间</label>
            <div class="user-project-join">
                <project-card name="122"></project-card>
                <project-card name="12"></project-card>
                <project-card name="21234564212"></project-card>
                <project-card name="13215646"></project-card>
                <project-card name="21649321"></project-card>
                <project-card name="122"></project-card>
                <project-card name="12"></project-card>
                <project-card name="21234564212"></project-card>
                <project-card name="13215646"></project-card>
            </div>
        </div>
    </transition>
</template>

<script>
import ProjectCard from './Card';
import { mapState, mapActions } from 'vuex';

export default {
    name: 'user-project',
    components: { ProjectCard },
    computed: mapState({
        // 映射 isOpen 到 this.$store.state.isHeaderProjectPanelShow
        isShow: 'isHeaderProjectPanelShow'
    }),
    methods: {
        // 映射 showHeaderProjectPanel 到 this.$store.dispath(changeHeaderProjectPanelState)
        ...mapActions({
            showHeaderProjectPanel: 'changeHeaderProjectPanelState'
        })
    }
};
</script>

<style lang="stylus">
@import "../theme/variables.sty"

.alm-project-container
    position: absolute
    top: 50px
    left: 0
    width: 100%
    height: 100%
    padding: 40px
    font-size: 15px
    color: #333
    overflow-y: auto
    background: rgba(240, 242, 245, 0.93)
    z-index: 2

.user-close
    position: absolute
    top: 25px
    right: 50px
    font-size: 30px
    color: #999
    cursor: pointer

    &:hover
        color: #3798e9

.user-project-recent
.user-project-full
.user-project-join
    display: flex
    flex-flow: row wrap
    margin: 10px 0 15px
</style>
