<template>
  <div class="animated fadeIn">
    <b-row>
      <b-col cols="12">
        <b-card
          header-tag="header"
          footer-tag="footer">
          <div slot="header">
            <i class="fa fa-align-justify"></i><strong class="ml-1">لیست تمام کمپین ها</strong>
          </div>
          <p>جدول اینجا قرار می گیرد.</p>
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>

<script>
    export default {
        name: 'AdminCampaignList',
        data: function () {
            return {}
        },
    }
</script>
