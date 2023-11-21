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


function insertionSort(arr, trocas, comparacoes) {
    const n = arr.length;

    for (let i = 1; i < n; i++) {
        let currentElement = arr[i];
        let j = i - 1;

        comparacoes.value++;

        
        while (j >= 0 && arr[j] > currentElement) {
            arr[j + 1] = arr[j];
            trocas.value++; 
            j--;
        }

        
        arr[j + 1] = currentElement;
    }
}

const trocas = { value: 0 };
const comparacoes = { value: 0 };
console.log("tamanho: 100000", );
//console.log("valores ordenados", );
//console.log("valores desodernados", );
console.log("valores em ordem decrescente", );

insertionSort(generatedArrays[100000].reverseSorted, trocas, comparacoes);

console.log("Trocas:", trocas.value);
console.log("Comparações:", comparacoes.value);
