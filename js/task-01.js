// console.log(document.querySelectorAll("h2"))
// document.querySelectorAll("h2").forEach(title => console.log(title.textContent))

// let titleName
// const result = categoryName.forEach((title)=>{titleName=title})
// console.log(titleName)

document.querySelectorAll("h2").forEach(elem => console.log(`Категория: ${elem.textContent}, Количество элементов: ${elem.nextElementSibling.children.length}`))