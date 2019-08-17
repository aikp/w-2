<template>
  <footer class="footer_guide border-1px" v-if="$route.meta.isShow">
    <a href="javascript:;" class="guide_item" :class="{on: $route.path === '/home'}" @click="goPath('/home')">
      <span class="item_icon">
        <i class="iconfont icon-shouye-xianxing"></i>
      </span>
      <span>首页</span>
    </a>
    <a href="javascript:;" class="guide_item" :class="{on: $route.path === '/discern'}" @click="goPath('/discern')">
      <span class="item_icon">
        <i class="iconfont icon-shiwu"></i>
      </span>
      <span>识物</span>
    </a>
    <a href="javascript:;" class="guide_item" :class="{on: $route.path === '/classify'}" @click="goPath('/classify')">
      <span class="item_icon">
        <i class="iconfont icon-liebiaofenlei"></i>
      </span>
      <span>分类</span>
    </a>
    <a href="javascript:;" class="guide_item" :class="{on: $route.path === '/shopCart'}" @click="goPath('/shopCart')">
      <span class="item_icon">
        <i class="iconfont icon-caigou-xianxing"></i>
      </span>
      <span>购物车</span>
    </a>
    <a href="javascript:;" class="guide_item" :class="{on: $route.path === '/profile'}" @click="goPath('/profile')">
      <span class="item_icon">
        <i class="iconfont icon-geren"></i>
      </span>
      <span>个人</span>
    </a>
  </footer>
</template>

<script>
  export default {
    methods: {
      // 跳转路由的方法
      goPath (path) {
        this.$router.replace(path)
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"

  .footer_guide
    top-border-1px(#e4e4e4)
    position fixed
    z-index 999
    left 0
    right 0
    bottom 0
    background-color #fff
    width 100%
    height 100px
    display flex
    .guide_item
      display flex
      flex 1
      text-align center
      flex-direction column
      align-items center
      margin 10px
      color #999999
      &.on
        color #02a774
      span
        font-size 24px
        margin-top 4px
        margin-bottom 4px
        .iconfont
          font-size 44px
</style>
