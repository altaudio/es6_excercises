function randomCat (name, breed, size, temperament) {
  let names = ["Pickles", "Tiger", "Sombrero", "Vic", "Smudge"];
  let breeds = ["British Shorthair", "Siamese", "Maine Coone", "Ragdoll", "Bengal"];
  let size1 = ["Small", "Medium", "Large"];
  let temperaments = ["Friendly", "Wary", "Active", "Playful", "Lazy"];

  let catName = name || names[_.random(0, names.length - 1)];
  let catBreed = breed || breeds[_.random(0, breeds.length - 1)];
  let catSize = size || size1[_.random(0, size1.length - 1)];
  let catTemperament = temperament || temperaments[_.random(0, temperaments.length - 1)];

  return {'name' : catName, 'breed' : catBreed, 'size' : catSize, 'temperament' : catTemperament };
}


export {randomCat};

