<template>
    <el-row class="dev-plan-container">
        <div class="card-header">
            <span class="title">研发计划</span>
        </div>

        <plan-card></plan-card>
    </el-row>
</template>

<script>
import PlanCard from './PlanCard';

export default {
    name: 'dev-plan-list',
    components: { PlanCard }
};
</script>

<style lang="stylus" scoped>
.dev-plan-container
    height: 50%
    padding: 20px 15px 12px
</style>