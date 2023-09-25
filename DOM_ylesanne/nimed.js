const nimed = ["mari maasikas", "jaan jõesaar", "kristiinna kukk", "margus mustikas", "jaak järve", "kadi kask", "Toomas Tamm", "Kadi Meri", "Leena Laas", "Madis Mets", "Hannes Hõbe", "Anu Allikas", "Kristjan Käär", "Eva Esimene", "Jüri Jõgi", "Liis Lepik", "Kalle Kask", "Tiina Teder", "Kaidi Koppel", "tiina Toom"]
for (i in nimed){
    pereNimeIndex = nimed[i].search(" ") + 1
    let eesNimi = nimed[i].charAt(0).toUpperCase() + nimed[i].slice(1, pereNimeIndex);
    let pereNimi = nimed[i].charAt(pereNimeIndex).toUpperCase() + nimed[i].slice(pereNimeIndex + 1);
    nimed[i] = eesNimi + pereNimi
}


const emails = []
for (i in nimed){
    pereNimeIndex = nimed[i].search(" ") + 1
    const email = nimed[i].slice(pereNimeIndex).toLowerCase() + "@tthk.ee"
    emails.push(email)
}


function findInfo(firstName){
    const foundNames = []
    for (i in nimed){
        let search = nimed[i].slice(0, pereNimeIndex).toLowerCase().search(firstName)
        if(search != -1){
            foundNames.push("Nimi: " + nimed[i] + " | Email: " + emails[i])
        }
    }
    return foundNames
}


function clearChildren(parent){
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
    return
}


function getInput() {
    const input = document.getElementById("nimiInput").value;
    const result = findInfo(input);
    const div = document.getElementById("nimed");
    clearChildren(div);

    for (let i in result) {
        const textRow = document.createElement("li");
        const node = document.createTextNode(result[i]);
        textRow.appendChild(node);
        div.appendChild(textRow);
    }
}
