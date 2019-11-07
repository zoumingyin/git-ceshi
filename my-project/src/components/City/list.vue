<template>
  <div class="contents" ref="wrapper">
    <div class="content">
      <div class="mid">
        <div class="title" :curr="cityList.city">{{cityList.city}}</div>
        <div class="cityBox" v-for="(item,index) of cityList.currCity" :key="index">
          <div class="cityItem">{{item.name}}</div> 
        </div>
      </div>
      <div class="bottom" 
        v-for="(item,index) of cityList.list" 
        :key="index"
        :ref="item.index"
      >
        <div class="title">{{item.index}}</div>
        <div class="bottom-box">
          <div class="bottom-item" v-for="(item,index) of item.list" :key="index">{{item.name}}</div> 
        </div>
         
      </div>
    </div>
  </div>
</template>
<script>
import Bscroll from 'better-scroll'
export default {
  name: 'list',
   mounted() { 
    this.scroll = new Bscroll(this.$refs.wrapper)
  },
  props: {
    cityList: Object,
    letter: String
  },
  watch: {
    letter () {
      if (this.letter) {
        const el = this.$refs[this.letter][0] 
        this.scroll.scrollToElement(el)
        console.log(el)
      } 
    }
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
</style>
