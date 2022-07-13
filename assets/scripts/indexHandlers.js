const button = document.getElementById('clickme')

button.addEventListener("click", () => {
    console.log("give me my money")
})

button.addEventListener("dblclick", (e) => {
    e.target.textContent = 'Hi'
})

const divs = document.querySelectorAll("div")
divs.forEach((d, i) => {
    d.addEventListener('click', (e) => {
        updateButtonText(i)
    })
})