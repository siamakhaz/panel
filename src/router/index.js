import Vue from 'vue'
import Router from 'vue-router'
import auth from "../views/middleware/auth";

const Login = () => import('@/views/Login');
const notFound = () => import('@/views/Page404');
const admin_dashboard = () => import('@/views/admin/AdminDashboard');
const admin_campaign_list = () => import('@/views/admin/AdminCampaignList');
const DefaultContainer = () => import('@/containers/DefaultContainer');
const campaign_add = () => import('@/views/admin/CampaignAdd');
const users_list = () => import('@/views/admin/UsersList');
const users_add = () => import('@/views/admin/UsersAdd');
const users_rem = () => import('@/views/admin/UsersRem');

Vue.use(Router);

const router = new Router({
  mode: 'history',
  linkActiveClass: 'open active',
  scrollBehavior: () => ({y: 0}),
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login,
      meta: {
        title: 'پنل های‌مارت'
      }
    },
    {
      path: '/admin-dashboard',
      name: 'پنل مدیریت',
      redirect: '/admin-dashboard/home',
      component: DefaultContainer,
      children: [
        {
          path: 'home',
          name: 'پیشخوان',
          component: admin_dashboard,
          meta: {
            middleware: [auth],
            title: 'پیشخوان'
          },
        },
      ]
    },
    {
      path: '/admin-dashboard/campaign',
      name: 'کمپین ها',
      redirect: '/admin-dashboard/campaign/list',
      component: DefaultContainer,
      children: [
        {
          path: 'add',
          name: 'تعریف کمپین جدید',
          component: campaign_add,
          meta: {
            middleware: [auth],
            title: 'تعریف کمپین جدید'
          },
        },
        {
          path: 'list',
          name: 'لیست کمپین ها',
          component: admin_campaign_list,
          meta: {
            middleware: [auth],
            title: 'لیست کمپین ها'
          },
        },
      ]
    },
    {
      path: '/admin-dashboard/users',
      name: 'مدیریت کاربران',
      redirect: '/admin-dashboard/users/list',
      component: DefaultContainer,
      children: [
        {
          path: 'add',
          name: 'اضافه کردن کاربر جدید',
          component: users_add,
          meta: {
            middleware: [auth],
            title: 'اضافه کردن کاربر جدید'
          },
        },
        {
          path: 'rem',
          name: 'حذف و تالیق کاربر',
          component: users_rem,
          meta: {
            middleware: [auth],
            title: 'حذف و تالیق کاربر'
          },
        },
        {
          path: 'list',
          name: 'لیست کاربران',
          component: users_list,
          meta: {
            middleware: [auth],
            title: 'لیست کاربران'
          },
        },
      ]
    },
    {path: '*', component: notFound}
  ],
});

function nextFactory(context, middleware, index) {
  const subsequentMiddleware = middleware[index];
  if (!subsequentMiddleware) return context.next;

  return (...parameters) => {
    context.next(...parameters);
    const nextMiddleware = nextFactory(context, middleware, index + 1);
    subsequentMiddleware({...context, next: nextMiddleware});
  };
}

router.beforeEach((to, from, next) => {
  if (to.meta.middleware) {
    const middleware = Array.isArray(to.meta.middleware)
      ? to.meta.middleware
      : [to.meta.middleware];

    const context = {
      from,
      next,
      router,
      to,
    };
    const nextMiddleware = nextFactory(context, middleware, 1);

    return middleware[0]({...context, next: nextMiddleware});
  }

  return next();
});

router.beforeEach((to, from, next) => {
  document.title = to.meta.title;
  next()
});

export default router;

