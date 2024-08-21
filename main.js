function PersonalComputer(CPU, GPU, RAM, MBoard, Monitor) {
    this.CPU = CPU;
    this.GPU = GPU;
    this.RAM = RAM;
    this.MBoard = MBoard;
    this.Monitor = Monitor;
}

function DeskTop(CPU, GPU, RAM, MBoard, Monitor) {
    PersonalComputer.call(this, CPU, GPU, RAM, MBoard, Monitor);
}

function Notebook(CPU, GPU, RAM, MBoard) {
    PersonalComputer.call(this, CPU, GPU, RAM, MBoard);
}

const MyDesktop = new DeskTop ("Ryzen 5 3600", "AMD Radeon 6750XT", 16, "Aorus Master X570", "CENTAURI PULSE");
const RandomNotebook = new Notebook ("Ryzen 3", "AMD Radeon610 integrada", 4, "Asrock X570");
const PCdoFunkyBC = new DeskTop ("AMD Ryzen 9 5900X", "RTX 3080 TI", 32, "B550I Aorus Pro AX") 

console.log(MyDesktop);
console.log(RandomNotebook);
console.log(PCdoFunkyBC);