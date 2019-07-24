const getDressed = (items) => {
  const requiredItems = [2, 3, 4, 5]

  const leave = 6
  const leaveIndex = items.indexOf(6)
  const itemsArray = items.length = leaveIndex + 1 // removes items after "leave"
  let readyToLeave = false

  requiredItems.forEach(item) {
    // ensure all requiredItems are present
    if !itemsArray.includes(item)
      console.log("fail");
  }

  itemsArray.forEach(item) {
    const itemIndex = itemsArray.indexOf(item)

    // ensure socks or pants before shoes
    if (itemIndex == 5 || itemIndex == 2) && itemIndex < 4
      console.log("fail");
  }

  // if hat...
  if itemsArray.includes(1) {
  // ... ensure hat before shirt
    if itemIndex == 3 && (itemIndex > itemsArray.indexOf(1)))
      console.log("fail");
  }
};

module.exports = {
  getDressed
};

// 5, 4
// 2, 4
// 3, 1

// 1 = hat
// 2 = pants
// 3 = shirt
// 4 = shoes
// 5 = socks
// 6 = getDressed
// all required except hat
// fail & stop

// Rules:
//
// You must put your socks on before your shoes.
// You must put your pants on before your shoes.
// You must put your shirt on before your hat.
// A hat is optional but all other articles of clothing are required.
// You must leave the house when receiving the number 6. You must leave the house after getting dressed.
// Any violation should output "fail" and stop immediately.
// Examples:
//
// Input: 5 1
// Output: socks, fail
// Input: 5 2 3 4 6
// Output: socks, pants, shirt, shoes, leave
