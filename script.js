


function generateList() {
    var setLength = prompt("How many songs in your setlist?");

    function checkChoice() {
        function isNumber(n) { return !isNaN(parseFloat(n)) && !isNaN(n - 0) }
        if (isNumber(setLength) == true) {
            console.log("valid input")
        }
        else {
            document.getElementById("errorMessages").innerHTML = "Please reset and input a valid number" ;
        }
    }
    checkChoice();

    setLength = parseInt(setLength);
    var setList = [];
    
   while (setList.length < setLength) {

        var randIndex = Math.floor(Math.random() * setLength) + 1;
        
        if (setList.includes(randIndex) == true) {
            console.log(randIndex + " was ignored");
        }
        else if (setList.includes(randIndex) == false){
            console.log(randIndex + " was added");
            setList.push(randIndex);
        }
        else {console.log("Something went wrong :<")}
        randIndex++
    }
    
    document.getElementById("theList").innerHTML = "Here ya go! " + setList.join(", ");
};

generateList();


