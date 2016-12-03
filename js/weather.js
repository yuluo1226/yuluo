$(function(){

$(".wbutton").hover(function () {
		$.ajax({
			url:"http://api.map.baidu.com/telematics/v3/weather?location=上海&output=json&ak=tq0Kt0NFYheTCj5mszast0drkIqqVTNn",
			dataType:'jsonP',
			success:function(data){
				// 读取对象
				var weatherResults = data.results[0];
				// 读取模板
				var str = template('template',weatherResults);
				// console.log(str);
				// 添加到界面上
				$(".weather_cont").slideToggle()
				$("#weather").html(str);
			}
		})
})

})