function createArrays() {
    const createSortedArray = (size) => {
        return Array.from({ length: size }, (_, index) => index + 1);
    };

    const createUnsortedArray = (size) => {
        return Array.from({ length: size }, () => Math.floor(Math.random() * 1000) + 1);
    };

    const createReverseSortedArray = (size) => {
        return Array.from({ length: size }, (_, index) => size - index);
    };

    const sizes = [1000, 10000, 100000];

    const arrays = {};

    sizes.forEach((size) => {
        arrays[size] = {
            sorted: createSortedArray(size),
            unsorted: createUnsortedArray(size),
            reverseSorted: createReverseSortedArray(size)
        };
    });

    return arrays;
}

const generatedArrays = createArrays();


function mergeSort(arr, trocas, comparacoes) {
    const merge = (left, right) => {
        let result = [];
        let i = 0;
        let j = 0;

        while (i < left.length && j < right.length) {
            comparacoes.value++; 

            if (left[i] < right[j]) {
                result.push(left[i]);
                i++;
            } else {
                result.push(right[j]);
                j++;
            }
        }

        return result.concat(left.slice(i), right.slice(j));
    };

    const n = arr.length;

    if (n <= 1) {
        return arr;
    }

    const middle = Math.floor(n / 2);
    const left = arr.slice(0, middle);
    const right = arr.slice(middle);

    return merge(
        mergeSort(left, trocas, comparacoes),
        mergeSort(right, trocas, comparacoes)
    );
}


function createRandomArray(size) {
    return Array.from({ length: size }, () => Math.floor(Math.random() * 100000));
}


const trocas = { value: 0 };
const comparacoes = { value: 0 };
console.log("tamanho: 100000", );
//console.log("valores ordenados", );
//console.log("valores desodernados", );
console.log("valores em ordem decrescente", );

mergeSort(generatedArrays[100000].reverseSorted, trocas, comparacoes);

console.log("Trocas:", trocas.value);
console.log("Comparações:", comparacoes.value);
