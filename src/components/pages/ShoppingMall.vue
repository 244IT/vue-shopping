<template>
  <div>
      <!-- search content -->
     <div class="search-content">
       <van-row>
        <van-col span="3">
          <img src="../../assets/images/location.png" class="icon-img">
        </van-col>
        <van-col span="16">
          <input type="text" class="search-input" />
        </van-col>
        <van-col span="5">
          <van-button  size="mini" class="search-btn">查找</van-button>
        </van-col>
      </van-row>
     </div>
     <!-- swiper content -->
     <div class="swiper-content">
       <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
        <van-swipe-item v-for="(item, index) in bannerPicArray" :key="index">
          <img v-lazy="item.imageUrl" class="swiper-img">  
        </van-swipe-item>
      </van-swipe>
     </div>
     <!-- category content -->
     <div class="category-content">
       <div class="category-item" v-for="(item, index) in this.category"  :key="index">
         <img v-lazy="item.image">
         <span>{{item.mallCategoryName}}</span>
       </div>
     </div>
  </div>
</template>

<script>
  import axios from "axios"
  export default {
    data() {
      return {
        bannerPicArray:[
            {imageUrl:'http://admin.chenhaohui.cn/img/haizei01.jpg'},
            {imageUrl:'http://admin.chenhaohui.cn/img/haizei01.jpg'},
            {imageUrl:'http://admin.chenhaohui.cn/img/haizei03.jpg'},
        ],
        category: []
      }
    },
    created() {
      axios({
        url: "https://www.easy-mock.com/mock/5ec52746e0e3c81a0943e149/smileVue/index",
        method: "get"
      })
      .then(res => {
        console.log(res);
        this.category = res.data.data.category;
        console.log(this.category);
      })
    },
  }
</script>

<style  scoped>
  .search-content{
    height: 2.2rem;
    line-height: 2.2rem;
    background-color: #e5017d;
    overflow: hidden;
  }
  /* 搜索框样式 */
  .search-input{
    width: 100%;
    height: 1.4rem;
    border: 0px solid #FFF;
    border-bottom: 1px solid #FFF;
    background-color: #e5017d;
    color: #fff;
  }
  .icon-img{
    width: 60%;
    padding: .3rem;
  }
  .search-btn{
    margin-left: .3rem;
    height: 1.4rem!important;
    font-size: 0.8rem!important;
  }
  /* 轮播样式 */
  .swiper-content{
    overflow: hidden;
    clear: both;
  }
  .swiper-img{
    width: 100%;
    height: 10rem;
  }

  /* 商品导航 */
  .category-content{
    display: flex;
    flex-wrap: nowrap;
    background-color: #FFF;
    margin: .3rem .3rem .3rem .3rem;
    border-radius: .3rem;
      font-size:14px;
  }
  .category-item{
    padding: .3rem;
    font-size: 12px;
    text-align: center;
  }
  .category-item img{
    width: 80%;
  }
</style>