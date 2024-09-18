// Dado um array ordenado de inteiros distintos e um valor alvo (target), retorne o índice se o alvo for encontrado.
// Se não for encontrado, retorne o índice onde ele deveria ser inserido na ordem correta.
// Você deve implementar um algoritmo com complexidade O(log n), ou seja, busca binária.

// Exemplo 1:
// Input: nums = [1,3,5,6], target = 5
// Output: 2

// Exemplo 2:
// Input: nums = [1,3,5,6], target = 2
// Output: 1

// Exemplo 3:
// Input: nums = [1,3,5,6], target = 7
// Output: 4

function searchInsert(nums: number[], target: number): number {

}

const nums1 = [1, 3, 5, 6];
const target1 = 5;
const target2 = 2;
const target3 = 7;
const target4 = 0;

console.log(searchInsert(nums1, target1)); // output: 2
console.log(searchInsert(nums1, target2)); // output: 1
console.log(searchInsert(nums1, target3)); // output: 4
console.log(searchInsert(nums1, target4)); // output: 0