<template>
  <div class="part-one">
    <img class="part-one-image" :src="headImage" alt="头像">
    <p>姓&emsp;&emsp;名：宋武辉</p>
    <p>学&emsp;&emsp;历：大专</p>
    <p>工作年限：1 年</p>
    <p>年&emsp;&emsp;龄：23</p>
    <p>联系电话：18735813794</p>
    <p>电子邮箱：1449202810@qq.com</p>
    <p>博&emsp;&emsp;客：<a target="_blank" href="https://mp.csdn.net">宋武辉的csdn</a></p>
    <p>掘&emsp;&emsp;金：<a target="_blank" href="https://juejin.im/user/5d59174051882540b16f2bb2">辉重名了</a></p>
    <p>GitHub：<a href="https://github.com/huiye00">huiye00</a></p>
  </div>
</template>

<script>
export default {
  name: "partOne",
  data(){
      return {
          headImage:require('../assets/img/header.jpg')
      }
  }
};
</script>

<style scoped>
.part-one {
  width: 100%;
  height: 500px;
  border: 15px solid transparent;
  border-image: url("~@/./assets/img/border_image.png") 30 30 stretch;
  background: #18202d;
  text-align: center;
}
.part-one a{
 color: deepskyblue;
}
.part-one a:hover{
    color:rgb(118, 190, 248)
}
.part-one-image{
    width:150px;
    height:150px;
}
.part-one p{
    line-height:30px;
}
</style>
