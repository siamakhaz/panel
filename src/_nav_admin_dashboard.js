export default {
  items: [
    {
      name: 'پیشخوان',
      url: '/admin-dashboard',
      icon: 'icon-speedometer',
    },
    // {
    //   name: 'کمپین ها',
    //   url: '#',
    //   icon: 'fa fa-bar-chart',
    //   children: [
    //     {
    //       name: 'کمپین جدید',
    //       url: '/admin-dashboard/campaign/add',
    //       icon: 'fa fa-plus',
    //     },
    //     {
    //       name: 'لیست کمپین ها',
    //       url: '/admin-dashboard/campaign/list',
    //       icon: 'fa fa-list-ul'
    //     },
    //   ]
    // },
    {
      name: 'کاربران',
      url: '#',
      icon: 'fa fa-users',
      children: [
        {
          name: 'کاربر جدید',
          url: '/admin-dashboard/users/add',
          icon: 'fa fa-user-plus',
        },
        {
          name: 'حذف و تعلیق',
          url: '/admin-dashboard/users/rem',
          icon: 'fa fa-user-times',
        },
        {
          name: 'لیست کاربران',
          url: '/admin-dashboard/users/list',
          icon: 'fa fa-users'
        },
      ]
    },
    {
      name: 'گزارشات',
      url: '#',
      icon: 'fa fa-user-secret',
      children: [
        {
          name: 'نمودار ها',
          url: '/admin-dashboard/users/add',
          icon: 'fa fa-line-chart',
        },
        {
          name: 'جداول',
          url: '/admin-dashboard/users/rem',
          icon: 'fa fa-table',
        },       
      ]
    },
    {
      name: 'حساب کاربری',
      url: '#',
      icon: 'fa fa-shopping-bag',
      children: [
        {
          name: 'گزارش های مالی',
          url: '/admin-dashboard/users/add',
          icon: 'fa fa-print',
        },
        {
          name: 'پرداخت ها',
          url: '/admin-dashboard/users/rem',
          icon: 'fa fa-shopping-cart',
        },
      ]
    },
  ]
}
