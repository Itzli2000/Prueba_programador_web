$(document).ready(function() {
  var today = new Date();
  var rangepres = document.getElementById("prestamo");
  var rangeday = document.getElementById("dayrate");
  var qut = document.getElementById("quant");
  var days = document.getElementById("totdays");
  var btnless =  document.getElementById("prestamoless");
  var btnmore = document.getElementById("prestamomore");
  var dayless = document.getElementById("dayless");
  var daymore = document.getElementById("daymore");
  var taxes = document.getElementById("tax");
  var yours = document.getElementById("yourmoney");
  var tot = document.getElementById("total");
  var datepay = document.getElementById("date");
  var smoney = document.getElementById("slide-grow-money");
  var btnmn = document.getElementById("btnmoney");
  var sday = document.getElementById("slide-grow-day");
  var btnday = document.getElementById("btnday");
  var loan = parseFloat(rangepres.value);
  var mytax = parseFloat(rangepres.value * .16).toFixed(2) ;
  var totalpay = parseFloat(+loan + +mytax).toFixed(2);
  today.setDate(today.getDate() + parseInt(rangeday.value));
  // Convert date info
  var dd = today.getDate();
  var weekday = new Array(7);
  weekday[0] = "Domingo";
  weekday[1] = "Lunes";
  weekday[2] = "Martes";
  weekday[3] = "Miercoles";
  weekday[4] = "Jueves";
  weekday[5] = "Viernes";
  weekday[6] = "Sábado";
  var day = weekday[today.getDay()];
  var month = new Array();
  month[0] = "Enero";
  month[1] = "Febrero";
  month[2] = "Marzo";
  month[3] = "Abril";
  month[4] = "Mayo";
  month[5] = "Junio";
  month[6] = "Julio";
  month[7] = "Agosto";
  month[8] = "Septiembre";
  month[9] = "Octubre";
  month[10] = "Noviembre";
  month[11] = "Deciembre";
  var mm = month[today.getMonth()];
  var yyyy = today.getFullYear();
  if(dd<10) {
    dd = '0'+dd
  } 
  if(mm<10) {
    mm = '0'+mm
  } 
  var finaledate = dd + " de " + mm;

  // Write information on frontend
  qut.innerHTML = rangepres.value;
  days.innerHTML = rangeday.value + " días";
  yours.innerHTML = "$ "+ loan;
  taxes.innerHTML = "$ "+ mytax;
  tot.innerHTML = totalpay;
  datepay.innerHTML = day + "<br>" + finaledate;


  // Function to detect clicks on more and less buttons for money
  $('#prestamoless').on("click", function() {
    console.log("less clicked");
    var pwid = document.getElementById("slide-grow-money").offsetWidth;
    var btnpos = parseFloat($("#btnmoney").css("left"));
    var smoney = document.getElementById("slide-grow-money");
    var btnmn = document.getElementById("btnmoney");
    var sday = document.getElementById("slide-grow-day");
    var btnday = document.getElementById("btnday");
    if($('#prestamo').val() > 1000){
      var pres = parseInt($('#prestamo').val() - 10);
      console.log(btnpos);
      smoney.style.width = pwid - 0.5 + "px";
      btnmn.style.left = btnpos - 0.5 + "px";
      $('#prestamo').val(pres);
      $('#prestamo').trigger('change');
      var loanchange = $('#prestamo').val();
      console.log(loanchange)
      yours.innerHTML = "$ "+ pres;
      qut.innerHTML = "$ "+ pres;
      changeLoan(pres);
    }
  });
  $('#prestamomore').on("click", function() {
    console.log("more clicked");
    var pwid = document.getElementById("slide-grow-money").offsetWidth;
    var btnpos = parseFloat($("#btnmoney").css("left"));
    var smoney = document.getElementById("slide-grow-money");
    var btnmn = document.getElementById("btnmoney");
    if($('#prestamo').val() < 5000){
      var pres = parseInt($('#prestamo').val())+ 10;
      console.log(btnpos);
      smoney.style.width = pwid + 0.5 + "px";
      btnmn.style.left = btnpos + 0.5 + "px";
      $('#prestamo').val(pres);
      $('#prestamo').trigger('change');
      var loanchange = $('#prestamo').val();
      console.log(loanchange)
      yours.innerHTML = "$ "+ pres;
      qut.innerHTML = "$ "+ pres;
      changeLoan(pres);
    }
  });
  // Function to detect clicks on more and less buttons for days
  $('#dayless').on("click", function() {
    console.log("less clicked");
    var pwid = document.getElementById("slide-grow-day").offsetWidth;
    var btnpos = parseInt($("#btnday").css("left"));
    var sday = document.getElementById("slide-grow-day");
    var btnday = document.getElementById("btnday");
    if($('#dayrate').val() > 1){
      var pres = parseInt($('#dayrate').val() - 1);
      console.log(pres);
      sday.style.width = pwid - 4 + "px";
      btnday.style.left = parseInt(btnpos - 3) + "px";
      $('#dayrate').val(pres);
      $('#dayrate').trigger('change');
      var loanchange = $('#dayrate').val();
      console.log(loanchange)
      yours.innerHTML = "$ "+ pres;
      qut.innerHTML = "$ "+ pres;
      changeLoan(pres);
    }
  });
  $('#daymore').on("click", function() {
    console.log("more clicked");
    var pwid = document.getElementById("slide-grow-day").offsetWidth;
    var btnpos = parseInt($("#btnday").css("left"));
    var sday = document.getElementById("slide-grow-day");
    var btnday = document.getElementById("btnday");
    if($('#dayrate').val() < 30){
      var pres = parseInt($('#dayrate').val())+ 1;
      console.log(pres);
      sday.style.width = pwid + 5 + "px";
      btnday.style.left = parseInt(btnpos + 4) + "px";
      $('#dayrate').val(pres);
      $('#dayrate').trigger('change');
      var loanchange = $('#dayrate').val();
      console.log(loanchange)
      yours.innerHTML = "$ "+ pres;
      qut.innerHTML = "$ "+ pres;
      changeLoan(pres);
    }
  });




  // Refresh all data
  function changeLoan(loan)
  {
    var today = new Date();
    var rangepres = document.getElementById("prestamo");
    var rangeday = document.getElementById("dayrate");
    var qut = document.getElementById("quant");
    var days = document.getElementById("totdays");
    var btnless =  document.getElementById("prestamoless");
    var btnmore = document.getElementById("prestamomore");
    var dayless = document.getElementById("dayless");
    var daymore = document.getElementById("daymore");
    var taxes = document.getElementById("tax");
    var yours = document.getElementById("yourmoney");
    var tot = document.getElementById("total");
    var datepay = document.getElementById("date");
    var loan = parseFloat(rangepres.value);
    var mytax = parseFloat(rangepres.value * .16).toFixed(2) ;
    var totalpay = parseFloat(+loan + +mytax).toFixed(2);
    today.setDate(today.getDate() + parseInt(rangeday.value));
    var dd = today.getDate();
    var weekday = new Array(7);
    weekday[0] = "Domingo";
    weekday[1] = "Lunes";
    weekday[2] = "Martes";
    weekday[3] = "Miercoles";
    weekday[4] = "Jueves";
    weekday[5] = "Viernes";
    weekday[6] = "Sábado";
    var day = weekday[today.getDay()];
    var month = new Array();
    month[0] = "Enero";
    month[1] = "Febrero";
    month[2] = "Marzo";
    month[3] = "Abril";
    month[4] = "Mayo";
    month[5] = "Junio";
    month[6] = "Julio";
    month[7] = "Agosto";
    month[8] = "Septiembre";
    month[9] = "Octubre";
    month[10] = "Noviembre";
    month[11] = "Deciembre";
    var mm = month[today.getMonth()];
    var yyyy = today.getFullYear();
    if(dd<10) {
      dd = '0'+dd
    } 
    if(mm<10) {
      mm = '0'+mm
    } 
    var finaledate = dd + " de " + mm;

  // Write information on frontend
  qut.innerHTML = rangepres.value;
  days.innerHTML = rangeday.value + " días";
  yours.innerHTML = "$ "+ loan;
  taxes.innerHTML = "$ "+ mytax;
  tot.innerHTML = totalpay;
  datepay.innerHTML = day + "<br>" + finaledate;
}
});