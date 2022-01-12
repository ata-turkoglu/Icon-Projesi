<template>
	<div class="iconsLanding"> 
		<div class="leftBar">
			<span class="menu-icons mdi mdi-tune-variant mdi-36px"></span>
			<div class="menu">
				<span class="menu-icons mdi mdi-fire mdi-36px"></span>
				<span class="menu-icons mdi mdi-view-grid-outline mdi-36px"></span>
				<span class="menu-icons mdi mdi-square-edit-outline mdi-36px"></span>
				<span class="menu-icons mdi mdi-plus-box-outline mdi-36px"></span>
			</div>
			<span class="menu-icons mdi mdi-account mdi-36px"></span>
		</div>
		<div class="container">
			<span class="icons mdi mdi-home mdi-48px"></span>
			<span class="icons mdi mdi-account-supervisor mdi-48px"></span>
			<span class="icons mdi mdi-artstation mdi-48px"></span>
			<span class="icons mdi mdi-axe-battle mdi-48px"></span>
			<span class="icons mdi mdi-bell mdi-48px"></span>
			<span class="icons mdi mdi-bomb mdi-48px"></span>
			<span class="icons mdi mdi-bookmark-minus mdi-48px"></span>
			<span class="icons mdi mdi-cached mdi-48px"></span>
			<span class="icons mdi mdi-butterfly-outline mdi-48px"></span>
			<span class="icons mdi mdi-camera-iris mdi-48px"></span>
			<span class="icons mdi mdi-cast-audio mdi-48px"></span>
			<span class="icons mdi mdi-crown-circle mdi-48px"></span>
			<span class="icons mdi mdi-dice-5-outline mdi-48px"></span>
			<span class="icons mdi mdi-discord mdi-48px"></span>
			<span class="icons mdi mdi-diving-helmet mdi-48px"></span>
			<span class="icons mdi mdi-emoticon-devil-outline mdi-48px"></span>
			<span class="icons mdi mdi-volleyball mdi-48px"></span>
			<span class="icons mdi mdi-white-balance-sunny mdi-48px"></span>
			<span class="icons mdi mdi-snowflake mdi-48px"></span>
			<span class="icons mdi mdi-car mdi-48px"></span>
		</div>
	</div>
</template>

<script>
export default {
  name: 'IconsLanding'
}
</script>

<style scoped>
	.iconsLanding{
		display: flex;
		flex-direction: row;
	}
	.container{
		padding: 10vh;
		min-height: 500px;
		min-width: 500px;
		height: 100vh;
		width: 100%;
		background-color: #003265;
		color: white;
		display: grid;
		grid-template-columns: repeat(4,1fr);
		grid-template-rows: repeat(4,1fr);
	}
	.icons{
		height: 50px;
		width: 50px;
		display: flex;
		justify-self: center;
		cursor:pointer
	}
	.leftBar{
		box-sizing: border-box;
		min-height: 500px;
		height: 100vh;
		width: 70px;
		background-color:#002D5B;
		color:white;
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: 10px;
		justify-content: space-between;
	}
	.menu{
		height: 40vh;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
	}
	.menu-icons{
		margin: 0;
		cursor:pointer;
	}
</style>
