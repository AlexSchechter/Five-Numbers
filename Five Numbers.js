$(function(){
	function calculations() {
		var firstNumber = +document.getElementById('firstInput').value;
		var secondNumber = +document.getElementById('secondInput').value;
		var thirdNumber = +document.getElementById('thirdInput').value;
		var fourthNumber = +document.getElementById('fourthInput').value;
		var fifthNumber = +document.getElementById('fifthInput').value;

		
		smallestNumber = Math.min(firstNumber, secondNumber, thirdNumber, fourthNumber, fifthNumber);
		largestNumber = Math.max(firstNumber, secondNumber, thirdNumber, fourthNumber, fifthNumber);
		mySum = firstNumber + secondNumber + thirdNumber + fourthNumber + fifthNumber;
		myMean = mySum / 5;
		myProduct = firstNumber * secondNumber * thirdNumber * fourthNumber * fifthNumber;
		
		document.getElementById('smallest').innerHTML="The smallest number is: " + smallestNumber;
		document.getElementById('largest').innerHTML="The largest number is: " + largestNumber;
		document.getElementById('mean').innerHTML="The mean of the numbers is: " + myMean;
		document.getElementById('sum').innerHTML="The sum of the numbers is: " + mySum;
		document.getElementById('product').innerHTML="The product of the numbers is: " + myProduct;			
	}

	function myReset() {
		document.getElementById('firstInput').value = "";
		document.getElementById('secondInput').value = "";
		document.getElementById('thirdInput').value = "";
		document.getElementById('fourthInput').value = "";
		document.getElementById('fifthInput').value = "";
		
		document.getElementById('smallest').innerHTML = "";
		document.getElementById('largest').innerHTML = "";
		document.getElementById('mean').innerHTML = "";
		document.getElementById('sum').innerHTML = "";
		document.getElementById('product').innerHTML = "";
	}