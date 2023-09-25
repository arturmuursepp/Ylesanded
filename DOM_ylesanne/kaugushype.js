const opilased = [
    { nimi: "Anna", tulemused: [4.5, 4.8, 4.6] },
    { nimi: "Mart", tulemused: [5.2, 5.1, 5.4] },
    { nimi: "Kati", tulemused: [4.9, 5.0, 4.7] },
    { nimi: "Jaan", tulemused: [4.3, 4.6, 4.4] },
    { nimi: "Liis", tulemused: [5.0, 5.2, 5.1] },
    { nimi: "Peeter", tulemused: [5.5, 5.3, 5.4] },
    { nimi: "Eva", tulemused: [4.8, 4.9, 4.7] },
    { nimi: "Marten", tulemused: [4.7, 4.6, 4.8] },
    { nimi: "Kairi", tulemused: [5.1, 5.3, 5.0] },
    { nimi: "Rasmus", tulemused: [4.4, 4.5, 4.3] },
    ];

function getInfo(nimi, tulemused){
    let keskmineTulemus = 0
    const parimTulemus = Math.max(...tulemused)
    for (i in tulemused){
        keskmineTulemus += parseFloat(tulemused[i])
    }
    keskmineTulemus = keskmineTulemus / tulemused.length
    console.log(keskmineTulemus);
    return "Nimi: " + nimi + " | Tulemused: "+ tulemused + " | Keskmine tulemus: " + Math.round(keskmineTulemus * 100) / 100 + " | Parim tulemus: " + parimTulemus
}

function addInfo(nimi, ...tulemused){
    opilane = {nimi, tulemused}
    opilased.push(opilane)
}

const div = document.getElementById("opilased");
for (i in opilased){
    const textRow = document.createElement("li");
    const node = document.createTextNode(getInfo(opilased[i].nimi, opilased[i].tulemused));
    textRow.appendChild(node);
    div.appendChild(textRow);
}

function getInput(){
    const nimiInput = document.getElementById("nimi").value;
    const tulemusedInput = document.getElementById("tulemused").value;
    const tulemusedInputList = tulemusedInput.split(',')
    const textRow = document.createElement("li");
    const node = document.createTextNode(getInfo(nimiInput, tulemusedInputList));
    textRow.appendChild(node);
    div.appendChild(textRow);
}