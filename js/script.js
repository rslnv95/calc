const firstInp = document.querySelector('#input-first')
const secondInp = document.querySelector('#input-second')
const result = document.querySelector('#input-result')
const symbol = document.querySelector('#symbol')


const plus = document.querySelector('#plus')
const minus = document.querySelector('#minus')
const division = document.querySelector('#division')
const multiply = document.querySelector('#multiply')

const degree = document.querySelector('#degree')
const radical = document.querySelector('#radical')

const mathOp = document.querySelectorAll('.calc__math-op')

const checkMinMax = document.querySelector('#checkMinMax')
const resultMinMax = document.querySelector('#resultMinMax')

const btnMin = document.querySelector('.btnMin')
const btnMax = document.querySelector('.btnMax')

const history = document.querySelector('.calc__history_box')
const btnClear = document.querySelector('.calc__clear')



const checkInp = () => {
    if(firstInp.value === '' || secondInp.value === ''){
        Array.from(mathOp).forEach(el => el.disabled = true)
    }else {
        Array.from(mathOp).forEach(el => el.disabled = false)
    }
}

firstInp.addEventListener('input', ()=>{
    checkInp()
})
secondInp.addEventListener('input', ()=>{
    checkInp()
})

plus.addEventListener("click", ()=> {
    result.value = +firstInp.value + +secondInp.value
    symbol.textContent = '+'
    addHistory()
    firstInp.value = ''
    secondInp.value = ''
    result.value = ''
    checkInp()
})

minus.addEventListener("click", ()=> {
    result.value = firstInp.value - secondInp.value
    symbol.textContent = '-'
    addHistory()
    firstInp.value = ''
    secondInp.value = ''
    result.value = ''
    checkInp()
})

division.addEventListener("click", ()=> {
    if(firstInp.value === '0' || secondInp.value === '0'){
        confirm('на ноль делить нельзя')
    }else{
        result.value = firstInp.value / secondInp.value
    }
    symbol.textContent = '/'
    addHistory()
    firstInp.value = ''
    secondInp.value = ''
    result.value = ''
    checkInp()
})

multiply.addEventListener("click", ()=> {
    result.value = +firstInp.value * secondInp.value
    symbol.textContent = '*'
    addHistory()
    firstInp.value = ''
    secondInp.value = ''
    result.value = ''
    checkInp()
})

degree.addEventListener("click", ()=> {
    result.value = firstInp.value ** secondInp.value
    symbol.textContent = '^'
    addHistory()
    firstInp.value = ''
    secondInp.value = ''
    result.value = ''
    checkInp()
})

radical.addEventListener("click", ()=> {
    result.value = firstInp.value ** (1/secondInp.value)
    symbol.innerHTML = '&radic;'
    addHistory()
    firstInp.value = ''
    secondInp.value = ''
    result.value = ''
    checkInp()
})

checkMinMax.addEventListener('keydown', (e)=> {
    if(!(e.key >= 0 && e.key <= 9) && e.key !== 'Backspace' ){
        e.preventDefault()
    }
})

btnMin.addEventListener('click', () => {
    resultMinMax.value = Math.min(...checkMinMax.value.split(' ').map(it => +it))
    addHistoryMinMax('min')
    checkMinMax.value = ''
    resultMinMax.value = ''
})

btnMax.addEventListener('click', () => {
    resultMinMax.value = Math.max(...checkMinMax.value.split(' ').map(it => +it))
    addHistoryMinMax('max')
    checkMinMax.value = ''
    resultMinMax.value = ''
})


const addHistory = () => {
    const li = document.createElement('li')
    li.textContent = `${firstInp.value} ${symbol.textContent} ${secondInp.value} = ${result.value}`
    history.append(li)
}


const addHistoryMinMax = (a) => {
    const li = document.createElement('li')
    li.textContent = `${checkMinMax.value} => ${a} ${resultMinMax.value}`
    history.append(li)
}

btnClear.addEventListener('click', ()=> {
    if(confirm('Вы уверены ?')){
        history.textContent = ''
    }
})