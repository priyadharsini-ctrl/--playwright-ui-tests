function intersection(arr1: number[], arr2: number[]): number[] {
  const result: number[] = [];

  for (let i = 0; i < arr1.length; i++) {
    const element = arr1[i];

    // Check if element exists in arr2 and not already in result
    if (arr2.includes(element) && !result.includes(element)) {
      result.push(element);
    }
  }

  return result;
}

console.log(intersection([1, 2, 3, 4], [3, 4, 5, 6]));
