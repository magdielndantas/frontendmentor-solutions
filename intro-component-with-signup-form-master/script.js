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
            firstName:{
                valueMissing: 'First Name cannot be empty'
            },
            lastName:{
                valueMissing: 'Last Name cannot be empty'
            },
            email:{
                valueMissing: 'Email cannot be empty',
                typeMismatch: 'Looks like this is not an email'
            },
            password:{
                valueMissing: 'Password cannot be empty'
            },
        }

        return messages [field.name][typeError]
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

            field.classList.add('active')
            setCustomMessage(message)
        }else{
            field.classList.remove('active')
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
    //field.addEventListener('blur', customValidation)
}

document.querySelector('form')
.addEventListener('submit', event =>{
    console.log('enviar form')

    event.preventDefault()
})