var sysDate = new Date();
console.log(sysDate);
console.log(sysDate.getFullYear());
console.log(sysDate.getHours(2));
console.log(sysDate.getDate());
console.log(sysDate.getMonth());
console.log(sysDate.getDate());

//returs date by adding milliseconds to jan 1 1970
var dateUsingMillisecondConst = new Date(86400000)  
console.log(dateUsingMillisecondConst )

console.log("-----------------------------------------")

var dateStringConst = new Date('dec 12 2020');
console.log(dateStringConst);
console.log(dateStringConst.getDate());
console.log(dateStringConst.getFullYear());

//dd/mm/yyyy
var dateVal = dateStringConst.getDate();
var monthVal = dateStringConst.getMonth();
var yearVal = dateStringConst.getFullYear();
console.log(`${dateVal}/${monthVal+1}/${yearVal}`);

console.log("------------------------------------------------------")
//new Date(year,month,day,hours,minutes,seconds,milliseconds) Constructor
var dateObj = new Date(2021, 11);
console.log(dateObj);

var dateObj1 = new Date(2021,10,21);
console.log(dateObj1);

var dateObj2 = new Date(2021, 0,21,12,56,56,878);
console.log(dateObj2);
console.log(dateObj2.getMilliseconds() +" "+ "milliseconds");  // milliseconds
console.log(dateObj2.getSeconds() +" "+ "Seconds");       // second

console.log("------------------------------------------------------")

//tuesday, december , 21 , 2021 

var systemDate1 = new Date('jan 21 2021');
var dayVal = systemDate1.getDay();
var monVal = systemDate1.getMonth();
var yearVal = systemDate1.getFullYear();
var dateVal = systemDate1.getDate();

var months = ["Jan", "Feb", "March", "April", "May", "june", "July", "August", "September", "october", "November", "December"];
var monthData = months[monVal];

var weekDays =["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
var weekData = weekDays[dayVal];

console.log(`${weekData}, ${monthData}, ${dateVal}, ${yearVal}`)
// console.log(weekData+","+monthData + ","+dateVal+","+ yearVal);



var local = new Date();
 console.log(local)
 //'en-US'
var  formatted = local.toLocaleDateString('kan-IN' , 
{
    weekday :'long',
    month : 'short',
    year: 'numeric',
    day: 'numeric'
    })

    console.log(formatted)







