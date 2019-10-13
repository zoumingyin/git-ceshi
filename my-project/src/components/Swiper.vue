<template>
  <div>
    <swiper :options="swiperOption">
      <!-- slides -->
      <swiper-slide class="swiper-img">
        <img src="http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/201910/78b240572657a6da67e662540c846dd6.jpg_750x200_b75c8be9.jpg" alt="" srcset="">
      </swiper-slide>
      <swiper-slide class="swiper-img">
        <img src="http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/201910/f88b0d89d32acd8cfffa8b05e4eb3875.jpg_750x200_a404dd7b.jpg" alt="">
      </swiper-slide> 
      <!-- Optional controls -->
      <div class="swiper-pagination"  slot="pagination"></div>
    <div class="swiper-button-prev" slot="button-prev"></div>
    <div class="swiper-button-next" slot="button-next"></div>
    <div class="swiper-scrollbar"   slot="scrollbar"></div> 
    </swiper>
  </div>
</template>
<script>
export default {
  name: 'HomeSwiper',
  data() {
    return {
      swiperOption: { 
        pagination: '.swiper-pagination',
        paginationClickable: true,
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        loop: true,
        autoplay: 3000
      }
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.swiper-img{
  width: 100%; 
}
.swiper-img img{
  width: 100%
}
</style>
