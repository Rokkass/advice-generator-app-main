const rollButton = document.querySelector(".advice__roll");
const adviceNumber = document.querySelector(".advice__number");
const adviceContent= document.querySelector(".advice__content");
const timerDiv= document.querySelector(".timer");

function fetchAdvices(){
	fetch("https://api.adviceslip.com/advice")
		.then(function(res){
			return res.json();
		})
		.then(function (res){
			adviceNumber.textContent = `ADVICE #${res.slip.id}`;
			adviceContent.textContent = `"${res.slip.advice}"`;
		})
		.catch(function (e){
			console.log("Wystąpił błąd: "+e.message);
		});
	timerDiv.style.transform = "translate(50%, 100px)";
	setTimeout(function (){
			timerDiv.style.transform = "translate(50%, -100px)";
		}, 2000);
}

rollButton.addEventListener("click", fetchAdvices);

fetchAdvices();