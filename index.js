function scuberGreetingForFeet(feetTraveling){
  // Write your code here!
  let result
  if (feetTraveling <= 400) {
    result = 'This one is on me!'
  } else if (feetTraveling > 2500) {
    result = 'No can do.'
  } else if (feetTraveling > 2000) {
    result = 'I will gladly take your thirty bucks.'
  } 
  return result
}

function ternaryCheckCity(city){
  // Write your code here!
  let result
  if (city === 'NYC') {
    result = 'Ok, sounds good.'
  } else {
    result = 'No go.'
  }
  return result
}

function switchOnCharmFromTip(tips){
  // Write your code here!
  let result
  switch(tips){
  case 'generous':
    result = 'Thank you so much.'
    break;
  case 'not as generous':
    result = 'Thank you.'
    break;
  case 'thanks for everything':
    result = 'Bye.'
  }
  return result
}