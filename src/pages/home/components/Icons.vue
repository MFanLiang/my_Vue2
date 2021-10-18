<template>
<div class="icons">
  <div class="icon">
    <div class="icon-img">
      <img class="icon-img-content" src="https://s.qunarzz.com/homenode/images/touchheader/hotel.png" alt="">
    </div>
    <p class="icon-desc">酒店</p>
  </div>
  <div class="icon">
    <div class="icon-img">
      <img class="icon-img-content" src="https://s.qunarzz.com/homenode/images/touchheader/flight.png" alt="">
    </div>
    <p class="icon-desc">机票</p>
  </div>
  <div class="icon">
    <div class="icon-img">
      <img class="icon-img-content" src="https://s.qunarzz.com/homenode/images/touchheader/train.png" alt="">
    </div>
    <p class="icon-desc">火车票</p>
  </div>
  <div class="icon">
    <div class="icon-img">
      <img class="icon-img-content" src="https://s.qunarzz.com/homenode/images/touchheader/package.png" alt="">
    </div>
    <p class="icon-desc">度假</p>
  </div>
  <div class="icon">
    <div class="icon-img">
      <img class="icon-img-content" src="https://s.qunarzz.com/homenode/images/touchheader/piao.png" alt="">
    </div>
    <p class="icon-desc">景点门票</p>
  </div>
  <div class="icon">
    <div class="icon-img">
      <img class="icon-img-content" src="https://picbed.qunarzz.com/f5e5770393d759578962e53ee67798c8.png" alt="">
    </div>
    <p class="icon-desc">海外酒店</p>
  </div>
  <div class="icon">
    <div class="icon-img">
      <img class="icon-img-content" src="https://picbed.qunarzz.com/a36d2288f19e54562338f4d8ef986288.png" alt="">
    </div>
    <p class="icon-desc">低价机票</p>
  </div>
  <div class="icon">
    <div class="icon-img">
      <img class="icon-img-content" src="https://picbed.qunarzz.com/ae617a31e0bd5803d76918b817f6d942.png" alt="">
    </div>
    <p class="icon-desc">自由行</p>
  </div>
</div>
</template>

<script>
export default {
  name: 'HomeIcons'
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
  .icons
    margin-top: .1rem
    .icon
      position: relative
      overflow: hidden
      float: left
      width: 25%
      height: 0
      padding-bottom: 25%
      .icon-img
        position: absolute
        top: 0
        left: 0
        right: 0
        bottom: .44rem
        box-sizing: border-box
        padding: .1rem
        .icon-img-content
          display: block
          margin: 0 auto
          height: 100%
      .icon-desc
        position: absolute
        left: 0
        right: 0
        bottom: 0
        height: .44rem
        line-height: .44rem
        text-align: center
        color: $darkTextColor
        ellipsis()
</style>
