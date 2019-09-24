let a = ggbApplet.getValueString("inTxt1");

// remove spaces and “?”
a = a.replace(/ /g, "");
a = a.replace(/\?/g, "");

//console.log(a);  // To check the number in the console if you want.

if(!(isNaN(a)) && a.length !== 0){
    let num = Number(a);  // I use number so that we can accept decimal values.
    
    // ****Add all conditions you need here!!!**** //
    if(num > 99) num = 99;
    if(num < -99) num = -99;
    
    ggbApplet.setTextValue("inTxt1", ""+num);
} else {
    ggbApplet.setTextValue("inTxt1","?");

}