var countDown = new Date ("Oct 29, 2024 07:30:00").getTime();
var x = setInterval(function(){
    var now = new Date().getTime();
    var distance = countDown - now;

    var days = Math.floor(distance / (1000*60*60*24)); //Day counter Fake
    var hours = Math.floor((distance % (1000*60*60*24)) / (1000*60*60)); //Hour counter Fake
    var minutes = Math.floor((distance % (1000*60*60)) / (1000*60)); //Minute counter Fake
    var seconds = Math.floor((distance % (1000*60)) / 1000); //Second counter Fake

    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

    if(distance < 0){
        clearInterval(x);
        document.getElementById("days").innerHTML = "00";
        document.getElementById("hours").innerHTML = "00";
        document.getElementById("minutes").innerHTML = "00";
        document.getElementById("seconds").innerHTML = "00";
    }
},1000);