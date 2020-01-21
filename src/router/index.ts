export interface RouterType {
  path: string;
  name: string;
  meta: {
    hidden: boolean;
    title: string;
    icon: string;
  };
  component: Function;
}

export const constantRoutes:RouterType[] = [
  {
    path: '/',
    name: 'index',
    meta: {
      hidden: false,
      title: '筛查活动',
      icon: 'actives',
    },
    component: () => import('@/pages').then(module => module),
  },
  {
    path: '/login',
    name: 'login',
    meta: {
      hidden: false,
      title: '筛查活动',
      icon: 'actives',
    },
    component: () => import('@/pages/login').then(module => module),
  },
];
