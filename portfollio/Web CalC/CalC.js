function add(){
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);
    if(isNaN(num1)||isNaN(num2)){
        alert("Please input valid digit")}
    var result = num1 + num2;
    document.getElementById('result').innerHTML = "Addition: " + result;
  }
  function subtraction(){
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);
    if(isNaN(num1)||isNaN(num2)){
        alert("Please input valid digit")}
    var result = num1 - num2;
    document.getElementById('result').innerHTML = "Subtraction: " + result;
  }
  function multiply(){
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);
    var result = num1 * num2;
    document.getElementById('result').innerHTML = "Multipy: " + result;
  }
  function devide(){
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);
    var result = num1 / num2;
    document.getElementById('result').innerHTML = "Devide: " + result;
  }
  function Square(){
    var side = parseFloat(document.getElementById('side').value);
    var result = side*side;
    document.getElementById('result square').innerHTML =  "Square: " + result;
  }
  function Rectangle(){
    var length = parseFloat(document.getElementById('length').value);
    var breadth = parseFloat(document.getElementById('breadth').value);
    var result = length * breadth;
    document.getElementById('result rectangle').innerHTML = "Rectangle: " + result;
  }

  function Triangle(){
    var height = parseFloat(document.getElementById('height').value);  
    var width = parseFloat(document.getElementById('width').value); 
    var result = ((1/2)*height*width);
    document.getElementById('result Triangle').innerHTML = "Triangle: " + result;
  }
