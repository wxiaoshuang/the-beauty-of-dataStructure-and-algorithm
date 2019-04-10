/**
 * 选择排序（Selection sort）是一种简单直观的排序算法。
 * 它的工作原理是每一次从待排序的数据元素中选出最小（或最大）的一个元素，
 * 存放在序列的起始位置，然后，再从剩余未排序元素中继续寻找最小（大）元素，
 * 然后放到已排序序列的末尾。以此类推，直到全部待排序的数据元素排完。
 *  选择排序是不稳定的排序方法
 */
function selectSort(arr) {
    for (let i = 0; i < arr.length -1; i++) {
        let minIndex = i // 无序区的最小元素下标
        let temp
        for (let j = i + 1; j < arr.length; j++) {
            //在无序区中找到最小数据并保存其数组下标
            if (arr[j] < arr[minIndex]) {
                minIndex = j
            }
        }
        // 将最小元素放到本次循环的前端
        if (minIndex !== i) {
            temp = arr[i];
            arr[i] = arr[minIndex];
            arr[minIndex] = temp;
        }
    }
}
// test
let arr = [10, 30, 3, 20, 30, 2, 6, 8, 7]
selectSort(arr)
console.log(arr)