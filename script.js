$(document).ready(function () {
    //global variables
    var firstNumber = 0;
    var secondNumber = 0;
    var operator = "";
    var result = 0;
    var isOperatorChosen = false;
    var isCalculated = false;

    //function to reset our calculator
    function initializeCalculator() {
        firstNumber = "";
        secondNumber = "";
        operator = "";
        // result = "";
        isOperatorChosen = false;
        isCalculated = false;

        $("#first-number, #second-number, #operator, #result").empty();
    }

    //click function for number buttons
    $(".number").on("click", function () {

        //see if calculation has already been done
        if (isCalculated) {
            return false;
        }

        // check to see if operator has been chosen: if yes write second number if no write first
        if (isOperatorChosen) {
            secondNumber += $(this).val();
            $("#second-number").text(secondNumber);
        }
        else {
            firstNumber += $(this).val();
            $("#first-number").text(firstNumber);
        }
    });

    //click function for operator buttons
    $(".operator").on("click", function () {
        //check if first number is selected or if a calculation has already been done
        if (!firstNumber || isCalculated) {
            return false;
        }

        isOperatorChosen = true;

        operator = $(this).val();

        $("#operator").text($(this).text());
    });

    $(".equal").on("click", function () {
        //if already calculated, quit
        if (isCalculated) {
            return false;
        }

        isCalculated = true;

        firstNumber = parseInt(firstNumber);
        secondNumber = parseInt(secondNumber);

        if (operator === "plus") {
            result = firstNumber + secondNumber;
        }

        else if (operator === "minus") {
            result = firstNumber - secondNumber;
        }

        else if (operator === "times") {
            result = firstNumber * secondNumber;
        }

        else if (operator === "divide") {
            result = firstNumber / secondNumber;
        }

        else if (operator === "power") {
            result = Math.pow(firstNumber, secondNumber);
        }
        $("#result").text(result);
    });

    $(".clear").on("click", function() {
        initializeCalculator();
    });

    initializeCalculator();
});