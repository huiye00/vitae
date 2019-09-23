<template>
  <div :class="partFive " id="part-five">
    <h3 class="text-center">工作经历</h3>
    <p>
      <a href="#">苏州***商贸有限公司</a>
      <span>|&nbsp;2017-1月至2018-6月
      </span>
    </p>
    <p class="text-small">
      工作内容：
    </p>
    <p style="padding-left:2rem;">
      负责淘宝店铺的装修，主图设计，详情装修,装修店铺期间学习了简单的html和css基础
    </p>
    

  </div>
</template>

<script>

export default {
  name: "partFive",
  data(){
    return {
      partFive:'part-five',
      currentWidth:0
    }
  },
  beforeMount(){
    this.currentWidth=document.documentElement.clientWidth||document.body.clientWidth;
    if(this.currentWidth<1000){
      this.currentWidth='part-five-responsive'
    }
  }
};
</script>

<style scoped>
.part-five {
  width: 100%;
  height: 310px;
  border: 15px solid transparent;
  border-image: url("~@/./assets/img/border_image.png") 30 30 stretch;
  background: #18202d;
  line-height:30px;
}
part-five-responsive{
  width: 100%;
  border: 15px solid transparent;
  border-image: url("~@/./assets/img/border_image.png") 30 30 stretch;
  background: #18202d;
}
.part-five a{
  color:deepskyblue;
}
.part-five a:hover{
  color:rgb(118, 190, 248)
}
.text-center{
  text-align:center;
}
.text-small{
  font-size:0.9em
}
p{
  text-align: left;
}
</style>
