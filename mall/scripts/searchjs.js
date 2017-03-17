// JavaScript Document

//搜索热门关键字代码
function fbbox1(fbboxID,ObjID){
	$(fbboxID).click(function(){
		$(ObjID).show();
	});
	$(ObjID).hover('',function(){
		$(ObjID).hide();
	});
	$(fbboxID).keydown(function(){
		$(ObjID).hide();
	});
	$(ObjID).find('li').click(function(){
		var text = $(this).find('h1').text();
		$(fbboxID).val(text);
		$(ObjID).hide();
	});
}
fbbox1('#search-keyword','#hotwords');

//搜索框检测代码
function checkinput(){
	var search = $('#search-keyword');
	var isNull = /^[\s' ']*$/;
	if(search.val() == '输入关键词' || search.val().length <= 0 || isNull.test(search.val())){
		search.focus();
		window.alert("请输入关键词");
		return false;
	}
}

//搜索热门关键字代码
function fbbox(fbboxID,ObjID){
	$(fbboxID).click(function(){
		$(fbboxID).val('');
		$(fbboxID).blur();
		$(ObjID).show();
	});
	$(ObjID).hover('',function(){
		$(ObjID).hide();
		
		var isNull = /^[\s' ']*$/;
		if($(fbboxID).val().length <= 0 || isNull.test($(fbboxID).val())){
			$(fbboxID).val('请选择积分范围');
			$(fbboxID).blur();
		}
	});
	$(fbboxID).keydown(function(){
		$(fbboxID).val('请选择积分范围');
		$(ObjID).hide();
	});
	$(ObjID).find('li').click(function(){
		var text = $(this).find('h1').text();
		$(fbboxID).val(text);
		$(ObjID).hide();
	});
	checkinput();
}
fbbox('#search-keyword2','#hotwords2');
//搜索框检测代码
function checkinput(){
	var search = $('#search-keyword2');
	var isNull = /^[\s' ']*$/;
	if(search.val().length <= 0 || isNull.test(search.val())){
		search.val("请选择积分范围");
		search.blur();
		return false;
	}
}

