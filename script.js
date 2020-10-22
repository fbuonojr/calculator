$(document).ready(function() {
    //global variables
    var firstNumber = 0;
    var secondNumber = 0;
    var operator = "";
    var result = 0;
    var isOperatorChosen = false;
    var isCalculated = false;

    //function to reset our calculator
    function initializeCalculator() {
        firstNumber = 0;
        secondNumber = 0;
        operator = "";
        result = 0;
        isOperatorChosen = false;
        isCalculated = false;

        $("#first-number, #second-Number, #operator, #result").empty();
    }
})