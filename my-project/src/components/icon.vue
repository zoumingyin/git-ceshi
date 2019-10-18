<template>
  <div class='icons'>
    <swiper>
      <!-- slides -->
      <swiper-slide class='swiper-img' v-for='(list,index) of dataList' :key='index'>
        <div class='icon' v-for='item of list' :key='item.id' id='item.id'>
          <img :src='item.src' alt />
          <p>{{item.text}}</p>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>
<script>
export default {
  name: 'headIcon',
  data() {
    return {
      imgList: [
        {
          id: '002',
          src:
            'https://img1.qunarzz.com/piao/fusion/1810/50/26ffa31b56646402.png',
          text: '成都海昌'
        },
        {
          id: '003',
          src:
            'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
          text: '景点门票'
        },
        {
          id: '004',
          src:
            'https://img1.qunarzz.com/piao/fusion/1810/50/26ffa31b56646402.png',
          text: '成都海昌'
        },
        {
          id: '005',
          src:
            'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
          text: '景点门票'
        },
        {
          id: '006',
          src:
            'https://img1.qunarzz.com/piao/fusion/1810/50/26ffa31b56646402.png',
          text: '成都海昌'
        },
        {
          id: '007',
          src:
            'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
          text: '景点门票'
        },
        {
          id: '008',
          src:
            'https://img1.qunarzz.com/piao/fusion/1810/50/26ffa31b56646402.png',
          text: '成都海昌'
        },
        {
          id: '009',
          src:
            'https://img1.qunarzz.com/piao/fusion/1810/50/26ffa31b56646402.png',
          text: '成都海昌'
        }
      ]
    }
  },
  computed: {
    dataList() {
      var pages = []
      //    const abc = this.imgList
      this.imgList.forEach((item, index) => { 
        const page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      }) 
      return pages
    }
  }
}
</script>

<style lang='stylus' scoped>
.icons {
  overflow: hidden;
  width: 100%;
}

.icon {
  width: 25%;
  float: left;
  text-align: center;
  box-sizing: border-box;
  padding: 5px 0;

  img {
    max-width: 55px;
  }
}
</style>
