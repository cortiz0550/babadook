# babadook
This code can be used to ensure input boxes in Geogebra can handle non-numerical data from users.
In Geogebra, developers can create applets that can be used for a variety of things. One tool in these applets are Input Boxes that can be used to get data from a user. They are attached to other objects in the construction so that the input can manipulate things within the applet.

Sometimes, it is beneficial to limit what a user can input into the box. By connecting the box to a text object, we can change what happens to the string before it makes any changes to the construction.

***
This code restricts users to inputting only numerical values in the box. Putting this code into the update box of either the text object or the input box will work. Change inTxt1 to whatever the name of your text object is and youre ready to go!
***

# Note:
# This can be bypassed by adding an objects name to the input box in quotations, but I have not been able to figure out how to change that.
