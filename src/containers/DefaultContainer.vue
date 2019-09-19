<template>
  <div class="app">
    <AppHeader fixed>
      <SidebarToggler class="d-lg-none" display="md" mobile/>
      <b-link class="navbar-brand" to="/admin-dashboard">
        <img class="navbar-brand-full" src="/img/himart-01.png" width="89" height="25" alt="CoreUI Logo">
        <SidebarToggler class="d-md-down-none" display="lg" :defaultOpen=true />
      </b-link>
      <b-button @click="logout" variant="danger" class="mr-3">
        <i class="fa fa-lock fa-lg"></i>&nbsp;خروج
      </b-button>
    </AppHeader>
    <div class="app-body">
      <AppSidebar fixed>
        <SidebarHeader/>
        <SidebarForm/>
        <SidebarNav :navItems="nav"></SidebarNav>
        <SidebarFooter/>
        <SidebarMinimizer/>
      </AppSidebar>
      <main class="main">
        <Breadcrumb :list="list"/>
        <div class="container-fluid">
          <router-view></router-view>
        </div>
      </main>
    </div>
    <TheFooter>
      <div class="ml-auto">
        <p class="text-dark mt-2">طراحی و توسعه توسط تیم برنامه نویسی بولک و لولک</p>
      </div>
    </TheFooter>
  </div>
</template>

<script>
    import nav from '@/_nav_admin_dashboard'
    import {
        Header as AppHeader,
        SidebarToggler,
        Sidebar as AppSidebar,
        SidebarFooter,
        SidebarForm,
        SidebarHeader,
        SidebarMinimizer,
        SidebarNav,
        Footer as TheFooter,
        Breadcrumb
    } from '@coreui/vue'
    import DefaultHeaderDropdownAccnt from './DefaultHeaderDropdownAccnt'

    export default {
        name: 'DefaultContainer',
        components: {
            AppHeader,
            AppSidebar,
            TheFooter,
            Breadcrumb,
            DefaultHeaderDropdownAccnt,
            SidebarForm,
            SidebarFooter,
            SidebarToggler,
            SidebarHeader,
            SidebarNav,
            SidebarMinimizer
        },
        data() {
            return {
                nav: nav.items
            }
        },
        computed: {
            name() {
                return this.$route.name
            },
            list() {
                return this.$route.matched.filter((route) => route.name || route.meta.label)
            }
        },
        methods: {
            logout: function () {
                localStorage.removeItem('token');
                localStorage.removeItem('refreshToken');
                this.$router.push({name: 'Login'})
            }
        }
    }
</script>

<style>
  *[dir="rtl"] .sidebar .nav-link .nav-icon {
    vertical-align: middle;
  }
</style>
