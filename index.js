/**************************************************************/
/* EMAIL PASSWORD VALIDATION */
/**************************************************************/
const errorEmail = document.getElementById("error-email")
errorEmail.style.color = "red"
const errorPassword = document.getElementById("error-password")
errorPassword.style.color = "red"
const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/
let formSubmission = false
const filterBlock = document.querySelector(".filter")
filterBlock.style.display = "none"
const handleForm = (e) => {
    formSubmission = true
    const form = document.getElementById("myForm")

    e.preventDefault()
    const formData = new FormData(form)
    const email = formData.get('email')
    const password = formData.get("password")

    let emailCall = validateEmail(email);
    let passwordCall = validatePassword(password);

    if (emailCall && passwordCall) {
        filterBlock.style.display = "block"
        form.reset()
    }

}

const validateEmail = (value) => {
    if (value.length > 0) {
        if (emailRegex.test(value)) {
            errorEmail.innerText = ""
            return true
        } else {
            errorEmail.innerText = "Invalid Email Format"
        }
    } else {
        errorEmail.innerText = "Please Provide Email"
    }
}

const validatePassword = (value) => {
    if (value.length > 0) {
        if (passwordRegex.test(value)) {
            errorPassword.innerText = ""
            return true
        } else {
            errorPassword.innerText = "Invalid Password Format"
        }
    } else {
        errorPassword.innerText = "Please Provide Password"
    }
}

const handleChange = (event) => {
    const requiredValue = event.target.value
    switch (event.target.name) {
        case "email":
            if (formSubmission) {
                if (emailRegex.test(requiredValue)) {
                    errorEmail.innerText = ""
                } else {
                    validateEmail(requiredValue)
                }
            }
            break;
        case "password":
            if (formSubmission) {
                if (passwordRegex.test(requiredValue)) {
                    errorPassword.innerText = ""
                } else {
                    validatePassword(requiredValue)
                }
            }
            break;
        default:
    }
}

/**************************************************************/
/*FILTERING THE ARRAY*/
/**************************************************************/

const cars = ["BMW", "Ford", "Ferrari", "Tesla", "Bugatti"]

function filterSubmit(e) {
    e.preventDefault()
    const inputValue = document.getElementById("car").value.substring(0, 3).toLowerCase()
    // const indexOfCar = cars.findIndex(x => {
    //     return x.substring(0, 3).toLowerCase() === inputValue
    // })
    // if (indexOfCar > -1) {
    //     const filteredValue = cars.slice(0, indexOfCar + 1)
    //     updateFilterDom(filteredValue)
    // } else {
    //     updateFilterDom([])
    // }
    let a = []
    for (var i = 0; i <= cars.length; i++) {
        a.push(cars[i])
        if (cars[i].substring(0, 3).toLowerCase() === inputValue) break
    }
    updateFilterDom(a)

}

const updateFilterDom = (data) => {
    const divData = document.getElementById("viewData")
    const ul = document.createElement("ul")
    ul.id = "list"
    const list = document.getElementById("list")
    if (divData.contains(list)) {
        update()
        divData.replaceChild(ul, list)
    } else {
        update()
        divData.appendChild(ul)

    }

    function update() {
        for (const x of data) {
            const li = document.createElement("li")
            li.innerText = x
            ul.appendChild(li)
        }
    }
}
