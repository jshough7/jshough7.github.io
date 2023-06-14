/*Expand/Contract*/
function seeMore(){
	let showP = document.getElementById("showP");
	let expandP = document.getElementById("expandP");
	
	if(showP.classList.contains("hidden")){
		showP.classList.remove("hidden");
		expandP.innerHTML = "See Less..";
	}
	else{
		showP.classList.add("hidden");
		expandP.innerHTML = "See More...";
		return false;
	}
}

function seeMore2(){
	let showP2 = document.getElementById("showP2");
	let expandP2 = document.getElementById("expandP2");
	
	if(showP2.classList.contains("hidden")){
		showP2.classList.remove("hidden");
		expandP2.innerHTML = "See Less..";
	}
	else{
		showP2.classList.add("hidden");
		expandP2.innerHTML = "See More...";
		return false;
	}
}

/*Quiz Questions*/
function showResult(){
	let quiz1 = document.getElementById("quiz1").value;
	let quiz2 = document.getElementById("quiz2").value;
	let quiz3 = document.getElementById("quiz3").value;
	let quiz4 = document.getElementById("quiz4").value;
	let quiz5 = document.getElementById("quiz5").value;
	let resultDiv = document.getElementById("result");
	resultDiv.classList.remove("invisible");
	
	let count = 0;
	let resultA = document.getElementById("result-a");
	let resultB = document.getElementById("result-b");
	let resultC = document.getElementById("result-c");
	let resultD = document.getElementById("result-d");
	let resultE = document.getElementById("result-e");
	let scoreResult = document.getElementById("score-result");
	let answerA = "Incorrect";
	let answerB = "Incorrect";
	let answerC = "Incorrect";
	let answerD = "Incorrect";
	let answerE = "Incorrect";
	
	
	if(quiz1=="true1"){
		answerC = "Correct";
		count ++
	}
	
		if(quiz2=="true2"){
		answerD = "Correct";
		count ++
	}
	
		if(quiz3=="true3"){
		answerB = "Correct";
		count ++
	}
	
		if(quiz4=="true4"){
		answerA = "Correct";
		count ++
	}
	
		if(quiz5=="true5"){
		answerE = "Correct";
		count ++
	}
	resultA.innerHTML = "Question 1 - " + answerC;
	resultB.innerHTML = "Question 2 - " + answerD;
	resultC.innerHTML = "Question 3 - " + answerB;
	resultD.innerHTML = "Question 4 - " + answerA;
	resultE.innerHTML = "Question 5 - " + answerE;
	scoreResult.innerHTML = "Score: " + count + "/5";
	
	resultA.classList.add("center");
	resultB.classList.add("center");
	resultC.classList.add("center");
	resultD.classList.add("center");
	resultE.classList.add("center");
	scoreResult.classList.add("center");
}

/*Slideshow*/

let num = 0;

function changeSlide(){
	let slideshowDiv = document.getElementById("slideshow");
	let work1 = document.getElementById("work1");
	let work2 = document.getElementById("work2");
	let work3 = document.getElementById("work3");
	let work4 = document.getElementById("work4");
	
	if(work1.classList.contains("visible")){
		work1.classList.remove("center");
		work1.classList.remove("visible");
		work1.classList.add("hidden");
		work2.classList.remove("hidden");
		work2.classList.add("visible");
		work2.classList.add("center");
	}
	
	else if(work2.classList.contains("visible")){
		work2.classList.remove("center");
		work2.classList.remove("visible");
		work2.classList.add("hidden");
		work3.classList.remove("hidden");
		work3.classList.add("visible");
		work3.classList.add("center");
	}
	
	else if(work3.classList.contains("visible")){
		work3.classList.remove("center");
		work3.classList.remove("visible");
		work3.classList.add("hidden");
		work4.classList.remove("hidden");
		work4.classList.add("visible");
		work4.classList.add("center");
	}
	
	else if(work4.classList.contains("visible")){
		work4.classList.remove("center");
		work4.classList.remove("visible");
		work4.classList.add("hidden");
		work5.classList.remove("hidden");
		work5.classList.add("visible");
		work5.classList.add("center");
	}
	else if(work5.classList.contains("visible")){
		work5.classList.remove("center");
		work5.classList.remove("visible");
		work5.classList.add("hidden");
		work1.classList.remove("hidden");
		work1.classList.add("visible");
		work1.classList.add("center");
	}
}

setInterval(changeSlide, 2000);