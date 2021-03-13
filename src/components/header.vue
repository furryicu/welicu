<template>
	<header>
		<div>
			<div>
				<Icon name="furryicu" />
				<div>
					<h2>拾兽一</h2>
					<span>WWW.FURRY.ICU</span>
				</div>
			</div>
		</div>
	</header>
</template>

<script setup></script>

<style lang="less" scoped>
header {
	width: 100%;
	height: 85px;
	overflow: hidden;
	> div {
		position: relative;
		height: 100%;
		width: 785px;
		margin: 5px auto;
		min-width: 60%;
		max-width: 100%;
		padding: 0 35px;
		z-index: 1000;
		display: flex;
		align-items: center;
		justify-content: center;
		> div {
			height: 30px;
			padding: 2px;
			margin-top: 15px;
			user-select: none;
			display: flex;
			align-items: center;
			justify-content: center;
			.icon {
				width: 55px;
				height: 55px;
			}
			> div {
				position: relative;
				text-align: center;
				padding-left: 10px;
				> h2 {
					font-family: 'fontOne';
					color: #fff;
					font-size: 25px;
					line-height: 28px;
					font-weight: lighter;
					letter-spacing: 10px;
				}
				> span {
					font-family: 'ZCOOL KuaiLe';
					color: #fff;
					font-size: 12px;
					line-height: 12px;
					letter-spacing: 1px;
				}
			}
		}
	}
}
</style>
