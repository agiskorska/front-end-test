/**
 * @jest-environment jsdom
 */

const { updateButtonText } = require("../assets/scripts")

describe("Update button text", () => {
    
    beforeEach(() => {
        document.documentElement.innerHTML = "<button id='clickme'></button>"
    })

    test("It updates the value of the button when a div clicked", () => {
        updateButtonText('test')
        const button = document.querySelector('#clickme')

        expect(button.textContent).toEqual('test')
    })
})