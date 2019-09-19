<template>
  <div class="app flex-row align-items-center">
    <div class="container">
      <b-row class="justify-content-center">
        <b-col md="6">
          <div class="clearfix">
            <h1 class="float-left display-3 mr-4">404</h1>
            <h4 class="pt-3">صفحه مورد نظر یافت نشد.</h4>
            <p class="text-muted">صفحه مورد نظر شما یافت نشد و یا حذف شده است.</p>
            <router-link :to="{ name: 'Login'}">بازگشت به صفحه نخست</router-link>
          </div>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
    export default {
        name: 'Page404'
    }
</script>

<style scoped>
  a:hover {
    text-decoration: none;
  }
</style>
