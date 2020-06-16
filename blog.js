document.querySelector(".article__header").textContent = "Welcome to the David blog"

const allHeaders = document.querySelectorAll(".article__header")

for (const header of allHeaders) {
    header.classList.add("important")
}

document.querySelector(".dashed").classList.remove("dashed")

document.querySelector(".article__footer").classList.add("goldenrod")