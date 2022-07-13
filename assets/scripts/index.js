
const updateButtonText = (val) => {
    const button = document.getElementById('clickme')
    button.textContent = val
}


// Handle browser/node differences
if (typeof exports != "undefined") {
    module.exports = {
        updateButtonText
    }
}
