// 我们将数组中的数据分为两个区间，已排序区间和未排序区间。初始初始已排序区间只有一个元素，就是数组的第一个元素
// 插入算法的核心思想是取未排序区间中的元素，在已排序区间中找到合适的插入位置将其插入，并保证已排序区间数据一直有序
// 重复这个过程，直到未排序区间中元素为空，算法结束
function insertSort(arr) {
    let n = arr.length
    for (let i = 1; i < n; i++) {
        let value = arr[i]
        let j = i - 1
        for (; j >= 0; j--) {
            if (arr[j] > value) {
                arr[j + 1] = arr[j]
            } else {
                break
            }
        }
        arr[j + 1] = value
    }
}
// test
let arr = [10, 30, 3, 20, 30, 2, 6, 8, 7]
insertSort(arr)
console.log(arr)