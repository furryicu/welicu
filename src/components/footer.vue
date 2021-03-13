<template>
	<footer>
		<div>
			<p>
				Copyright &copy; 2019 - {{ new Date().getFullYear() }}
				<a href="https://www.lf112.net/" target="_blank" class="LF">LF112</a>
				All Rights Reserved.
			</p>
			<span class="Nbsp">/</span>
			<p>FURRY ICU - 拾兽一</p>
			<span class="Nbsp">/</span>
			<a href="https://beian.miit.gov.cn/" target="_blank"
				>琼ICP备2021000434号-1</a
			>
		</div>
	</footer>
</template>

<style lang="less" scoped>
footer {
	position: relative;
	width: 100%;
	display: flex;
	align-items: center;
	> div {
		width: 100%;
		position: relative;
		display: flex;
		align-items: center;
		justify-content: center;
		> p,
		span {
			line-height: 28px;
			font-size: 12px;
			color: #fff;
			font-weight: lighter;
			user-select: none;
		}
		> a {
			line-height: 28px;
			font-size: 12px;
			color: #fff;
			font-weight: lighter;
		}
		.LF {
			font-family: fontOne;
			color: #fff;
			font-weight: 700;
		}
		.Nbsp {
			cursor: unset;
			padding: 0 8px;
			font-weight: lighter;
		}
	}
}
@media screen and (max-width: 780px) {
	footer {
		> div {
			display: inline-grid;
			padding-left: unset;
			width: 100%;
			text-align: center;
			.Nbsp {
				display: none;
			}
			> p,
			span,
			a {
				line-height: 18px;
			}
		}
	}
}
</style>
