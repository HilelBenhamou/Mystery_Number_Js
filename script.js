playTheGame();
function playTheGame(){
	var counter=0;
	var r=confirm("Do you want to play the Game ?");
	if(r== true){
		var numb=parseInt(prompt("The Game is to find the number that the computer choose between 1 and 100 ! Please Put your first choice ! You have 6 chances to find the good number !"));
		if(numb===""){
			alert("Sorry Not a number, Goodbye");
		}
		else if(numb<0 || numb>101){
			alert("Sorry it's not a good number, Goodbye");
		}
		else{
			var computerNumber=Math.floor(Math.random() * 101); 
			test(numb, computerNumber,counter);
			    //3    //7
		}
	}
	else{
		alert("No problem, Goodbye !");
	}
}



function test(myNumber, computerNumber,counter){

	if(myNumber==computerNumber){
		alert("Great it\'s "+computerNumber+"! You found it ! You won !!");
	}
	else if(myNumber<computerNumber){
		counter++;
		if(counter===6){
			alert("You can\'t try again ! The number was "+computerNumber+" !");
		}
		else {
			var numb=parseInt(prompt("It\'s bigger ! Guess again !"));
			test(numb,computerNumber,counter);
		}
	}

	else if(myNumber>computerNumber){
		counter++;
		if(counter===6){
			alert("You can\'t try again ! The number was "+computerNumber+" !");
		}
		else {
			var numb=parseInt(prompt("It\'s lower ! Guess again !"));
			test(numb, computerNumber,counter);
		}
	}
}


