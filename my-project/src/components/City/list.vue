<template>
  <div class="contents" ref="wrapper">
    <div class="content">
      <div class="mid">
        <div class="title">
          <div>当前城市：</div>
          <div class="title cityItem" @click="handClick(this.$store.state.city)">{{this.city}}</div>
          </div>
           <div>
        热门城市：
      </div>
        <div class="cityBox" >
          <div 
          class="cityItem" v-for="(item,index) of curr" 
          :key="index" @click="handClick(item)"
          >{{item}}
          </div> 
        </div>
      </div>
     
      <div class="bottom" 
        v-for="(item,index) of cityList" 
        :key="index"
        :ref="item.initial"
      >
        <div class="title">{{item.initial}}</div>
        <div class="bottom-box">
          <div class="bottom-item" v-for="(item,index) of item.list" :key="index" @click="handClick(item.name
          )">{{item.name}}</div> 
        </div>
         
      </div>
    </div>
  </div>
</template>
<script>
import Bscroll from 'better-scroll'
import { mapState, mapMutations } from 'vuex'
export default {
  name: 'list',
  props: {
    cityList: Array,
    curr: Array,
    letter: String,
    currCity: String
  },
  watch: {
    letter () {
      if (this.letter) {
        const el = this.$refs[this.letter][0] 
        this.scroll.scrollToElement(el) 
      } 
    }
  },
  methods: {
    handClick (city) {  
     this.changeCity(city)
     this.$router.push('/')
    },
    ...mapMutations(['changeCity'])
  },
   mounted() { 
    this.scroll = new Bscroll(this.$refs.wrapper)
  },
  computed: {
    ...mapState(['city'])
  }
}
</script>
<style lang='stylus' scoped>
.contents {
  position: absolute;
  top: 75px;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
}

.cityBox {
  overflow: hidden;
}

.cityItem {
  width: 30%;
  float: left;
  background: #fff;
  height: 25px;
  line-height: 25px;
  text-align: center;
  border-radius: 5px;
  margin: 1% 1%;
  font-size: 14px;
}

.bottom-box {
  background: #fff;

  .bottom-item {
    height: 25px;
    line-height: 25px;
    font-size: 14px;
    padding: 2px 10px;
    border-bottom: 1px solid #eee;
    border-top: 1px solid #eee;
  }
}
.title{
  overflow hidden
}
</style>
