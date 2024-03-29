import { createStore } from "vuex";

export default createStore({
    state:{
        cartList:[],//购物车列表
        orderList:[],//订单列表
        orderListEnd: [],//已支付订单列表
        userAddress:[
        {
          id: 1001,
          name: '咔咔',
          tel: '15874857778',
          province: '广东省',
          city: '深圳市',
          county: '南山区',
          addressDetail: '深圳湾',
          isDefault: true,
          areaCode: '110101',
        },
        {
          id: 1002,
          name: '墨屿洺',
          tel: '15874859685',
          province: '湖北省',
          city: '武汉市',
          county: '武昌区',
          addressDetail: '黄鹤楼',
          isDefault: false,
          areaCode: '110101',
        },
    ],
    isDelete: true, // 点击编辑的时候 底部组件的展示
    edit:true // 购物车右上角默认为编辑

    },
    mutations:{
        addCart(state,value){
            state.cartList=value

        },
        changeDelete(state){
            state.isDelete=!state.isDelete
        },
        delete(state,value){
            state.cartList=value

        },
        edit(state){
            state.edit=!state.edit

        },
        pay(state,value){
            state.orderList=value
        },
        
        orderListEd(state){
            state.orderListEnd=state.orderListEnd.concat(state.orderList)
        },
        addAddress(state, value) {
            state.userAddress.map(item => {
              if (value.isDefault) {
                item.isDefault = false
              }
            })
            state.userAddress.push(value)
          },  
          editAddress(state, value) {
            state.userAddress = state.userAddress.map(item => {
              if (value.isDefault) {
                item.isDefault = false
              }
              // if (item.id === value.id) {
              //   return value
              // } else {
              //   return item
              // }
              return item.id === value.id ? value : item
            })
          },
        deleteAddress(state,value){
            state.userAddress=state.userAddress.filter(item=>{
                return !(item.id===value.id)
            })
            //如果默认地址被删除了,那么地址列表的第一个变为默认地址
            if(value.isDefault){
                state.userAddress[0].isDefault=true
            }
        }
        
    }
})