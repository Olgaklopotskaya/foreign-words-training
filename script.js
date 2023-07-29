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
let titleFront = cardFront.querySelector('h1');
let titleBack = cardBack.querySelector('h1');


// При клике на карточку
flipCard.addEventListener("click", function(event) {
    // Повернуть ее противоположной стороной
    flipCard.classList.toggle('active');
})

cardFront.textContent = words[i];
cardBack.textContent = wordsTranslate[i];
let buttonNex = document.querySelector('#next');
let buttonBack = document.querySelector('#back');
let currentWord = document.querySelector('#current-word');

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
let examButton = document.querySelector('#exam');
let firstPage = document.querySelector('.content');
let studyMode = document.querySelector('#study-mode');
//При клике на кнопку «Тестирование» осуществляется переход в режим проверки знаний
examButton.addEventListener("click", function(event) {
    firstPage.classList.add('hidden');
    studyMode.classList.add('hidden');
    containerCards.classList.remove('hidden');
});

let cards = [{
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
let containerCards = document.createElement('div');
containerCards.classList.add('container-cards');
containerCards.classList.add('hidden');

//карточка с русск текстом
let rus = document.createElement('div');
rus.classList.add('rus');
//отображаем текстовое содержимое из массива объектов
//правильно?
rus.textContent = cards.rus;

//карточка с англ текстом
let eng = document.createElement('div');
eng.classList.add('eng');
//отображаем текстовое содержимое из массива объектов
eng.textContent = cards.eng;

containerCards.append(rus);
containerCards.append(eng);



//множественной вставка карточек
const fragment = new DocumentFragment();
//првильно ли записала forEach? 
cards.forEach((eng, rus) => {
    let english = document.createElement('div');
    // эта строчка вызывает сомнения
    english.textContent = eng;
    fragment.append(eng);
    let russian = document.createElement('div');
    russian.textContent = rus;
    fragment.append(rus);
})

containerCards.append(fragment);

//При клике на кнопку «Тестирование» осуществляется переход в режим проверки знаний
//первый клик по карточке можно обозначить null 
// или можно просто записать переменную без значения - let firstClick; 
let firstClick = null;
firstClick.classList.add('correct');
let secondClick = null;
// русское слово = англ 
// так можно записывать сardard.rus[i]?
сardard.rus[i].textContent = сard.eng[i];
сard.eng[i].textContent = сard.rus[i];
//  первый клик - это первая карточка , дальше вторая 

containerCards.addEventListener("click", function(event) {
    //правильно?
    if (Card.rus[i] || Card.eng[i] == firstClick) {
        Card.rus[i] || Card.eng[i] == secondClick
    };
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
// тут закомментировала старую версию, я все делала по шаблону , как у нас было задание про зоомагазин
// но не работает . что не так?
/*
//контейнер для шаблона карточек
let containerCards = document.querySelector('#exam-cards');
//скрыли контейнер( при клике он откроется)
containerCards.classList.add('hidden');
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

// тут множнственная вставка , как выше
*/