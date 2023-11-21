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

function heapSort(arr, trocas, comparacoes) {
    for (let i = Math.floor(arr.length / 2) - 1; i >= 0; i--) {
        heapify(arr, arr.length, i, trocas, comparacoes);
    }

    
    for (let i = arr.length - 1; i > 0; i--) {
        swap(arr, 0, i, trocas);

        
        heapify(arr, i, 0, trocas, comparacoes);
    }
}

function heapify(arr, n, i, trocas, comparacoes) {
    let largest = i;
    const left = 2 * i + 1;
    const right = 2 * i + 2;

  
    comparacoes.value++;
    if (left < n && arr[left] > arr[largest]) {
        largest = left;
    }


    comparacoes.value++;
    if (right < n && arr[right] > arr[largest]) {
        largest = right;
    }


    if (largest !== i) {
        swap(arr, i, largest, trocas);

        heapify(arr, n, largest, trocas, comparacoes);
    }
}


const trocas = { value: 0 };
const comparacoes = { value: 0 };


console.log("tamanho: 100000", );
//console.log("valores ordenados", );
//console.log("valores desodernados", );
console.log("valores em ordem decrescente", );

heapSort(generatedArrays[100000].reverseSorted, trocas, comparacoes);


console.log("Trocas:", trocas.value);
console.log("Comparações:", comparacoes.value);
