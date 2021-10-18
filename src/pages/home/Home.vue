<template>
  <div>
    <!-- <h1>Home页面</h1> -->
    <HomeHeader />
  </div>
</template>

<script>
import HomeHeader from './components/Header.vue'

export default {
  name: 'Home',

  // 注册子组件
  components: {
    HomeHeader
  }
}
</script>

<style scoped>

</style>
