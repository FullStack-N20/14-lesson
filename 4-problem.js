class Magic {
    constructor(){}

	replace(a, b){
        let c = a;
        a = b;
        b = c;
        return [a, b];
	}

	length(data){
        let counter = 0;
        let data1 = data.split("");
        for (const item of data1) {
            counter++;
        }
        return counter;

	}
	toUpperCase(str){
        let result = "";
        for (const char of str) {
            result += char.charCodeAt(0) >= 97 && char.charCodeAt(0) <= 122 ? String.fromCharCode(char.charCodeAt(0) - 32) : char;
        }
        return result;
    }

	repeat(data, n){
        let result = "";
        for (let i = 0; i < n; i++) {
            result += data + " ";
        }
        return result;
	}

	count(str){
        let result = {};
        for (const char of str) {
            result[char] = result[char] ? result[char] + 1 : 1;
        }
        return result;
	}
}


const magic = new Magic();
console.log(magic.replace(1, 2)); 
console.log(magic.length("hello")); 
console.log(magic.toUpperCase("hello"));
console.log(magic.repeat("hello", 3));
console.log(magic.count("hello")); 