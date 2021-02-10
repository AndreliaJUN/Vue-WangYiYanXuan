import './assets/reset.css'
import './assets/rem'

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import {
	Icon, Col, Row, Button, Field, Search, Tab,
	Tabs, Swipe, SwipeItem, Grid,
	GridItem, CountDown, Tabbar, TabbarItem, Sidebar,
	 SidebarItem,GoodsAction, GoodsActionIcon, GoodsActionButton,Sku, NavBar 
} from 'vant';

Vue.use( Button ).use( Col ).use( Row ).use( Icon ).
	use( Field ).use( Search ).use( Tab ).use( Tabs ).
	use( Swipe ).use( SwipeItem ).use( Grid ).use( GridItem ).use( CountDown ).use( Tabbar )
	.use( TabbarItem ).use( Sidebar ).use( SidebarItem ).use(GoodsAction).use(GoodsActionButton)
	.use(GoodsActionIcon).use(Sku).use(NavBar);

Vue.config.productionTip = false

new Vue( {
	router,
	render: h => h( App ),
} ).$mount( '#app' )
