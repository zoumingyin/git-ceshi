<template>
  <div class="list">
    <div>
      <div class="header a">
        <div class="headCity">城市选择</div>
        <input type="text" placeholder="请输入城市名称" />
      </div>
      <list 
        :cityList= "cityList"
        :letter = "letter"
      ></list>
      <head-alp 
        :alpList = "alpList"
        @change="handChange"
      ></head-alp>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
import List from './list'
import HeadAlp from './Alp'
export default {
  name: 'city',
  components: {
    List,
    HeadAlp
  },
  data () {
    return {
      cityList: {}, 
       alpList: [],
       letter: ''
    }
  },
  methods: {
    show () {
         axios.get('/api/city.json')
         .then(this.succ)
    },
    succ (res) { 
      const result = res.data
      if (result.ret && result.data) {
        const data = result.data 
        this.cityList = data.cityList
        this.alpList = data.alp
        console.log(data.alp)
      } 
    },
    handChange (letter) {
      this.letter = letter
    }
  },
  mounted () {
    this.show()
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

</style>
