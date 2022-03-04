function bacFormDriver()
{
    var bacFormObj = document.getElementById("bacForm");
    if (bacFormValidate(bacFormObj))
    {
        if(hoursValid(backFormObj.hours.value)){
            valueOfBacElapsed(bacFormObj);
        }else{
            valueOfBacMax(bacFormObj);
        }
    }
}
