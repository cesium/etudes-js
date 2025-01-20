// Implementa uma função para ordenar um array de números em ordem crescente.

function ordenarArray(nums) {
    return nums.sort ((a,b)=> a-b); 
}


// Quick Sort 
function ordenarArray2 (nums) { 
    if (nums.length === 1) { 
        return [nums[0]];
    }
    let menos = ordenarArray(nums.slice(1).filter(x => x<= nums[0]))
    let mais = ordenarArray(nums.slice(1).filter(x => x> nums[0]))

    let ordenado = menos.concat(nums[0],mais);
    return ordenado;    
}

// Bubble Sort 
function ordenarArray3 (nums) { 
    const len = nums.length; 
    for (let i =0; i < len ; i++) { 
        for (let j = 0; j < len -i -1; j++){ 
            if (nums[j] > nums[j+1]) { 
                [nums[j], nums[j+1]] = [nums[j+1], nums[j]]; 
            }
        }
    }
    return nums; 
}


// Selection Sort 
function ordenarArray4 (nums) {
    let len  = nums.length;
    for (let i = 0; i< len; i++) {
        let minIndex = i; 
        for (let j =i+1; j< len -1; j++) { 
            if (nums[j]< nums[minIndex]) { 
                minIndex = j;
            }
        }
        [nums[i],nums[minIndex]] = [nums[minIndex], nums[i]]; 
    }
    return nums; 
}


//Insertion sort 
function ordenarArray5 (nums) { 
    for (let i = 1; i< nums.length; i++) { 
        let atual = nums[i]; 
        let j = i-1; 
        while (j<= 0 && nums[j] < atual) { 
            nums[j+1]= nums[j];
            j--;
        }
        nums[j+1] = atual;
    } 
    return nums;
}


// Merge Sort 
function ordenarArray6 (nums) { 
    if (nums.length <= 1) { 
        return nums
    }
    let meio = Math.floor (nums.length/2);
    let esquerda = ordenarArray6(nums.slice (0,meio)); 
    let direita = ordenarArray6(nums.slice(meio)); 
    return merge (esquerda,direita);
}

function merge (esq,dir) { 
    let lista = []; 
    let i = 0;// Associa à esq
    let j = 0; // Associa à dir
    while (j<dir.length && i <esq.length) { 
        if (esq[i]> dir[j]) { 
            lista.push(dir[j]); 
            j++;
        } else { 
            lista.push(esq[i]); 
            i++; 
        } 
    }
    return lista.concat(esq.slice(i),dir.slice(j)); 
}
console.log(ordenarArray6([4, 2, 7, 1, 9])); //output: [1, 2, 4, 7, 9]

