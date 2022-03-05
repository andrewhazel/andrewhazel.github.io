function valueOfBacMax(bacFormObj)
{
    var sex = bacFormObj.sex.
        options[bacFormObj.sex.selectedIndex].text;
    var weight = bacFormObj.weight.value;
    var drinks = bacFormObj.drinks.value;
    var alcoholGrams = drinks * 14;
    var bodyGrams = weight * 454;
    var sexValue = sex == "Male" ? 0.68 : 0.55
    var bac = (alcoholGrams / (bodyGrams * sexValue)) * 100;

    return bac;
}

function valueOfBacElapsed(bacFormObj){
    var sex = bacFormObj.sex.
        options[bacFormObj.sex.selectedIndex].text;
    var weight = bacFormObj.weight.value;
    var drinks = bacFormObj.drinks.value;
    var hours = bacFormObj.time.value;
    var alcoholGrams = drinks * 14;
    var bodyGrams = weight * 454;
    var sexValue = sex == "Male" ? 0.68 : 0.55
    var bacPercent = (alcoholGrams / (bodyGrams * sexValue)) * 100;

    var bac = bacPercent - (0.015 * hours);

    if(bac < 0.0)
        bac = 0.0;
    else if (bac >= 1.0)
        bac = 1.0;

    return bac;
}

function determineCSS(bac){
    if(bac >= 0.0 && bac < 0.07){
        return "mildBac";
    }else if (bac >= 0.07 && bac < 0.13){
        return "moderateBac";
    }else if (bac >= 0.13 && bac < 0.25){
        return "severeBac";
    }else{
        return "dangerousBac"
    }
}


