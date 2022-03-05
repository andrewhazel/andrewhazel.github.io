function bacFormDriver()
{
    var bacFormObj = document.getElementById("bacForm");
    if (bacFormValidate(bacFormObj))
    {
        var textArea = document.getElementById("resultsArea");
        var sex = bacFormObj.sex.
            options[bacFormObj.sex.selectedIndex].text;
        var weight = bacFormObj.weight.value;
        var drinks = bacFormObj.drinks.value;
        if(hoursValid(bacFormObj.time.value)){
            var bac = valueOfBacElapsed(bacFormObj);
            var css = determineCSS(bac);
            var hours = bacFormObj.time.value;
            var text = "BAC Report\n" +
            "Your weight: " + weight + " " + "\n" +
            "Your sex: " + sex + " " + "\n" +
            "Your drinks consumed: " + drinks + " " + "\n" +
            "Time since last drink: " + hours + " hours" + "\n" +
            "Your BAC: " + bac + "\n";
            if (bac == 0.0)
                text += "You are currently sober - you do not have alcohol in your bloodstream\n";
            else if (bac < 0.04 && bac > 0.00)
                text += "No apparent effects are felt with this BAC. May experience elevated mood\n";
            else if (bac >= 0.04 && bac < 0.07)
                text += "May feel warm and relaxed - slight impairment in speech and memory.\n";
            else if (bac >= 0.08 && bac < 0.10)
                text += "Mild impairment of balance, speech, vision, and control. You are unable to legally operate a motor vehicle.\n";
            else if (bac >= 0.10 && bac < 0.13)
                text += "Loss of judgement and moderate loss of motor control.\n";
            else if (bac >= 0.13 && bac < 0.16)
                text += "Blurred vision and major loss of balance. May feel anxious or restless.\n";
            else if (bac >= 0.16 && bac < 0.20)
                text += "Nausea is apparent - you may be considered 'sloppy drunk'.\n";
            else if (bac >= 0.20 && bac < 0.35)
                text += "Severe Intoxication - you may need help walking.\n";
            else if (bac >= 0.35 && bac < 0.40)
                text += "Brink of comatose.\n";
            else
                text += "Death is high possibility... seek immediate medical attention."
            
            textArea.value = text;
            textArea.className = css;
        }else{
            var bac = valueOfBacMax(bacFormObj);
            var css = determineCSS(bac);
            var text = "BAC Report\n" +
            "Your weight: " + weight + " " + "\n" +
            "Your sex: " + sex + " " + "\n" +
            "Your drinks consumed: " + drinks + " " + "\n" +
            "Your BAC: " + bac + "\n";
            if (bac == 0.0)
                text += "You are currently sober - you do not have alcohol in your bloodstream\n";
            else if (bac < 0.04 && bac > 0.00)
                text += "No apparent effects are felt with this BAC. May experience elevated mood\n";
            else if (bac >= 0.04 && bac < 0.07)
                text += "May feel warm and relaxed - slight impairment in speech and memory.\n";
            else if (bac >= 0.08 && bac < 0.10)
                text += "Mild impairment of balance, speech, vision, and control. You are unable to legally operate a motor vehicle.\n";
            else if (bac >= 0.10 && bac < 0.13)
                text += "Loss of judgement and moderate loss of motor control.\n";
            else if (bac >= 0.13 && bac < 0.16)
                text += "Blurred vision and major loss of balance. May feel anxious or restless.\n";
            else if (bac >= 0.16 && bac < 0.20)
                text += "Nausea is apparent - you may be considered 'sloppy drunk'.\n";
            else if (bac >= 0.20 && bac < 0.35)
                text += "Severe Intoxication - you may need help walking.\n";
            else if (bac >= 0.35 && bac < 0.40)
                text += "Brink of comatose.\n";
            else
                text += "Death is high possibility... seek immediate medical attention."
            
            textArea.value = text;
            textArea.className = css;
        }
    }
}
