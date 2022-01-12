<template>
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
</template>

<script>
export default {
  name: "LeftMenu",
};
</script>

<style scoped>
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
