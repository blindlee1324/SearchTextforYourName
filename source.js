// Blindlee1324 and Brown are mixed up in this text
// Only Blindlee1324 is what I want to find.
var text = "Hi, Blindlee1324\
oh, Brown is here too!\
Blindlee1324, you bring him here? that's Brilliant!\
I'm happy to see you all Blindlee1324 and Brown";
// Here's my name
var myName = "Blindlee1324";
// a storage for myName(s)
var Hits = [];
// How many names on Hits?
var isNameFound = 0; 

for (var i = 0; i <= text.length; i++){
    if (text[i] === myName[0]) {
    	// temporary variable for storing names on text 
    	// and comparing that with myName.. Blindlee1324
        var tempName = ""
        for(var j = i; j < (myName.length + i); j++) {
        	// store string on tempName
            tempName = tempName + text[j];
        };
        // compare temp and actual myName
        if (tempName === myName) {
            Hits.push(tempName);
            isNameFound++;
        }
    };
};

// is myName on Hits?
if (isNameFound === 0) {
    console.log("Sorry, " + myName + " was never found!");
}
else {
    console.log(Hits);
}