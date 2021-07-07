function scuberGreetingForFeet(feet) {
  // Write your code here!
  let greeting
  if (feet <= 400) {
    return greeting = 'This one is on me!';
  } else if (1999< feet && feet < 2500) {
    return greeting = 'I will gladly take your thirty bucks.';
  } else {
    return greeting = 'No can do.';
  }

}

function ternaryCheckCity(city){
  // Write your code here!

  if (city === "NYC") {
    return "Ok, sounds good.";
  }else {
    return "No go.";
  }
}

function switchOnCharmFromTip(tip){
  // Write your code here!
  switch (tip) {
    case "generous":
      return "Thank you so much.";
      break;
    case "not as generous":
      return "Thank you.";
      break;
    default:
    return "Bye.";
  }

}
