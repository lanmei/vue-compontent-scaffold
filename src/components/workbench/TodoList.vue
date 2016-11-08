<template>
    <el-col :span="6" class="todo-container">
        <div class="card-header">
            <span class="title">待办<span class="fa fa-cog ml10"></span></span>
            <div class="dropdown pull-right">
               <a id="backlogall" href="#" class="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    全部
                    <span class="caret"></span>
                </a>
                <!--<ul class="dropdown-menu" role="menu" aria-labelledby="backlogall">
                    <li v-on:click="changeState()" role="presentation"><a role="menuitem" tabindex="-1" href="#">全部</a></li>
                    <li>
                        <ul>
                            <li role="presentation" class="divider"></li>
                            <li role="presentation" class="dropdown-header">asdfsaf</li>
                            <li role="presentation">
                                <a role="menuitem" tabindex="-1" href="#">ewrwr</a>
                            </li>
                        </ul>
                    </li>
                </ul>-->
            </div>
        </div>

        <task-card></task-card>
    </el-col>
</template>

<script>
import TaskCard from './TaskCard';

export default {
    name: 'todo-list',
    components: { TaskCard }
};
</script>

<style lang="stylus" scoped>
.todo-container
    height: 100%
    padding: 20px 15px 12px

.card-header
    .fa-cog
        display: none
        color: #999
        margin-left: 10px
    .dropdown
        position: absolute
        top: 0
        right: 0
    .dropdown > a
        display: block
        padding: 11px 15px
        border-radius: 4px
        text-decoration: none
        color: #888
</style>