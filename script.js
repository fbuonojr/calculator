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

    //click function for number buttons
    $(".number").on("click", function(){
        //see if calculation has already been done
        if(isCalculated){
            return false;
        }

        // check to see if operator has been chosen: if yes write second number if no write first
        if(isOperatorChosen){
            secondNumber += $(this).vaL();
            $("#second-number").text(secondNumber);
        }
        else {
            firstNumber += $(this).vaL();
            $("#first-number").text(firstNumber);
        }
    });

    $(".operator").on("click", function() {
        
    })
})