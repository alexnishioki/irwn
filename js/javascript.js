// $(function(){
// 	$('a.item').click(function() {
// 		$('.item').removeClass('active');
// 		$(this).addClass('active')
// 	})
// })

$(document).ready(function(){
$(".launch.button").mouseenter(function(){
		$(this).stop().animate({width: '150px'}, 300, 
             function(){$(this).find('.text').show();});
	}).mouseleave(function (event){
		$(this).find('.text').hide();
		$(this).stop().animate({width: '70px'}, 300);
	});
$(".ui.sidebar").sidebar()
                .sidebar('attach events','.ui.launch.button');

$('.ui .item').on('click', function() {
        $('.ui .item').removeClass('active');
        $(this).addClass('active');
            })
/*.......................... - expand/collapse writings - ........................*/  

    $('.ui.accordion')
  .accordion()
;

/*............................. - document.ready - ................................*/

});

/*...........................- scale gallery photos - ..............................*/

function scaleGallery()
{
  // This is roughly the max pixels width/height of a square photo
  var widthSetting = 200;
  
  // Do not edit any of this unless you know what you're doing
  var containerWidth = $(".gallery").width();
  var ratioSumMax = containerWidth / widthSetting;
  var imgs = $(".gallery img");
  var numPhotos = imgs.length, ratioSum, ratio, photo, row, rowPadding, i = 0;

  while (i < numPhotos) {
    ratioSum = rowPadding = 0;
    row = new Array();
    while (i < numPhotos && ratioSum < ratioSumMax) {
        photo = $(imgs[i]);
        // reset width to original
        photo.width(""); 
        ratio = photo.width() / photo.height();
        rowPadding += getHorizontalPadding(photo);
        // if this is going to be first in the row, clear: left
        if(ratioSum == 0) photo.css("clear", "left"); else photo.css("clear", "none");
        ratioSum += ratio;
        row.push(photo);
        i++;
        // if only 1 image left, squeeze it in
        if(i == numPhotos - 1) ratioSumMax = 999;
    }
    unitWidth = (containerWidth - rowPadding) / ratioSum;

    row.forEach(function (elem) {
      elem.width(unitWidth * elem.width() / elem.height());
    });
  }
}

function getHorizontalPadding(elem)
{
    var padding = 0;
    var left = elem.css("padding-left");
    var right = elem.css("padding-right");
    padding += parseInt(left ? left.replace("px", "") : 0);
    padding += parseInt(right ? right.replace("px", "") : 0);
    return padding;
}

$(window).load(scaleGallery);
$(window).resize(scaleGallery);

/*.............................audio................................*/

