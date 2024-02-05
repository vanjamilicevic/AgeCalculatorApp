let button = document.getElementById("button")
let year_input = document.getElementById("year-input")
let month_input = document.getElementById("month-input")
let day_input = document.getElementById("day-input")
let year_result = document.getElementById("years-result")
let month_result = document.getElementById("months-result")
let day_result = document.getElementById("days-result")
let day_title = document.getElementById("day-title")
let month_title = document.getElementById("month-title")
let year_title = document.getElementById("year-title")
let invalid_input_day = document.getElementById("invalid-input-day")
let invalid_input_month = document.getElementById("invalid-input-month")
let invalid_input_year = document.getElementById("invalid-input-year")
let error_empty_text_day = document.getElementById("empty-text-error-day")
let error_empty_text_month = document.getElementById("empty-text-error-month")
let error_empty_text_year = document.getElementById("empty-text-error-year")
let date = new Date()
const months = [31, 0, 31, 30, 31, 30, 31, 31, 30, 31,30, 31]


// console.log(date)
// console.log(date.getFullYear())
// console.log(date.getMonth() + 1)
// console.log(date.getDate())
let year_value = 0
let month_value = 0
let day_value = 0
// let d1  = new Date("1993-09-18")
// console.log(date)

const isNumeric = (number) => {
    return /^-?\d+$/.test(number)
}

const addEmptyTextError = (element) => {
    eval(element + "_title").classList.add("error-title-class")
    eval(element + "_input").classList.add("error-class")
    eval("error_empty_text_" + element).classList.remove("not-visible")
    eval("invalid_input_" + element).classList.add("not-visible")
}

const removeEmptyTextError = (element) => {
    eval(element + "_title").classList.remove("error-title-class")
    eval(element + "_input").classList.remove("error-class")
    eval("error_empty_text_" + element).classList.add("not-visible")
}

const addInvalidFieldError = (element) => {
    eval(element + "_title").classList.add("error-title-class")
    eval(element + "_input").classList.add("error-class")
    eval("invalid_input_" + element).classList.remove("not-visible")
    eval("error_empty_text_" + element).classList.add("not-visible")
}

const removeInvalidFieldError = (element) => {
    eval(element + "_title").classList.remove("error-title-class")
    eval(element + "_input").classList.remove("error-class")
    eval("invalid_input_" + element).classList.add("not-visible")
}

const validateYear = (year) => {
    if(year <= date.getFullYear()) {
        return true
    } else {
        return false
    }
}

const validateMonth = (month, year) => {
    if(year == date.getFullYear()) {
        if(month <= (date.getMonth() + 1)) {
            return true
        } else {
            return false
        }   
    } else {
        if(month < 13) {
            return true
        } else {
            return false
        }
    }
    
}

const validateDay = (day, month, year) => {
    if(year == date.getFullYear()) {
        if(day <= date.getDate()) {
            return true
        } else {
            return false
        }
    } else if(month == 2) {
        if (day <= ((year % 4 == 0) ? 29 : 28)) {
            return true
        } else {
            return false
        }
    } else {
        if(day <= months[month - 1]) {
            return true
        } else {
            return false
        }
    }
}

button.addEventListener("click", () => {
    year_value = 0
    month_value = 0
    day_value = 0
    // Empty field check
    if(day_input.value == "") {
        addEmptyTextError("day")
    } else {
        removeEmptyTextError("day")
    }

    if(month_input.value == "") {
        addEmptyTextError("month")
    } else {
        removeEmptyTextError("month")
    }

    if(year_input.value == "") {
        addEmptyTextError("year")
    } else {
        removeEmptyTextError("year")
    }
    
    // Is it number check

    if((day_input.value) && (!isNumeric(day_input.value) || (parseInt(day_input.value) <= 0))) {
        addInvalidFieldError("day")
    } else if(day_input.value) {
        if(validateDay(parseInt(day_input.value), parseInt(month_input.value), parseInt(year_input.value))) {
            removeInvalidFieldError("day")
            day_value = parseInt(day_input.value)
        } 
    }

    if((month_input.value) && (!isNumeric(month_input.value) || (parseInt(month_input.value) <= 0))) {
        addInvalidFieldError("month")
    } else if(month_input.value) {
        if(validateMonth(parseInt(month_input.value) , parseInt(year_input.value))) {
            month_value = parseInt(month_input.value)
            removeInvalidFieldError("month")
        } 
    }

    if((year_input.value) && (!isNumeric(year_input.value) || (parseInt(year_input.value) < 0))) {
        addInvalidFieldError("year")
    } else if(year_input.value) {
        if(validateYear(parseInt(year_input.value))) {
            year_value = parseInt(year_input.value)
            console.log(year_value)
            removeInvalidFieldError("year")
        } 
        
    }

    if(year_value == 0 && !(year_input.value == "")) {
        addInvalidFieldError("year")
    } else {
        removeInvalidFieldError("year")
    }

    if(month_value == 0 && !(month_input.value == "")) {
        addInvalidFieldError("month")
    } else {
        removeInvalidFieldError("month")
    }

    if(day_value == 0 && !(day_input.value == "")) {
        addInvalidFieldError("day")
    } else {
        removeInvalidFieldError("day")
    }

    


    console.log("-------------")
console.log(year_value)
console.log(month_value)
console.log(day_value)

})

