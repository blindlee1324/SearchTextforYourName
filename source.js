var text = "Hi, Blindlee1324\
oh, Brown is here too!\
Blindlee1324, you bring him here? that Brilliant!\
I'm happy to see you all Blindlee1324 and Brown";
var myName = "Blindlee1324";
var Hits = [];
var isNameFound = 0; // How many names on hits

for (var i = 0; i <= text.length; i++){
    if (text[i] === myName[0]) {
        var tempName = ""
        for(var j = i; j < (myName.length + i); j++) {
            tempName = tempName + text[j];
        };
        if (tempName === myName) {
            Hits.push(tempName);
            isNameFound++;
        }
    };
};

if (isNameFound === 0) {
    console.log("Sorry, " + myName + " was never found!");
}
else {
    console.log(Hits);
}