function bubbleSort(arr) {
    let n = arr.length
    for (let i = 0; i < n - 1; i++) {
        let flag = false // 交换标志
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                flag = true;
                [arr[j], arr[j + 1]] = arr[arr[j + 1], arr[j]]
            }
        }
        if (!flag) {
            break;
        }
    }
}
let arr = [10, 30, 3, 20, 30, 2, 6, 8, 7]
bubbleSort(arr)
console.log(arr)