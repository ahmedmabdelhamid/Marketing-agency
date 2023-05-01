$(document).ready(function()
{
    $(".navbar-toggler").click(function(e)
    {
        e.preventDefault();
        $(".background-clcik").fadeIn(500);
      
    });

    $(".close").click(function(){
        $(".background-clcik").fadeOut(500);

    });
});

// sec 5





$(document).ready(function()
{
    $(".progressbar li").click(function()
    {
        $(this).addClass("active");

		$(this).siblings().removeClass("active");
      
    });

});



$(document).ready(function()
{
    $(".login").click(function()
    {
	    $(".box1").removeClass("d-none");
        $(".box1").show();
        $(".box1").siblings().addClass("d-none");
      
    });

});

$(document).ready(function()
{
    $(".choose").click(function()
    {
	    $(".box2").removeClass("d-none");
        $(".box2").show();
        $(".box2").siblings().addClass("d-none");
      
    });

});


$(document).ready(function()
{
    $(".add").click(function()
    {
        $(".box3").removeClass("d-none");
		$(".box3").show();
        $(".box3").siblings().addClass("d-none");
      
    });

});

$(document).ready(function()
{
    $(".view").click(function()
    {
        $(".box4").removeClass("d-none");
		$(".box4").show();
        $(".box4").siblings().addClass("d-none");
      
    });

});

// end sec 5

// start sec10

$(document).ready(function()
{
    $(".fas").click(function()
    {
        $(".amanda").toggleClass("d-none");
        $(".jeff").toggleClass("d-none");
    });

});




