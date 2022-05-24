const FACE = [['U', 'D'], ['F', 'B'], ['L', 'R']];
const SUFF = ['\'', '2', ""];

append = (letter, result) => {
    result.push(letter);
    let suff = SUFF[Math.floor(Math.random() * 3)];
    result[result.length - 1] = result.at(-1)[0] + suff;
    return result;
}

generate = () => {
    let result = [];
    let letter = FACE[Math.floor(Math.random() * 3)][Math.floor(Math.random() * 2)];
    let first = true;
    result = append(letter, result);

    while (result.length < 20) {
        letter = FACE[Math.floor(Math.random() * 3)][Math.floor(Math.random() * 2)];
        if (!first) {
            let indx = repeat = 0;
            for (const [index, element] of FACE.entries()) {
                if ((element.includes(result.at(-1)[0])) && (element.includes(result.at(-1)[0]))) {
                    repeat++
                    indx = index
                    break;
                }
            }
            if (repeat > 0) {
                if (!(FACE[indx].includes(letter))) {
                    result = append(letter, result);
                }

            }
            else {
                if (letter != result.at(-1)[0]) {
                    result = append(letter, result);
                }
            }
        }
        else {
            if (letter != result.at(-1)[0]) {
                result = append(letter, result);
                first = false;
            }
        }
    }
    return result.join(' ')
}

console.log(generate());