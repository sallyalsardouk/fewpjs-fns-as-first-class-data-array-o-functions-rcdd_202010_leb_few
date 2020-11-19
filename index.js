let wakeDog=function wakeDog(dogName, dogBreed) {
  console.log(`Wake ${dogName} the ${dogBreed}`);
  return `Wake ${dogName} the ${dogBreed}`

}
let leashDog=function leashDog(dogName, dogBreed) {
  console.log(`Leash ${dogName} the ${dogBreed}`);
  return `Leash ${dogName} the ${dogBreed}`
}
let walkToPark=function walkToPark(dogName, dogBreed) {
  console.log(`Walk to the park with ${dogName} the ${dogBreed}`);
  return `Walk to the park with ${dogName} the ${dogBreed}`
}
let function throwFrisbee(dogName, dogBreed) {
  console.log(`Throw the frisbee for ${dogName} the ${dogBreed}`);
  return `Throw the frisbee for ${dogName} the ${dogBreed}`
}
function walkHome(dogName, dogBreed) {
  console.log(`Walk home with ${dogName} the ${dogBreed}`);
  return `Walk home with ${dogName} the ${dogBreed}`;
}
function unleashDog(dogName, dogBreed) {
  console.log(`UnleashDog ${dogName} the ${dogBreed}`);
  return `Unleash ${dogName} the ${dogBreed}`
}

const routine = [wakeDog,leashDog,walkToPark,throwFrisbee,walkHome,unleashDog]

function exerciceDog(dogName,dogBreed){
  let result = []
  for (const step of routine) {

    result.push(step(dogName, dogBreed))

  }

return result
}

  // return routine.map(fn => fn(dog, breed))
