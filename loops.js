function forLoop(array) {
  for (var i=1; i<26; i++) {
  console.log(`"I am ${i} strange loop${i === 1 ? '' : 's'}."`)
  }
}
const strangeArray = forLoop (array)
const testArray = strangeArray.slice(array.length)
