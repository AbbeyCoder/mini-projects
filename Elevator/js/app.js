// let floorsArrP = document.getElementById("floorsArr");
// let floorArr = [];
// let currentFloor = 4;
// let liftBox = document.getElementById("liftBox");
// let liftInner = document.getElementById("lift-inner");
// let btn0 = document.getElementById("btn0"),
//   btn1 = document.getElementById("btn1"),
//   btn2 = document.getElementById("btn2"),
//   btn3 = document.getElementById("btn3"),
//   btn4 = document.getElementById("btn4");

// function command(floorNo) {
//   let checkNumber = floorArr.includes(floorNo);
//   if (checkNumber === false && currentFloor !== floorNo) {
//     floorArr.push(floorNo);
//     floorsArrP.innerHTML = floorArr;
//   }

//   for (var i = 0; i < floorArr.length; i++) {
//     if (floorArr[i] !== currentFloor) {
//       switch (floorArr[i]) {
//         case 0:
//           btn0.style.backgroundColor = "red";
//           break;
//         case 1:
//           btn1.style.backgroundColor = "red";
//           break;
//         case 2:
//           btn2.style.backgroundColor = "red";
//           console.log("first");
//           break;
//         case 3:
//           btn3.style.backgroundColor = "red";
//           break;
//         case 4:
//           btn4.style.backgroundColor = "red";
//           break;
//         default:
//           break;
//       }
//     }
//   }
//   console.log(floorArr);

//   if (floorArr.length === 1) {
//     move();
//   }
// }

// function move() {
//   if (floorArr[0] === 0) {
//     liftInner.style.backgroundPosition = "left bottom";
//     liftBox.style.marginTop = "680px";
//     liftBox.style.transition = "5s";
//     currentFloor = 0;
//     if (floorArr.length !== 0) {
//       setTimeout(() => {
//         floorArr.splice(0, 1);
//         floorsArrP.innerHTML = floorArr;
//         btn0.style.backgroundColor = "gray";
//         move(floorArr[0]);
//       }, 6000);
//       setTimeout(() => {
//         liftInner.style.backgroundPosition = "right bottom";
//       }, 5000);
//     }
//   } else if (floorArr[0] === 1) {
//     liftInner.style.backgroundPosition = "left bottom";
//     liftBox.style.marginTop = "544px";
//     liftBox.style.transition = "5s";
//     currentFloor = 1;
//     if (floorArr.length !== 0) {
//       setTimeout(() => {
//         floorArr.splice(0, 1);
//         floorsArrP.innerHTML = floorArr;
//         btn1.style.backgroundColor = "gray";
//         liftInner.style.backgroundPosition = "right bottom";
//         move(floorArr[0]);
//       }, 6000);
//       setTimeout(() => {
//         liftInner.style.backgroundPosition = "right bottom";
//       }, 5000);
//     }
//   } else if (floorArr[0] === 2) {
//     liftInner.style.backgroundPosition = "left bottom";
//     liftBox.style.marginTop = "408px";
//     liftBox.style.transition = "5s";
//     currentFloor = 2;
//     if (floorArr.length !== 0) {
//       setTimeout(() => {
//         floorArr.splice(0, 1);
//         floorsArrP.innerHTML = floorArr;
//         btn2.style.backgroundColor = "gray";
//         liftInner.style.backgroundPosition = "right bottom";
//         move(floorArr[0]);
//       }, 6000);
//       setTimeout(() => {
//         liftInner.style.backgroundPosition = "right bottom";
//       }, 5000);
//     }
//   } else if (floorArr[0] === 3) {
//     liftInner.style.backgroundPosition = "left bottom";
//     liftBox.style.marginTop = "272px";
//     liftBox.style.transition = "5s";
//     currentFloor = 3;
//     if (floorArr.length !== 0) {
//       setTimeout(() => {
//         floorArr.splice(0, 1);
//         floorsArrP.innerHTML = floorArr;
//         btn3.style.backgroundColor = "gray";
//         liftInner.style.backgroundPosition = "right bottom";
//         move(floorArr[0]);
//       }, 6000);
//       setTimeout(() => {
//         liftInner.style.backgroundPosition = "right bottom";
//       }, 5000);
//     }
//   } else if (floorArr[0] === 4) {
//     liftInner.style.backgroundPosition = "left bottom";
//     liftBox.style.marginTop = "0px";
//     liftBox.style.transition = "5s";
//     currentFloor = 4;
//     if (floorArr.length !== 0) {
//       setTimeout(() => {
//         floorArr.splice(0, 1);
//         floorsArrP.innerHTML = floorArr;
//         btn4.style.backgroundColor = "gray";
//         liftInner.style.backgroundPosition = "right bottom";
//         move(floorArr[0]);
//       }, 6000);
//       setTimeout(() => {
//         liftInner.style.backgroundPosition = "right bottom";
//       }, 5000);
//     }
//   }
// }

let floorsArrP = document.getElementById("floorsArr");
let floorArr = [];
let currentFloor = 4;
let liftBox = document.getElementById("liftBox");
let liftInner = document.getElementById("lift-inner");
let btn0 = document.getElementById("btn0"),
  btn1 = document.getElementById("btn1"),
  btn2 = document.getElementById("btn2"),
  btn3 = document.getElementById("btn3"),
  btn4 = document.getElementById("btn4");

function command(floorNo) {
  // let temp = 0;
  // for (let i = 0; i < floorArr.length; i++) {
  //   for (let j = i + 1; j < floorArr.length; j++) {
  //     if (floorArr[i] > floorArr[j]) {
  //       temp = floorArr[i];
  //       floorArr[i] = floorArr[j];
  //       floorArr[j] = temp;
  //     }
  //   }
  // }
  let checkNumber = floorArr.includes(floorNo);
  if (checkNumber === false && currentFloor !== floorNo) {
    floorArr.push(floorNo);
    floorsArrP.innerHTML = floorArr;
  }

  for (var i = 0; i < floorArr.length; i++) {
    if (floorArr[i] !== currentFloor) {
      switch (floorArr[i]) {
        case 0:
          btn0.style.backgroundColor = "red";
          break;
        case 1:
          btn1.style.backgroundColor = "red";
          break;
        case 2:
          btn2.style.backgroundColor = "red";
          console.log("first");
          break;
        case 3:
          btn3.style.backgroundColor = "red";
          break;
        case 4:
          btn4.style.backgroundColor = "red";
          break;
        default:
          break;
      }
    }
  }
  console.log(floorArr);

  if (floorArr.length === 1) {
    move();
  }
}

function move() {
  if (floorArr[0] === 0) {
    liftInner.style.backgroundPosition = "left bottom";
    liftBox.style.marginTop = "680px";
    liftBox.style.transition = "5s";
    currentFloor = 0;
    if (floorArr.length !== 0) {
      setTimeout(() => {
        floorArr.splice(0, 1);
        floorsArrP.innerHTML = floorArr;
        btn0.style.backgroundColor = "gray";
        move(floorArr[0]);
      }, 6000);
      setTimeout(() => {
        liftInner.style.backgroundPosition = "right bottom";
      }, 5000);
    }
  } else if (floorArr[0] === 1) {
    liftInner.style.backgroundPosition = "left bottom";
    liftBox.style.marginTop = "544px";
    liftBox.style.transition = "5s";
    currentFloor = 1;
    if (floorArr.length !== 0) {
      setTimeout(() => {
        floorArr.splice(0, 1);
        floorsArrP.innerHTML = floorArr;
        btn1.style.backgroundColor = "gray";
        liftInner.style.backgroundPosition = "right bottom";
        move(floorArr[0]);
      }, 6000);
      setTimeout(() => {
        liftInner.style.backgroundPosition = "right bottom";
      }, 5000);
    }
  } else if (floorArr[0] === 2) {
    liftInner.style.backgroundPosition = "left bottom";
    liftBox.style.marginTop = "408px";
    liftBox.style.transition = "5s";
    currentFloor = 2;
    if (floorArr.length !== 0) {
      setTimeout(() => {
        floorArr.splice(0, 1);
        floorsArrP.innerHTML = floorArr;
        btn2.style.backgroundColor = "gray";
        liftInner.style.backgroundPosition = "right bottom";
        move(floorArr[0]);
      }, 6000);
      setTimeout(() => {
        liftInner.style.backgroundPosition = "right bottom";
      }, 5000);
    }
  } else if (floorArr[0] === 3) {
    liftInner.style.backgroundPosition = "left bottom";
    liftBox.style.marginTop = "272px";
    liftBox.style.transition = "5s";
    currentFloor = 3;
    if (floorArr.length !== 0) {
      setTimeout(() => {
        floorArr.splice(0, 1);
        floorsArrP.innerHTML = floorArr;
        btn3.style.backgroundColor = "gray";
        liftInner.style.backgroundPosition = "right bottom";
        move(floorArr[0]);
      }, 6000);
      setTimeout(() => {
        liftInner.style.backgroundPosition = "right bottom";
      }, 5000);
    }
  } else if (floorArr[0] === 4) {
    liftInner.style.backgroundPosition = "left bottom";
    liftBox.style.marginTop = "0px";
    liftBox.style.transition = "5s";
    currentFloor = 4;
    if (floorArr.length !== 0) {
      setTimeout(() => {
        floorArr.splice(0, 1);
        floorsArrP.innerHTML = floorArr;
        btn4.style.backgroundColor = "gray";
        liftInner.style.backgroundPosition = "right bottom";
        move(floorArr[0]);
      }, 6000);
      setTimeout(() => {
        liftInner.style.backgroundPosition = "right bottom";
      }, 5000);
    }
  }
}

for (let i = 0; i < floorArr.length; i++) {
  for (let j = i + 1; j < floorArr.length; j++) {
    if (arr[i] > arr[j]) {
      temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
  }
}
