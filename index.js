const testVar = {}

function testFunc() {
  return "hi"
}

superbowlWin = (arr) => {
  let victory = arr.find( obj => obj.result === "W")
  return !!victory ? victory.year : undefined
}