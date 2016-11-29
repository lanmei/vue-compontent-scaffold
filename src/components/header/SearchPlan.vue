<template>
    <div class="search-result-wrapper">
        <div class="search-category-label">计划</div>
        <div class="search-plan-item search-plan-border">
            <div class="plan-content">
                <div class="plan-name">615之后</div>
                <div class="plan-time"><i class="fa fa-clock-o time-begin"></i>06-20<i class="fa fa-clock-o time-end"></i>06-21</div>
            </div>
            <div class="plan-state"><i class="state-icon"></i></div>
        </div>
        <div class="search-plan-item">
            <div class="plan-content">
                <div class="plan-name">615之后</div>
                <div class="plan-time"><i class="fa fa-clock-o time-begin"></i>06-20<i class="fa fa-clock-o time-end"></i>06-21</div>
            </div>
            <div class="plan-state"><i class="state-icon"></i></div>
        </div>
        <div class="search-plan-item">
            <div class="plan-content">
                <div class="plan-name">615之后</div>
                <div class="plan-time"><i class="fa fa-clock-o time-begin"></i>06-20<i class="fa fa-clock-o time-end"></i>06-21</div>
            </div>
            <div class="plan-state"><i class="state-icon"></i></div>
        </div>
        <div class="search-plan-item">
            <div class="plan-content">
                <div class="plan-name">615之后</div>
                <div class="plan-time"><i class="fa fa-clock-o time-begin"></i>06-20<i class="fa fa-clock-o time-end"></i>06-21</div>
            </div>
            <div class="plan-state"><i class="state-icon"></i></div>
        </div>
        <div class="search-plan-item">
            <div class="plan-content">
                <div class="plan-name">615之后</div>
                <div class="plan-time"><i class="fa fa-clock-o time-begin"></i>06-20<i class="fa fa-clock-o time-end"></i>06-21</div>
            </div>
            <div class="plan-state"><i class="state-icon"></i></div>
        </div>
        <div class="search-more"><span>加载更多<i class="fa fa-angle-down"></i></span></div>
    </div>
</template>

<script>
export default {
    name: 'search-plan',
    props: ['planList']
};
</script>

<style lang="stylus">
.search-plan-item
    display: flex
    flex-flow: row wrap
    border: 1px solid #e6e9ed
    border-top: none
    height: 75px
    font-size: 14px

    .plan-content
        padding: 12px 30px
        display: flex
        flex-grow: 1
        flex-flow: row wrap

        .plan-name, .plan-time
            width: 100%
            display: flex
            align-items: center

        .plan-time
            font-size: 12px
            color: #aaa
            margin-top: 10px

            .time-begin
                padding-right: 5px
                color: #95dec7

            .time-end
                margin-left: 10px
                padding: 0 5px
                color: #ff9ca6

    .plan-state
        display: flex
        height: 100%
        width: 15px
        background-color: #f5f5f5
        justify-content: center
        align-items: center

        .state-icon
            background-color: #ff6978
            width: 8px
            height: 8px
            border-radius: 50%

.search-plan-border
    border-top: 1px solid #e6e9ed
</style>
