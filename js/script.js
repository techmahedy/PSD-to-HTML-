jQuery(document).ready(function(){

  /**
   * Slider Part
   */
  "use-strict";
  
  $("#slider-carousel").carouFredSel({
   responsive:true,
   width:'100%',
   circular:true,

   scroll:
   {
       items:1,
       duration:500,
       pouseOnHover:true

   },
   auto:true,
   items:
   {
       visible:
       {
           min:1,
           max:1
       },
       height:"variable"
   },
   pagination:
   {
       container:".sliderpager",
       pageAnchorBuilder:false
   }

  });

  /**
   * Sticky Navigation Bar
   */
   $(window).scroll(function(){
     var top = $(window).scrollTop();
     if(top>60){
         $("header").addClass("secondary");
     }else if($("header").hasClass("secondary")){
         $("header").removeClass("secondary");
     }
   });

  /**
   * Responsive Navigation Bar
   */
   $("#menu").slicknav({
     label:''
   });

   /**
   * Team Slider Section
   */
  
  $(".team-carousel").carouFredSel({
   responsive:true,
   width:'100%',
   circular:true,
   prev:'#prev',
   next:'#next',

   scroll:
   {
       items:1,
       duration:500,
       pouseOnHover:true

   },
   auto:true,
   items:
   {
       visible:
       {
           min:1,
           max:3
       },
       height:"variable"
   },
   pagination:
   {
       container:".sliderpager",
       pageAnchorBuilder:false
   }

  });
 
  /**
   * Smooth Scrolling
   */
   $('a').smoothScroll();

});