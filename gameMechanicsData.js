const testGameMechanicsData = {
  name: "Test",
  id : 0,
  
  initialPerks: 3,
  
  oghmaData : {
    perksGiven : 7,
    hmsGiven : [200,200,200]
  },
  
  leveling: {
    base : 30,
    mult : 0,
    hmsGiven : [5,5,5]
  },
  
  derivedAttributes : {
    attribute : ["Magic Resist",
                 "Magicka Regen",
                 "Disease Resist",
                 "Poison Resist",
                 "Stamina Regen",
                 "Move Speed",
                 "Carry Weight",
                 "Ranged Damage",
                 "One-Hand Damage",
                 "Two-Hand Damage",
                 "Unarmed Damage"],
    isPercent : [true,
		         true,
                 true,
                 true,
                 true,
                 true,
                 false,
                 true,
                 true,
                 true,
                 false,
		 true,
		 true,
		 true,
		 true,
		 true,
		 true,],
    prefactor : [1.0,
                8.0,
                4.0,
                4.0,
                8.0,
                0.75,
                4.0,
                4.0,
                4.0,
                4.0,
                4.5,
                4.0],
    threshold : [150,
                 100,
                 100,
                 140,
                 100,
                 125,
                 110,
                 150,
                 150,
                 150,
                 125,
                 100],
    weight_health : [0,
                     0,
                     0.4,
                     0.6,
                     0,
                     0.2,
                     0.8,
                     0.2,
                     0.5,
                     0.8,
                     0.5,
                     0],
    weight_magicka : [1,
                      1,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0],
    weight_stamina : [0,
                      0,
                      0.6,
                      0.4,
                      1.0,
                      0.8,
                      0.2,
                      0.8,
                      0.5,
                      0.2,
                      0.5,
                      0]
  }
};
addGameMechanicsData(testGameMechanicsData);

