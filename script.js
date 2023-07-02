//добавь класс `.active` элементу `.flip-card`
let flipCard = document.querySelector('.flip-card');
let cardFront = document.querySelector('#card-front');
let cardBack = document.querySelector('#card-back');


const words = ["яблоко", "апельсин", "лимон", "киви", "персик"];
const wordsTranslate = ['apple пример: the children are picking apples',
    'orange пример: bitter orange',
    'lemon пример: ;lemons are more sour than oranges',
    'kiwi пример: we bought kiwi',
    'peach пример: the peaches at the market are always fresh'
];
//тут я достаю с массива 1 элемент
let oneWords = words.map(item => `<span>${item}</span>`);
let oneWordsTranslate = words.map(item => `<span>${item}</span>`);
//тут хочу показать, что русские слова это верхняя сторона и наоборот
let i = 0;
oneWords[i] = cardFront[i];
oneWordsTranslate[i] = cardBack[i];
//тут я хотела записать, что если 1ому элементу массива будет = 1ый элемент др. массива


document.addEventListener("click", function(event) {
        flipCard.classList.toggle('active');
        i++
        if (event === flipCard) {
            cardFront[i] = cardBack[i];
        } else {
            cardBack[i] = cardFront[i];

        }

    })
    //тут нажатие на кнопку = сторона карточки

let buttonNex = document.querySelector('#nex');
let buttonExam = document.querySelector('#exam');
document.addEventListener("keydown", function(event) {
    if (event.key === buttonNex) {
        cardFront[i]++
            i++
    } else if (event.key === buttonExam) {
        cardBack[i]--
    }

});