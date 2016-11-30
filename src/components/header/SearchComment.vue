<template>
    <div v-show="isShowCurrTab" class="search-result-wrapper">
        <div class="search-category-label">评论</div>
        <div class="search-comment-item">
            <div class="comment-author">
                <el-tooltip content="Ryan" placement="bottom">
                    <img src="http://vt.paic.com.cn/user-center-web/profile/avatar/4PVO165XKBv">
                </el-tooltip>
            </div>
            <div class="comment-content">还是展示0/1，没有展示为1/1@杨军</div>
        </div>
        <div class="search-comment-item">
            <div class="comment-author">
                <el-tooltip content="Ryan" placement="bottom">
                    <img src="http://vt.paic.com.cn/user-center-web/profile/avatar/4PVO165XKBv">
                </el-tooltip>
            </div>
            <div class="comment-content">还是展示0/1，没有展示为1/1@杨军</div>
        </div>
        <div class="search-comment-item">
            <div class="comment-author">
                <el-tooltip content="Ryan" placement="bottom">
                    <img src="http://vt.paic.com.cn/user-center-web/profile/avatar/4PVO165XKBv">
                </el-tooltip>
            </div>
            <div class="comment-content">还是展示0/1，没有展示为1/1@杨军</div>
        </div>
        <div class="search-comment-item">
            <div class="comment-author">
                <el-tooltip content="Ryan" placement="bottom">
                    <img src="http://vt.paic.com.cn/user-center-web/profile/avatar/4PVO165XKBv">
                </el-tooltip>
            </div>
            <div class="comment-content">还是展示0/1，没有展示为1/1@杨军</div>
        </div>
        <div class="search-comment-item">
            <div class="comment-author">
                <el-tooltip content="Ryan" placement="bottom">
                    <img src="http://vt.paic.com.cn/user-center-web/profile/avatar/4PVO165XKBv">
                </el-tooltip>
            </div>
            <div class="comment-content">还是展示0/1，没有展示为1/1@杨军</div>
        </div>
        <div class="search-more"><span>加载更多<i class="fa fa-angle-down"></i></span></div>
    </div>
</template>

<script>
export default {
    name: 'search-comment',
    props: ['commentList', 'isShowTab'],
    computed: {
        isShowCurrTab () {
            return this.isShowTab;
        }
    }
};
</script>

<style lang="stylus">
.search-comment-item
    display: flex
    flex-flow: row wrap
    margin-top: 15px

    .comment-author
        width: 32px
        height: 32px

        img
            max-width: 100%
            max-height: 100%
            border-radius: 50%

    .comment-content
        display: flex
        flex-basis: 32px
        flex-grow: 1
        margin-left: 15px
        font-size: 12px
        color: #666
        align-items: center
</style>
