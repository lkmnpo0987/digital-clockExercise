function updateClock() {
    //current data
    let Time = new Date();
    let Hour = Time.getHours();
    let Minutes = Time.getMinutes();
    let Seconds = Time.getSeconds();
   
    let timeOfDay = (Hour < 12) ? "AM" : "PM"
    let h = Hour % 12;
    for(h=1;h<=24;h++){
    if(h>=4 && h< 12){
        var greeting = "Good Morning";
    }
    else if(h>=12 && h<17){
        var greeting = "Good Afternoon";
    }
    else if(h>=17 && h<=20)
    {
        var greeting = "Good Evening";
    }
    else if(h>=21)
    {
        var greeting = "Good Night";
    }
}

    // if (Hour>=12  && Hour < 6){
    //     let greeting = "Good afternoon"
    // }
    // if (Hour>=6  && Hour<= 12){
    //     let greeting = "Good evening"
    // }
    // if(Hour>12 && Hour<3){
    //     let greeting = "Good night"

    // }
    // else{
    //     var greeting = "Good Evening"
    // }
    


    document.getElementById("greeting").innerText = greeting;
    
    Minutes = (Minutes < 10 ? "0" : "") + Minutes;
    Seconds = (Seconds < 10 ? "0" : "") + Seconds;
    Hour = Hour < 10 ? `0${Hour}` : Hour;

    Hour = (Hour>12) ? Hour - 12 : Hour;
    Hour = (Hour==0) ?  12 : Hour;

    let TimeStr =Hour + ":" + Minutes + ":" + Seconds + " " + timeOfDay 
    
    document.getElementById("clock").innerHTML = TimeStr
    
    // let dateStr = Day + " " + Month + " " + Year ;
    // document.getElementById("clock").innerHTML = dateStr 
    
    //date of the day
   
    
}
function updateDate() {
    //current data
    let myDate = new Date();
    let Day = myDate.getDay();
    let Month = myDate.getMonth();
    let Year = myDate.getFullYear();
    
        if(Year<1000)
        {
            Year+=1000;
        }
    let daym = myDate.getDate();
 
    var monthArray = new Array("Jan","Feb","March","April","May","June","July","August","September","October","November","December");

    let dateStr =daym +  " " + monthArray[Month] + " "+ Year;
    
    document.getElementById("date").innerHTML = dateStr
}
