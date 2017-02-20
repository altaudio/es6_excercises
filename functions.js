function randomCat (options = {}) {

  let names = ["Pickles", "Tiger", "Sombrero", "Vic", "Smudge"];
  let breeds = ["British Shorthair", "Siamese", "Maine Coone", "Ragdoll", "Bengal"];
  let size1 = ["Small", "Medium", "Large"];
  let temperaments = ["Friendly", "Wary", "Active", "Playful", "Lazy"];

  let defaults = {
    'name' : names[_.random(0, names.length - 1)],
    'breed' : breeds[_.random(0, breeds.length - 1)],
    'size' : size1[_.random(0, size1.length - 1)],
    'temperament' : temperaments[_.random(0, temperaments.length - 1)]
}

  let resultingCat = Object.assign({}, defaults, options);
  return resultingCat;
}

export {randomCat};

