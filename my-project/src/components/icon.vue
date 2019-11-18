<template>
  <div class='icons'>
    <swiper>
      <!-- slides -->
      <swiper-slide class='swiper-img' v-for='(list,index) of dataList' :key='index'>
        <router-link 
           :to="'/Detail/'+item.id" 
           class='icon' 
           v-for='item of list' 
           :key='item.id' 
           id='item.id'
           tag="div"
        >
          <img :src='item.src' alt />
          <p>{{item.text}}</p>
        </router-link>
      </swiper-slide>
    </swiper>
  </div>
</template>
<script>
export default {
  name: 'headIcon',
  props: {
    imgList: Array
  },
  data() {
    return { 
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
