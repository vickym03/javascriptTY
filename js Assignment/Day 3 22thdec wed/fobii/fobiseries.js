
console.log("---------------Named function------------------");

function Febbonaci(n)
{
    var f1=0;
    var f2=1;
    var next=0;
    for(i=0;i<=n;i++)
    {
    next=f1+f2;
    console.log(f1);
    f1=f2;
    f2=next;
  }   
}
Febbonaci(10)


console.log("---------------Annonymus function------------------");

Febbonaci=function(n)
{
    var f1=0;
    var f2=1;
    var next=0;
    for(i=0;i<=n;i++)
    {
    next=f1+f2;
    console.log(f1);
    f1=f2;
    f2=next;
  }   
}
Febbonaci(15)



console.log("---------------Arrow function------------------");

 var Febbonaci=n=>
{
    var f1=0;
    var f2=1;
    var next=0;
    for(i=0;i<=n;i++)
    {
    next=f1+f2;
    console.log(f1);
    f1=f2;
    f2=next;
  }   
}
Febbonaci(5)


console.log("---------------self invoke function------------------");

 (function(n)
{
    var f1=0;
    var f2=1;
    var next=0;
    for(i=0;i<=n;i++)
    {
    next=f1+f2;
    console.log(f1);
    f1=f2;
    f2=next;
  }   
})(6)