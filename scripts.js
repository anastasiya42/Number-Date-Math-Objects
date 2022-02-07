 //function is called when start demo button is clicked
function mathMethods() {
//variables are created from HTML IDs
let addMath = document.getElementById("getNumbers");
    let fnum = document.getElementById("fnum").value,
            snum = document.getElementById("snum").value,
//variables are created that will hold the min, max, and powered once worked on by the Math Methods
            maxnum = 0,
            minnum = 0,
            powered = 0;
        fnum = (+fnum === 0) ? 0 : +fnum || false;
        snum = (+snum === 0) ? 0 : +snum || false;
        event.preventDefault();
//if statement that begins working on the inputted values and creates new values with the Math Methods
        if ((fnum !== false) && (snum !== false)) {
            maxnum = Math.max(fnum, snum);
            minnum = Math.min(fnum, snum);
            powered = Math.pow(fnum, snum);
//new values are displayed in HTML
        addMath.innerHTML = minnum + " is the smallest of the two numbers, and " + fnum + " to the power of " + snum + " is " + powered + ". ";
        }
        else {
            alert("Please enter two numbers.");
        }
    } 
//function is called when start demo is clicked
function dateObject() {
//new instance of the date object is created
    let today = new Date(),
//date methods work on the instance to create new variables for times and dates
        day = today.getDate(),
        month = today.getMonth(),
        year = today.getFullYear(),
        hour = today.getHours(),
        minute = today.getMinutes();
//displays AM or PM depending on a conditional statement for hour
    AMorPM = (hour >= 12) ? "PM" : "AM";
//statements that converts hour into non-Military time
    hour = (hour >= 13) ? hour -= 12 : hour;
    hour = (hour < 1) ? 12 : hour;
    minute = (minute < 10) ? "0" + minute : minute;
//variable created from HTML ID
    addDate = document.getElementById("DateAndTime");
//month is incremented by 1 to show the standard 12 months
    month += 1;
//new variables are added to HTML 
    addDate.innerHTML = "Todays Date is " + month +"/"+ day +"/"+ year + " and the time is " + hour + ":" + minute + " " + AMorPM + ".";
//timer function created so time displays accurately
    setTimeout(function() { dateObject(); }, 1000);
}
//function created when start demo is clicked
function numberObject() {
//variable created that will be worked on by the number object
    let number = 100;
//new variable that will hold the variable with the number method
    let newNumber = number.toExponential();
    let addNumber = document.getElementById("getNumber");
//new variables added to HTML
    addNumber.innerHTML = number + " in exponential notation is " + newNumber;
    
}