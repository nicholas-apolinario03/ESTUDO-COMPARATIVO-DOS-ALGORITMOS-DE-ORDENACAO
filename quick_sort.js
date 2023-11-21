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


function swap(arr, i, j, trocas) {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
    trocas.value++; 
}

function partition(arr, low, high, trocas, comparacoes) {
    const pivot = arr[high];
    let i = low - 1;

    for (let j = low; j < high; j++) {
        comparacoes.value++; 
        if (arr[j] < pivot) {
            i++;
            swap(arr, i, j, trocas); 
        }
    }

    swap(arr, i + 1, high, trocas); 
    return i + 1;
}

function quickSort(arr, trocas, comparacoes) {
    const stack = [{ low: 0, high: arr.length - 1 }];

    while (stack.length > 0) {
        const { low, high } = stack.pop();

        if (low < high) {
            const pivotIndex = partition(arr, low, high, trocas, comparacoes);

            stack.push({ low, high: pivotIndex - 1 });
            stack.push({ low: pivotIndex + 1, high });
        }
    }
}

const trocas = { value: 0 };
const comparacoes = { value: 0 };
console.log("tamanho: 100000", );
//console.log("valores ordenados", );
//console.log("valores desodernados", );
console.log("valores em ordem decrescente", );

quickSort(generatedArrays[100000].reverseSorted, trocas, comparacoes);

console.log("Trocas:", trocas.value);
console.log("Comparações:", comparacoes.value);
