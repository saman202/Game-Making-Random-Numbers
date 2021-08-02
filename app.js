console.log("salam");

const newOption = document.querySelector("#option-creat");
const newOption2 = document.querySelector("#option-creat2");
const selectNumber = document.querySelector("#select-num");
const playerScore = document.querySelector("#player-score");
const numberMatchTot = document.querySelector("#number-match");
const selectCount = document.querySelector("#select-count");
selectCount.value = 1;

//const webPage = location.pathname("https://htmlcolorcodes.com");
//console.log(webPage.querySelector(".hex js - hex selectable"));
//.URL("https://www.google.com/index").querySelector("#tophf");
console.log("url test");
//const webPage = location.assign("https://www.google.com/index");
//console.log(webPage);

let numberMatch = '';
let x = 0;
let i = 0;
let numsearch = "";
let z = 0;
let tot = 0;


/* const newHeader = document.createElement("h1");
newHeader.textContent = "Added Header!";
document.querySelector("body").appendChild(newHeader); */
//var web3 = new Web3(Web3.givenProvider || "https://mainnet.infura.io/v3/419617b13aa84419b68793c1d1a145fa");


const removeButton = document.querySelector("#removeb");
const addButton = document.querySelector("#addb");



addButton.addEventListener("click", pressAdd);
removeButton.addEventListener("click", pressRemove);







function pressAdd(e) {

	let numMach = Math.floor(selectCount.value);
	console.log("num mach is " + numMach);
	for (let counter = 0; counter < numMach; counter++) {



	i++;
	//selectNumber.selectedIndex


	e.target.textContent = "Number is : " + i;

	/* const newOption = document.createElement(`option`);
	newOption.id = i;
	console.log("Function add run"); */

	const newOption2 = document.createElement(`option`);
	newOption2.id = i;
	console.log("Function add run");


	let randomNumber	= 99999999999 + Math.floor(Math.random() * (10000000000 - 99999999999));
	//newOption.textContent = randomNumber;
	newOption2.textContent = randomNumber;
	const numberMach = String(randomNumber);


	const selectNumString = String(selectNumber.selectedIndex);

	console.log(numberMach);
	console.log(selectNumString);

	numsearch = numberMach.split("");
	const matchlenght = numsearch.filter(function (item) {
		return item === selectNumString;

	});
	console.log("Match : " + matchlenght);
	console.log("Match lenght : " + matchlenght.length);
	console.log(numsearch);


	if (matchlenght.length > 1) {
		tot++;
		numberMatchTot.innerHTML = "Your match number: " + tot;

	}

	/*if (matchlenght.length === 1) {
		z++;


		playerScore.innerHTML = "Your Score is: " + z;
		document.querySelector("#option-creat2").appendChild(newOption2);
		newOption2.style["color"] = "#119497";
		newOption2.style["fontSize"] = "14px";
		newOption2.style["backgroundColor"] = "#A6B6B0";
		//newOption2.style["fontFamily"] = "Britannic";


	} else*/
	if (matchlenght.length === 2) {

		z = z + 1;

		playerScore.innerHTML = "Your Score is: " + z;
		document.querySelector("#option-creat2").appendChild(newOption2);
		newOption2.style["color"] = "#037EDB";
		newOption2.style["fontSize"] = "16px";
		newOption2.style["backgroundColor"] = "#A6B6B0";
		//newOption2.style["fontFamily"] = "Britannic";

	} else if (matchlenght.length === 3) {

		z = z + 5;

		playerScore.innerHTML = "Your Score is: " + z;
		document.querySelector("#option-creat2").appendChild(newOption2);
		newOption2.style["color"] = "#7B06F5";
		newOption2.style["fontSize"] = "18px";
		newOption2.style["backgroundColor"] = "#A6B6B0";
		//newOption2.style["fontFamily"] = "Britannic";

	} else if (matchlenght.length === 4) {

		z = z + 20;

		playerScore.innerHTML = "Your Score is: " + z;
		document.querySelector("#option-creat2").appendChild(newOption2);
		newOption2.style["color"] = "#F506B7";
		newOption2.style["fontSize"] = "20px";
		newOption2.style["backgroundColor"] = "#A6B6B0";
		//newOption2.style["fontFamily"] = "Britannic";

	} else if (matchlenght.length > 4) {

		z = z + 100;

		playerScore.innerHTML = "Your Score is: " + z;
		document.querySelector("#option-creat2").appendChild(newOption2);
		newOption2.style["color"] = "#650AA3";
		newOption2.style["fontSize"] = "25px";
		newOption2.style["backgroundColor"] = "#FCA451";
		//newOption2.style["fontFamily"] = "Britannic";

	} else {

		document.querySelector("#option-creat2").appendChild(newOption2);
		newOption2.style["color"] = "#FF3604";
	}


	}

}


function pressRemove() {


	location.reload();


}
