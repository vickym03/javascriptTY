console.log("==============object =========")
console.log(".........obj1")
        var ob1 = {
            car:"alto",
            price:88,
            color:"black",
            fullDetails:function(){
                return this.car
            }
        }
        console.log(ob1)

        console.log(".........obj2")
        var ob2 = {
            car:"alto",
            price:80998,
            color:"red",
            fullDetails:function(){
                return this.car
            }
        }
        console.log(ob3)

        console.log(".........obj3")
        var ob3 = {
            car:"audi",
            price:811108,
            color:"white",
            fullDetails:function(){
                return this.car
            }
        }
    for(let res3 in ob3){
        console.log(ob3[res3]+" res3")
    }

        console.log(".........obj4")
        var obj4 = new Object()
        obj4.laptop = "asus",
        obj4.color = "gray",
        obj4.price=9090,
        obj4.full = function(){ return this.obj4.laptop}

        console.log(obj4)

        console.log(".........obj5")
        var obj5 = new Object()
        obj5.laptop = "Realme",
        obj5.color = "silver",
        obj5.price=90910,
        obj5.full = function(){ return this.obj5.laptop}

        console.log(obj5)
