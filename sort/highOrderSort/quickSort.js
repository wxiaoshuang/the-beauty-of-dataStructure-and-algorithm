// (1) 首先，从数组中选择中间一项作为主元。

// (2) 创建两个指针，左边一个指向数组第一个项，右边一个指向数组最后一个项。移动左指针直到我们找到一个比主元大的元素，接着，移动右指针直到找到一个比主元小的元素，然后交换它们，重复这个过程，直到左指针超过了右指针。这个过程将使得比主元小的值都排在主元之前，而比主元大的值都排在主元之后。这一步叫作划分操作。

// (3) 接着，算法对划分后的小数组（较主元小的值组成的子数组，以及较主元大的值组成的子数组）重复之前的两个步骤，直至数组已完全排序
function quickSort(array) {
    let n = array.length - 1
    quick(array, 0, n)
}
function quick(array, l, r) {
    if (l < r) {
        let pivot = partition(array, l, r)
        if (left < pivot - 1) {
            quick(array, left, pivot - 1)
        }
        if (index < right) {
            quick(array, pivot, r)
        }
    }
}
function partition(array, left, right) {
    // 选择数组的中间项作为基元
    var pivot = array[Math.floor((right + left) / 2)],
        i = left,
        j = right
    while (i <= j) {
        while (array[i] < pivot) {
            i++
        }
        while (array[j] > pivot) {
            j--
        }
        if (i <= j) {
            [array[i], array[j]] = [array[j], array[i]]
            i++
            j--
        }
    }
    return i
};

