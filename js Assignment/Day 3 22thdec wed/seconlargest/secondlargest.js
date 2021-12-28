console.log("---------------Named function------------------");

function secondLargest(arr)
{
    for(var i=0;i<=arr.length;i++)
    {
        for(var j=i;j<=arr.length;j++)
        {
            if(arr[i]<=arr[j])
            {
                var temp=arr[i];
                arr[i]=arr[j];
                arr[j]=temp;
          }
        }
    }
    console.log("Second largest number in array",arr[1]);
}
var arr=[90,30,70,100,50,40]
secondLargest(arr);




console.log("---------------annonymus function------------------");

var secondLargest=function(arr)
{
    for(var i=0;i<=arr.length;i++)
    {
        for(var j=i;j<=arr.length;j++)
        {
            if(arr[i]<=arr[j])
            {
                var temp=arr[i];
                arr[i]=arr[j];
                arr[j]=temp;
          }
        }
    }
    console.log("Second largest number in array",arr[1]);
}
var arr=[0,30,70,80,400,340,40]
secondLargest(arr);



console.log("---------------Self invoke function------------------");

(function(arr)
{
    for(var i=0;i<=arr.length;i++)
    {
        for(var j=i;j<=arr.length;j++)
        {
            if(arr[i]<=arr[j])
            {
                var temp=arr[i];
                arr[i]=arr[j];
                arr[j]=temp;
          }
        }
    }
    console.log("Second largest number in array",arr[1]);
})([1,300,70,80,297,5,40])


console.log("-----------------Arrow function-------");


    var secondLargest=arry=>{
        
    for(var i=0;i<=arry.length;i++)
    {
        for(var j=i;j<=arry.length;j++)
        {
            if(arry[i]<=arry[j])
            {
                var temp=arry[i];
                arry[i]=arry[j];
                arry[j]=temp;
          }
        }
    }
    console.log("Second largest number in array",arry[1]);
}
var arry=[1000,30,70,80,599,40]
secondLargest(arry);