const accessKey = "lH4Z3MxSTCHobDR463YIm8FMq2YfjtHpCoUO9dBskGM"

const formEl = document.querySelector("form")
const inputEl = document.querySelector("search-input")
const searchResult = document.querySelector(".search-results")
const showMore = document.querySelector("#show-more-btn")

let inputData = ""
let page = 1

async function searchImages() {
    inputData = inputEl.value
    const url = `https://api.unspalsh.com/search/photos?page$(page)&query=${inputData}&client_id${accesskey}`
    
    const response = await fetch(url)
    const data = await response.json()

    const results = data.results
    if (page ===)
}