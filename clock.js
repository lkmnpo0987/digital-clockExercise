function updateClock() {
    //current data
    let Time = new Date();
    let Hour = Time.getHours();
    let Minutes = Time.getMinutes();
    let Seconds = Time.getSeconds();

    let timeOfDay = (Hour < 12) ? "AM" : "PM"
   
        
        if (Hour >= 4 && Hour < 12) {
            var greeting = "Good Morning";
        }
        else if (Hour >= 12 && Hour < 17) {
            var greeting = "Good Afternoon";
        }
        else if (Hour >= 17 && Hour <= 20) {
            var greeting = "Good Evening";
        }
        else if (Hour >= 21 && Hour<=24) {
            var greeting = "Good Night";
        }



    document.getElementById("greeting").innerText = greeting;

    Minutes = (Minutes < 10 ? "0" : "") + Minutes;
    Seconds = (Seconds < 10 ? "0" : "") + Seconds;
    
    
    Hour = (Hour > 12) ? Hour - 12 : Hour;
    Hour = (Hour == 0) ? 12 : Hour;
    Hour = (Hour < 10 ? "0" : "") + Hour;
    
    let TimeStr = Hour + ":" + Minutes + ":" + Seconds + " " + timeOfDay

    document.getElementById("clock").innerHTML = TimeStr



}
function updateDate() {
    //current data
    let myDate = new Date();
    let Day = myDate.getDay();
    let Month = myDate.getMonth();
    let Year = myDate.getFullYear();

    if (Year < 1000) {
        Year += 1000;
    }
    let daym = myDate.getDate();

    var monthArray = new Array("Jan", "Feb", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December");

    let dateStr = daym + " " + monthArray[Month] + " " + Year;

    document.getElementById("date").innerHTML = dateStr
}

       
        
