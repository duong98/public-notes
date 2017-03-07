// Given an array of integers and a target integer `sum`, return whether there
// exist a pair of integers in the array which add up to `sum`.
// See if you can come up with an O(n^2) solution first. Then—can you come up with
// an O(n log n) one?

function canMakeSum (array, targetSum) {
  array.sort()

  var left = 0
  var right = array.length - 1

  while (left < right) {
    var currentSum = array[left] + array[right]
    if (currentSum < targetSum) {
      left++
    } else if (currentSum > targetSum) {
      right--
    } else {
      return true
    }
  }

  return false
}

console.log(canMakeSum([-1, -2, 5, 0], -1))
console.log(canMakeSum([-1, -2, 5, 0], 6))
console.log(canMakeSum([], 6))
