<template>
    <div>
        <home-header :city="city"></home-header>
        <home-swiper :swiper="swiper"></home-swiper>
        <home-icon :imgList="imgList"></home-icon>
        <home-remmend></home-remmend>
    </div>
</template>

<script>
  import HomeSwiper from './Swiper' 
  import HomeHeader from './Header'
  import HomeIcon from './icon'
  import HomeRemmend from './Recommend'
  import axios from 'axios'
  export default {
    name: 'Home',
    components: {
        HomeSwiper,
        HomeHeader,
        HomeIcon,
        HomeRemmend
    },
    data () {
      return {
        city: '',
        imgList: [],
        swiper: []
      }
    },
    methods: {
      getHomeInfo () {
        axios.get('/api/index.json')
        .then(this.getHomeInfoSucc)
      },
      getHomeInfoSucc (res) {
        debugger
        res = res.data
         if (res.ret && res.data) {
           const data = res.data
           console.log(data)
           this.city = data.city 
           this.imgList = data.imgList
           this.swiper = data.swiper
         }
        }
    },
    mounted () {
       this.getHomeInfo()
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
