let myDiv = $('<div> Click here </div>')
let page = $('body')
page.append(myDiv)
let newInput = $('#name')

let newUl = $('<ul></ul>')
page.append(newUl)


myDiv.on('click',(event)=>{
    event.preventDefault()
    let li = $('<ul>' + newInput.val() + '</ul>')
    newUl.append(li)
    newInput.val('')
})
