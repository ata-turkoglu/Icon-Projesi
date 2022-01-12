<template>
  <!-- <div class="app">
    <div class="container">
      <div class="row">
        <div class="col-sm-3 offset-3 d-flex flex-column mt-5">
          <div class="d-flex align-items-center justify-content-center mt-5">
            <span class="material-icons detail-icon-size">bookmarks</span>
          </div>
          <div
            class="d-flex flex-row align-items-stretch justify-content-center"
          >
            <div>
              <span class="material-icons icon-size me-3">bookmark_added</span>
            </div>
            <div>
              <span class="material-icons icon-size me-3">bookmark_add</span>
            </div>
            <div>
              <span class="material-icons icon-size me-3"> bookmark_border </span>
            </div>
            <div>
              <span class="material-icons icon-size me-3">bookmark</span>
            </div>
          </div>
        </div>
        <div class="col-sm-3 d-flex flex-column mt-4">
          <div class="row">
            <div class="col-sm-6 d-flex flex-column mt-5">
              <div class="d-flex align-items-center justify-content-end mt-5 mb-5">
                <span class="material-icons">favorite</span>
              </div>
              <div class="d-flex align-items-center justify-content-end mt-5 mb-5">
                <span class="material-icons">tag</span>
              </div>
              <div class="d-flex align-items-center justify-content-end mt-5 mb-5">
                <span class="material-icons">file_download</span>
              </div>
              <div class="d-flex align-items-center justify-content-end mt-5">
                <span class="material-icons">code</span>
              </div>
            </div>
            <div class="col-sm-6 d-flex flex-column mt-5">
              <div class="d-flex align-items-center justify-content-start mt-5 mb-5">
                <span>128K / by-black123</span>
              </div>
              <div class="d-flex align-items-center justify-content-start mt-5 mb-5">
                <span>bookmark, save</span>
              </div>
              <div class="d-flex align-items-center justify-content-start mt-5 mb-5">
                <span>download</span>
              </div>
              <div class="d-flex align-items-center justify-content-start mt-5">
                <textarea rows="5" cols="50">
                  iframe width=500 ... dfgwpfskdfpsdfsdfsdasdaslasfa iframe'</textarea
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div> -->

  <div class="icon-detail">
    <div class="left">
      <span class="material-icons detail-icon-size">bookmarks</span>
      <h2>Deneme</h2>
    </div>
    <div class="right">
      <div class="right-row">
        <span class="material-icons">favorite</span>
        <span>128K / by-black123</span>
      </div>
      <div class="right-row">
        <span class="material-icons">tag</span>
        <span>bookmark, save</span>
      </div>
      <div class="right-row">
        <span class="material-icons">file_download</span>
        <span>download</span>
      </div>
      <div class="right-row">
        <span class="material-icons">code</span>
         <textarea rows="5" cols="50">
          iframe width=500 ... dfgwpfskdfpsdfsdfsdasdaslasfa iframe'</textarea>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "IconDetail",
};
</script>

<style scoped>
.icon-detail {
  background-color: #003265;
  color: white;
  height: 100%;
  width: 100%;
  min-width: 500px;
  min-height: 500px;
  display: grid;
  grid-template-columns: 1fr 1fr;
}

.left {
  display: flex;
  justify-content: center;
  align-items: center;
}

.right {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}

.right-row {
  display: flex;
  align-items: center;
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
