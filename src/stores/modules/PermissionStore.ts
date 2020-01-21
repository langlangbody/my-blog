import { observable, action, computed } from 'mobx';

import { constantRoutes, RouterType } from '@/router';

// const asyncrouter = [
//   {
//     path: '/about',
//     name: 'about',
//     meta: {
//       hidden: false,
//       title: 'about',
//       icon: 'actives',
//     },
//     component: () => import('@/components/About').then(module => module),
//   },
// ];

class Permission {
  
  @observable routesArr: RouterType[]|any = [];  // 远视静态路由
  
  @computed routesAll() {
    return this.routesArr
  }

  // 异步加载侧边栏 可配置权限控制
  @action.bound
  AddAsyncRoutes():void {
    console.log('routesArr',this.routesArr);
    this.routesArr = [...constantRoutes];   // , ...asyncrouter
  }
}

export const PermissionStore: any = new Permission();
