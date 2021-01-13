function scuberGreetingForFeet(someValue){
  let message 
 
  if (someValue <= 400) {
    message = 'This one is on me!'
  }
  else if (someValue > 2000 && someValue <= 2500){
    message = 'I will gladly take your thirty bucks.'
  }
  else if (someValue > 2500) {
    message = 'No can do.'
  }
  return message
};

function ternaryCheckCity(city){
  let result

  city === 'NYC' ? (result = "Ok, sounds good." ) : (result = "No go.")
  
  return result
}

function switchOnCharmFromTip(tip){
  let response 

  switch (tip){
    case 'generous':
      response = "Thank you so much.";
      break;
    case 'not as generous':
      response = "Thank you.";
      break;
    default:
      response = "Bye.";
      break;
  }
  return response
}