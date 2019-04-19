// 　归并排序是稳定排序，它也是一种十分高效的排序,时间复杂度是O(nlogn), 空间复杂度是O(n)，需要开辟一个数组存储， 稳定排序
function mergeSort(array) {
    var length = array.length;
    if (length === 1) {
        return array;
    }
    var mid = Math.floor(length / 2),
        left = array.slice(0, mid),
        right = array.slice(mid, length)

    return merge(mergeSort(left), mergeSort(right))
}
function merge(left, right) {
    let result = []
    let il = 0
    let ir = 0
    while (il < left.length && ir < right.length) {
        if (left[il] < right[ir]) {
            result.push(left[il++])
        } else {
            result.push(right[ir++])
        }
    }
    while (il < left.length) {
        result.push(left[il++])
    }

    while (ir < right.length) {
        result.push(right[ir++])
    }
    return result;
}
// 测试
let nums = [6, 10, 1, 9, 4, 8, 2, 7, 3, 5]
console.log(mergeSort(nums))