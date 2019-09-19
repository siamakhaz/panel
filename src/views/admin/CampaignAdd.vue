<template>
  <div className="animated fadeIn">
    <b-row>
      <b-col md="12" lg="6">
        <b-card
          header-tag="header"
          footer-tag="footer">
          <div slot="header">
            <i className="fa fa-align-justify"></i><strong className="ml-1">عملکرد کمپین</strong>
          </div>
          <b-row class="form-group">
            <b-col md="12">
              <b-form-group>
                <b-input-group>
                  <b-input-group-prepend>
                    <b-input-group-text><i class="fa fa-pencil"></i></b-input-group-text>
                  </b-input-group-prepend>
                  <b-form-input type="text" placeholder="نام کمپین"></b-form-input>
                </b-input-group>
              </b-form-group>
            </b-col>
          </b-row>
          <b-row class="form-group">
            <b-col md="4">
              <b-form-group>
                <b-input-group>
                  <b-input-group-prepend>
                    <b-input-group-text><i class="fa fa-pencil"></i></b-input-group-text>
                  </b-input-group-prepend>
                  <b-form-input type="number" placeholder="موجودی کمپین"></b-form-input>
                </b-input-group>
              </b-form-group>
            </b-col>
            <b-col md="4">
              <b-form-group>
                <b-input-group>
                  <b-input-group-prepend>
                    <b-input-group-text><i class="fa fa-pencil"></i></b-input-group-text>
                  </b-input-group-prepend>
                  <b-form-input type="number" placeholder="مبلغ تخفیف"></b-form-input>
                </b-input-group>
              </b-form-group>
            </b-col>
            <b-col md="4">
              <b-form-group>
                <b-input-group>
                  <b-input-group-prepend>
                    <b-input-group-text><i class="fa fa-pencil"></i></b-input-group-text>
                  </b-input-group-prepend>
                  <b-form-input type="number" placeholder="حد خرید"></b-form-input>
                </b-input-group>
              </b-form-group>
            </b-col>
          </b-row>
          <b-row class="form-group">
            <b-col md="6">
              <b-form-group
                label="قابلیت ادغام دارد؟"
                label-for="basicSelect"
                :label-cols="6"
                :label-cols-md="4"
                :label-cols-lg="6">
                <b-form-select id="basicSelect"
                               :plain="true"
                               :options="[
                                 {value: true, text: 'بلی' },
                                 {value: false, text: 'خیر' }
                                 ]">
                </b-form-select>
              </b-form-group>
            </b-col>
            <b-col md="6">
              <b-form-group
                label="روش انتخاب محصول"
                label-for="basicSelect"
                :label-cols="6"
                :label-cols-md="4"
                :label-cols-lg="6">
                <b-form-select v-model="product_select_method" id="basicSelect"
                               :plain="true"
                               :options="[
                                 {value: 'barcode', text: 'بارکد + تعداد' },
                                 {value: 'table', text: 'روش انتخابی' }
                                 ]">
                </b-form-select>
              </b-form-group>
            </b-col>
          </b-row>
          <b-row v-if="product_select_method === 'barcode'">
            <p>روش بارکد</p>
          </b-row>
          <b-row v-if="product_select_method === 'table'">
            <p>روش جدول</p>
          </b-row>
        </b-card>
      </b-col>
      <b-col md="12" lg="6">
        <b-card
          header-tag="header"
          footer-tag="footer">
          <div slot="header">
            <i className="fa fa-align-justify"></i><strong className="ml-1">قشر هدف کمپین</strong>
          </div>
          <b-row class="form-group">
            <b-col md="6">
              <b-form-group>
                <b-input-group>
                  <b-input-group-prepend>
                    <b-input-group-text><i class="fa fa-pencil"></i></b-input-group-text>
                  </b-input-group-prepend>
                  <b-form-input type="number" placeholder="مرتبه خرید"></b-form-input>
                </b-input-group>
              </b-form-group>
            </b-col>
            <b-col md="6">
              <b-form-group>
                <b-input-group>
                  <b-input-group-prepend>
                    <b-input-group-text><i class="fa fa-pencil"></i></b-input-group-text>
                  </b-input-group-prepend>
                  <b-form-input type="number" placeholder="حداقل مبلغ فاکتور"></b-form-input>
                </b-input-group>
              </b-form-group>
            </b-col>
          </b-row>
          <hr>
          <b-row class="form-group">
            <b-col cols="12">
              <p>بازه زمانی:</p>
            </b-col>
            <b-col md="6">
              <b-form-group>
                <b-input-group>
                  <b-input-group-prepend>
                    <b-input-group-text><i class="fa fa-pencil"></i></b-input-group-text>
                  </b-input-group-prepend>
                  <b-form-input type="number" placeholder="مبلغ تخفیف"></b-form-input>
                </b-input-group>
              </b-form-group>
            </b-col>
            <b-col md="6">
              <b-form-group>
                <b-input-group>
                  <b-input-group-prepend>
                    <b-input-group-text><i class="fa fa-pencil"></i></b-input-group-text>
                  </b-input-group-prepend>
                  <b-form-input type="number" placeholder="حد خرید"></b-form-input>
                </b-input-group>
              </b-form-group>
            </b-col>
          </b-row>
          <hr>
          <b-row class="form-group">
            <b-col cols="12">
              <p>منطقه جغرافیایی:</p>
            </b-col>
            <b-col md="6">
              <b-form-group
                label="انتخاب شهر"
                label-for="basicSelect"
                :label-cols="6"
                :label-cols-md="4"
                :label-cols-lg="6">
                <b-form-select
                               :plain="true"
                               :options="[
                                 {value: true, text: 'بلی' },
                                 {value: false, text: 'خیر' }
                                 ]">
                </b-form-select>
              </b-form-group>
            </b-col>
            <b-col md="6">
              <b-form-group
                label="انتخاب منطقه"
                label-for="basicSelect"
                :label-cols="6"
                :label-cols-md="4"
                :label-cols-lg="6">
                <b-form-select
                               :plain="true"
                               :options="[
                                 {value: 'barcode', text: 'بارکد + تعداد' },
                                 {value: 'table', text: 'روش انتخابی' }
                                 ]">
                </b-form-select>
              </b-form-group>
            </b-col>
          </b-row>
          <b-row class="form-group">
            <b-col md="4" class="text-center mx-auto">
              <b-button variant="primary" block>ایجاد کمپین</b-button>
            </b-col>
          </b-row>
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>

<script>
    export default {
        name: 'CampaignAdd',
        data() {
            return {
                product_select_method: null, // barcode | table,
            }
        },
        methods: {}
    }
</script>

