<template>
  <div class="part-two" id="part-two">
    
  </div>
</template>

<script>
//引入基本模板
let echarts=require('echarts/lib/echarts')
//引用中国地图
require('echarts/map/js/china.js')
export default {
  name: "partTwo",
  mounted(){
    this.drawEcharts();
  },
  methods:{
    drawEcharts(){
      //初始化echarts
      let myChart=echarts.init(document.getElementById("part-two"));
      // 排行前五城市
      let myFirendCity = [
        { name: "太原", value: [ "112.53","37.87","5"] },
        { name: "澄迈", value: ["110", "19.75", "1"] },
        { name: "苏州", value: ["120.62", "31.32","5"] },
        { name: "西安", value: ["108.95", "34.27", "2"] },
        { name: "北京", value: ["116.46", "39.92", "3"] },
      ];

      // 好友分布省份
      let myFriendProvince = [
        { name: "四川", value: 1 },
        { name: "北京", value: 3 },
        { name: "上海", value: 2 },
        { name: "陕西", value: 2 },
        { name: "湖北", value: 1 },
        { name: "湖南", value: 1 },
        { name: "山西", value: 5 },
        { name: "江苏", value: 5 },
        { name: "河北", value: 2 },
        { name: "海南", value: 1 }, 
      ];

      myChart.setOption({
        // 标题
        title: {//主标题
          text: "好友分布",
          textStyle: {
            color: "#fff"
          },
          //副标题
          subtext: "来自微信统计",
          subtextStyle: {
            color: "#fff"
          },
          x: "center",
        },
        // 移动显示
        tooltip: {
          trigger: "item",
          // 鼠标移动过去显示
          formatter: function(params) {
            if (params.value[2] === undefined) {
              if(!params.value) {
                return params.name +"："+"该地区暂无好友";
              } else {
                return params.name + "：" + params.value;
              }
            } else {
              return params.name + " : " + params.value[2];
            }
          }
        },
        // 左边注记
        visualMap: {
          text: ["", "好友数"],
          min: 0,
          max: 10,
          // 是否能通过手柄显示
          calculable: true,
          inRange: {
            color: ["#1D8C00", "#ffb140", "#ff0d00"]
          },
          textStyle: {
            color: "#fff"
          }
        },
        // geo
        geo: {
          map: "china"
        },
        // 数据
        series: [
          // 排行前五城市
          {
            name: "排行前五",
            type: "effectScatter",
            coordinateSystem: "geo",
            symbolSize: function(val) {//控制圆点大小
              return val[2] *4;
            },
            showEffectOn: "emphasis",//控制圆点特效
            rippleEffect: {
              brushType: "stroke"
            },
            hoverAnimation: true,
            label: {
              normal: {
                formatter: "{b}",
                position: "right",//控制城市标签显示方位
                show: true,
                color: "#fff"
              }
            },
            itemStyle: {
              normal: {
                color: "#ddb926",
                shadowBlur: 10,
                shadowColor: "#333"
              }
            },
            // 类似于 z-index
            zlevel: 1,
            data: myFirendCity,
          },
          // 好友分布省份
          {
            name: "好友数",
            type: "map",
            mapType: "china",
            // 是否允许缩放
            roam: false,
            label: {
              // 显示省份标签
              normal: {
                formatter: myFirendCity,
                show: false,
                textStyle: {
                  color: "#fff"
                }
              },
              // 对应的鼠标悬浮效果
              emphasis: {
                show: false
              }
            },
            itemStyle: {
              normal: {
                borderWidth: 0.5, // 区域边框宽度
                borderColor: "#fff", // 区域边框颜色
                areaColor: "deepskyblue" // 区域颜色
              },
              // 对应的鼠标悬浮效果
              emphasis: {
                borderWidth: 1,
                borderColor: "red",
                areaColor: "#00aeff"
              }
            },
            // 数据
            data: myFriendProvince
          }
        ]
      });
    }
  }
};
</script>

<style scoped>
.part-two {
  width: 100%;
  height: 500px;
  border: 15px solid transparent;
  border-image: url("~@/./assets/img/border_image.png") 30 30 stretch;
  background: #18202d;
}
</style>
