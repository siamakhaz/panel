<template>
  <div className="animated fadeIn">
    <b-row>
      <b-col cols="12">
        <b-card
          header-tag="header"
          footer-tag="footer">
          <div slot="header">
            <i className="fa fa-align-justify"></i><strong className="ml-1">لیست کاربران</strong>
          </div>
          <p>لیست کاربران اینجا قرار می‌گیرد.</p>
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>

<script>
    export default {
        name: 'UsersList',
    }
</script>

