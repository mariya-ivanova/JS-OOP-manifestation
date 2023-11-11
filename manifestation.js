class d5 {
    constructor () {
        this.id = 5;
    }
    manifest () {
        return `In ${this.id}-th dimention manifestation comes through Feelings`;
    }
}

class d4 extends d5 {
    constructor () {
        super();
        this.id--;
    }
    manifest () {
        return super.manifest()  + " + Thoughts";
    }
}

class d3 extends d4 {
    constructor () {
        super();
        this.id--;
    }
    manifest () {
        return super.manifest() + " + Actions! Positive thinking is not enough." ;
    }
}

let dimension5 = new d5(),
result = dimension5.manifest();
// console.log(result);
document.write(result);

let dimension4 = new d4();
result = dimension4.manifest();
// console.log(result);
document.write('<br/>' + result);

let dimension3 = new d3();
result = dimension3.manifest();
// console.log(result);
document.write('<br/>' + result);
