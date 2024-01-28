<template>
  <div class="home">
    <div class="content">
      <div class="header">
        <div class="text">外卖</div>
        <div class="location">
          <van-icon name="location" />
          <span>罗德岛</span>
          <van-icon name="arrow" />
        </div>
      </div>
      <div class="main">
        <div class="main-bg">
          <div class="search">
            <input type="text" />
            <div class="search-text">搜索</div>
          </div>

          <div class="sort">
            <div class="big-sort">
              <div v-for="(item, index) in big_sort" :key="index">
                <svg class="icon" aria-hidden="true">
                  <use :xlink:href="`#${item.icon}`"></use>
                </svg>
                {{ item.name }}
              </div>
            </div>

            <div class="small-sort">
              <div v-for="(item, index) in small_sort" :key="index">
                <svg class="icon" aria-hidden="true">
                  <use :xlink:href="`#${item.icon}`"></use>
                </svg>
                {{ item.name }}
              </div>
            </div>
          </div>
          <van-tabs v-model:active="active" class="van-tabs">
            <van-tab
              v-for="(item, index) in centent_nav_list"
              :key="index"
              :title="item.tab"
            >
              <nav-list :navList="item.data" />
            </van-tab>
          </van-tabs>
        </div>
      </div>
    </div>
    <shoppingFooter></shoppingFooter>
  </div>
</template>

<style lang="less" scoped>
.home {
  height: 100%;
  display: flex;
  flex-flow: column;
  .content {
    flex: 1;
    overflow: auto;
    .header {
      background-image: linear-gradient(#ffc400, #fff);
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 20px 20px 40px 20px;
      .text {
        font-size: 20px;
        font-weight: 600;
      }
      .location {
        span {
          margin: 0 5px;
        }
      }
    }
    .main {
      margin-top: -30px;
      .main-bg {
        background-image: linear-gradient(#fff, #f5f5f5);
        padding: 10px 20px 0px 20px;
        border-radius: 30px 30px 0 0;

        .search {
          position: relative;
          display: flex;
          flex-wrap: nowrap;
          input {
            width: 100%;
            border: 1px solid #ffc400;
            border-radius: 20px;
            height: 30px;
          }
          .search-text {
            position: absolute;
            background-color: #ffc400;
            width: 50px;
            border-radius: 16px;
            line-height: 32px;
            text-align: center;
            right: -6px;
            font-size: 14px;
            top: 1px;
          }
        }
        .sort {
          padding: 20px 0;
          .big-sort {
            border: solid black;
            border-radius: 20px;
            display: flex;
            div {
              flex: 1;
              display: flex;
              justify-content: center;
              flex-flow: column;
              align-items: center;
              .icon {
                width: 50px;
                height: 50px;
                margin-bottom: 5px;
              }
            }
          }
          .small-sort {
            border: solid black;
            border-radius: 20px;
            display: flex;
            flex-wrap: wrap;
            margin-top: 20px;
            div {
              display: flex;
              justify-content: center;
              flex-flow: column;
              align-items: center;
              width: 20%;
              .icon {
                width: 30px;
                height: 30px;
                margin: 10px;
              }
            }
          }
        }
        .van-tabs {
          padding: 0 20px 10px;
          border-radius: 10px;
        }
      }
    }
  }
}
/deep/ .van-tabs__wrap {
  border-radius: 10px;
}
</style>

<script setup>
import shoppingFooter from "../../components/shoppingFooter";
import NavList from "./components/NavList";
import { ref } from "vue";
const active = ref(0);
const big_sort = [
  {
    name: "美食",
    icon: "icon-meishi",
  },
  {
    name: "甜点饮品",
    icon: "icon-tianpinyinpin-03",
  },
  {
    name: "超市便利",
    icon: "icon-ziyuan",
  },
  {
    name: "生鲜果蔬",
    icon: "icon-chengzi",
  },
  {
    name: "买药",
    icon: "icon-maiyao",
  },
];

const small_sort = [
  {
    name: "午餐",
    icon: "icon-wucan",
  },
  {
    name: "买酒",
    icon: "icon-jiu",
  },
  {
    name: "新鲜水果",
    icon: "icon-xinxianguoshu_xinxianshuiguomangguo",
  },
  {
    name: "汉堡披萨",
    icon: "icon-hanbaopisa",
  },
  {
    name: "休闲饮品",
    icon: "icon-xiuxianyinpin",
  },
  {
    name: "夜宵",
    icon: "icon-yexiao",
  },
  {
    name: "吐司",
    icon: "icon-tusi",
  },
  {
    name: "跑腿",
    icon: "icon-paotuiAPP",
  },
  {
    name: "美人佳丽",
    icon: "icon-all-skin-types",
  },
  {
    name: "全部分类",
    icon: "icon-classquanbufenlei",
  },
];

const centent_nav_list = [
  {
    tab: "天天神券",
    data: [
      {
        pic: "https://img1.baidu.com/it/u=1599947592,1695977044&fm=253&fmt=auto&app=138&f=JPEG?w=640&h=440",
        title: "酸菜鱼",
        sales: "2888",
        price: "20",
        label: ["门店上新", "很下饭"],
      },
      {
        pic: "/Pork knuckle rice.png",
        title: "隆江猪脚饭",
        sales: "2888",
        price: "20",
        label: ["门店上新", "很下饭"],
      },
      {
        pic: "https://img1.baidu.com/it/u=1599947592,1695977044&fm=253&fmt=auto&app=138&f=JPEG?w=640&h=440",
        title: "酸菜鱼",
        sales: "2888",
        price: "20",
        label: ["门店上新", "很下饭"],
      },
      {
        pic: "https://img1.baidu.com/it/u=1599947592,1695977044&fm=253&fmt=auto&app=138&f=JPEG?w=640&h=440",
        title: "酸菜鱼",
        sales: "2888",
        price: "20",
        label: ["门店上新", "很下饭"],
      },
    ],
  },
  {
    tab: "减配送费",
    data: [
      {
        pic: "https://img1.baidu.com/it/u=1599947592,1695977044&fm=253&fmt=auto&app=138&f=JPEG?w=640&h=440",
        title: "酸菜鱼",
        sales: "2888",
        price: "20",
        label: ["门店上新", "很下饭"],
      },
    ],
  },
  {
    tab: "点评高分",
    data: [
      {
        pic: "https://img1.baidu.com/it/u=1599947592,1695977044&fm=253&fmt=auto&app=138&f=JPEG?w=640&h=440",
        title: "酸菜鱼",
        sales: "2888",
        price: "20",
        label: ["门店上新", "很下饭"],
      },
      {
        pic: "https://img1.baidu.com/it/u=1599947592,1695977044&fm=253&fmt=auto&app=138&f=JPEG?w=640&h=440",
        title: "酸菜鱼",
        sales: "2888",
        price: "20",
        label: ["门店上新", "很下饭"],
      },
    ],
  },
  {
    tab: "会员满减",
    data: [
      {
        pic: "https://img1.baidu.com/it/u=1599947592,1695977044&fm=253&fmt=auto&app=138&f=JPEG?w=640&h=440",
        title: "酸菜鱼",
        sales: "2888",
        price: "20",
        label: ["门店上新", "很下饭"],
      },
      {
        pic: "https://img1.baidu.com/it/u=1599947592,1695977044&fm=253&fmt=auto&app=138&f=JPEG?w=640&h=440",
        title: "酸菜鱼",
        sales: "2888",
        price: "20",
        label: ["门店上新", "很下饭"],
      },
    ],
  },
];
</script>
