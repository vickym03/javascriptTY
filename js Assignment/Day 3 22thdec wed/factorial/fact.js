console.log("-----Named function----");

function factNum(num)
{
    let fact=1;
    for(i=1;i<=num;i++)
    {
         fact=fact*i
        
    }
    console.log(`factorial of ${num}=${fact}`);
}
factNum(5)





console.log("-----Annonymus function----");

const factNum1=function(num)
{
    let fact=1;
    for(i=1;i<=num;i++)
    {
         fact=fact*i
        
    }
    console.log(`factorial of ${num}=${fact}`);
}
factNum1(10)



console.log("------------arrow function----------");


const factNum2=num=>{
    let fact=1;
for(i=1;i<=num;i++)
{
    fact=fact*i
}
return fact;
}
console.log(` factorial of number=${factNum2(4)}`);


console.log("------------Self invoke function----------");

(function(num){
    let fact=1;
    for(let i=1;i<=num;i++)
{
    fact=fact*i
}
console.log(` factorial of number=${fact}`);

})(4)