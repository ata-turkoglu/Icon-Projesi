<template>
  <div class="iconsLanding">
    <div class="container">
			<span
				v-for="el in iconList" :key="el.code"
				class="icons mdi mdi-48px"
				:class="el.code"
				@click="goDetails(el)"
			/>
    </div>
  </div>
</template>

<script>
export default {
	data () {
		return {
			iconList: [
				{name: "", code: "mdi-home"},
				{name: "", code: "mdi-account-supervisor"},
				{name: "", code: "mdi-artstation"},
				{name: "", code: "mdi-axe-battle"},
				{name: "", code: "mdi-bell"},
				{name: "", code: "mdi-bomb"},
				{name: "", code: "mdi-bookmark-minus"},
				{name: "", code: "mdi-cached"},
				{name: "", code: "mdi-butterfly-outline"},
				{name: "", code: "mdi-camera-iris"},
				{name: "", code: "mdi-cast-audio"},
				{name: "", code: "mdi-crown-circle"},
				{name: "", code: "mdi-dice-5-outline"},
				{name: "", code: "mdi-discord"},
				{name: "", code: "mdi-diving-helmet"},
				{name: "", code: "mdi-emoticon-devil-outline"},
				{name: "", code: "mdi-volleyball"},
				{name: "", code: "mdi-white-balance-sunny"},
				{name: "", code: "mdi-snowflake"},
				{name: "", code: "mdi-car"},
			]
		}
	},
	methods:{
		goDetails(icon){
			this.$router.push('/icon-detail/'+ icon.code).catch(()=>{});
		}
	}
};
</script>

<style scoped>
.iconsLanding {
  display: flex;
  flex-direction: row;
}
.container {
  padding: 10vh;
  min-height: 500px;
  min-width: 500px;
  height: 100vh;
  width: 100%;
  background-color: #003265;
  color: white;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(4, 1fr);
}
.icons {
  height: 50px;
  width: 50px;
  display: flex;
  justify-self: center;
  cursor: pointer;
}
.leftBar {
  box-sizing: border-box;
  min-height: 500px;
  height: 100vh;
  width: 70px;
  background-color: #002d5b;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  justify-content: space-between;
}
.menu {
  height: 40vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
.menu-icons {
  margin: 0;
  cursor: pointer;
}
</style>
