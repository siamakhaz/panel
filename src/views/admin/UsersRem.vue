<template>
  <div>
    <div className="animated fadeIn">
      <b-row>
        <b-col cols="12">
          <b-card
            header-tag="header"
            footer-tag="footer">
            <div slot="header">
              <i className="fa fa-align-justify"></i><strong className="ml-1">اضافه کردن کاربر جدید</strong>
            </div>
            <b-form>
              <b-row class="form-group">
                <b-col md="3">
                  <b-form-group>
                    <b-input-group>
                      <b-input-group-prepend>
                        <b-input-group-text><i class="fa fa-vcard-o"></i></b-input-group-text>
                      </b-input-group-prepend>
                      <b-form-input v-model="user.FirstName" type="text" placeholder="نام"></b-form-input>
                    </b-input-group>
                  </b-form-group>
                  <div v-if="$v.user.FirstName.$error">
                    <div class="text-danger" v-if="!$v.user.FirstName.required">تکمیل این فیلد الزامی است.</div>
                  </div>
                </b-col>
                <b-col md="3">
                  <b-form-group>
                    <b-input-group>
                      <b-input-group-prepend>
                        <b-input-group-text><i class="fa fa-vcard"></i></b-input-group-text>
                      </b-input-group-prepend>
                      <b-form-input v-model="user.LastName" type="text" placeholder="نام خانوادگی"></b-form-input>
                    </b-input-group>
                  </b-form-group>
                  <div v-if="$v.user.LastName.$error">
                    <div class="text-danger" v-if="!$v.user.LastName.required">تکمیل این فیلد الزامی است.</div>
                  </div>
                </b-col>
                <b-col md="3">
                  <b-form-group>
                    <b-input-group>
                      <b-input-group-prepend>
                        <b-input-group-text><i class="fa fa-mobile"></i></b-input-group-text>
                      </b-input-group-prepend>
                      <b-form-input v-model="user.Mobile" type="number" placeholder="موبایل"></b-form-input>
                    </b-input-group>
                  </b-form-group>
                  <div v-if="$v.user.Mobile.$error">
                    <div class="text-danger" v-if="!$v.user.Mobile.required">تکمیل این فیلد الزامی است.</div>
                    <div class="text-danger" v-if="!$v.user.Mobile.minLength">حداقل
                      {{$v.user.Mobile.$params.minLength.min}} کاراکتر.
                    </div>
                    <div class="text-danger" v-if="!$v.user.Mobile.maxLength">حداکثر
                      {{$v.user.Mobile.$params.maxLength.max}} کاراکتر.
                    </div>
                  </div>
                </b-col>
                <b-col md="3">
                  <b-form-group>
                    <b-input-group>
                      <b-input-group-prepend>
                        <b-input-group-text><i class="fa fa-envelope"></i></b-input-group-text>
                      </b-input-group-prepend>
                      <b-form-input v-model="user.Email" type="email" placeholder="ایمیل"></b-form-input>
                    </b-input-group>
                  </b-form-group>
                  <div v-if="$v.user.Email.$error">
                    <div class="text-danger" v-if="!$v.user.Email.required">تکمیل این فیلد الزامی است.</div>
                  </div>
                </b-col>
              </b-row>
              <b-row class="form-group">
                <b-col md="3">
                  <b-form-group>
                    <b-input-group>
                      <b-input-group-prepend>
                        <b-input-group-text><i class="fa fa-lock"></i></b-input-group-text>
                      </b-input-group-prepend>
                      <b-form-input v-model="user.Passcode" type="text" placeholder="رمز عبور"></b-form-input>
                    </b-input-group>
                  </b-form-group>
                  <div v-if="$v.user.Passcode.$error">
                    <div class="text-danger" v-if="!$v.user.Passcode.required">تکمیل این فیلد الزامی است.</div>
                    <div class="text-danger" v-if="!$v.user.Passcode.minLength">حداقل
                      {{$v.user.Passcode.$params.minLength.min}} کاراکتر.
                    </div>
                    <div class="text-danger" v-if="!$v.user.Passcode.maxLength">حداکثر
                      {{$v.user.Passcode.$params.maxLength.max}} کاراکتر.
                    </div>

                  </div>
                </b-col>
                <b-col md="3">
                  <b-form-group>
                    <b-input-group>
                      <b-input-group-prepend>
                        <b-input-group-text><i class="fa fa-address-card"></i></b-input-group-text>
                      </b-input-group-prepend>
                      <b-form-input v-model="user.Username" type="text" placeholder="نام کاربری"></b-form-input>
                    </b-input-group>
                  </b-form-group>
                  <div v-if="$v.user.Username.$error">
                    <div class="text-danger" v-if="!$v.user.Username.required">تکمیل این فیلد الزامی است.</div>
                  </div>
                </b-col>
                <b-col md="3">
                  <b-form-group
                    label="جنسیت کاربر"
                    label-for="basicSelect"
                    :label-cols="6"
                    :label-cols-md="4"
                    :label-cols-lg="3">
                    <b-form-select v-model="user.Sex" id="basicSelect"
                                   :plain="true"
                                   :options="[
                                 {value: 'M', text: 'مذکر' },
                                 {value: 'F', text: 'مونث' },
                                 {value: 'N', text: 'نامشخص' },
                                 ]">
                    </b-form-select>
                  </b-form-group>
                  <div v-if="$v.user.Sex.$error">
                    <div class="text-danger" v-if="!$v.user.Sex.required">تکمیل این فیلد الزامی است.</div>
                  </div>
                </b-col>
                <b-col md="3">
                  <b-form-group
                    label="نقش کاربر"
                    label-for="basicSelect"
                    :label-cols="6"
                    :label-cols-md="4"
                    :label-cols-lg="3">
                    <b-form-select v-model="user.RoleTitle" id="basicSelect"
                                   :plain="true"
                                   :options="[
                                 {value: 'admin', text: 'مدیر کل' },
                                 {value: 'support', text: 'کارشناس پشتیبانی' },
                                 {value: 'topseller', text: 'فروشنده ارشد' },
                                 {value: 'seller', text: 'فروشنده' },
                                 ]">
                    </b-form-select>
                  </b-form-group>
                  <div v-if="$v.user.RoleTitle.$error">
                    <div class="text-danger" v-if="!$v.user.RoleTitle.required">تکمیل این فیلد الزامی است.</div>
                  </div>
                </b-col>
              </b-row>
              <b-row class="form-group">
                <b-col md="4" class="text-center mx-auto">
                  <b-button @click="register" variant="primary" block>اضافه کردن کاربر
                  </b-button>
                </b-col>
              </b-row>
            </b-form>
          </b-card>
        </b-col>
      </b-row>
    </div>
    <Loading :status="showLoading"></Loading>
  </div>
</template>

<script>
    import Swal from 'sweetalert2';
    import Loading from "./../Loading";
    import axios from 'axios';
    import {Server_API_Address} from '../../settings';
    import {required, minLength, maxLength, email} from "vuelidate/lib/validators";

    export default {
        name: 'UsersRem',
        data: function () {
            return {
                user: {
                    FirstName: null,
                    LastName: null,
                    Mobile: null,
                    Email: null,
                    Passcode: null,
                    Username: null,
                    Sex: null,
                    RoleTitle: null
                },
                showLoading: false
            }
        },
        validations: {
            user: {
                FirstName: {required},
                LastName: {required},
                Mobile: {required, minLength: minLength(11), maxLength: maxLength(11)},
                Email: {required, email},
                Passcode: {required, minLength: minLength(6), maxLength: maxLength(30)},
                Username: {required},
                Sex: {required},
                RoleTitle: {required},
            },
        },
        components: {
            Loading
        },
        methods: {
            register: function () {
                this.$v.user.$touch();
                if (this.$v.user.$anyError) {
                    Swal.fire({
                        type: 'error',
                        title: 'خطا !',
                        text: 'فرم را درست تکمیل نکردید.',
                        confirmButtonText: 'باشه'
                    })
                } else {
                    this.showLoading = true;
                    axios({
                        method: 'post',
                        url: Server_API_Address + 'admincp/registeruser',
                        data: this.user,
                        headers: {
                            Authorization: 'Bearer ' + localStorage.token
                        }
                    }).then((response) => {
                        if (response.data.statusCode === 200) {
                            Swal.fire({
                                type: 'success',
                                title: 'عملیات موفقیت آمیز بود',
                                text: 'کاربر مورد مورد نظر اضافه شد.',
                                confirmButtonText: 'باشه'
                            })
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
                    });
                }
            }
        }
    }
</script>

