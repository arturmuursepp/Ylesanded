const inimesteAndmed = [
    { nimi: "Mari Maasikas", isikukood: "38705123568" },
    { nimi: "Jaan Jõesaar", isikukood: "49811234567" },
    { nimi: "Kristiina Kukk", isikukood: "39203029876" },
    { nimi: "Margus Mustikas", isikukood: "49807010346" },
    { nimi: "Jaak Järve", isikukood: "39504234985" },
    { nimi: "Kadi Kask", isikukood: "39811136789" },
    // Lisa kontrollimiseks oma nimi ja isikukood
];


let vanusStr = ""
function isikukoodAasta1Pool(num) {
    if (num == 1 || num == 2) {
        return "18"
    } else if (num == 3 || num == 4) {
        return "19"
    } else {
        return "20"
    }
}


function isikukoodToDate(isikukood) {
    return isikukood[3] + isikukood[4] + "-" + isikukood[5] + isikukood[6] + "-" + isikukoodAasta1Pool(isikukood[0]) + isikukood[1] + isikukood[2]
}


function isikukoodToAge(isikukood) {
    let birthDay = new Date(isikukoodToDate(isikukood));
    let dateToday = new Date();
    let age = dateToday.getFullYear() - birthDay.getFullYear();
    const month = dateToday.getMonth() - birthDay.getMonth();
    if (month < 0 || (month === 0 && dateToday.getDate() < birthDay.getDate())) {
        age--;
    }
    return age;
}
const div = document.getElementById("andmed")
for (i in inimesteAndmed) {
    let infoString = "Nimi: " + inimesteAndmed[i].nimi + " | Sünniaeg: " + isikukoodToDate(inimesteAndmed[i].isikukood) + " | Vanus: " + isikukoodToAge(inimesteAndmed[i].isikukood)
    const textRow = document.createElement("li");
    const node = document.createTextNode(infoString)
    textRow.appendChild(node);
    div.appendChild(textRow);
}

function inputToAge(synniaegInput) {
    let birthDay = new Date(synniaegInput);
    let dateToday = new Date();
    let age = dateToday.getFullYear() - birthDay.getFullYear();
    const month = dateToday.getMonth() - birthDay.getMonth();
    if (month < 0 || (month === 0 && dateToday.getDate() < birthDay.getDate())) {
        age--;
    }
    return age;
}

function getInput() {
    const nimi = document.getElementById("nimiInput").value
    const synniaeg = document.getElementById("synniaegInput").value
    let infoString = "Nimi: " + nimi + " | Sünniaeg: " + synniaeg + " | Vanus: " + inputToAge(synniaeg)
    const textRow = document.createElement("li");
    const node = document.createTextNode(infoString)
    textRow.appendChild(node);
    div.appendChild(textRow);
}
