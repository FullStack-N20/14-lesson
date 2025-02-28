//  2942. Find Words Containing Character

function findWordsContaining(words, x) {
    let array = []

    for (let i = 0; i < words.length; i++) {
        if (words[i].includes(x)) {
            array.push()
        }
    }
    return array
};

console.log(findWordsContaining(["apple", "banana", "cherry"], "a")) 