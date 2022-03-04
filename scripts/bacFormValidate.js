function bacFormValidate(bacFormObj)
{
    var sex = bacFormObj.sex.
        options[bacFormObj.sex.selectedIndex].text;
    var weight = bacFormObj.weight.value;
    var drinks = bacFormObj.drinks.value;
    var validWeight, validSex, validDrinks, validTime;

    return heightOK && weightOK && emailOK;
}

function inchesValid(height)
{
    if (height == "" || isNaN(height))
    {
        alert("Error: Please input a number for height.");
        return false;
    }
    if (height < 0 || height > 100)
    {
        alert("Error: Height must be in the range 0-100 inches.");
        return false;
    }
    return true;
}

function centimetresValid(height)
{
    if (height == "" || isNaN(height))
    {
        alert("Error: Please input a number for height.");
        return false;
    }
    if (height < 0 || height > 300)
    {
        alert("Error: Height must be in the range 0-300 centimeters.");
        return false;
    }
    return true;
}

function poundsValid(weight)
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

function kilogramsValid(weight)
{
    if (weight == "" || isNaN(weight))
    {
        alert("Error: Please input a number for weight.");
        return false;
    }
    if (weight <= 0 || weight > 500)
    {
        alert("Error: Weight must be in the range 0-500 kilograms.");
        return false;
    }
    return true;
}

function emailValid(address)
{
    var p = address.search(/.+@.+/);
    if (p == 0)
        return true;
    else
    {
        alert("Error: Invalid e-mail address.");
        return false;
    }
}

