function bacFormValidate(bacFormObj)
{
    var sex = bacFormObj.sex.
        options[bacFormObj.sex.selectedIndex].text;
    var weight = bacFormObj.weight.value;
    var drinks = bacFormObj.drinks.value;
    var validWeight, validSex, validDrinks;

    validSex = isSexValid(sex);
    validWeight = isWeightValid(weight);
    validDrinks = drinksValid(drinks);

    return validSex && validWeight && validDrinks;
}

function isSexValid(sex)
{
    if (sex == "")
    {
        alert("Error: Please select an option for sex.");
        return false;
    }
    return true;
}


function isWeightValid(weight)
{
    if (weight == "" || isNaN(weight))
    {
        alert("Error: Please input a number for weight.");
        return false;
    }
    if (weight < 0 || weight > 1000)
    {
        alert("Error: Weight must be in the range 0-1000 pounds.");
        return false;
    }
    return true;
}

function drinksValid(drinks)
{
    if (drinks == "" || isNaN(drink))
    {
        alert("Error: Please input a value for number of drinks.");
        return false;
    }
    if (drinks <= 0 || drinks > 50)
    {
        alert("Error: Drinks must be in the range 0-50.");
        return false;
    }
    return true;
}

function hoursValid(hours)
{
    if (hours == "" || isNaN(drink))
    {
        alert("Alert: No value entered for time, maximum BAC will be calculated.");
        return false;
    }
    if (hours <= 0 || hours > 50)
    {
        alert("Error: Hours must be in the range 0-50, maximum BAC will be calculated.");
        return false;
    }
    return true;
}

