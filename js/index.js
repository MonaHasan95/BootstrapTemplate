let navHeight = $("nav").innerHeight();
let advOffset = $(".adv").offset().top;
let lis =$("#box ul li");
let colors =$("#colors");
let colorsWidth= colors.innerWidth();
let search = $("#search");
let searchWidth = search.innerWidth();
let width = colorsWidth-searchWidth;
let originalColor=$(".mainColor").css("background-color");
lis.eq(0).css("background-image","url(imgs/grey-white-checkered-squares-1920x1080-c2-808080-ffffff-l-70-a-0-f-2.svg)");
lis.eq(0).css("background-size","cover");
lis.eq(1).css("background-color","rgba(51, 122, 180, 1");
lis.eq(2).css("background-color","rgba(30, 193, 217, 1)");
lis.eq(3).css("background-color","rgba(16, 196, 92, 1)");
lis.eq(4).css("background-color","rgba(71, 197, 142, 1)");
lis.eq(5).css("background-color","rgba(232, 75, 58, 1)");
colors.css("left",`-${width}`);

$(window).ready(function()
{
    $(".loaderScreen").animate({opacity:0},1000, function()
    {
        $("html,body").css("overflow-y","visible")
        $(".loaderScreen").css("z-index","-555");
    });
})

$(window).scroll(function()
{   
    console.log("Hi");
    let S =$(window).scrollTop();
    
    if(S > advOffset-navHeight)
    {
        $("nav").css("background-color","rgba(0,0,0,0.7)")
        console.log("Change");
    }
    else
    {
        $("nav").css("background-color","transparent")
    }
})

search.click(function()
{
    let left =parseInt(colors.css("left"))
    
    if(left==0)
    {
        colors.animate({left:`-${width}`},1000)
    }
    else
    {
        colors.animate({left:'0'},1000);
    }
})

lis.click(function()
{
    let clck= $(this).css("background-color");
    
    if($(this).css("background-image")==lis.eq(0).css("background-image"))
    {
        $(".textColor").css("color", `${originalColor}`);
        $(".mainColor").css("background-color", `${originalColor}`);
        $(".thrd a").css("background-color", `${originalColor}`);   
    }
    else
    {
        $(".textColor").css("color", `${clck}`);
        $(".mainColor").css("background-color", `${clck}`);
        $(".thrd a").css("background-color", `${clck}`);
    
    }
    
})
