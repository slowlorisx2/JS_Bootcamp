class Computer{
    constructor(cpu, ram, hardDrive) {
        this.cpu = cpu;
        this.ram = ram;
        this.hardDrive = hardDrive;
    }
}

class Laptop extends Computer{
    constructor(cpu, ram, hardDrive, display){
        super(cpu, ram, hardDrive)
        this.display = display;
        this.specs = function() {
            var message = "This laptop has a " + this.cpu + " cpu, " + this.ram + "GB of RAM, " + this.hardDrive 
                        + " GB of hardrive Capacity, and " + this.display + " inches display.";
            return message;
        
        }
    }
}

var toshibaLaptop = new Laptop("Intel", 8, 500, 15);
console.log(toshibaLaptop.specs());
