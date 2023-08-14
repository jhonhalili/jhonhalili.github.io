var countDownDate = new Date("March 3, 2024 12:00:00").getTime();
            var countdownfunction = setInterval(function(){
                var now = new Date().getTime();
                var distance = countDownDate - now;
        
                var days = Math.floor(distance / (1000 * 60 * 60 * 24));
                var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                var seconds = Math.floor((distance % (1000 * 60))/ 1000);
        
                document.getElementById("bilang").innerHTML = days + "d " + hours + "h "
                + minutes + "m " + seconds + "s";
        
                if (distance < 0){
                    clearInterval(countdownfunction);
                    document.getElementById("bilang").innerHTML = "EXPIRED";
                }
            }, 1000);

function openCity(evt, cityName){
    var i, tabcontent, tablinks;

    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++){
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++){
        tablinks[i].className = tablinks[i].className.replace("active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className+=" active";
}
    