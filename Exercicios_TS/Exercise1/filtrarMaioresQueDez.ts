function filtrarMaioresQueDez(arr: number[]): number[] {
    return arr.filter(num => num > 10);
}

console.log(filtrarMaioresQueDez([5, 11, 20, 8])); // output: [11, 20]