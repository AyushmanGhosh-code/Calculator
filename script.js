//Function to clear the inputs on display
function allClear()
{
    var result = document.getElementById("result");
    result.value = "";
}

//Function to evaluate the result
function equal()
{
    var equals = document.getElementById("equals");
    var result = document.getElementById("result");
    result.value = eval(result.value);
}

//Function to delete a string one at a time
function de()
{
    var result = document.getElementById("result");
    result.value = result.value.toString().slice(0,-1);
}
