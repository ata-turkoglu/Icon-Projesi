<template>
  <div class="icon-detail">
    <div class="left">
      <span class="material-icons detail-icon-size">bookmarks</span>
      <div class="left-bottom">
        <span class="material-icons icon-size me-3">bookmark_added</span>
        <span class="material-icons icon-size me-3">bookmark_add</span>
        <span class="material-icons icon-size me-3"> bookmark_border </span>
        <span class="material-icons icon-size me-3">bookmark</span>
      </div>
    </div>
    <div class="right">
      <div class="right-row">
        <span class="material-icons mr">favorite</span>
        <span>128K / by-black123</span>
      </div>
      <div class="right-row">
        <span class="material-icons mr">tag</span>
        <span>bookmark, save</span>
      </div>
      <div class="right-row">
        <span class="material-icons mr">file_download</span>
        <span>download</span>
      </div>
      <div class="right-row">
        <span class="material-icons mr">code</span>
         <textarea class="t-area">
          iframe width=500 ... dfgwpfskdfpsdfsdfsdasdaslasfa iframe'</textarea>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IconDetail'
}
</script>

<style scoped>
.icon-detail {
  background-color: #003265;
  color: white;
  min-height: 500px;
  min-width: 500px;
  height: 100vh;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
}

.left {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.left-bottom{
  margin-top: 10px;
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-around;
}

.right {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
  padding: 20px;
}

.right-row {
  display: flex;
  align-items: center;
}

.mr{
  margin-right: 20px;
}

.t-area{
  width: 30vw;
  height: 15vh;
  max-height: 30vh;
  max-width: 40vw
}

.app {
  background-color: #003265;
  color: white !important;
  height: 100%;
  width: 100%;
}

.icon-size {
  font-size: 2rem !important;
}

.detail-icon-size {
  font-size: 20rem !important;
}
</style>
