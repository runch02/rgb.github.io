class HexColorCode {
    constructor(red, green, blue) {
        this.red = red
        this.green = green
        this.blue = blue

        this.showLocalStorageDataToScreen()
    }

    mainInputFunction(changedElement) {
        document.querySelector("#R-value").innerText = this.red.value
        document.querySelector("#G-value").innerText = this.green.value
        document.querySelector("#B-value").innerText = this.blue.value

        document.body.style.background = `rgb(${this.red.value}, ${this.green.value}, ${this.blue.value})`

        let colorCodeObject = {
            redValue: this.red.value,
            greenValue: this.green.value,
            blueValue: this.blue.value
        }

        this.saveToLocalStorage(colorCodeObject)

        this.showLocalStorageDataToScreen()
    }

    saveToLocalStorage(colorCodeObject) {
        localStorage.setItem("color", JSON.stringify(colorCodeObject))
    }

    showLocalStorageDataToScreen() {
        if (localStorage.getItem("color") === null) {
            return;
        } else {
            let parsedColorData = JSON.parse(localStorage.getItem("color"))
            // console.log(parsedColorData)

            document.querySelector("#R-value").innerText = parsedColorData.redValue
            document.querySelector("#G-value").innerText = parsedColorData.greenValue
            document.querySelector("#B-value").innerText = parsedColorData.blueValue

            this.red.value = parsedColorData.redValue
            this.green.value = parsedColorData.greenValue
            this.blue.value = parsedColorData.blueValue

            document.body.style.background = `rgb(${this.red.value}, ${this.green.value}, ${this.blue.value})`
        }
    }
}

// first instance of the class HexColorCode
let firstInstanceHexColorCode = new HexColorCode(
    document.querySelector("#red-value"),
    document.querySelector("#green-value"),
    document.querySelector("#blue-value")
)

for (let inputElement of document.querySelectorAll("input")) {
    inputElement.addEventListener("input", changedElement => firstInstanceHexColorCode.mainInputFunction(changedElement))
}

