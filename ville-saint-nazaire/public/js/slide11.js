let initSlide11 = function(){


  function myMove(id,top1,left1) {

    var elem = document.getElementById(id);

    var top = 0;
    var left = 50;

    let coeff1 = (top1)/8;
    let coeff2 = (left1-50)/8;

    if(left1<50){
      var id = setInterval(frame, 100);

      function frame() {

        if (top >= top1) {
          clearInterval(id);
        } else {
          top=top+coeff1;
          left=left+coeff2;
          elem.style.top = top + '%';
          elem.style.left = left + '%';
        }
      }
    }else if(left1>50){
      var id = setInterval(frame, 100);

      function frame() {

        if (top >= top1) {
          clearInterval(id);
        } else {
          top=top+coeff1;
          left=left+coeff2;
          elem.style.top = top + '%';
          elem.style.left = left + '%';
        }
      }


    }
  }


  myMove("maq1_1",45,14)
  myMove("maq1_2",53,10.2)
  myMove("maq1_3",34,12)
  myMove("maq1_4",38,6.5)
  myMove("maq1_5",43,5)
  myMove("maq1_6",39.5,20)
  myMove("maq1_7",59,21.5)


  myMove("maq2_1",47,46)
  //myMove("maq2_2",41,50)
  myMove("maq2_3",45,41)
  myMove("maq2_4",55,53)
  myMove("maq2_5",58,45)
  myMove("maq2_6",34,44)
  myMove("maq2_7",35,42)


  myMove("maq3_1",48,81)
  myMove("maq3_2",58,78.3)
  myMove("maq3_3",38.5,76.5)
  myMove("maq3_4",54,69)
  //myMove("maq3_5",46.7,70)
  myMove("maq3_6",33,83)
  myMove("maq3_7",35.5,74.7)




  d3.select('#next12').on('click', function(){
    mySlidr.slide('page-12');
    initSlide12();
  });

  d3.select('#next13').on('click', function(){
    mySlidr.slide('page-13');
    initSlide13();
  });

  d3.select('#next14').on('click', function(){
    mySlidr.slide('page-14');
    initSlide14();
  });
}




