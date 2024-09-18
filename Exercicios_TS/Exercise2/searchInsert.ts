function searchinsert(nums: number[], target: number): number {
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (nums[mid] === target) {
            return mid; // Se encontramos o target
        } else if (nums[mid] < target) {
            left = mid + 1; // Procura na metade direita
        } else {
            right = mid - 1; // Procura na metade esquerda
        }
    }

    // Se não encontramos o target, retorna a posição onde ele deveria ser inserido
    return left;
}

const Nums1 = [1, 3, 5, 6];
const Target1 = 5;
const Target2 = 2;
const Target3 = 7;
const Target4 = 0;

console.log(searchinsert(Nums1, Target1)); // output: 2
console.log(searchinsert(Nums1, Target2)); // output: 1
console.log(searchinsert(Nums1, Target3)); // output: 4
console.log(searchinsert(Nums1, Target4)); // output: 0