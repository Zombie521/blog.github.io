<template>
  <div>
      <button v-on:click="langChange">切换中英文</button>
  </div>
</template>
<script>
export default {
  data(){
    return {
      cn : "block",
      en : "block"
    }
  },
  
  methods:{
    langChange: function () {
      if(this.cn == "block" && this.en == "block"){
        this.cn = "none"
        this.en = "block"
      }else if(this.cn == "none" && this.en == "block"){
        this.cn = "block"
        this.en = "none"
      }else{
        this.cn = "block"
        this.en = "block"
      }
      
      this.$emit('func',this.cn,this.en)
    }
  }
}
</script>