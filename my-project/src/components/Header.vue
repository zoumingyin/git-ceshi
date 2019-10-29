<template>
    <div class="header">
     <div class="header-left">返回</div>
     <div class="header-input">内容</div>
     <div class="header-right" >
       <router-link to='/City'>
       {{city}}
       </router-link>
     </div>
    </div>
</template>

<script>
  export default {
    name: 'Header',
    props: {
      city: String
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  lang="stylus" scoped>
 html{
     overflow-y:hidden;
     height:100%;
     font-size:50px
 }
 .header{
     height:35px;
     line-height :35px;
     background :#00bcd4;
     color  white
     display flex
 }
 .header-left{
     width:64px;
     float:left;
     text-align center
 }
 .header-input{
   flex: 1;
   background  white;
   border-radius 5px
   margin 3px 0
 }
 .header-right{
     width:80px;
     float:right;
     text-align center
 }
</style>
