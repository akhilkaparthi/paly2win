<template>
  <div class="vnz-container is-loading">
    <main class="main-content">
      <div class="flxc flex-col h-full">
        <div class="modal-wait">
          <div class="modal-wait-loader">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 44 44">
              <circle
                id="bg"
                cx="50%"
                cy="50%"
                r="19"
                fill="none"
                stroke="#e4edf0"
                stroke-width="5"
              ></circle>
              <circle
                id="fg"
                cx="50%"
                cy="50%"
                r="19"
                fill="none"
                stroke="blue"
                stroke-width="5"
                stroke-linecap="round"
              ></circle>
            </svg>
          </div>
          <p id="loader">{{ loading }}</p>
        </div>
      </div>
    </main>
  </div>
</template>
<script>
export default {
  props: { loading: Number },
};
</script>
<style>
.h-full {
  height: 100%;
}
@keyframes spin {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
.modal-wait-loader {
  width: 120px !important;
  height: 120px !important;
  border-radius: 50%;
  background-color: #fff;
  box-shadow: 0px 3px 8px rgba(73, 134, 153, 0.15);
  margin-top: -74px;
  margin-bottom: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: spin 1s linear infinite;
}
.modal-wait-loader > svg {
  width: 120px;
  height: 120px;
}
#loader {
  position: absolute;
  top: -35%;
  font-weight: 900;
  font-size: 20px;
}
.modal-wait {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 30px;
}
.modal-wait > .fzl {
  letter-spacing: -0.16px;
  margin-bottom: 10px;
}
.modal-wait-loader {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-color: #fff;
  box-shadow: 0px 3px 8px rgba(73, 134, 153, 0.15);
  margin-top: -74px;
  margin-bottom: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: spin 1s linear infinite;
}
.modal-wait-loader > svg #fg {
  stroke-dasharray: 0, 119.381;
  stroke-dasharray: 71.202, 48.1786;
}
.flxc {
  display: flex;
  justify-content: center;
  align-items: center;
}
.main-content {
  grid-area: content;
  overflow-y: scroll;
  background-color: #fff;
}
.vnz-container {
  display: grid;
  grid-template-rows: 72px calc(100vh - 72px);
  grid-template-columns: 0px auto;
  grid-template-areas:
    "nav header"
    "nav content";
}
</style>
