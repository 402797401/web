$(function(){
    var time =50;
    $(".times").click(function(){
        if(time == 50){
            time_();
        }
    })
    
    function time_(){
        var set =setInterval(function(){
            if(time==0){
                clearInterval(set);
                time = 50
                $(".times").val("50s");
            }else{
                time--;
                $(".times").val(time + "s");
                
            }
        },1000)
    }
    
})





