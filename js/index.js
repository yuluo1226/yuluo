$(function(){

    $('#dowebok').fullpage({
		scrollingSpeed: 400,
		css3: true,
		resize: true,
		anchors: ["page1","page2","page3","page4","page5"],
		verticalCentered: false,
		afterRender: function(){
			$("#home").css({"display":"block"}).addClass("home_zoom");
			$("aside").css({"top":($(".active").height()-$("aside").height())/2});
			$("header").before("<div id='header' style='opacity:0'></div>");	
			$("#home_head").css({"margin-top":"100px"});
			$("header").animate({opacity:"1"},1000,function(){
				$("#header").css({"opacity":"0.3"});
				$("#home_info1").fadeIn(700,function(){
					$(this).next().animate({width:"800px"},700,function(){
						$("#home_info2").fadeIn(450,function(){
							$(this).next().fadeIn(450,function(){
								$(this).next().fadeIn(450,function(){
									$(this).next().fadeIn(450,function(){
										$("aside").fadeIn(300);
									});
								});
							});
						});
					});
				});
			});	
			$("aside a").eq(0).addClass("selected").siblings().removeClass("selected");
		 
		},
		afterLoad: function(anchorLink,index){
			if(index==1){
				$("aside a").eq(0).addClass("selected").siblings().removeClass("selected");
			}
			if(index==2){
				$("aside a").eq(1).addClass("selected").siblings().removeClass("selected");
				$("#about_content h1").after("<div class='title_en'><h2>· About me ·</h2></div>");
				$(".title_en").animate({width:"130px"},800,function(){
					$(".title_en h2").slideDown(400);
				});
				$("#about_info").animate({width:"800px",marginTop:"0",marginBottom:"0"},700,'easeOutElastic',function(){
					$("#about_info p").eq(0).animate({bottom:"0"},700,function(){
						$("#about_info p").eq(1).animate({bottom:"0"},700,function(){
							$("#about_info p").eq(2).animate({bottom:"0"},700,function(){
								$("#about_info p").eq(3).animate({bottom:"0"},700);
							});
						});
					});
				});	
			}
			if(index==3){
				$("aside a").eq(2).addClass("selected").siblings().removeClass("selected");
				$("#skill_content h1").after("<div class='title_en'><h2>· Skill ·</h2></div>");
				$(".title_en").animate({width:"130px"},800,function(){
					$(".title_en h2").slideDown(400);
				});	
				$(".skill_list_content").addClass("skill_scale");
			}
			// if(index==4){
			// 	$("aside a").eq(3).addClass("selected").siblings().removeClass("selected");
			// 	$("#exp_content h1").after("<div class='title_en'><h2>· Experience ·</h2></div>");
			// 	$(".title_en").animate({width:"130px"},800,function(){
			// 		$(".title_en h2").slideDown(400);
			// 	});	
			// 	var i=-1;
			// 	$(".exp_scale").each(function() {
			// 		var $this=$(this);
			// 		if(!$this.hasClass("b_to_t")){
			// 			i++;
			// 			setTimeout(function(){
			// 		   $this.addClass("b_to_t");
			// 		   },200*i);
			// 		}
   //              });
			// 	$("#exp_list_to").fadeIn(800).delay(500).fadeTo(300,0.3);
			// }
			if(index==4){
				$("aside a").eq(4).addClass("selected").siblings().removeClass("selected");
				$("#demo_content h1").after("<div class='title_en'><h2>· Demo ·</h2></div>");
				$(".title_en").animate({width:"130px"},800,function(){
					$(".title_en h2").slideDown(400);
				});	
				var i=-1;
				$(".demo_scale").each(function() {
					var $this=$(this);
					if(!$this.hasClass("b_to_t")){
						i++;
						setTimeout(function(){
					   $this.addClass("b_to_t");
					   },200*i);
					}
				})
			}
			if(index==5){
				$("aside a").eq(5).addClass("selected").siblings().removeClass("selected");
				$("#contact_content h1").after("<div class='title_en'><h2>· Contact me ·</h2></div>");
				$(".title_en").animate({width:"130px"},800,function(){
					$(".title_en h2").slideDown(400);
				});	
				var i=-1;
				$("#contact_head1").addClass("b_to_t");
				$("#contact_head2 span").each(function(){
					var $this=$(this);
					if(!$this.hasClass("fade_in")){
						i++;
						setTimeout(function(){
					   $this.addClass("fade_in");
					   },200*i);
					}
				});
				var j=-1;
				setTimeout(function(){
						$(".contact_scale").each(function(){
							var $this=$(this);
							if(!$this.hasClass("fade_in")){
								j++;
								setTimeout(function(){
					   				$this.addClass("fade_in");
					   			},350*j);
							}
						});
				},70);
			}
		},
		onLeave:function(index){
			if(index==2||index==3||index==4||index==5||index==6){
				$(".title_en").remove();	
			}
		}
	});
});
//顶部标题文字切换
	$("#header_p").mouseover(function(){
		$("#header_p1").html("Resume");
		$("#header_p2").html("前端工程师");
	}).mouseout(function(){
		$("#header_p1").html("刘志华");
		$("#header_p2").html("个人简历");	
	});
//顶部导航取消
	$("header nav a:not(':first')").click(function(){
		alert("正在努力建设中...请稍等");
		return false;
	});
//侧边导航文字切换
	$("aside a").hover(function(){
		$(this).find("b").fadeToggle(200,"easeInOutCubic");
	});
// 头像切换
	$("#home_photo2").hover(function(){
		$(this).fadeTo(800,1);
		},function(){
			$(this).stop(true,false).fadeTo(800,0);
	});
// 技能明细切换
	$(".skill_icon").click(function(){
		$(".skill_int").each(function(){
			if($(this).is(":visible")){
				$(this).slideUp(200);
				$(this).prev().removeClass("skill_flag_scale");
			}
		});
		if($(this).siblings(".skill_int").is(":hidden")){
			$(this).siblings(".skill_int").slideDown(400);
			$(this).siblings(".skill_flag").addClass("skill_flag_scale");
		}else{
			$(this).siblings(".skill_int").slideUp(200);
			$(this).siblings(".skill_flag").removeClass("skill_flag_scale");
		}
	});
// 图片轮播
	$("#exp_list_slider").width($(".exp_list").width());
	$("#exp_list_content").width($(".exp_list").width()*3);
	$("#exp_list_slider_content").mouseenter(function(){
		$("#exp_list_to").stop(true,false).fadeTo(700,1);
	}).mouseleave(function(){
		$("#exp_list_to").stop(true,false).fadeTo(700,0.1);
	});
	var page=1;
	$("#exp_timeline a").click(function(){
		$("#exp_list_content").stop(true,false).animate({left:-$(".exp_list").width()*$(this).index()},2000,"easeInOutCubic");
		page=$(this).index()+1;
		});
	$("#exp_list_toleft").click(function()
    {
		if(!$("#exp_list_content").is(":animated")){
			if(page==1){
				$("#exp_list_content").animate({left:"+=50"},200,function(){
					$(this).animate({left:"-=50"},200);
				});
				return false;
			}	
			$("#exp_list_content").animate({left:"+="+$(".exp_list").width()});
			page--;
		}
	});
	$("#exp_list_toright").click(function(){
		if(!$("#exp_list_content").is(":animated")){
			if(page==3){
				$("#exp_list_content").animate({left:"-=50"},200,function(){
					$(this).animate({left:"+=50"},200);
				});
				return;
			}
			$("#exp_list_content").animate({left:"-="+$(".exp_list").width()});
			page++;
		}
	});
// 时光轴
	var x=10;
	var y=20;
	$("#exp_timeline a").mouseover(function(e){
		this.aa=this.title;
		this.title="";
		$("body").append("<div class='exp_timeline_title'>"+this.aa+"</div>");	
		$(".exp_timeline_title").css({
			"top":e.pageY+y+"px",
			"left":e.pageX+x+"px"
		}).show("fast");
	}).mouseout(function(){
		this.title=this.aa;
		$(".exp_timeline_title").remove();
	}).mousemove(function(e){
		$(".exp_timeline_title").css({
			"top":e.pageY+y+"px",
			"left":e.pageX+x+"px"
		});
	}).click(function(){
		return false;
	});
// 点击留言
	$("#contact_message1").click(function(){
		$(this).fadeOut(200,function(){
			$("#contact_form").fadeIn(200);
		})
	});
////内容适应居中
	$(function(){
		$("aside").css({"top":($(".active").height()-$("aside").height())/2});
		$("#home_content").css({"padding-top":($(".active").height()-$("#home_content").height())/6});
		$("#about_content").css({"padding-top":($(".active").height()-$("#about_content").height())/6});
		$("#skill_content").css({"padding-top":($(".active").height()-$("#skill_content").height())/6});
		$("#exp_content").css({"padding-top":($(".active").height()-$("#exp_content").height())/6});
		$("#demo_content").css({"padding-top":($(".active").height()-$("#demo_content").height())/6});
	});


var cv = document.getElementById('c')
var ctx = cv.getContext('2d');

cv.width = 500;
cv.height = 500;

//弧度转化为角度
var toAngle = function (radian) {
    return radian / Math.PI * 180
}
//角度转化为弧度
var toRadian = function (angle) {
    return angle / 180 * Math.PI
}
var x0 = cv.width / 2, y0 = cv.height / 2,//圆心点坐标
    outerRaidus = 200,         //外环的半径
    innerRadius = 200 / 2,//内环的半径
    bigStartAngle = -90,//外环上圆的起始角度
    smallStartAngle = -90,//内环上圆的起始角度
    bigRadius = 45,//外环上圆的半径
    smallRadius = 35,//内环上圆的半径
    step = 1//转动的速度

//大小圆的颜色值数据
var bigCircles = [{
    'color': "rgba(178, 58, 238,0.5)",
    'title': 'jQurey'
}, {
    'color': "rgba(139, 69, 19,0.5)",
    'title': 'Angular'
}, {
    'color': "rgba(16, 78, 139,0.5)",
    'title': 'Vue'
}, {
    'color': "rgba(165, 42, 42,0.5)",
    'title': 'Node'
}, {
    'color': "rgba(205, 155, 29,0.5)",
    'title': 'React'
}]
var smallCircles = [{
    'color': "rgba(255,0,0,0.5)",
    'title': 'JS'
}, {
    'color': "rgba(255,255,0,0.5)",
    'title': 'CSS'
}, {
    'color': "rgba(0,0,255,0.5)",
    'title': 'HTML'
}];
var render = function () {
    //清空画布
    ctx.clearRect(0, 0, cv.width, cv.height)
    //保存当前的绘制状态(状态1,即默认状态)
    ctx.save()
    //开启新路径
    ctx.beginPath()

    //绘制中心园
    ctx.arc(x0, y0, 55, 0, Math.PI * 2)
    ctx.fillStyle = 'rgba(0,0,0,0.5)'
    ctx.fill()
    //绘制重叠圆
    ctx.beginPath()
    ctx.arc(x0, y0, 55 - 10, 0, Math.PI * 2)
    ctx.fillStyle = 'rgba(0,0,0,0.5)'
    ctx.fill()
    ctx.beginPath()
    ctx.textAlign = 'center'
    ctx.textBaseline = 'middle'
    ctx.fillStyle = 'white'
    ctx.font = "30px 微软雅黑";
    ctx.fillText('前端', x0, y0, 300)
    //绘制外环
    ctx.beginPath()
    ctx.setLineDash([5])//虚线的空隙
    ctx.strokeStyle = 'rgba(102,102,102,0.7)'//虚线的颜色
    ctx.arc(x0, y0, outerRaidus, 0, Math.PI * 2)
    ctx.stroke()
    //绘制内环
    ctx.beginPath();
    ctx.arc(x0, y0, innerRadius, 0, Math.PI * 2)
    ctx.stroke()
    //重新载入 状态1
    ctx.restore()

    //保存 状态2
    ctx.save()
    //绘制外环的圆
    for (var i = 0; i < bigCircles.length; i++) {
        ctx.beginPath()
        //计算圆弧上的点坐标
        var tempX = x0 + outerRaidus * Math.cos(toRadian(bigStartAngle += 72))
        var tempY = y0 + outerRaidus * Math.sin(toRadian(bigStartAngle))

        ctx.arc(tempX, tempY, bigRadius, 0, Math.PI * 2)
        ctx.fillStyle = bigCircles[i].color
        ctx.fill()
        ctx.beginPath()
        ctx.arc(tempX, tempY, bigRadius - 10, 0, Math.PI * 2)
        ctx.fillStyle = bigCircles[i].color
        ctx.fill()
        ctx.beginPath()
        ctx.textAlign = 'center'
        ctx.textBaseline = 'middle'
        ctx.fillStyle = 'white'
        ctx.font = "20px 微软雅黑";
        ctx.fillText(bigCircles[i].title, tempX, tempY, 300)
    }
    //重新载入 状态2
    ctx.restore()

    ctx.save();
    //绘制内环的圆
    for (var i = 0; i < smallCircles.length; i++) {
        ctx.beginPath();
        // 计算圆弧上点的坐标
        var tempX = x0 + innerRadius * Math.cos(toRadian(smallStartAngle += 120)),
            tempY = y0 + innerRadius * Math.sin(toRadian(smallStartAngle));

        ctx.arc(tempX, tempY, smallRadius, 0, Math.PI * 2);
        ctx.fillStyle = smallCircles[i].color;
        ctx.fill();
        ctx.beginPath()
        ctx.arc(tempX, tempY, smallRadius - 8, 0, Math.PI * 2);
        ctx.fillStyle = smallCircles[i].color;
        ctx.fill();
        ctx.beginPath()
        ctx.textAlign = 'center'
        ctx.textBaseline = 'middle'
        ctx.fillStyle = 'white'
        ctx.font = "20px 微软雅黑";
        ctx.fillText(smallCircles[i].title, tempX, tempY, 300)
    }
    ctx.restore();
    //每次修改起始角度,实现转动效果
    bigStartAngle += step;
    smallStartAngle -= step
}

setInterval(render, 1000 / 60);
cv.addEventListener('mouseenter', function () {
    step = 0.2;
})
cv.addEventListener('mouseleave', function () {
    step = 0.5;
})