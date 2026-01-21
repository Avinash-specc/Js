// switch (key) {
//     case value:

//         break;

//     default:
//         break;
// }

const month =4;
switch (month) {
  case 1:
    console.log("January");
    break;
  case 2:
    console.log("February");
    break;
  case 3:         //If break is not used once the case is matched it will execute all further cases automatically except default.
    console.log("March");
    break;
  case "4":
    console.log("April");
    break;
  default:
    console.log("Invalid Input.")  
    break;
}
