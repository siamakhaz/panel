<template>
  <div>
    <div class="app flex-row align-items-center">
      <div class="container">
        <b-row class="justify-content-center">
          <b-col md="6">
            <b-card-group>
              <b-card no-body class="p-4">
                <b-card-body>
                  <b-form>
                    <img class="login-logo" src="/img/main-logo.png" alt="Himart logo">
                    <b-row>
                      <b-col cols="12">
                        <b-input-group class="mb-3">
                          <b-input-group-prepend>
                            <b-input-group-text><i class="icon-user"></i></b-input-group-text>
                          </b-input-group-prepend>
                          <b-form-input v-model="userName" type="text" class="form-control" placeholder="نام کاربری"
                                        autocomplete="username email"/>
                        </b-input-group>
                        <b-input-group class="mb-4">
                          <b-input-group-prepend>
                            <b-input-group-text><i class="icon-lock"></i></b-input-group-text>
                          </b-input-group-prepend>
                          <b-form-input v-model="password" type="password" class="form-control" placeholder="رمز عبور"
                                        autocomplete="current-password"/>
                        </b-input-group>
                      </b-col>
                    </b-row>
                    <b-row>
                      <b-col cols="12">
                        <b-button type="submit" @click.prevent="login" block variant="primary" class="px-4">ورود به حساب
                          کاربری
                        </b-button>
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
    <Loading :status="showLoading"></Loading>
  </div>
</template>

<script>
    import Swal from 'sweetalert2'
    import Loading from "./Loading";
    import axios from 'axios'
    import {Server_API_Address} from '../settings'

    export default {
        name: 'Login',
        data: function () {
            return {
                userName: null,
                password: null,
                showLoading: false
            };
        },
        components: {
            Loading
        },
        methods: {
            login: function () {
                if (this.userName === null || this.password === null) {
                    Swal.fire({
                        title: 'خطا !',
                        text: 'نام کاربری یا رمز عبور را تکمیل نکردید',
                        type: 'error',
                        confirmButtonText: 'باشه'
                    })
                } else if (this.userName.length > 20 || this.password.length > 20) {
                    Swal.fire({
                        title: 'خطا !',
                        text: 'تعداد کاراکترهای مجاز نام کاربری یا رمز عبور معتبر نیست.',
                        type: 'error',
                        confirmButtonText: 'باشه'
                    })
                } else {
                    this.showLoading = true;
                    let loginData = {
                        "UserName": this.userName,
                        "PassWord": this.password,
                    };
                    axios({
                        method: 'post',
                        url: Server_API_Address + 'identity/people/authenticate',
                        data: loginData,
                    }).then((response) => {
                        if (response.data.statusCode === 200) {
                            localStorage.token = response.data['data'].token;
                            localStorage.refreshToken = response.data['data'].refreshToken;
                            this.$router.push({name: 'پنل مدیریت'});
                        } else {
                            Swal.fire({
                                type: 'error',
                                title: 'خطا !',
                                text: response.data.errorMessage,
                                confirmButtonText: 'باشه'
                            })
                        }
                    }).catch(function (error) {
                        Swal.fire({
                            type: 'error',
                            title: 'خطا !',
                            text: error,
                            confirmButtonText: 'باشه'
                        })
                    }).finally(() => {
                            this.showLoading = false;
                        }
                    );
                }
            }
        },
        beforeMount() {
            if (localStorage.token || localStorage.refreshToken) {
                this.$router.push({name: 'پنل مدیریت'})
            }
        }
    }
</script>

<style scoped>
  .login-logo {
    max-height: 90px;
    text-align: center;
    display: block;
    margin: auto auto 18px;
  }
</style>
