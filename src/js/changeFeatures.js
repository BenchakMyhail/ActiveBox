export default function changeFeatures(dataList) {
  const result = [];
  const itemsArr = Array.from(dataList);
  const countItems = 6;
  let i = 0;
  let indexArray = [];
  const minValueId = 0;
  const maxValueId = itemsArr.length - 1;

    function uniqueValue(array, value) {
    for (let j = 0; j < array.length; j++) {
      if (array[j] == value) return 1;
    }
    return 0;
  }

  while (i < countItems) {
    let num = Math.floor((Math.random() * maxValueId) + minValueId);
    if (uniqueValue(indexArray, num) == 0) {
      indexArray[i] = num;
      i++;
    }
  }
  for (let k = 0; k < indexArray.length; k++) {
    result.push(itemsArr[indexArray[k]]);
  }

  return result;
}
