// Get the value of the text object you want.
let a = ggbApplet.getValueString("inTxt1");

// remove spaces and “?”
a = a.replace(/ /g, "");
a = a.replace(/\?/g, "");

//console.log(a);  // To check the number in the console if you want.

// This checks if an input is numerical, then performs restriction operations.
if(!(isNaN(a)) && a.length !== 0){
    let num = Number(a);  // I use number so that we can accept decimal values.
    
    // ****Add all conditions you need here!!!**** //
    if(num > 99) num = 99;
    if(num < -99) num = -99;
    

    // Set the text object to the modified string.
    ggbApplet.setTextValue("inTxt1", ""+num);
} else {
	// This changes the default filling in the box to a question mark.
    ggbApplet.setTextValue("inTxt1","?");

}
