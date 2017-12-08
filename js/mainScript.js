$(document).ready(function(){$(document).on("click",'a[href="#"]',function(l){l.preventDefault()}),$("ul.icon-gallery li").attr("class","col-xs-6 col-md-3"),$("ul.lines-of-business li").attr("class","col-xs-12 col-sm-6 col-md-3")});

$(document).ready(function(){
	
	$('.SeeMore2').click(function() {
      var $this = $(this);
	  var txt = $($this.children('.btn-text')[0]);
	  $this.toggleClass('up');
      $this.toggleClass('SeeMore2');
      if ($this.hasClass('SeeMore2')) {
        txt.text('View More ');
        //$this.append('<img src="images/down-arrow.png" alt="Arrow down" />');
      } else {
        txt.text('View Less ');
        //$this.append('<img src="images/up-arrow.png" alt="Arrow Up" />');
      }
    });
})

