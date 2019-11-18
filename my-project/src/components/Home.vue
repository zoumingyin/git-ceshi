<template>
    <div>
        <home-header  ></home-header>
        <home-swiper :swiper="swiper"></home-swiper>
        <home-icon :imgList="imgList"></home-icon>
        <home-remmend></home-remmend>
        {{this.city}}
    </div>
</template>

<script>
  import HomeSwiper from './Swiper' 
  import HomeHeader from './Header'
  import HomeIcon from './icon'
  import HomeRemmend from './Recommend'
  import axios from 'axios'
  import { mapState } from 'vuex'
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
        imgList: [],
        swiper: [],
        lastCity: ''
      }
    },
    computed: {
      ...mapState(['city'])
    },
    methods: {
      getHomeInfo () {
        axios.get('/api/index.json?city=' + this.city)
        .then(this.getHomeInfoSucc)
      },
      getHomeInfoSucc (res) { 
        res = res.data
         if (res.ret && res.data) {
           const data = res.data 
           this.imgList = data.imgList
           this.swiper = data.swiper
         }
        }
    },
    mounted () {
      this.lastCity = this.city
       this.getHomeInfo()
    },
    activated () {
      if (this.lastCity !== this.city) {
        this.lastCity = this.city
        this.getHomeInfo()
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
