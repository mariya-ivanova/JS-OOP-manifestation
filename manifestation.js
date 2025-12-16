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

let dimension5 = new d5();
let dimension4 = new d4();
let dimension3 = new d3();

let select = document.querySelector('#dimension');
let result = document.querySelector('#result');

select.addEventListener('change', function() {
    let dimension;
    switch (this.value) {
        case "5":
            dimension = dimension5;
            break;
        case "4":
            dimension = dimension4;
            break;
        case "3":
            dimension = dimension3;
            break;
        default:
            dimension = 0;
    }

    if(dimension != 0) {
        result.textContent = dimension.manifest();        
    }
    else {
        result.textContent = "Unknown dimension";
    }    
});



