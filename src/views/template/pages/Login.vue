<template>
  <div class="app flex-row align-items-center">
    <div class="container">
      <b-row class="justify-content-center">
        <b-col md="6">
          <b-card-group>
            <b-card no-body class="p-4">
              <b-card-body>
                <b-form>
                  <h4 class="mb-4 text-center">ورود به حساب کاربری</h4>
                  <b-row>
                    <b-col cols="12">
                      <b-input-group class="mb-3">
                        <b-input-group-prepend>
                          <b-input-group-text><i class="icon-user"></i></b-input-group-text>
                        </b-input-group-prepend>
                        <b-form-input type="text" class="form-control" placeholder="نام کاربری"
                                      autocomplete="username email"/>
                      </b-input-group>
                      <b-input-group class="mb-4">
                        <b-input-group-prepend>
                          <b-input-group-text><i class="icon-lock"></i></b-input-group-text>
                        </b-input-group-prepend>
                        <b-form-input type="password" class="form-control" placeholder="رمز عبور"
                                      autocomplete="current-password"/>
                      </b-input-group>
                    </b-col>
                  </b-row>
                  <b-row>
                    <b-col cols="12">
                      <b-button block variant="primary" class="px-4">ورود به حساب کاربری</b-button>
                    </b-col>
                  </b-row>
                </b-form>
              </b-card-body>
            </b-card>
          </b-card-group>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
    export default {
        name: 'Login'
    }
</script>
