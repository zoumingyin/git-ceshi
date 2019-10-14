<template>
    <div>
        <home-header></home-header>
        <home-swiper></home-swiper>
        <home-icon></home-icon>
    </div>
</template>

<script>
  import HomeSwiper from './Swiper' 
  import HomeHeader from './Header'
  import HomeIcon from './icon'
  export default {
    name: 'Home',
    components: {
        HomeSwiper,
        HomeHeader,
        HomeIcon
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
