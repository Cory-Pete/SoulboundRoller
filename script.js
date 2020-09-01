let imageContainer = document.getElementById('image-container');
let textContainer = document.getElementById('text-container');
  //main code for generating weapon, only function, and it is called by the button

function GenerateWeapon() {

  //the arrays for storing all of the words used in generation of Weapons (coutesy hacker Andrew)
  const weapons = [{name: 'Longsword', Attack: '+1', Defense: '+1', Recover: '-1', Traits: 'Combo 2', Type: 'S/P'},
                   {name: 'Shortsword', Attack: '+1', Defense: '0', Recover: '0', Traits: 'Combo 2, Parry', Type: 'S/P'},
                   {name: 'Rapier', Attack: '0', Defense: '+1', Recover: '0', Traits: 'Combo 3, Parry', Type: 'P'},
                   {name: 'Scimitar', Attack: '+1', Defense: '0', Recover: '0', Traits: 'Combo 3', Type: 'S'},
                   {name: 'Katana', Attack: '+1', Defense: '+1', Recover: '-1', Traits: 'Combo 2, Parry', Type: 'S'},
                   {name: 'Bastard Sword', Attack: '+2', Defense: '+1', Recover: '-2', Traits: 'Charge', Type: 'S/P'},
                   {name: 'Great Sword', Attack: '+3', Defense: '0', Recover: '-2', Traits: 'Charge, Collateral', Type: 'S/P'},
                   {name: 'Kukri', Attack: '+1', Defense: '0', Recover: '0', Traits: 'Chop, Combo 2', Type: 'S'},
                   {name: 'Khopesh', Attack: '+2', Defense: '0', Recover: '-1', Traits: 'Chop, Combo 2', Type: 'S'},
                   {name: 'Zweihander', Attack: '+3', Defense: '+1', Recover: '-3', Traits: 'Charge, Collateral, Crush', Type: 'S/P'},
                   {name: 'Poleaxe', Attack: '+1', Defense: '+1', Recover: '-1', Traits: 'Chop, Reach', Type: 'S'},
                   {name: 'Halberd', Attack: '+2', Defense: '+1', Recover: '-2', Traits: 'Charge, Chop, Reach', Type: 'S/P'},
                   {name: 'Bardiche', Attack: '+2', Defense: '+1', Recover: '-2', Traits: 'Collateral, Reach', Type: 'S'},
                   {name: 'Spontoon', Attack: '+1', Defense: '+1', Recover: '-1', Traits: 'Charge, Parry', Type: 'P'},
                   {name: 'Short Spear', Attack: '+1', Defense: '+1', Recover: '-1', Traits: 'Charge, Range S, Tossed', Type: 'S/P'},
                   {name: 'Quarterstaff', Attack: '0', Defense: '+2', Recover: '-1', Traits: 'Combo 2, Reach', Type: 'I'},
                   {name: 'Lance', Attack: '+3', Defense: '0', Recover: '-2', Traits: 'Charge, Reach', Type: 'P'},
                   {name: 'Polehammer', Attack: '+2', Defense: '+1', Recover: '-2', Traits: 'Crush, Reach', Type: 'I'},
                   {name: 'Naginata', Attack: '+1', Defense: '+1', Recover: '-1', Traits: 'Combo 2, Reach', Type: 'S'},
                   {name: 'Trident', Attack: '+1', Defense: '+1', Recover: '-1', Traits: 'Charge, Reach', Type: 'P'},
                   {name: 'Bludgeon', Attack: '+1', Defense: '0', Recover: '0', Traits: 'Crush', Type: 'I'},
                   {name: 'Mace', Attack: '+2', Defense: '0', Recover: '-1', Traits: 'Crush', Type: 'I'},
                   {name: 'Great Mace', Attack: '+3', Defense: '+1', Recover: '-3', Traits: 'Collateral, Crush', Type: 'I'},
                   {name: 'Flail', Attack: '+2', Defense: '0', Recover: '-1', Traits: 'Crush, Flexible', Type: 'I'},
                   {name: 'Hammer', Attack: '+1', Defense: '0', Recover: '0', Traits: 'Crush', Type: 'I'},
                   {name: 'Great Hammer', Attack: '+4', Defense: '0', Recover: '-3', Traits: 'Collateral, Crush', Type: 'I'},
                   {name: 'Warpick', Attack: '+2', Defense: '0', Recover: '-1', Traits: 'Angled, Crush', Type: 'I/P'},
                   {name: 'Hand Axe', Attack: '+1', Defense: '0', Recover: '0', Traits: 'Chop', Type: 'S'},
                   {name: 'Great Axe', Attack: '+3', Defense: '0', Recover: '-2', Traits: 'Chop, Collateral', Type: 'S'},
                   {name: 'Kanabo', Attack: '+2', Defense: '+1', Recover: '-2', Traits: 'Crush', Type: 'I'},
                   {name: 'Dagger', Attack: '0', Defense: '0', Recover: '+1', Traits: 'Combo 3, Parry', Type: 'S/P'},
                   {name: 'Push Dagger', Attack: '0', Defense: '0', Recover: '+1', Traits: 'Combo 3, Concealed', Type: 'P'},
                   {name: 'Punching Dagger', Attack: '+1', Defense: '0', Recover: '0', Traits: 'Combo 3', Type: 'P'},
                   {name: 'Curved Dagger', Attack: '0', Defense: '0', Recover: '+1', Traits: 'Combo 3, Parry', Type: 'S/P'},
                   {name: 'Shiv', Attack: '0', Defense: '0', Recover: '+1', Traits: 'Combo 3, Concealed', Type: 'P'},
                   {name: 'Buckler', Attack: '0', Defense: '+1', Recover: '0', Traits: 'Parry, Shield', Type: 'I'},
                   {name: 'Heater Shield', Attack: '0', Defense: '+2', Recover: '-1', Traits: 'Parry, Shield', Type: 'I'},
                   {name: 'Kite Shield', Attack: '0', Defense: '+3', Recover: '-2', Traits: 'Parry, Shield', Type: 'I'},
                   {name: 'Tower Shield', Attack: '0', Defense: '+4', Recover: '-3', Traits: 'Parry, Shield', Type: 'I'},
                   {name: 'Sai', Attack: '0', Defense: '+1', Recover: '0', Traits: 'Disarm, Parry', Type: 'I'},
                   {name: 'Parrying Dagger', Attack: '0', Defense: '0', Recover: '+1', Traits: 'Combo 2, Disarm, Parry', Type: 'P'},
                   {name: 'Gauntlet', Attack: '0', Defense: '+1', Recover: '0', Traits: 'Combo 2, Parry', Type: 'I'},
                   {name: 'Shortbow', Attack: '+1', Defense: '0', Recover: '0', Traits: 'Range S', Type: 'P'},
                   {name: 'Compound Bow', Attack: '+2', Defense: '0', Recover: '-1', Traits: 'Range M', Type: 'P'},
                   {name: 'Longbow', Attack: '+3', Defense: '0', Recover: '-2', Traits: 'Range M', Type: 'P'},
                   {name: 'Great Bow', Attack: '+4', Defense: '0', Recover: '-3', Traits: 'Penetration, Range L', Type: 'P'},
                   {name: 'Hand Crossbow', Attack: '+1', Defense: '0', Recover: '0', Traits: 'Ammo 1, Firearm, Range M', Type: 'P'},
                   {name: 'Crossbow', Attack: '+3', Defense: '0', Recover: '-2', Traits: 'Ammo 1, Firearm, Penetration, Range L', Type: 'P'},
                   {name: 'Repeating Crossbow', Attack: '+2', Defense: '0', Recover: '-1', Traits: 'Ammo 6, Firearm, Full Auto 2, Range M', Type: 'P'},
                   {name: 'Shurikens', Attack: '0', Defense: '0', Recover: '+1', Traits: 'Range S, Set 5', Type: 'P'},
                   {name: 'Throwing Knives', Attack: '0', Defense: '0', Recover: '+1', Traits: 'Range S, Set 3', Type: 'P'},
                   {name: 'Darts', Attack: '0', Defense: '0', Recover: '+1', Traits: 'Range S, Set 5', Type: 'P'},
                   {name: 'Boomerang', Attack: '+1', Defense: '0', Recover: '0', Traits: 'Range S, Return', Type: 'I'},
                   {name: 'Tomahawk', Attack: '+1', Defense: '0', Recover: '0', Traits: 'Chop, Range S, Tossed', Type: 'S'},
                   {name: 'Javelin', Attack: '+1', Defense: '+1', Recover: '-1', Traits: 'Charge, Range S, Tossed', Type: 'P'},
                   {name: 'Bola', Attack: '0', Defense: '0', Recover: '+1', Traits: 'Range S, Trip', Type: 'I'},
                   {name: 'Chakram', Attack: '+1', Defense: '0', Recover: '0', Traits: 'Range S, Tossed', Type: 'S'},
                   {name: 'Atlatl', Attack: '+2', Defense: '0', Recover: '-1', Traits: 'Range M, Tossed', Type: 'P'},
                   {name: 'Slingshot', Attack: '0', Defense: '0', Recover: '+1', Traits: 'Range S', Type: 'I'},
                   {name: 'Claw', Attack: '+1', Defense: '0', Recover: '0', Traits: 'Combo 2, Rending', Type: 'S'},
                   {name: 'Ulu', Attack: '0', Defense: '0', Recover: '+1', Traits: 'Combo 3', Type: 'S'},
                   {name: 'Blowgun', Attack: '0', Defense: '+1', Recover: '0', Traits: 'Range M', Type: 'P'},
                   {name: 'Tonfa', Attack: '0', Defense: '+1', Recover: '0', Traits: 'Parry', Type: 'I'},
                   {name: 'Hook Sword', Attack: '+1', Defense: '+1', Recover: '-1', Traits: 'Angled, Disarm', Type: 'P'},
                   {name: 'Kama', Attack: '+1', Defense: '0', Recover: '0', Traits: 'Angled, Combo 2', Type: 'P'},
                   {name: 'Shotel', Attack: '+2', Defense: '0', Recover: '-1', Traits: 'Angled, Curved', Type: 'P'},
                   {name: 'Rock', Attack: '0', Defense: '0', Recover: '+1', Traits: 'Range S, Tossed', Type: 'I'},
                   {name: 'Pillar', Attack: '+3', Defense: '+1', Recover: '-3', Traits: 'Collateral, Crush', Type: 'I'},
                   {name: 'Scythe', Attack: '+2', Defense: '0', Recover: '-1', Traits: 'Angled', Type: 'P'},
                   {name: 'Pickaxe', Attack: '+2', Defense: '+1', Recover: '-2', Traits: 'Angled, Crush', Type: 'P'},
                   {name: 'Nunchaku', Attack: '+1', Defense: '0', Recover: '0', Traits: 'Combo 3', Type: 'I'},
                   {name: 'Bladed Fan', Attack: '0', Defense: '0', Recover: '+1', Traits: 'Combo 2, Concealed', Type: 'S'},
                   {name: 'Staff', Attack: '0', Defense: '+2', Recover: '-1', Traits: 'Parry', Type: 'I'},
                   {name: 'Caestus', Attack: '0', Defense: '0', Recover: '+1', Traits: 'Combo 3, Set 2', Type: 'I'},
                   {name: 'Brass Knuckles', Attack: '0', Defense: '0', Recover: '+1', Traits: 'Combo 2, Concealed', Type: 'I'},
                   {name: 'Patta', Attack: '+1', Defense: '+1', Recover: '-1', Traits: 'Parry', Type: 'S/P'},
                   {name: 'Twinblade', Attack: '+1', Defense: '+1', Recover: '-1', Traits: 'Combo 3', Type: 'S/P'},
                   {name: 'Cane', Attack: '0', Defense: '+1', Recover: '0', Traits: 'Concealed, Parry', Type: 'I'},
                   {name: 'Macuahuitl', Attack: '+2', Defense: '0', Recover: '-1', Traits: 'Chop, Rending', Type: 'S'},
                   {name: 'Chain', Attack: '+1', Defense: '0', Recover: '0', Traits: 'Flexible, Reach', Type: 'I'},
                   {name: 'Whip', Attack: '0', Defense: '0', Recover: '+1', Traits: 'Flexible, Reach', Type: 'S'},
                   {name: 'Flintlock', Attack: '+1', Defense: '0', Recover: '0', Traits: 'Ammo 1, Firearm, Penetration, Range S', Type: 'P'},
                   {name: 'Derringer', Attack: '0', Defense: '0', Recover: '+1', Traits: 'Ammo 2, Concealed, Firearm, Range S', Type: 'P'},
                   {name: 'Revolver', Attack: '+1', Defense: '0', Recover: '0', Traits: 'Ammo 6, Firearm, Range S', Type: 'P'},
                   {name: 'Handgun', Attack: '+1', Defense: '0', Recover: '0', Traits: 'Ammo 8, Firearm, Range S', Type: 'P'},
                   {name: 'Hand Cannon', Attack: '+2', Defense: '0', Recover: '-1', Traits: 'Ammo 5, Firearm, Range S', Type: 'P'},
                   {name: 'Machine Pistol', Attack: '+1', Defense: '0', Recover: '0', Traits: 'Ammo 12, Firearm, Full Auto 3, Range S', Type: 'P'},
                   {name: 'Submachine Gun', Attack: '+2', Defense: '0', Recover: '-1', Traits: 'Ammo 16, Firearm, Full Auto 3, Range S', Type: 'P'},
                   {name: 'Blunderbuss', Attack: '+2', Defense: '0', Recover: '-1', Traits: 'Ammo 1, Buckshot, Firearm, Penetration, Range S', Type: 'P'},
                   {name: 'Sawed Off Shotgun', Attack: '+1', Defense: '0', Recover: '0', Traits: 'Ammo 2, Buckshot, Firearm, Range S', Type: 'P'},
                   {name: 'Pump-Action Shotgun', Attack: '+2', Defense: '0', Recover: '-1', Traits: 'Ammo 4, Buckshot, Firearm, Range S', Type: 'P'},
                   {name: 'Semi-Auto Shotgun', Attack: '+2', Defense: '0', Recover: '-1', Traits: 'Ammo 6, Buckshot, Firearm, Range S', Type: 'P'},
                   {name: 'Automatic Shotgun', Attack: '+2', Defense: '0', Recover: '-1', Traits: 'Ammo 8, Buckshot, Firearm, Full Auto 2, Range S', Type: 'P'},
                   {name: 'Muzzleloader', Attack: '+3', Defense: '0', Recover: '-2', Traits: 'Ammo 1, Firearm, Penetration, Range M', Type: 'P'},
                   {name: 'Manual-Action Rifle', Attack: '+3', Defense: '0', Recover: '-2', Traits: 'Ammo 4, Firearm, Range L', Type: 'P'},
                   {name: 'Semi-Auto Rifle', Attack: '+3', Defense: '0', Recover: '-2', Traits: 'Ammo 6, Firearm, Range L', Type: 'P'},
                   {name: 'Automatic Rifle', Attack: '+2', Defense: '0', Recover: '-1', Traits: 'Ammo 12, Firearm, Full Auto 2, Range M', Type: 'P'},
                   {name: 'Light Machine Gun', Attack: '+3', Defense: '0', Recover: '-2', Traits: 'Ammo 30, Firearm, Full Auto 3, Range M', Type: 'P'},
                   {name: 'High-Caliber Rifle', Attack: '+4', Defense: '0', Recover: '-3', Traits: 'Ammo 1, Firearm, Penetration, Range L', Type: 'P'},
                   {name: 'Culverin', Attack: '+5', Defense: '0', Recover: '-4', Traits: 'Ammo 1, Firearm, Penetration, Range M', Type: 'P'}]
  const build = ["Single", "Combo", "Paired"];
  const perk = ["Great", "Collapsable", "Akimbo"];
  const ruin = ["Breaching", "Devastating", "Explosive", "Flame Imbued", "Superheated", "Volcanic"];
  const decay = ["Corrosive", "Deathly", "Fertile", "Festering", "Poisoned", "Restorative"];
  const sorcery = ["Bridging", "Frost Imbued", "Lunar", "Soul Capturing", "Totemic", "Damning"];
  const slaughter = ["Animated", "Sadistic", "Form Shifting", "Furious", "Vampiric", "Symbiotic"];
  const vanity = ["Alchemic", "Blinding", "Divine", "Petrifying", "Shielding", "Wind Imbued"];
  const madness = ["Insane", "Lightning Imbued", "Prophetic", "Possessive", "Talking", "Thought Stealing"];
  const corruptions = [ruin, decay, sorcery, slaughter, vanity, madness];
  let weaponImage = document.createElement('img');
  let weaponImage2 = document.createElement('img');
  let powerImage = document.createElement('img');
  let powerImage2 = document.createElement('img');
  let weapNum = 0;
  let weapNum2 = 0;

  //checks to see if previous weapon generation is still there and removes it
  if (imageContainer.hasChildNodes()) {
   do {
    imageContainer.removeChild(imageContainer.childNodes[0]);
    } while (imageContainer.hasChildNodes());
  };
  if (textContainer.hasChildNodes()) {
    do {
      textContainer.removeChild(textContainer.childNodes[0]);
    } while (textContainer.hasChildNodes());
  }

  function generateNumber (maxNum) {
    return Math.floor(Math.random() * maxNum)
  }


  let corrupNum = generateNumber(6);
  let powNum = generateNumber(6);
  let weaponStats2 = '';
  let Output = '';

  //generates and determines the power for the weapon
  function findPower (corrupNumber, powerNumber, position) {
    let corrupType = corruptions[corrupNumber];
    Output += (corrupType[powerNumber] + " ");
    if (position == 1) {
      powerImage.classList.add('power-image');
      powerImage.src = `images/powers/${corrupType[powerNumber]}.png`;
      powerImage.style.cssText = 'height: 100px; width: 100px;'
      imageContainer.appendChild(powerImage);
    }
    else if (position == 2) {
      powerImage2.classList.add('power-image');
      powerImage2.src = `images/powers/${corrupType[powerNumber]}.png`;
      powerImage2.style.cssText = 'height: 100px; width: 100px;'
      imageContainer.appendChild(powerImage2);
    }
  }

  weapNum = generateNumber(100);


  function determineWeaponAttribute () {
    let determinedWeaponAttribute = generateNumber(3);
    return build[determinedWeaponAttribute];
  }
  let weaponAttribute = determineWeaponAttribute();

  function appendWeaponStats () {
    weaponStats = document.createElement('p');
    weaponStats.classList.add('weapon-stats');
    weaponStats.textContent = `${weapons[weapNum].name} | Attack: ${weapons[weapNum].Attack} Defense: ${weapons[weapNum].Defense}
                Recovery: ${weapons[weapNum].Recover} | Traits: ${weapons[weapNum].Traits} |  Damage Type: ${weapons[weapNum].Type}`
    textContainer.appendChild(weaponStats);

    if (weaponAttribute == "Combo" || weaponAttribute == "Paired") {
        weaponStats2 = document.createElement('p');
        weaponStats2.classList.add('weapon-stats');
        weaponStats2.textContent = `${weapons[weapNum2].name} | Attack: ${weapons[weapNum2].Attack} Defense: ${weapons[weapNum2].Defense}
                    Recovery: ${weapons[weapNum2].Recover} | Traits: ${weapons[weapNum2].Traits} |  Damage Type: ${weapons[weapNum2].Type}`
        textContainer.appendChild(weaponStats2);
    }
  }

  function appendWeaponImages () {
    //adds the weapon image then stats to the DOM
    weaponImage.classList.add('weapon-image');
    weaponImage.src = `images/weapons/${weapons[weapNum].name}.png`;
    weaponImage.style.cssText = 'max-height: 200px; max-width: 300px;'
    imageContainer.appendChild(weaponImage);

    //secondary weapon info if available
    if(weapNum2) {
      weaponImage2.classList.add('weapon-image');
      weaponImage2.src = `images/weapons/${weapons[weapNum2].name}.png`;
      weaponImage2.style.cssText = 'max-height: 200px; max-width: 300px;'
      imageContainer.appendChild(weaponImage2);
    }
  }

  function buildWeapon () {
    if (weaponAttribute == "Single") {
        findPower(corrupNum, powNum, 1);
        let corrupNum2 = generateNumber(6);
        let powNum2 = generateNumber(6);
          while (corrupNum == corrupNum2 && powNum == powNum2) {
            findPower(generateNumber(6), generateNumber(6), 2);
          }
        findPower(corrupNum2, powNum2, 2);
        Output += (weapons[weapNum].name);
      }
    else if (weaponAttribute == "Combo") {
        findPower(corrupNum, powNum, 1);
        weapNum2 = generateNumber(100);
            while(weapNum2 == weapNum) {
                weapNum2 = generateNumber(100);
              }
        Output += (weapons[weapNum].name + " combined with " + weapons[weapNum2].name);
      }
    else if (weaponAttribute == "Paired") {
        findPower(corrupNum, powNum, 1);
        weapNum2 = Math.floor(Math.random() * 100);
            while(weapNum2 == weapNum){
                weapNum2 = Math.floor(Math.random() * 100);
              }
        Output += (weapons[weapNum].name + " paired alongside " + weapons[weapNum2].name);
      }
    appendWeaponStats();
    appendWeaponImages();
  }

  buildWeapon();




  document.getElementById("Output").innerHTML=Output;
}
