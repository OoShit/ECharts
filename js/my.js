$(function(){

	var onOff = true;
	var offOn = true;
	$(".product span").click(function(){

		if(onOff){
			$(".product ul").stop().slideUp(100);
			$(".product span i").eq(0).css({"transform":"rotate(-90deg)"});
			onOff = false;
		}else{
			$(".product ul").stop().slideDown(100);
			$(".product span i").eq(0).css({"transform":"rotate(0deg)"});
			onOff = true;
		}
	})
	$(".user span").click(function(){
		if(offOn){
			$(".user ul").stop().slideUp(100);
			$(".user span i").eq(0).css({"transform":"rotate(-90deg)"});
			offOn = false;
		}else{
			$(".user ul").stop().slideDown(100);
			$(".user span i").eq(0).css({"transform":"rotate(0deg)"});
			offOn = true;
		}
	})

	var hish = true;
	$(".navigation").click(function(){

		if(hish){
			$(".content .lefter").css({"width":"50px"});
			$(".content .navigation").css({"width":50})
			$(".content .navigation p").css({"transform":"rotate(90deg)"})
			hish = false;
		}else{
			$(".content .lefter").css({"width":"180px"});
			$(".content .navigation").css({"width":180})
			$(".content .navigation p").css({"transform":"rotate(0deg)"})
			hish = true;
		}

	}).bind("click",function(){
		var w1 = $(window).width()
		var w2 = $(".lefter").width();
		var w3 = w1-w2;
		$(".righter").css({"width":w3});
		$(".righter .top").css({"width":"100%"})
	})
	
	$(window).resize(function(){
		var w1 = $(window).width()
		var w2 = $(".lefter").width();
		var w3 = w1-w2;
		$(".righter").css({"width":w3});
		$(".righter .top").css({"width":"100%"});

	}).trigger("resize");

	var myChart = echarts.init(document.getElementById('main'));
	var twoChart = echarts.init(document.getElementById('real'));
	var thisChart = echarts.init(document.getElementById('this'));
	var thatChart = echarts.init(document.getElementById('that'));
	myChart.setOption ({
		title:{
				text:'ECharts示例'
			},
			tooltip:{},
			legend:{
					data:["销量"]
				},
				xAxis:{
						data:["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
					},
					yAxis:{},
					series:[{
							name:"销量",
							type:"bar",
							data:[5,20,36,10,10,20]
						}]
	});

	twoChart.setOption ({
			series:[{
					name:"访问来源",
					type:"pie",
					radius:"55%",
					data:[
						{value:400,name:"搜索引擎"},
						{value:335,name:"直接访问"},
						{value:310,name:"邮件营销"},
						{value:274,name:"联盟广告"},
						{value:235,name:"视频广告"}
				
					]
				}]
		
		});

thisChart.setOption({
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        x: 'left',
        data:['直接访问','邮件营销','联盟广告','视频广告','搜索引擎']
    },
    series: [
        {
            name:'访问来源',
            type:'pie',
            radius: ['50%', '70%'],
            avoidLabelOverlap: false,
            label: {
                normal: {
                    show: false,
                    position: 'center'
                },
                emphasis: {
                    show: true,
                    textStyle: {
                        fontSize: '30',
                        fontWeight: 'bold'
                    }
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            data:[
                {value:335, name:'直接访问'},
                {value:310, name:'邮件营销'},
                {value:234, name:'联盟广告'},
                {value:135, name:'视频广告'},
                {value:448, name:'搜索引擎'}
            ]
        }
    ]
});

thatChart.setOption({
    title: {
        text: '折线图堆叠'
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data:['邮件营销','联盟广告','视频广告','直接访问','搜索引擎']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    toolbox: {
        feature: {
            saveAsImage: {}
        }
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['周一','周二','周三','周四','周五','周六','周日']
    },
    yAxis: {
        type: 'value'
    },
    series: [
        {
            name:'邮件营销',
            type:'line',
            stack: '总量',
            data:[120, 132, 101, 134, 90, 230, 210]
        },
        {
            name:'联盟广告',
            type:'line',
            stack: '总量',
            data:[220, 182, 191, 234, 290, 330, 310]
        },
        {
            name:'视频广告',
            type:'line',
            stack: '总量',
            data:[150, 232, 201, 154, 190, 330, 410]
        },
        {
            name:'直接访问',
            type:'line',
            stack: '总量',
            data:[320, 332, 301, 334, 390, 330, 320]
        },
        {
            name:'搜索引擎',
            type:'line',
            stack: '总量',
            data:[820, 932, 901, 934, 1290, 1330, 1320]
        }
    ]
});

		window.onresize = function(){
			myChart.resize();
			twoChart.resize();
			thisChart.resize();
			thatChart.resize();
		}

})