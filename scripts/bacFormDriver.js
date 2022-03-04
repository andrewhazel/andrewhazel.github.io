function bacFormDriver()
{
    var bacFormObj = document.getElementById("bacForm");
    if (bacFormValidate(bacFormObj))
    {
        var bmi = valueOfBMI(bmiFormObj);
        if (bmiFormObj.details.checked)
            displayDetails(bmiFormObj, bmi);
        else
            alert("Your BMI: " + valueTo1DecimalPlace(bmi));
    }
}
