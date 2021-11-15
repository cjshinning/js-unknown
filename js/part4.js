function mixin(srcObj,  tarObj){
    for(var key in srcObj){
        if(!(key in tarObj)){
            tarObj[key] = srcObj[key];
        }
    }
    return tarObj;
}

var Vehicle = {
    engines: 1,
    ignition: function(){
        console.log('turning on my engine');
    },
    drive: function(){
        this.ignition();
        console.log('steering and moving forward!');
    }
}

var Car = mixin(Vehicle, {
    wheels: 4,
    drive: function(){
        Vehicle.drive.call(this);
        console.log(
            "Rolling on all " + this.wheels + " wheels!"
        );
    }
})

console.log(Car.engines);
console.log(Car.wheels);
Car.drive();