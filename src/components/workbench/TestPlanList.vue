<template>
    <el-row class="test-plan-container">
        <div class="card-header">
            <span class="title">测试计划</span>
        </div>

        <plan-card></plan-card>
    </el-row>
</template>

<script>
import PlanCard from './PlanCard';

export default {
    name: 'test-plan-list',
    components: { PlanCard }
};
</script>

<style lang="stylus" scoped>
.test-plan-container
    height: 50%
    padding: 20px 15px 12px
</style>