/*
 * Можно повесить только один обработчик событий  
 */


const button = document.querySelector('.js-button')

// button.onclick = function() {
//     console.log('click') // проигнорирует 
// }

// button.onclick = function() {
//     console.log('qwe') // выведет этот второй обработчик событий
// }

// function showConsole() {
//     console.log('click')
// }

// button.onclick = showConsole;




/*
 * - addEventListener and removeEventListener  
 * 
 *  element.addEventListener(event, handler[,optionns]);
 */


// button.addEventListener('click',showConsole)


// function showConsole(event) { 
//     console.log('qwe')
//     button.removeEventListener('click', showConsole) // сразу уберет прослушивателя событий
// }



// button.addEventListener('click', function(event) {
//     console.log('qwe')
// })



/* 
 *  Опции
 */



// const options = {
//     "capture": false, // фаза, на которой должен сработать обработчик
//     "once": true, // если true, тогда обработчик будет автоматически удален после выполнения.
//     "passive": false, // если true, то указывает, что обработчик никогда не вызовет preventDefault
// }

// button.addEventListener('click',showConsole, options)


// function showConsole(event) { 
//     console.log('Click')
// }


/* 
 *  Объект события
 */

function showConsole(event) {
    // Тип события
    console.log(event.type)
    // Объект на котором сработал обработчик
    console.log(event.target)
    // Объект к которому назначен обработчик
    console.log(event.currentTarget)
    // Положение курсора по оси Х
    console.log(event.clientX)
    // Положение курсора по оси У
    console.log(event.clientY)
}

button.addEventListener('click', showConsole)
button.addEventListener('mouseenter', showConsole)
button.addEventListener('mouseleave', showConsole)