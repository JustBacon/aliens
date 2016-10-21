var aliens = [5000,3000,2000]; //Green, Red, Blue


function invasion(){
  if (aliens[0]+aliens[1]+aliens[2] == 10000){
	if(aliens[0] > 5000 ){
		console.log("MOTHER OF GOD, not the green ones t(-.-t)");
	}else if(aliens[0] + aliens[1] > 8000){
		console.log("DOOOOOM ~(-.-)~");
	}else if(aliens[1] + aliens[2] <= 3000){
		console.log("We will not go quietly into the night. We will not vanish without a fight. TODAY WE CELEBRATE OUR INDEPENDANCE DAY!");
	}else{
      console.log("NOTHING HAPPENS -poof-");
    }
  }else{
    console.log("There aren't 10000 aliens. Oops.")
  }
}

invasion()