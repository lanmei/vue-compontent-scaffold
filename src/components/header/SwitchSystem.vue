<template>
<div class="alm-switch-system" :class="{open : show}" @click="close">
    <ul>
        <li>
            <a @click.stop="" href="${@applicationMetaData.config.almMainUrl}" target="_blank">
                <div></div>
                <span>协作空间</span>
            </a>
        </li>
        <li>
            <a @click.stop="" href="${@applicationMetaData.config.vtMainUrl}" target="_blank">
                <div></div>
                <span>持续集成</span>
            </a>
        </li>
        <li>
            <a @click.stop="" href="${@applicationMetaData.config.tcMainUrl}" target="_blank">
                <div></div>
                <span>测试管理</span>
            </a>
        </li>
        <div class="close"></div>
    </ul>
</div>
</template>

<script>
export default {
    name: 'alm-switch-system',
    props: ['show'],
    methods: {
        // 关闭
        close () {
            this.$parent.switchSystem();
        }
    }
};
</script>

<style lang="stylus" scoped>
@import "../theme/variables.sty"

.alm-switch-system
	width: 100%
	height: 100%
	padding: 0
	border-radius: 2px
	background-color: rgba(65, 76, 96, 0.95)
	text-align: center
	position: fixed
	left: 0
	top: 0
	z-index: 1000
	opacity: 0
	visibility: hidden
	transition: 0.5s

	ul
		height: 130px
		padding: 0
		margin: 160px auto
		list-style: none
		display: inline-block
		position: relative

		li
			width: 260px
			height: 130px
			color: #fff
			text-align: center
			cursor: pointer
			margin: 0 10px
			opacity: .9
			float: left
			transform: translate3d(0, -80px, 0)
			transition: all 0.5s

			a div
				height: 43px
				width: 100%
				margin-top: 30px
				margin-bottom: 15px
				background-repeat: no-repeat
				background-size: 45px 43px
				background-position: center 0

			span
				color: #fff
				font-size: 16px
				transition: all 0.5s

		li:hover span
			color: #333

		li:nth-child(1)
			background-color: #56f7b3

			div
				background-image: url($images-prefix/space.png)

			&:hover div
				background-image: url($images-prefix/space_hover.png)

		li:nth-child(2)
			background-color: #56b3f8

			div
				background-image: url($images-prefix/jic.png)

			&:hover div
				background-image: url($images-prefix/jic_hover.png)


		li:nth-child(3)
			background-color: #f88b55

			div
				background-image: url($images-prefix/test.png)

			&:hover div
				background-image: url($images-prefix/test_hover.png)

		.close
			content: ""
			width: 40px
			height: 43px
			background: url($images-prefix/close.png) no-repeat
			background-size: 100% 100%
			position: absolute
			top: -60px
			right: -10px
			cursor: pointer
			opacity: 0
			transform: rotate(0deg)
			transition: transform .8s ease-out .5s, opacity .8s ease-out .5s

			&:hover
				background: url($images-prefix/close_hover.png) no-repeat
				background-size: 100% 100%

.open
	opacity: 1
	visibility: visible

	ul
		margin-top: 160px

		li
			opacity: 1
			transform: translate3d(0, 0, 0)

		li.on:hover
			background-color: #fff
			color: #333

		li:nth-child(1)
			transition-delay: 0.05s

		li:nth-child(2)
			transition-delay: 0.1s

		li:nth-child(3)
			transition-delay: 0.15s

		.close
			transform: rotate(360deg)
			opacity: 1
</style>
