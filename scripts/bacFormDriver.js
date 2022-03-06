function bacFormDriver()
{
    var bacFormObj = document.getElementById("bacForm");
    if (bacFormValidate(bacFormObj))
    {
        var textArea = document.getElementById("resultsArea");
        var bacLabel = document.getElementById("bacRec");
        if(hoursValid(bacFormObj.time.value)){
            var bac = valueOfBacElapsed(bacFormObj);
            var css = determineCSS(bac);
            var bacText = "Your BAC: " + bac + "\n";
            let bacRec = '';
            if (bac == 0.0)
                bacRec += "You are currently sober - you do not have alcohol in your bloodstream\n";
            else if (bac < 0.04 && bac > 0.00)
                bacRec += "No apparent effects are felt with this BAC. May experience elevated mood\n";
            else if (bac >= 0.04 && bac < 0.07)
                bacRec += "May feel warm and relaxed - slight impairment in speech and memory.\n";
            else if (bac >= 0.07 && bac < 0.10)
                bacRec += "Mild impairment of balance, speech, vision, and control. You are unable to legally operate a motor vehicle.\n";
            else if (bac >= 0.10 && bac < 0.13)
                bacRec += "Loss of judgement and moderate loss of motor control.\n";
            else if (bac >= 0.13 && bac < 0.16)
                bacRec += "Blurred vision and major loss of balance. May feel anxious or restless.\n";
            else if (bac >= 0.16 && bac < 0.20)
                bacRec += "Nausea is apparent - you may be considered 'sloppy drunk'.\n";
            else if (bac >= 0.20 && bac < 0.35)
                bacRec += "Severe Intoxication - you may need help walking.\n";
            else if (bac >= 0.35 && bac < 0.40)
                bacRec += "Brink of comatose.\n";
            else
                bacRec += "Death is high possibility... seek immediate medical attention."
            
            textArea.value = bacText;
            textArea.className = css;
            bacLabel.innerHTML = bacRec;
        }else{
            var bac = valueOfBacMax(bacFormObj);
            var css = determineCSS(bac);
            var bacText = "Your BAC: " + bac + "\n";
            var bacRec = '';
            if (bac == 0.0)
                bacRec += "You are currently sober - you do not have alcohol in your bloodstream\n";
            else if (bac < 0.04 && bac > 0.00)
                bacRec += "No apparent effects are felt with this BAC. May experience elevated mood\n";
            else if (bac >= 0.04 && bac < 0.07)
                bacRec += "May feel warm and relaxed - slight impairment in speech and memory.\n";
            else if (bac >= 0.07 && bac < 0.10)
                bacRec += "Mild impairment of balance, speech, vision, and control. You are unable to legally operate a motor vehicle.\n";
            else if (bac >= 0.10 && bac < 0.13)
                bacRec += "Loss of judgement and moderate loss of motor control.\n";
            else if (bac >= 0.13 && bac < 0.16)
                bacRec += "Blurred vision and major loss of balance. May feel anxious or restless.\n";
            else if (bac >= 0.16 && bac < 0.20)
                bacRec += "Nausea is apparent - you may be considered 'sloppy drunk'.\n";
            else if (bac >= 0.20 && bac < 0.35)
                bacRec += "Severe Intoxication - you may need help walking.\n";
            else if (bac >= 0.35 && bac < 0.40)
                bacRec += "Brink of comatose.\n";
            else
                bacRec += "Death is high possibility... seek immediate medical attention."
            
            textArea.value = bacText;
            textArea.className = css;
            bacLabel.innerHTML = bacRec;
        }
    }
}
