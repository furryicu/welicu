<template>
	<main></main>
</template>

<style lang="less" scoped>
main {
	position: relative;
	min-height: calc(100vh - 140px);
	overflow: initial;
}
@media screen and (max-width: 780px) {
	main {
		min-height: calc(100vh - 160px);
		> div {
			height: 100%;
		}
	}
}
</style>
