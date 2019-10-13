<template>
    <div>
        <home-header></home-header>
        <home-swiper></home-swiper>
    </div>
</template>

<script>
  import HomeSwiper from './Swiper' 
  import HomeHeader from './Header'
  export default {
    name: 'Home',
    components: {
        HomeSwiper,
        HomeHeader
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
