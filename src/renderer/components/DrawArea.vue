<template>
	<div class="drawArea"> 
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
			
		</div>
	</div>
</template>

<script>
export default {
  name: 'DrawArea'
}
</script>

<style scoped>
	.drawArea{
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
