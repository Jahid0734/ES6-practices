class Parents {
    constructor(){
        this.fathername = "MOkhlam"
    }
}
class Chiled extends Parents {
    constructor(name){
        super();
        this.name = name;
    }
    getFullName(){
        return this.name + " " + this.fathername;
    }
}
const baby = new Chiled("Kamrul");
const baby2 = new Chiled("tom")
console.log(baby.getFullName());
console.log(baby2.getFullName())