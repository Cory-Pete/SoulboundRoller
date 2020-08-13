let imageContainer = document.getElementById('image-container');
  //main code for generating weapon, only function, and it is called by the button

function GenerateWeapon() {

  //the arrays for storing all of the words used in generation of Weapons (coutesy hacker Andrew)
  const weapons = ["Longsword", "Shortsword", "Rapier", "Scimitar", "Katana", "Bastard Sword",
      "Great Sword", "Kukri", "Khopesh", "Zweihander", "Poleaxe", "Halberd", "Bardiche", "Spontoon",
      "Short Spear", "Quarterstaff", "Lance", "Polehammer", "Naginata", "Trident", "Bludgeon",
      "Mace", "Great Mace", "Flail", "Hammer", "Greath Hammer", "Warpick", "Hand Axe", "Great Axe",
      "Kanabo", "Dagger", "Push Dagger", "Punching Dagger", "Curved Dagger", "Shiv", "Buckler",
      "Heater Shield", "Kite Shield", "Tower Shield", "Sai", "Parrying Dagger", "Gauntlet",
      "Shortbow", "Compound Bow", "Longbow", "Great Bow", "Hand Crossbow", "Crossbow",
      "Repeating Crossbow", "Shurikens", "Throwing Knives", "Darts", "Boomerang", "Tomahawk",
      "Javelin", "Bola", "Chakram", "Atlatl", "Slingshot", "Claw", "Ulu", "Blowgun", "Tonfa",
      "Hook Sword", "Kama", "Shotel", "Rock", "Pillar", "Scythe", "Pickaxe", "Nunchaku", "Bladed Fan",
      "Staff", "Caestus", "Brass Knuckles", "Patta", "Twinblade", "Cane", "Macuahuitl", "Chain",
      "Whip", "Flintlock", "Derringer", "Revolver", "Handgun", "Hand Cannon", "Machine Pistol",
      "Submachine Gun", "Blunderbuss", "Sawed Off Shotgun", "Pump-Action Shotgun", "Semi-Auto Shotgun",
      "Automatic Shotgun", "Muzzleloader", "Manual-Action Rifle", "Semi-Auto Rifle", "Automatic Rifle",
      "Light Machine Gun", "High-Caliber Rifle", "Culverin"];
  const build = ["Single", "Combo", "Paired"];
  const perk = ["Great", "Collapsable", "Akimbo"];
  const corruptions = ["Ruin", "Decay", "Sorcery", "Slaughter", "Vanity", "Madness"];
  const ruin = ["Super Heated", "Flame Imbued", "Explosive", "Smoke Shifting",
      "Magnetic", "Devastating", "Pinning", "Silver Earning", "Damning", "Breaching"];
  const decay = ["Entangling", "Corroding", "Festering", "Moss Growing", "Bone Spiked",
      "Minion Conjuring", "Death Speaking", "Shapeshifting", "Tethering", "Fern Growing"];
  const sorcery = ["Moon Catching", "Voodoo", "Soul Capturing", "Poisoned", "Frost Imbued",
      "Arcane Imbued", "Interdimensional", "Bridging", "Companion Worthy", "Phantom"];
  const slaughter = ["Ranged", "Animated", "Blood Thirsty", "Ever Sharp", "Sanguine",
      "Symbiotic", "Form Shifting", "Relocating", "Supply Giving", "Furious"];
  const vanity = ["Blinding", "Restorative", "Inquisitorial", "Protective",
      "Wind Imbued", "Petrifying", "Duplicating", "Sensing", "Time Shifting", "Winged"];
  const madness = ["Lightning Imbued", "Insane", "Talking", "Malevolent",
      "Possessive", "Thought Stealing", "Guiding", "Chaotic", "Seeing", "Disguising"];

  let corrupNum = Math.floor(Math.random() * 6);
  let powNum = Math.floor(Math.random() * 10);

  let Output = '';

  //first switch statement gives the weaopon its power
  switch(corrupNum){
    case 0:
      Output = (ruin[powNum] + " ");
      break;

    case 1:
      Output = (decay[powNum] + " ");
      break;

    case 2:
      Output = (sorcery[powNum] + " ");
      break;

    case 3:
      Output = (slaughter[powNum] + " ");
      break;

    case 4:
      Output = (vanity[powNum] + " ");
      break;

    default:
      Output = (madness[powNum] + " ");
      break;

  }

  let weapNum = Math.floor(Math.random() * 100);
  let weapNum2 = 0;
  let testImage2 = document.createElement('img');
  //second switch generates the rest of the weapon
  switch(Math.floor(Math.random() * 3)) {
      case 0:
          var perkNum = Math.floor(Math.random() * 3);
          Output += (perk[perkNum] + " ");
          	if(perkNum == 2  && weapNum != 85 && weapNum != 86 && weapNum != 87 && weapNum != 88){
  				Output +=(weapons[weapNum] + "s");
              }
              else{
          		Output += (weapons[weapNum]);
         		}
          break;

      case 1:
      	weapNum2 = Math.floor(Math.random() * 100);
          	while(weapNum2 == weapNum){
              	weapNum2 = Math.floor(Math.random() * 100);
              }
          if(weapNum2 != 85 && weapNum2 != 86 && weapNum2 != 87 && weapNum2 != 88){
      		Output += (weapons[weapNum] + " combined with a " + weapons[weapNum2]);
          }
          else{
          	Output += (weapons[weapNum] + " combined with " + weapons[weapNum2]);
          }
          testImage2.classList.add('weapon-image');
          testImage2.src = `images/${weapons[weapNum2]}.png`;
          break;

      default:
      	weapNum2 = Math.floor(Math.random() * 100);
          	while(weapNum2 == weapNum){
              	weapNum2 = Math.floor(Math.random() * 100);
              }
          if(weapNum2 != 85 && weapNum2 != 86 && weapNum2 != 87 && weapNum2 != 88){
      		Output += (weapons[weapNum] + " paired alongside a " + weapons[weapNum2]);
          }
          else{
          	Output += (weapons[weapNum] + " paired alongside " + weapons[weapNum2]);
          }
          testImage2.classList.add('weapon-image');
          testImage2.src = `images/${weapons[weapNum2]}.png`;
          break;
  }

  document.getElementById("Output").innerHTML=Output;


  let testImage = document.createElement('img');
  testImage.classList.add('weapon-image');
  testImage.src = `images/${weapons[weapNum]}.png`;
  imageContainer.appendChild(testImage);

  if(weapNum2) {
    imageContainer.appendChild(testImage2);
  }
}
