import Vue from 'vue';
import VueRouter from 'vue-router';

//导入组件
import HeroesList from '../views/heroes/List';
import EquipsList from '../views/equips/List';
import WeaponsList from '../views/weapons/List';
import HeroesAdd from '../views/heroes/Add'
import HeroesEdit from '../views/heroes/Edit'
//注册VueRouter插件 this.$router this.$route
Vue.use(VueRouter);

//创建路由对象
var router = new VueRouter({

  linkActiveClass: 'active',
  //路由规则
  routes: [
    { path: '/', redirect: '/heroes' },
    {name: 'heroes', path:'/heroes',component: HeroesList},
    {name: 'heroadd', path:'/heroes/add',component: HeroesAdd},
    {name: 'heroedit', path:'/heroes/:id',component: HeroesEdit,props: true},
    {name: 'equips', path:'/equips',component: EquipsList},
    {name: 'weapons', path:'/weapons',component: WeaponsList},
  ]
});

// 模块中导出路由对象
export default router;
