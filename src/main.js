import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import {Icon} from 'vant'
import { Button } from 'vant'
import{Tab,Tabs} from 'vant'
import{TreeSelect} from 'vant'
import { Sidebar, SidebarItem } from 'vant';
import { Checkbox, CheckboxGroup } from 'vant';
import { Stepper } from 'vant';
import { ActionBar, ActionBarIcon, ActionBarButton } from 'vant';
import { Toast } from 'vant';
import { SubmitBar } from 'vant';
import { ContactCard } from 'vant';
import {Card} from 'vant'
import { Dialog } from 'vant';
import { AddressList } from 'vant';
import { AddressEdit } from 'vant';
import { Form, Field, CellGroup } from 'vant'
import store from './store/index'
import 'vant/lib/index.css'
import  './assets/common.less'

createApp(App)
.use(router)
.use(store)
.use(Toast)
.use(Button)
.use(Icon)
.use(Tab)
.use(Tabs)
.use(TreeSelect)
.use(Sidebar)
.use(SidebarItem)
.use(Checkbox)
.use(CheckboxGroup)
.use(Stepper)
.use(ActionBar)
.use(ActionBarIcon)
.use(ActionBarButton)
.use(SubmitBar)
.use(ContactCard)
.use(AddressList)
.use(Card)
.use(Dialog)
.use(AddressEdit)
.use(Field)
.use(CellGroup)
.use(Form)
.mount('#app')

