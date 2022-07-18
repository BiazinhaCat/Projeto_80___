    var GestName = document.getElementById("name1").value;
        namesOfPeople.push(GestName);
        GestName.sort();

    function searching(){
    
        var s = document.getElementById("s1").value;
        var founde = 0;
        var j;

            for (j = 0; j <namesOfPeople.length; j++) {

                if (s == namesOfPeople.length[j]) {
                    
                } founde = founde + 1;
                
            }

            document.getElementById("p2").innerHTML = "Nome encontrado "+founde+" vez(es) ";
            console.log("Nome encontrado "+founde+" vez(es)");

    }
