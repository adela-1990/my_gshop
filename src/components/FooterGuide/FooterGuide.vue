<!--  -->
<template>
  <div class="footer_guide">
    <a href="javascript:;" class="guide_item" :class="{on:'/msite'===$router.path}" @click="goTo('/msite')">
      <span class="item_icon">
        <i class="iconfont icon-U"></i>
      </span>
      <span>外卖</span>
    </a>
    <a href="javascript:;" class="guide_item" :class="{on:'/search'===$router.path}" @click="goTo('/search')" >
      <span class="item_icon">
        <i class="iconfont icon-sousuo"></i>
      </span>
      <span>搜索</span>
    </a>
    <a href="javascript:;" class="guide_item" :class="{on:'/order'===$router.path}" @click="goTo('/order')" >
      <span class="item_icon">
        <i class="iconfont icon-dingdan"></i>
      </span>
      <span>订单</span>
    </a>
    <a href="javascript:;" class="guide_item" :class="{on:'/profile'===$router.path}" @click="goTo('/profile')">
      <span class="item_icon">
        <i class="iconfont icon-touxiang"></i>
      </span>
      <span>我的</span>
    </a>
  </div>
</template>

<script>
export default {
  data () {
    return {
    };
  },
  methods:{
      goTo(path){
          this.$router.replace(path)
      }
  }
}

</script>
<style lang='stylus'  rel='stylesheet/stylus' >
@import "../../common/stylus/mixins.styl"
.footer_guide  //footer
    top-border-1px(#e4e4e4)
    position fixed
    z-index 100
    left 0
    right 0
    bottom 0
    background-color #fff
    width 100%
    height 50px
    display flex
    .guide_item
      display flex
      flex 1
      text-align center
      flex-direction column
      align-items center
      margin 5px
      color #999999
      &.on
        color green
      span
        font-size 12px
        margin-top 2px
        margin-bottom 2px
        .iconfont
          font-size 22px
</style>