<template>
	<main>
		<div>
			<article left>
				<h1>本站</h1>
				<h1>
					現行
					<h1 style="color: #0498e6">狀</h1>
					态の
				</h1>
				<h1>构築中</h1>
				<div>
					<p title>ERROR</p>
					<p>The website is being erected</p>
					<h2>永远相信美好的事情即将发生</h2>
				</div>
			</article>
			<article right><h1>E</h1></article>
		</div>
	</main>
</template>

<style lang="less" scoped>
main {
	position: relative;
	min-height: calc(100vh - 140px);
	overflow: initial;
	> div {
		width: 100%;
		margin: 0 auto;
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 0 25px;
		height: calc(100vh - 140px);
		> article {
			position: relative;
		}

		> article[right] {
			padding: 0 55px;
			> h1 {
				color: #fff;
				font-size: 125px;
				padding-bottom: 205px;
			}
		}

		> article[left] {
			h1 {
				display: flex;
				justify-content: flex-end;
				color: #fff;
				font-size: 75px;
				font-weight: lighter;
				text-align: end;
				line-height: 90px;
			}
			> div {
				margin-top: 42px;
				> p[title] {
					color: #fff;
					text-align: end;
					font-size: 15px;
					line-height: 18px;
				}
				> p {
					color: #fff;
					text-align: end;
					font-size: 22px;
					line-height: 35px;
				}
				> h2 {
					color: #fff;
					text-align: end;
					font-size: 25px;
					letter-spacing: 4px;
					font-weight: 500;
					line-height: 40px;
				}
			}
		}
	}
}
@media screen and (max-width: 780px) {
	main {
		min-height: calc(100vh - 160px);
		> div {
			height: calc(100vh - 162px);
			> article[left] {
				h1 {
					font-size: 42px;
					line-height: 52px;
				}

				> div {
					margin-top: 35px;
					> p[title] {
						font-size: 8px;
						line-height: 15px;
					}

					> p {
						font-size: 15px;
						line-height: 25px;
					}

					> h2 {
						font-size: 18px;
						letter-spacing: 2px;
						line-height: 24px;
					}
				}
			}

			> article[right] {
				padding: 0 28px;
				> h1 {
					font-size: 62px;
					margin-top: 42px;
				}
			}
		}
	}
}
</style>
