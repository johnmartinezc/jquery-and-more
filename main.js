let myDiv = $('<div> Click here </div>')
let page = $('body')
page.append(myDiv)
let newInput = $('#name')



myDiv.on('click',(event)=>{
    event.preventDefault()
    let ul = $('<ul>' + newInput.val() + '</ul>')
    myDiv.append(ul)
    newInput.val('')
})
