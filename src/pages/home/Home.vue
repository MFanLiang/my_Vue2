<template>
  <div>
    <!-- <h1>Home页面</h1> -->
    <HomeHeader />
    <HomeSwiper />
    <HomeIcons />
  </div>
</template>

<script>
import HomeHeader from './components/Header.vue'
import HomeSwiper from './components/Swiper.vue'
import HomeIcons from './components/Icons.vue'

export default {
  name: 'Home',

  // 注册子组件
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons
  }
}
</script>

<style scoped>

</style>
