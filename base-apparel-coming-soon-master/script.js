const fields = document.querySelectorAll('[required]')

function validateField(field){
    //verificar existencia de erros
    function verifyErrors(){
        let foundError = false;

        for(let error in field.validity){
            if(field.validity[error] && !field.validity.valid){
                foundError = error
            }
        }
        return foundError
    }
    
    function customMessage(typeError){
        const messages = {
            email:{
                valueMissing: 'Please provid a email',
                typeMismatch: 'Please provid a valid email'
            }
        }

        return messages[field.type][typeError]
    }

    function setCustomMessage(message){
        const spanError = field.parentNode.querySelector('span.error')
        const iconError = field.parentNode.querySelector('img.icon-error')

        if(message){
            spanError.classList.add('active')
            iconError.classList.add('active')
            spanError.innerHTML = message
        }else{
            spanError.classList.remove('active')
            iconError.classList.remove('active')
            spanError.innerHTML = ''
        }
    }

    return function(){
        const error = verifyErrors()
        
        if(error){
            const message = customMessage(error)

            field.style.borderColor = "red"
            setCustomMessage(message)
        }else{
            field.style.borderColor = "#D9CACD" 
            setCustomMessage()
        }
    }
}

function customValidation(event){
    const field = event.target
    const validation = validateField(field)

    validation()    
}

for (field of fields){
    field.addEventListener('invalid', event =>{
        //eliminar bubble
        event.preventDefault()
        
        customValidation(event)
    })
    field.addEventListener('blur', customValidation)
}

document.querySelector('form')
.addEventListener('submit', event =>{
    alert('Success')

    event.preventDefault()
})