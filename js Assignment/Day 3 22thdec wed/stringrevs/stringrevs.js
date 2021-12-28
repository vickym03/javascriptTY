console.log("====================Named function=============");

function revString(str)
{
    var revString=" ";
    for (const char of str) {
        revString=char+revString;
        
    }
    console.log( `reversed string is ${revString}`);
    
}
var str1="12345"
revString(str1)

console.log("====================Annonymus function=============");

var revString=function(str)
{
    var revString=" ";
    for (const char of str) {
        revString=char+revString;
   
    }
    console.log( `reversed string is ${revString}`);
    
}
var str1="Abcfdsa"
revString(str1)



console.log("==============Arrow function=================");

var revString=str=>
{
    var revString=" ";
    for (const char of str) {
        revString=char+revString;
   
    }
    console.log( `reversed string is ${revString}`);
    
}
var str2="xyzsdga"
revString(str2)



console.log("==============self invoked function=================");

(function(str)
{
    var revString=" ";
    for (const char of str) {
        revString=char+revString;
   
    }
    console.log( `reversed string is ${revString}`);
    
})("ETAVELEONHCET ")