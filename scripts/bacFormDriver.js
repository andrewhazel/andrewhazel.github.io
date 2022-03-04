function bacFormDriver()
{
    var bacFormObj = document.getElementById("bacForm");
    if (bacFormValidate(bacFormObj))
    {
        if(hoursValid(bacFormObj.time.value)){
            valueOfBacElapsed(bacFormObj);
        }else{
            valueOfBacMax(bacFormObj);
        }
    }
}
