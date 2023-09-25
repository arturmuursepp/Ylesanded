const ostukorv = {
    tooted: [["Porgand", 1, 10], ['Kohv', 5.80, 2]],

    kuvaSisu: function(index) {
        const sisu = "Nimi: " + this.tooted[index][0] + " | Hind: " + this.tooted[index][1] + "€  | Kogus: " + this.tooted[index][2]
        return sisu
    },

    lisaToode: function(nimi, hind, kogus) {
        this.tooted.push([nimi, hind, kogus])
        return
    },

    kogusumma: function() {
        let sum = 0
        for (i in this.tooted) {
            sum += (this.tooted[i][1] * this.tooted[i][2])
        }
        return sum
    }
}
function clearChildren(divId) {
    const div = document.getElementById(divId);
    while (div.firstChild){
        div.removeChild(div.firstChild)
    }
    return
}

function getInputKuvaSisu() {
    const div = document.getElementById("tooted");
    clearChildren("tooted")
    for (i in ostukorv.tooted) {
        const textRow = document.createElement("li");
        let node = document.createTextNode(ostukorv.kuvaSisu(i));
        textRow.appendChild(node);
        div.appendChild(textRow);
    }
}


function getInputKoguSumma() {
    clearChildren("kogusumma")
    const div = document.getElementById("kogusumma")
    const textRow = document.createElement("h4")
    const node = document.createTextNode("Toodete kogusumma on: " + ostukorv.kogusumma() + "€")
    textRow.appendChild(node)
    div.appendChild(textRow)
}

function getInputLisaToode() {
    let nimi = document.getElementById("nimi").value;
    let hind = document.getElementById("hind").value;
    let kogus = document.getElementById("kogus").value;
    ostukorv.lisaToode(nimi, hind, kogus)
    document.getElementById("nimi").value = ""
    document.getElementById("hind").value = ""
    document.getElementById("kogus").value = ""
    
}