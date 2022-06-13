function scuberGreetingForFeet(distance){
  let result;
  if (distance <= 400) {
    result = "This one is on me!";
  } else if (distance > 400 && distance <= 2000) {
    result = "That will be twenty bucks."
  } else if (distance >= 2000 && distance < 2500) {
    result = "I will gladly take your thirty bucks."
  } else if (distance >= 2500) {
    result = "No can do."
  } 
  return result
}

function ternaryCheckCity(item){
  return (item === 'NYC') ? 'Ok, sounds good.' : 'No go.';
}

function switchOnCharmFromTip(generousity){
  let goodBye
    if (generousity === 'generous'){
    goodBye = 'Thank you so much.'
    } else if (generousity === 'not as generous'){
    goodBye = "Thank you."
    } else {
    goodBye = 'Bye.'
    } 
    return goodBye
}