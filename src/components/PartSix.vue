<template>
  <div :class="partSix" id="part-six">
    <h3 class="text-center">编程技能</h3>
    <p class="font-small"><span class="font-bold">前端：</span></p>
    <span>HTML/HTML5、CSS/CSS3、JS/ES6、jQuery、Vue...</span>
    <p class="font-small"><span class="font-bold">后端：</span></p>
    <span>JAVA</span>
    <p class="font-small"><span class="font-bold">其他：</span></p>
    <span>PS、AI</span>
  </div>
</template>

<script>
export default {
  name: "partSix",
  data(){
    return{
      partSix:'part-six',
      currentWidth:0
    }
  },
  beforeMount(){
    this.currentWidth=document.documentElement.clientWidth||document.body.clientWidth;
    if(this.currentWidth<1000){
      this.partsix='part-six-responsive'
    }
  }
};
</script>

<style scoped>
.part-six {
  width: 100%;
  height: 310px;
  border: 15px solid transparent;
  border-image: url("~@/./assets/img/border_image.png") 30 30 stretch;
  background: #18202d;
  line-height:30px;
}
.part-six-responsive {
  width: 100%;
  border: 15px solid transparent;
  border-image: url("~@/./assets/img/border_image.png") 30 30 stretch;
  background: #18202d;
}
.text-center{
  text-align:center;
}
.font-small{
  font-size:.9em;
}
.font-bold{
  font-weight:bold;
  color:deepskyblue;
}
p{
  text-align:left;
}
</style>
