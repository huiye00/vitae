<template>
  <div class="part-three" id="part-three">
    
  </div>
</template>

<script>
//引入基本模板
let echarts=require('echarts/lib/echarts');

export default {
  name: "parThree",
  mounted(){
    this.drawEcharts();
  },
  methods:{
    drawEcharts(){
      //初始化echarts,准备好一个具有宽高的容器
      let myChart=echarts.init(document.getElementById('part-three'));
      myChart.setOption({
      title:{
        text:'技能分布图',
        textStyle:{
          color:'#fff',
          
        },
        x:'center'
      },
      visualMap: {
        show: false,
        min: 80,
        max: 600,
        inRange: {
            colorLightness: [0, 1]
        }
      },
       // 注记
        legend: {
          x: "center",
          y: "bottom",
          textStyle: {
            color: "#fff"
          },
          data: [ "HTML", "CSS", "JavaScript", "JQuery", "Vue", "ps" ,'其它']
        },
        // 注记显示手柄
        calculable: true,
        // 移动显示
         tooltip: {
            trigger: "item",
            // 显示文字样式
            formatter: "{a} <br/>{b} : {d}%"
         },
      //图形数据
      series : [
        {
            name: '访问来源',
            type: 'pie',
            radius: [30,90],
            data:[
                {value:300, name:'HTML'},
                {value:350, name:'CSS'},
                {value:280, name:'JavaScript'},
                {value:260, name:'JQuery'},
                {value:390, name:'Vue'},
                {value:200, name:'ps'},
                {value:200, name:'其它'},
               
            ],
            roseType: 'area',
            label: {
                normal: {
                    textStyle: {
                        color: '#fff'
                    }
                }
            }
        }
      ],
      // 颜色调整
      color: ['#00bfff', '#00ffdd', '#207ffc', '#00aeff', "#00eeff", "#006eff", "#0099ff", "#0066ff"]
      })
    }
  }
};
</script>

<style scoped>
.part-three {
  width: 100%;
  height: 500px;
  border: 15px solid transparent;
  border-image: url("~@/./assets/img/border_image.png") 30 30 stretch;
  background: #18202d;
}
</style>
