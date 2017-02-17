$(function(){
    var w_w = $(window).width();
    var i = 0;
    var set;
    var len = $(".ptt").length;
    
    $(".ppt").css({"width": len * w_w });
    $(".ptt").css({"width": w_w });
    
    $(window).resize(function(){
        w_w = $(window).width();
        $(".ppt").css({"width": len * w_w });
        $(".ptt").css({"width": w_w });        
    })
    
    function time(){    
        set = setInterval(function(){
            if(i < len - 1){
                i++;
            } else {
                i = 0;
            }
             $(".ss01").eq(i).addClass("hh").siblings(".ss01").removeClass("hh");
            $(".ppt").stop(true).animate({"left": - i * w_w });
        }, 3000)
    }   
    
    
    $(".slide").mouseover(function(){
        clearInterval(set);
    })

    $(".slide").mouseleave(function(){
        time();
    })
    
    
    
    
        
//    $(".ss01").mouseover(function(){
//        $(this).addClass('hhone');
//    })
//    
//    $(".ss01").mouseleave(function(){
//        $(this).removeClass('hhone');
//    })
//        
//    
    
    $(".ss01").mouseover(function(){
        i=$(this).index();
        $(".ss01").eq(i).addClass("hh").siblings(".ss01").removeClass("hh");
        $(".ppt").stop(true).animate({ "left": -i * w_w});
        $(this).addClass("hh").siblings(".ss01").removeClass("hh")
    })  
})