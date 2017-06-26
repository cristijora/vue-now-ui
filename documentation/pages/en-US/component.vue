<style lang="scss">
  .page-component {
    padding-bottom: 95px;
    box-sizing: border-box;
    .content {
      margin-left: -1px;

      > {
        h3 {
          margin: 45px 0 15px;
        }
        table {
          border-collapse: collapse;
          width: 100%;
          background-color: #fff;
          color: #5e6d82;
          font-size: 14px;
          margin-bottom: 45px;
          line-height: 1.5em;

          strong {
            font-weight: normal;
          }
          th {
            text-align: left;
            border-top: 1px solid #eaeefb;
            color:#FFFFFF;
            background-color: #2CA8FF;
            white-space: nowrap;
          }
          td, th {
            border-bottom: 1px solid #eaeefb;
            padding: 10px;
            max-width: 250px;
          }
          th:first-child, td:first-child {
            padding-left: 10px;
          }
        }
      }
    }
    .page-component-up {
      background-color: #f96332;
      position: fixed;
      right: 100px;
      bottom: 150px;
      size: 50px;
      width: 50px;
      border-radius: 25px;
      cursor: pointer;
      opacity: 0.4;
      transition: .3s;
      i {
        color: #fff;
        display: block;
        line-height: 50px;
        text-align: center;
        font-size: 22px;
      }
      &.hover {
        opacity: 1;
      }
    }
    .back-top-fade-enter,
    .back-top-fade-leave-active {
      transform: translateY(-30px);
      opacity: 0;
    }
  }
</style>
<template>
  <div class="page-container page-component">
    <el-row>
      <el-col :xs="24" :sm="6">
        <side-nav :data="navsData[lang]" :base="`/${ lang }/component`"></side-nav>
      </el-col>
      <el-col :xs="24" :sm="18">
        <router-view class="content"></router-view>
        <!--<footer-nav></footer-nav>-->
      </el-col>
    </el-row>
    <transition name="back-top-fade">
      <div
        class="page-component-up"
        :class="{ 'hover': hover }"
        v-show="showBackToTop"
        @mouseenter="hover = true"
        @mouseleave="hover = false"
        @click="toTop">
        <i class="el-icon-caret-top"></i>
      </div>
    </transition>
  </div>
</template>
<script>
  import navsData from '../../nav.config.json'
  export default {
    data() {
      return {
        lang: this.$route.meta.lang,
        navsData,
        hover: false,
        showBackToTop: false
      }
    },
    methods: {
      toTop() {
        this.hover = false
        this.showBackToTop = false
        document.body.scrollTop = 0
        document.documentElement.scrollTop = 0
      },
      handleScroll() {
        this.showBackToTop = (document.body.scrollTop || document.documentElement.scrollTop) >= 0.5 * document.body.clientHeight
      }
    }
  }
</script>
