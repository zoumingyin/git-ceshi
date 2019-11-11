<template>
  <div class="list">
    <div>
      <div class="header a">
        <div class="headCity">城市选择</div>
        <input type="text" v-model="keyword" placeholder="请输入城市名称" />
      </div>
      <div class="search" ref="wrapper" v-show="keyword">
        <div>
        <ul >
          <li v-for="(item,index) of abs" :key="index">
              {{item}}
          </li>
          <li v-show="abs.length<=0">未查找到相关数据！</li> 
        </ul>
        </div>
      </div>
      <list 
        :cityList= "cityList"
        :letter = "letter"
        :currCity = "currCity"
        :curr = "curr"
      ></list>
      <head-alp 
        :cityList = "cityList"
        @change="handChange"
      ></head-alp>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
import List from './list'
import HeadAlp from './Alp' 
import Bscroll from 'better-scroll'
export default {
  name: 'city',
  components: {
    List,
    HeadAlp
  },
  data () {
    return {
      cityList: [],
      curr: [],
      currCity: '',  
       letter: '',
       keyword: '',
       citys: [],
       abs: []
    }
  },
  methods: {
    show () {
         axios.get('/api/citylist.json')
         .then(this.succ)
    },
    succ (res) { 
      const result = res.data
      if (result.ret && result.city) {
        const data = result.city 
        this.cityList = data 
        this.currCity = result.currCity
        this.curr = result.curr  
        this.cityList.forEach((item, index) => { 
           this.citys = this.citys.concat(item.list)  
        })
          console.log(this.citys)
      } 
    },
    handChange (letter) {
      this.letter = letter
    }
  },
  mounted () {
    this.show()
     this.scroll = new Bscroll(this.$refs.wrapper) 
  },
  watch: {
    keyword (a) {  
      const showCity = []
       a = a.toLocaleLowerCase()
      this.citys.forEach((item) => { 
        const py = item.pinyin.toLocaleLowerCase()
         if (item.name.indexOf(a) > -1 || py.indexOf(a) > -1) {
             showCity.push(item.name) 
         } 
      })
      this.abs = showCity 
      console.log(this.abs)
    }
  }
}
</script>
<style lang="stylus" scoped>
.header {
  background: #00bcd4;
  color: white;
  text-align: center;
  padding: 0 10px 5px;

  .headCity {
    line-height: 30px;
    height: 30px;
  }

  input {
    width: 100%;
    height: 25px;
    text-align: center;
    border: none;
    border-radius: 5px;
    color: #333;

    &::-webkit-input-placeholder {
      color: #333;
    }
  }
}

.mid, .bottom {
  padding: 10px;
  overflow: hidden;
}
.search{
  position absolute
  overflow hidden
  top 60px
  left 0
  background #eeeeee
  width 100%
  height calc(100% - 60px)
  z-index 2
  ul{
    li{
       padding 5px
       border-bottom 1px solid #c1c1c1
    }
  }
}
</style>
