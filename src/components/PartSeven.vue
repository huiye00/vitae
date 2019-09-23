<template>
  <div class="part-seven">
    <h3 class="text-center">求职意向</h3>
    <p class="font-small"><span class="font-bold">期望职位：</span>前端工程师</p>
    <p class="font-small"><span class="font-bold">工作技能：</span>VUE</p>
    <p class="font-small"><span class="font-bold">目标城市：</span>太原</p>
    <p class="font-small"><span class="font-bold">期望薪资：</span>3k-5k</p>
    <p class="font-small"><span class="font-bold">入职时间：</span>随时入职</p>
  </div>
</template>

<script>
export default {
  name: "partSeven"
};
</script>

<style scoped>
.part-seven {
  width: 100%;
  height: 310px;
  border: 15px solid transparent;
  border-image: url("~@/./assets/img/border_image.png") 30 30 stretch;
  background: #18202d;
  line-height:30px;
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
</style>
