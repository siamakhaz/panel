<template>
  <div :class="{ showLoading: status }" style="display: none">
    <div class="loading-image-section">
      <div class="center-loading">
        <img src="/img/loading.svg" alt="Loadig icon">
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "Loading",
        props: {
            status: false,
        }
    }
</script>

<style scoped lang="scss">
  .showLoading {
    display: block !important;
  }

  .loading-image-section {
    z-index: 9999;
    position: fixed;
    top: 0;
    background: rgba(0, 0, 0, 0.65);
    width: 100%;
    height: 100%;

    .center-loading {
      display: flex;
      align-content: center;
      align-items: center;
      height: 100%;
      width: 100%;

      img {
        height: 200px;
        margin: auto;
      }
    }
  }
</style>
