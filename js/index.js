
$(function () {

//下拉菜单
    $(".slid_down").each(function (ind,ev) {
    	
    	//便利每一个点击的aa标签
        $(this).click(function () {
            $(".showList").eq(ind).stop().slideToggle()
            //点击时候下拉
        })
    })

    $(".showList").parent().mouseout(function () {
    	//鼠标移开时列表收回
        $(".showList").stop().slideUp()
    })
// 搜索框下拉菜单
    $(".searchTxt").click(function () {
      $(".scarchBox .list").stop().slideToggle();
        $(".scarchBox .list li").click(function () {
            $(".searchTxt").val($(".scarchBox .list li").eq($(this).index()).val())
            $(".scarchBox .list").stop().slideUp();

        })
    })

//    全选

    $("#qx").click(function () {
     //全选
     
        $(":checkbox:gt(2)").attr("checked",true);
        $("#qx").attr("checked",false);
    })
//全不选
    $("#qbx").click(function(){
       
        $(":checkbox:gt(2)").attr("checked",false);
        $("#qx").prop("checked",false)
    })
    //反选
    $("#fx").click(function(){
        $.each($(":checkbox:gt(2)"), function() {
            $(this)[0].checked = !$(this)[0].checked
        });
         $("#qx,#qbx").prop("checked",false)

    })
    
    
 //    选项卡

//    封装插件
    function tab(a,b,c) {
        $(a).click(function () {
            var $ind=$(this).index();
            $(a).removeClass(b);
            $(b).eq($ind).addClass(b);
            $(c).eq($ind).show().siblings().hide();
        })

    }
    function tab2(a,b,c,d) {
        $(a).click(function () {
            var ind=$(this).index();

            $(a).removeClass(b);
            $(a).eq(ind).addClass(b);
            $(c).eq(ind).addClass(d).siblings().removeClass(d);
        })
    }
//    视频综艺
tab(".rightArea .leftBox .newsBox .comTitle .comTitle_tabs li","active",".bao .big")
    
 //    教育培训
tab2( ".tab_4 .tab_title li", "active", ".smList .item", "show")
//今日 
 tab2(".comWidth .leftAd .sina_video .comTitle_f .day a","active",".tabs .tabs_item", "show")
 //汽车 
    tab2(".car li","active",".jwds .tabs_item","show") 
  //娱乐
    tab2( ".yuel li","active",".jwds1 .tabs_item","show"
    )  
   
 //财经 
    tab2(".caijing li","active",".jwds2 .tabs_item","show")   
 //我爱看图 
    tab2(".love li","active",".jwds3 .tabs_item","show")

// 读书小说
    tab2(".book li","active",".jwds4 .tabs_item","show")

    
    
   
    // 科技探索
    tab2(".sice li","active",".jwds5 .tabs_item","show")
 //    手机数码
       tab2(".phone li","active",".jwds6 .tabs_item","show") 
    
  //    游戏
    tab2(".game span","active",".jwds7 .tabs_item","show")  
  //    应用中心
    tab2(".yingy span","active",".jwds8 .tabs_item","show") 
    
   })


    
    
    



  

 













