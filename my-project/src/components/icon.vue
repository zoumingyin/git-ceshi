<template>
    <div class="icons">
      <div class="icon" v-for="item of imgList" :key="item.id" id="item.id">
          <img :src="item.src" alt="">
          <p>{{item.text}}</p>
      </div>
    </div>
</template>
<script>
  export default {
    name: 'Header',
    data () {
        return {
            imgList: [
                {
                    id: '001',
                    src: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
                    text: '景点门票'
                },
                 {
                    id: '002',
                    src: 'https://img1.qunarzz.com/piao/fusion/1810/50/26ffa31b56646402.png',
                    text: '成都海昌'
                },
                {
                    id: '001',
                    src: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
                    text: '景点门票'
                },
                 {
                    id: '002',
                    src: 'https://img1.qunarzz.com/piao/fusion/1810/50/26ffa31b56646402.png',
                    text: '成都海昌'
                },
                {
                    id: '001',
                    src: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
                    text: '景点门票'
                },
                 {
                    id: '002',
                    src: 'https://img1.qunarzz.com/piao/fusion/1810/50/26ffa31b56646402.png',
                    text: '成都海昌'
                },
                {
                    id: '001',
                    src: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
                    text: '景点门票'
                },
                 {
                    id: '002',
                    src: 'https://img1.qunarzz.com/piao/fusion/1810/50/26ffa31b56646402.png',
                    text: '成都海昌'
                }
            ]
        }
    }
  }
</script>

<style lang="stylus" scoped>
.icons{
    overflow hidden;
    width 100%
}
.icon{
    width 25%;
    float left;
    text-align center
    box-sizing border-box
    padding 5px 0 ;
    display :flex;
    img{
        max-width 55px
    }
}
</style>
