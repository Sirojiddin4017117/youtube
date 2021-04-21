$(function(){
  $('.slidesInfo').slick({
    slidesToShow:10,
    slidesToScroll:2,
    dots:false,
    infinite:false,
    speed:200,
    prevArrow:$('#next'),
    nextArrow:$('#prev'),
    variableWidth: true,
    responsive:[
      {
        breakpoint: 1235,
        settings: {
          slidesToShow: 8,
          slidesToScroll: 2,
          infinite: false,
          dots: false
        }
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 8,
          slidesToScroll: 2,
          infinite: false,
          dots: false
        }
      },
      {
        breakpoint: 807,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 2,
          infinite: false,
          dots: false
        }
      },
      {
        breakpoint: 550,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
          infinite: false,
          dots: false
        }
      }
    ]
  })
  
  $('#next').css('display','none')
  let resMedeia3 = window.matchMedia("(max-width: 1235px)")
  resHeaderContents3(resMedeia3)
  resMedeia3.addListener(resHeaderContents3)
  function resHeaderContents3(x) {
    if(x.matches) {
      $('.slidesInfo').on('afterChange', function(event, slick, direction){
        console.log(direction)
          if(direction == 2){
            $('#prev').css('display','block')
            $('#next').css('display','block')
          }
          
          if(direction==0) {
            $('#next').css('display','none')
          }

          if(direction==6) {
            $('#prev').css('display','none')
          }
          else{
            $('#prev').css('display','block')
          }
      });
    }
    else {
      $('.slidesInfo').on('afterChange', function(event, slick, direction){
        console.log(direction)
          if(direction==4){
            $('#prev').css('display','none')
            $('#next').css('display','block')
          }else if(direction ==0){
            $('#prev').css('display','block')
            $('#next').css('display','none')
          }
          else {
            $('#prev').css('display','block')
            $('#next').css('display','block')
          }
      });
    }
  }

  let resMedeia4 = window.matchMedia("(max-width: 1000px)")
  resHeaderContents4(resMedeia4)
  resMedeia4.addListener(resHeaderContents4)
  function resHeaderContents4(x) {
    if(x.matches) {
      $('.slidesInfo').on('afterChange', function(event, slick, direction){
         
          if(direction == 2){
            $('#prev').css('display','block')
            $('#next').css('display','block')
          }
          
          if(direction==0) {
            $('#next').css('display','none')
          }

          if(direction==8) {
            $('#prev').css('display','none')
          }
          else{
            $('#prev').css('display','block')
          }
      });
    }
    else {
    
    }
  }

  let resMedeia5 = window.matchMedia("(max-width: 807px)")
  resHeaderContents5(resMedeia5)
  resMedeia5.addListener(resHeaderContents5)
  function resHeaderContents5(x) {
    if(x.matches) {
      $('.slidesInfo').on('afterChange', function(event, slick, direction){
        
          if(direction == 1){
            $('#prev').css('display','block')
            $('#next').css('display','block')
          }
          
          if(direction==0) {
            $('#next').css('display','none')
          }

          if(direction==10) {
            $('#prev').css('display','none')
          }
          else{
            $('#prev').css('display','block')
          }
      });
    }
    else {
    
    }
  }

  let resMedeia6 = window.matchMedia("(max-width: 550px)")
  resHeaderContents6(resMedeia6)
  resMedeia6.addListener(resHeaderContents6)
  function resHeaderContents6(x) {
    if(x.matches) {
      $('.slidesInfo').on('afterChange', function(event, slick, direction){
          if(direction == 1){
            $('#prev').css('display','block')
            $('#next').css('display','block')
          }
          
          if(direction==0) {
            $('#next').css('display','none')
          }

          if(direction==12) {
            $('#prev').css('display','none')
          }
          else{
            $('#prev').css('display','block')
          }
      });
    }
    else {
    
    }
  }
})

