var fiat = {
    make: "Fiat",
    model: "500",
    year: 1957, 
    color: "Medium Blue",
    passengers: 2,
    convertible: false,
    mileage: 88000,
	fuel: 0,
    started: false,

    start: function() {
        if (this.fuel == 0) {
            alert("This car is on empty, fill up before starting");
        } else {
            this.started = true;
            }
        },
        
    stop: function() {
        this.started = false;
    },

    drive: function () {
        if (this.started) {
            if (this.fuel > 0) {
                alert (this.make + "" + this.model + "goes zoom zoom!");
                this.fuel = this.fuel - 1;
            } else {
                alert ("Uh oh, out of fuel.");
                this.stop();
            }
            } else {
            alert ("You need to start the engine first.");
        }
    },

    addFuel : function (amount) {
        this.fuel = this.fuel + amount;
        //remember fuel is an object property so we need this keyword. 
        //but amount is a function parameter, so we do not need this keyword.
    }
};

fiat.start();
fiat.drive();
fiat.addFuel(2);
fiat.start();
fiat.drive();
fiat.drive();
fiat.drive();
fiat.stop();

