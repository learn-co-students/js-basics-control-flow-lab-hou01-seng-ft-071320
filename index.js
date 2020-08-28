function scuberGreetingForFeet(number){
  // Write your code here!  
  let message 

  if (number > 2500) {
    message = 'No can do.'
  }
  else if (number > 2000) {
    message = 'I will gladly take your thirty bucks.'
  }
  else if (number <= 400){
    message = 'This one is on me!'
  }

  return message
}

function ternaryCheckCity(city){
  // Write your code here!
  return city === "NYC"? "Ok, sounds good.": "No go."
}

function switchOnCharmFromTip(tip){
  // Write your code here!
  let message

  switch(tip) {
    case 'generous':
      return message = 'Thank you so much.'
      break
    case 'not as generous':
      return message = 'Thank you.'
      break
    default:
      return message = 'Bye.'
  }

}