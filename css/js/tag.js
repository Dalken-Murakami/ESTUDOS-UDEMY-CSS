const colors = {
    p: '#338e3c', 
    div: '#1565c0',
    span: '#e53935',
    section: '#f67809',
    ul: '#5e35b1',
    ol: '#5e35b1',

}

document.querySelector('.tag').forEach(elemento =>{
    const tagName = elemento.tagName.toLowerCase()
    elemento.style.borderCorlor = '#616161'
    if (!elemento.classList.contains('nolabel')){
        const label = document.createElement('label')
        label.style.backgroundColor = '#6161661'
        label.innerHTML = tagName
        elemento.insertBefore(label, elemento.childNodes[0])

    } 
})