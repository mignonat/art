export default [
  {
    path: '/',
    component: () => import('layouts/default'),
    children: [{
      path: '',
      component: () => import('pages/IndexPage')
    }]
  }, {
    path: '/healer',
    component: () => import('layouts/default'),
    children: [{
      path: '',
      component: () => import('pages/HealerPage')
    }]
  }, {
    path: '/paint',
    component: () => import('layouts/default'),
    children: [{
      path: '',
      component: () => import('pages/PaintPage')
    }]
  }, {
    path: '/children',
    component: () => import('layouts/default'),
    children: [{
      path: '',
      component: () => import('pages/ChildrenPage')
    }]
  }, {
    path: '/shop',
    component: () => import('layouts/default'),
    children: [{
      path: '',
      component: () => import('pages/ShopPage')
    }]
  }, {
    path: '*',
    component: () => import('pages/Error404')
  }
]
