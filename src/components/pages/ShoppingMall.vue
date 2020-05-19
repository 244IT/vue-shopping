<template>
  <div>
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
     <div class="swiper-content">
       <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
        <van-swipe-item v-for="(item, index) in imgUrl" :key="index">
          <img :src="item" class="swiper-img">  
        </van-swipe-item>
      </van-swipe>
     </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        imgUrl: [
          "http://admin.chenhaohui.cn/img/haizei01.jpg",
          "http://admin.chenhaohui.cn/img/haizei02.jpg",
          "http://admin.chenhaohui.cn/img/haizei03.jpg"
        ]
      }
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
    height: 12rem;
  }
</style>