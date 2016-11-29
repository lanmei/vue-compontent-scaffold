<template>
    <div class="alm-header-space">
        <!-- 页面头部内容 -->
    	<div class="alm-header-container">
            <ul class="header-menu">
                <li class="wiz-icon-header-menu" @click="switchSystem">
                    <el-tooltip class="item" effect="dark" content="系统切换" placement="right">
                        <a></a>
                    </el-tooltip>
                </li>
                <li class="wiz-nav-header-workbench"><a href="/workbench">我的工作台</a></li>
                <li class="wiz-nav-header-workspace"><a @click="showHeaderProjectPanel">我的工作空间<i class="el-icon-caret-bottom"></i></a></li>
            </ul>
            <div class="wiz-logo-header"></div>
            <ul class="header-features">
                <li class="wiz-avatar-header"><img :src="require('../../assets/images/avatar/default.png')" /></li>
                <li class="wiz-dropdown-header"><el-button class="button-create" type="primary">快速创建<i class="el-icon-arrow-down el-icon--right"></i></el-button></li>
                <li class="wiz-badge-header">
                    <el-badge :value="200" :max="99" class="item">
                        <i class="wiz-icon-bell"></i>
                    </el-badge>
                </li>
                <li class="wiz-icon-search" @click="enterSearch">
                    <i class="el-icon-search"></i>
                </li>
            </ul>
        </div>
        <!-- 我的工作空间 -->
        <user-project></user-project>
        <!-- search 弹出层 -->
        <search-panel :showPanel="showHeaderSearchPanel"></search-panel>
        <!-- 切换空间弹出层 -->
        <switch-system :show="showSwitchSystem"></switch-system>
    </div>
</template>

<script>
import { mapActions } from 'vuex';
import UserProject from '../project/UserProject';
import SearchPanel from './SearchPanel';
import SwitchSystem from './SwitchSystem';

export default {
    name: 'header-space',
    components: { UserProject, SearchPanel, SwitchSystem },
    data () {
        return {
            showHeaderSearchPanel: false,
            showSwitchSystem: false
        };
    },
    methods: {
        // 点击搜索，弹出 search panel
        enterSearch () {
            // [TODO] enter 后 slide 全屏
            this.showHeaderSearchPanel = true;
        },
        // 映射 showHeaderProjectPanel 到 this.$store.dispath(changeHeaderProjectPanelState)
        ...mapActions({
            showHeaderProjectPanel: 'changeHeaderProjectPanelState'
        }),
        // close search panel, 状态由父组件 header 管理
        closeSearchPanel () {
            this.showHeaderSearchPanel = false;
        },
        // 切换系统
        switchSystem () {
            this.showSwitchSystem = !this.showSwitchSystem;
        }
    }
};
</script>

<style lang="stylus">
@import "../theme/variables.sty"

.header-layout
    display: flex
    flex-flow: row nowrap
    align-items: center
    height: 50px

.alm-header-space, .alm-header-container
    @extend .header-layout
    width: 100%
    background: #414c61
    z-index: 2

.alm-header-container
    z-index: 3

.header-menu
    @extend .header-layout
    width: 40%

.wiz-icon-header-menu
    display: flex
    justify-content: center
    flex-basis: 50px
    a
        width: 18px
        height: 18px
        background: url($images-prefix/menu.png) no-repeat center center
        background-size: contain
        display: block
        cursor: pointer
        position: relative
        z-index: 11

.wiz-nav-header-workbench
    @extend .header-layout
    padding: 0 15px
    a
        color: #fff

.wiz-nav-header-workspace
    @extend .wiz-nav-header-workbench
    a
        color: #c0ccda
        &:hover
            color: #fff
    i
        margin-left: 5px
        font-size: 12px

.wiz-logo-header
    @extend .header-layout
    width: 20%
    background: url($images-prefix/background.png) no-repeat center center
    background-size: 100px

.header-features
    display: flex
    flex-flow: row-reverse nowrap
    align-items: center
    width: 40%
    height: 100%

    .wiz-avatar-header
        display: flex
        align-items: center
        justify-content: center
        margin-right: 30px
        width: 50px
        height: 100%
        img
            border-radius: 50%
            width: 32px

    .wiz-dropdown-header
        .button-create
            margin-right: 8px
        i
            font-size: 12px

    .wiz-badge-header
        width: 50px
        height: 100%
        display: flex
        justify-content: center
        align-items: center
        margin-right: 25px

        .wiz-icon-bell
            display: flex
            width: 20px
            height: 20px
            background: url($images-prefix/message-default.png) no-repeat center center
            background-size: 100%

    .wiz-icon-search
        width: 50px
        height: 100%
        display: flex
        align-items: center
        justify-content: center

        &:hover
            i
                color: #fff

        i
            font-size: 18px
            color: #a2a8ae

    .wiz-input-search
        input
            height: 30px
            background-color: #343e4c
            border: none
            color: #fff
</style>
