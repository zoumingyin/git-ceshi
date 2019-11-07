<template>
  <ul>
   <li v-for="(item,index) of alpList" 
      :key="index"
      @click="handClick"
      @touchstart="handStart"
      @touchmove="handMove"
      @touchend="handEnd"
      :ref="item"
    >
     {{item}}
   </li> 
  </ul>
</template>

<script>
export default {
 name: 'HeaderAlp',
 data () {
   return {
     state: false,
     startY: 0,
     timer: null
   }
 },
 updated () {
   this.startY = this.$refs['A'][0].offsetTop
 },
 props: {
   alpList: Array
 },
 methods: {
   handClick (e) {
     this.$emit('change', e.target.innerText) 
   },
   handStart () { 
     this.state = true
   },
   handMove (e) {
      if (this.state) { 
        if (this.timer) {
          clearTimeout(this.timer)
        }
        this.timer = setTimeout(() => {  
          this.start = this.startY
          const touchY = e.touches[0].clientY
          const index = Math.floor((touchY - this.start) / 20)  
          this.$emit('change', this.alpList[index - 8])
        }, 16)
      }
   },
   handEnd () {
     this.state = false
   }
 }
}
</script>

<style lang="stylus" scoped>
 ul{
   position absolute
   top 150px
   right 10px
   color #00bcd4
 }
</style> 
