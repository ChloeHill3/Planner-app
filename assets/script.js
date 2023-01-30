//Declared variables
let currentDayEl = moment().format(`LLL`)
document.getElementById("currentDay").textContent = currentDayEl
let timeBlock = document.getElementsByClassName("time-block")

function tenseColor (){
   let rowHour = moment().hours();

   $(".time-block").each(function (){
      let currentHour = parseInt($(this).attr("id"));

      if (currentHour === rowHour) {
         $(this).addClass("present");
      } else if (currentHour > rowHour){
         $(this).addClass("future"); 

      } else {
         $(this).addClass("past");
      }
   })
}

$(".saveBtn").on("click", function(event){
   event.preventDefault()
   let time = $(this).siblings(".time-block").attr("id");
   let dayEvent = $(this).siblings(".time-block").val();

   // THEN the text for that event is saved in local storage
   localStorage.setItem(time, dayEvent);


})


$("row .time-block").val(localStorage.getItem("9"));
  $("row .time-block").val(localStorage.getItem("10"));
  $("row .time-block").val(localStorage.getItem("11"));
  $("row .time-block").val(localStorage.getItem("12"));
  $("row .time-block").val(localStorage.getItem("13"));
  $("row .time-block").val(localStorage.getItem("14"));
  $("row .time-block").val(localStorage.getItem("15"));
  $("row .time-block").val(localStorage.getItem("16"));
  $("row .time-block").val(localStorage.getItem("17"));
tenseColor();


