let initSlide11 = function(){


  function set(id){
    var elem = document.getElementById(id);
    elem.style.visibility='visible';
  }


  function display(id, callback = null) {
    setTimeout(function() {
      document.getElementById(id).style.visibility = "visible"
      if (callback != null) {
        callback()
      }
    }, 200)
  }
 
 
 
  display("maq1_1", () => display("maq1_2", () => display("maq1_3", () => display("maq1_4",() => display("maq1_5",() => display("maq1_6",() => display("maq1_7")))))))

  display("maq2_1", () => display("maq2_2", () => display("maq2_3", () => display("maq2_4",() => display("maq2_5",() => display("maq2_6",() => display("maq2_7")))))))

  display("maq3_1", () => display("maq3_2", () => display("maq3_3", () => display("maq3_4",() => display("maq3_5",() => display("maq3_6",() => display("maq3_7")))))))




  d3.select('#next12-1').on('click', function(){
    moveDown();
    initSlide12();
  });

  d3.select('#next12-2').on('click', function() {
    moveDown();
    initSlide12();
  });


  d3.select('#next12-3').on('click', function(){
    moveDown();
    initSlide12();
  });
}
