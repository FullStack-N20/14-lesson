class Box {
    constructor(length, width, height) {
        this.length = length;
        this.width = width;
        this.height = height;
    }

    getVolume() {
        return this.length * this.width * this.height;
    }

    totalVolume(...boxes) {
        return boxes.reduce((acc, box) => acc + box.getVolume(), 0);
    }
}

const box1 = new Box(2, 3, 4);
const box2 = new Box(2, 3, 4);

console.log(box1.getVolume()); 
console.log(box2.getVolume()); 

console.log(box1.totalVolume(box1, box2)); 
