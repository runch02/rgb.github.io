class HEX {
    constructor() {
        HEX.fetchDataFromLocalStorage()
    }

    // static colorValue = {
    //     redColorValue: 0,
    //     greenColorValue: 0,
    //     blueColorValue: 0,
    //     alphaColorValue: 0
    // }

    static redColorValue = 0
    static greenColorValue = 0
    static blueColorValue = 0
    // static alphaColorValue = 0

    static inputFunction(inputElement) {
        switch (inputElement.target.className) {
            case "red-value-class":
                document.querySelector("#R-value").innerText = inputElement.target.value
                HEX.redColorValue = Number(inputElement.target.value)

                HEX.fetchDataFromLocalStorage()
                break;

            case "green-value-class":
                document.querySelector("#G-value").innerText = inputElement.target.value
                HEX.greenColorValue = Number(inputElement.target.value)

                HEX.fetchDataFromLocalStorage()
                break;

            case "blue-value-class":
                document.querySelector("#B-value").innerText = inputElement.target.value
                HEX.blueColorValue = Number(inputElement.target.value)

                HEX.fetchDataFromLocalStorage()
                break;

            // case "alpha-value-class":
            //     document.querySelector("#A-value").innerText = inputElement.target.value
            //     HEX.alphaColorValue = Number(inputElement.target.value)

            //     HEX.fetchDataFromLocalStorage()
            //     break;

            default:
                break;
        }

        HEX.saveDataToLocalStorage({ redColorValue: HEX.redColorValue, greenColorValue: HEX.greenColorValue, blueColorValue: HEX.blueColorValue })
    }

    static saveDataToLocalStorage(colorData) {
        localStorage.setItem("color", JSON.stringify(colorData))
    }

    static fetchDataFromLocalStorage() {
        if (localStorage.getItem("color") === null) {
            return;
        } else {
            let parsedData = JSON.parse(localStorage.getItem("color"))

            document.querySelector("#R-value").innerText = parsedData.redColorValue
            document.querySelector("#G-value").innerText = parsedData.greenColorValue
            document.querySelector("#B-value").innerText = parsedData.blueColorValue
            // document.querySelector("#A-value").innerText = parsedData.alphaColorValue / 10

            document.querySelector("#red-value").value = parsedData.redColorValue
            document.querySelector("#green-value").value = parsedData.greenColorValue
            document.querySelector("#blue-value").value = parsedData.blueColorValue
            // document.querySelector("#alpha-value").value = parsedData.alphaColorValue / 10

            document.body.style.background = `rgba(${parsedData.redColorValue},${parsedData.greenColorValue},${parsedData.blueColorValue})`
            // document.body.style.background = `rgba(${parsedData.redColorValue},${parsedData.greenColorValue},${parsedData.blueColorValue},${parsedData.alphaColorValue})`

            // HEX.redColorValue = parsedData.redColorValue
            // HEX.greenColorValue = parsedData.greenColorValue
            // HEX.blueColorValue = parsedData.blueColorValue
            // HEX.alphaColorValue = parsedData.alphaColorValue

            // return false
        }
    }
}

let first_instance_HEX = new HEX()

for (let i of document.querySelectorAll("input")) {
    i.addEventListener("input", inputElement => HEX.inputFunction(inputElement))
}