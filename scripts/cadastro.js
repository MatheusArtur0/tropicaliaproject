// Equipe da turma 2NA

// Elizeu Leoncio Ferreira Junior - Matrícula: 01576238

// Matheus Artur da Silva - Matrícula: 01573682

// Luiz Gustavo Gonçalves Silva - Matrícula: 01580327

// Igor Thiago De Oliveira Silva - Matrícula: 01609891

// Giovanna Karla Rodrigues Laranjeira - Matrícula: 01606692


let btnToogleform = document.querySelector('#btn-view-form')
let btnCreate = document.querySelector('#btn-create')
var contentArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : []


btnToogleform.addEventListener('click', () => {
    let tagform = document.querySelector('.box-form form')

    let test = tagform.classList.contains('invisible')
    
    if(test){
        tagform.classList.remove('invisible')
    }else{
        tagform.classList.add('invisible')
    }
})


btnCreate.addEventListener('click', (event) => {
    event.preventDefault()
    
    let tagname = document.querySelector('#name')
    let tagdetails = document.querySelector('#details')
    let tagprice = document.querySelector('#price')

    let name = tagname.value
    let details = tagdetails.value
    let price = tagprice.value
    let tagerro = document.querySelector('#alert-error')

    if (name && details && price) {
        tagerro.innerHTML = ''
        
        addProduct(name, details, price, contentArray)
        
        tagname.value = ''
        tagdetails.value = ''
        tagprice.value = ''

    }else{
        tagerro.innerHTML = 'Erro! Preencha os campos corretamente'
    }

    
})




const addProduct = (name, details, price, contentArray) => {
    let product = {
        'name': name,
        'details': details,
        'price': price
    }

    contentArray.push(product)
    localStorage.setItem('items', JSON.stringify(contentArray))
    const taglist = document.querySelector('.list-product')
    taglist.innerHTML = ''
    constructorListProduct(contentArray)
}

constructorListProduct = (contentArray) => {
    let count = 0
    console.log(contentArray)
   contentArray.forEach((product => {
    let divproduct = document.createElement('div')
    let tagname = document.createElement('p')
    let tagdetails = document.createElement('p')
    let tagprice = document.createElement('p')
    let btndelete = document.createElement('button')

    
    

    divproduct.classList.add('product')
    divproduct.id = count
    btndelete.classList.add('btn-delete')

    tagname.innerHTML = product.name
    tagdetails.innerHTML = product.details
    tagprice.innerHTML =  product.price
    btndelete.innerHTML = 'delete'
    btndelete.setAttribute('onClick', 'deleteProduct(event)')

    divproduct.appendChild(tagname)
    divproduct.appendChild(tagdetails)
    divproduct.appendChild(tagprice)
    divproduct.appendChild(btndelete)

    const taglist = document.querySelector('.list-product')

    taglist.appendChild(divproduct)
    count++
   }))
}

const deleteProduct = (event) => {
    let id = event.target.parentNode.id
    contentArray.splice(id, 1)
    console.log(contentArray)
    localStorage.setItem('items', JSON.stringify(contentArray))
    const taglist = document.querySelector('.list-product')
    taglist.innerHTML = ''
    constructorListProduct(contentArray)
}

window.onload = () => {
    constructorListProduct(contentArray)
}
