
const arr = [100,30,70,80,50,40];

console.log("---------------Named function------------------");

function bobbleSort(arr)
{
    for(var i=0;i<=arr.length;i++)
    {
        for(var j=i;j<=arr.length;j++)
        {
            if(arr[i]>=arr[j])
            {
                var temp=arr[i];
                arr[i]=arr[j];
                arr[j]=temp;
          }
        }
    }
    console.log("array in assending oder",arr);
}

bobbleSort(arr);




console.log("---------------annonymus function------------------");

var bobbleSort=function(arr)
{
    for(var i=0;i<=arr.length;i++)
    {
        for(var j=i;j<=arr.length;j++)
        {
            if(arr[i]>=arr[j])
            {
                var temp=arr[i];
                arr[i]=arr[j];
                arr[j]=temp;
          }
        }
    }
    console.log("array in assending oder",arr);
}

bobbleSort(arr);



console.log("---------------Self invoke function------------------");

(function(arr)
{
    for(var i=0;i<=arr.length;i++)
    {
        for(var j=i;j<=arr.length;j++)
        {
            if(arr[i]>=arr[j])
            {
                var temp=arr[i];
                arr[i]=arr[j];
                arr[j]=temp;
          }
        }
    }
    console.log("array in assending oder",arr);
})([10,30,70,80,50,40])


console.log("-----------------Arrow function-------");


var bobbleSort=(arrA)=>
{
    for(var i=0;i<=arr.length;i++)
    {
        for(var j=i;j<=arr.length;j++)
        {
            if(arr[i]>=arr[j])
            {
                var temp=arr[i];
                arr[i]=arr[j];
                arr[j]=temp;
          }
        }
    }
    console.log("array in assending oder",arrA);
}

bobbleSort(arr);
