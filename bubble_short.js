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


function bubbleSort(arr) {
    const n = arr.length;
    let trocas = 0;
    let comparacoes = 0;

    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            comparacoes++;
            if (arr[j] > arr[j + 1]) {
                
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                trocas++;
            }
        }
    }

    console.log("Trocas: " + trocas);
    console.log("Comparações: " + comparacoes);
}


console.log("tamanho: 100000", );
//console.log("valores ordenados", );
//console.log("valores desodernados", );
console.log("valores em ordem decrescente", );

bubbleSort(generatedArrays[100000].reverseSorted);



