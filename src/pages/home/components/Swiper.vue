<template>
  <div class="wrapper">
    <swiper :options="swiperOption" ref="mySwiper">
    <!-- slides -->
    <swiper-slide>
      <img class="swiper-img" src="https://i01piccdn.sogoucdn.com/f67c8ee203fe6764" alt="">
    </swiper-slide>
    <swiper-slide>
      <img class="swiper-img" src="https://i02piccdn.sogoucdn.com/dcfaf73d0e25bdaa" alt="">
    </swiper-slide>
    <swiper-slide>
      <img class="swiper-img" src="https://i03piccdn.sogoucdn.com/247e2df6dd138bf4" alt="">
    </swiper-slide>
    <swiper-slide>
      <img class="swiper-img" src="https://i01piccdn.sogoucdn.com/eb7fb8f9c7275bc0" alt="">
    </swiper-slide>
    <!-- Optinal controls -->
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  props: {
    list: Array
  },
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true// 设置轮播插件支持无限轮播
      }
    }
  },
  computed: {
    showSwiper () {
      return this.list.length
    }
  }
}
</script>

<style lang="stylus" scoped>
  .wrapper >>> .swiper-pagination-bullet-active
    background: #fff
  .wrapper
    overflow: hidden
    width: 100%
    height: 0
    padding-bottom: 62.25%
    background: #eee
    .swiper-img
      width: 100%
</style>
