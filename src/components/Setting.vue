<template>
    <div class="alm-page-container">
        <header-space></header-space>
        <sidebar-space></sidebar-space>
        <setting-space></setting-space>
        <div class="alm-floor-container">
        </div>
    </div>
</template>

<script>
import HeaderSpace from './header/HeaderSpace';
import SidebarSpace from './sidebar/Sidebar';
import SettingSpace from './setting/SettingSpace';

export default {
    name: 'setting',
    components: { HeaderSpace, SidebarSpace, SettingSpace }
};
</script>

<style lang="stylus">
.alm-page-container
    width: 100%
    height: 100%
    display: flex
    flex-flow: row wrap
</style>
