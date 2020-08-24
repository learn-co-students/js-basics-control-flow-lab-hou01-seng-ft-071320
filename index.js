function scuberGreetingForFeet(someNumber){
  let message
  if (someNumber > 2500) {
    message = 'No can do.'
  }
  else if (someNumber >= 2000) {
    message = 'I will gladly take your thirty bucks.'
  }
  else if (someNumber <=400) {
    message = 'This one is on me!'
  }
  return message
}

function ternaryCheckCity(city){
 return city === "NYC"? "Ok, sounds good.": "No go.";
}

function switchOnCharmFromTip(tip){
  let message;
  switch(tip){
    case 'generous':
      return message = 'Thank you so much.';
      break;
    case 'not as generous':
      return message = 'Thank you.';
      break;
    default:
      return message = 'Bye.';
  }
}