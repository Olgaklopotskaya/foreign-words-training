//добавь класс `.active` элементу `.flip-card`
let flipCard = document.querySelector('.flip-card');
let cardFront = document.querySelector('#card-front h1');
let cardBack = document.querySelector('#card-back h1');

const words = ["яблоко", "апельсин", "лимон", "киви", "персик"];
const wordsTranslate = ['apple пример: the children are picking apples',
    'orange пример: bitter orange',
    'lemon пример: lemons are more sour than oranges',
    'kiwi пример: we bought kiwi',
    'peach пример: the peaches at the market are always fresh'
];


let i = 0;
const titleFront = cardFront.querySelector('h1');
const titleBack = cardBack.querySelector('h1');


// При клике на карточку
flipCard.addEventListener("click", function(event) {
    // Повернуть ее противоположной стороной
    flipCard.classList.toggle('active');
})

cardFront.textContent = words[i];
cardBack.textContent = wordsTranslate[i];
const buttonNex = document.querySelector('#next');
const buttonBack = document.querySelector('#back');
const currentWord = document.querySelector('#current-word');

// При клике на кнопку "дальше"
buttonNex.addEventListener("click", function(event) {
    // Перейти к следующему слову
    i++;

    // убираем кнопку "дальше" в последней карточке
    if (i == words.length - 1) {
        buttonNex.disabled = true;
    } else {
        buttonNex.disabled = false;
    }

    if (i === 0) {
        buttonBack.disabled = true;
    } else {
        buttonBack.disabled = false;
    }

    // Подставить его на карточку
    cardFront.textContent = words[i];
    cardBack.textContent = wordsTranslate[i];

    //счетчик (номер карточки)
    currentWord.textContent = i + 1;

});
buttonBack.addEventListener("click", function(event) {
    // Перейти назад
    i--;

    // убираем disabled с первой карточки
    if (i === 0) {
        buttonBack.disabled = true;
    } else {
        buttonBack.disabled = false;
    }

    if (i >= words.length - 1) {
        buttonNex.disabled = true;
    } else {
        buttonNex.disabled = false;
    }

    // Подставить его на карточку
    cardFront.textContent = words[i];
    cardBack.textContent = wordsTranslate[i];


    currentWord.textContent = i + 1;
});



/// тестирование
const examButton = document.querySelector('#exam');
const firstPage = document.querySelector('.content');
const studyMode = document.querySelector('#study-mode');
//При клике на кнопку «Тестирование» осуществляется переход в режим проверки знаний
examButton.addEventListener("click", function(event) {
    firstPage.classList.add('hidden');
    studyMode.classList.add('hidden');
    containerCards.classList.remove('hidden');
});

const cards = [{
        rus: "яблоко",
        eng: "apple",

    },
    {
        rus: "апельсин",
        eng: "orange",
    },
    {
        rus: "лимон",
        eng: "lemon",
    },
    {
        rus: "киви",
        eng: "kiwi",
    },
    {
        rus: "персик",
        eng: "peach",
    },
    {
        rus: "вишня",
        eng: "cherry",
    },
];

// делаем  карточки
//контейнер для карточек
const containerCards = document.createElement('div');
containerCards.classList.add('container-cards');
containerCards.classList.add('hidden');
examCardsContainer.append(containerCards);
const examCardsContainer = document.querySelector('#exam-cards');
// создали шаблон для карточек
let cardTemplate = document.querySelector('#card-template');
// Функция для создания карточки
function prepareItemCards(itemCards) {
    // Деструктурируем свойства объекта
    const { rus, eng } = itemCards;
    // Берем за основу шаблон товара
    const item = cardTemplate.content.cloneNode(true);
    // Наполняем его информацией из объекта
    item.querySelector(".rus").textContent = rus;
    item.querySelector(".eng").textContent = eng;
    return item;
};


//cоздаем копию;
let copy = [...cards];

//функция для отрисовки
// в качестве параметра -стороны каточки, кот нужно отрисовать 
function paintCards(side) {
    side.forEach((item) => {
        // вызываем ф-цию  prepareItemCards для каждого параметра
        //подставляем в верстку
        containerCards.append(prepareItemCards(item));
    });
}

prepareItemCards(copy);

//При клике на кнопку «Тестирование» осуществляется переход в режим проверки знаний
//первый клик по карточке можно обозначить null 


containerCards.addEventListener("click", function(event) {
    let firstClick = null;
    firstClick.classList.add('correct');
    let secondClick = event.target;
    //карточки совпали, они убираются с поля (класс.fade-out)
    //пара подобрана неверно, вторая карточка на секунду подсвечивается красным (класс .wrong), и тестирование продолжается
    if (firstClick === secondClick) {
        firstCard.classList.add('fade-out');
        secondClick.classList.add('fade-out');
    } else {
        secondClick.classList.add('wrong');
    }

});
//подсветка с неправильно подобранной пары пропадает
setTimeout(() => {
    firstCard.classList.remove('fade-out');
    secondClick.classList.remove('wrong');

}, 500);


/*

//множественной вставка карточек
const fragment = new DocumentFragment();
containerCards.append(fragment);


cards.forEach((item) => {

    //карточка с русск текстом
    const rus = document.createElement('div');
    rus.classList.add('rus');
    rus.textContent = `${item.rus}`;
    //или rus.textContent = rus;

    //карточка с англ текстом
    const eng = document.createElement('div');
    eng.classList.add('eng');
    //отображаем текстовое содержимое из массива объектов
    eng.textContent = `${item.eng}`;


    fragment.append(rus);
    fragment.append(eng);
});
*/