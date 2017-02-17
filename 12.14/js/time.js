$(function(){
    var time =60;
    $(".top01").click(function(){
        if(time == 60){
            time_();
        }
    })
    
    function time_(){
        var set =setInterval(function(){
            if(time==0){
                clearInterval(set);
                time = 60
                $(".top01").val("获取验证码");
            }else{
                time--;
                $(".top01").val(time + "s");
                
            }
        },1000)
    }
    
})





