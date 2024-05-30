$(function(){
    $(".close-btn").click(function () { 
        $(".menu").toggleClass("menu-open");
        $(this).toggleClass("open-btn");
    });
});
$("ul#father>li").hover(function(){
    $(this).find("ul#child").show(400);
},function(){
    $(this).find("ul#child").hide(400);
})