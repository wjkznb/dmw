$(function(){
    $('#emAll').on('mouseenter',function(){
        $(this).children('#oo').css('display','block');
    }).on('mouseleave',function(){
        $(this).children('#oo').css('display','none');
    })
})
$(document).ready(function(){
    var conut=1;

    $("#beijin").click(function(){
        if(conut%2==1){
            $(".hh").show();
        }else{
            $(".hh").hide();
        }
        conut++;

    });
});
$(function(){
    $('#ewm').on('mouseenter',function(){
        $(this).children('p').css('display','block');
    }).on('mouseleave',function(){
        $(this).children('p').css('display','none');
    })
})
$(function(){
    $('.two').on('mouseenter',function(){
        $(this).children('p').css('display','block');
    }).on('mouseleave',function(){
        $(this).children('p').css('display','none');
    })
})
$(function(){
    $('.search').on('mouseenter',function(){
        $(this).children('ul').children('p').css('display','block');
    }).on('mouseleave',function(){
        $(this).children('ul').children('p').css('display','none');
    })
})