console.log(window);
console.dir(document);

// по селектору тега
const titleByTag = document.querySelector('h1')
// console.dir(titleByTag);
// по селектору id
const titleById = document.querySelector('#title')
// console.log(titleById);
// гетэлем
const titleByIdOk = document.getElementById('title')
console.log(titleByIdOk);
// по селектору класса 

const titleByClass = document.querySelector('.main-class')
// console.log(titleByClass);
// console.dir(titleByClass);

const elemsByClass = document.getElementsByClassName('my-class')
console.log(elemsByClass);
// по селектору атрибута
const titleByAttr = document.querySelector("[data-name='data-title']")
// console.log(titleByAttr);
// console.dir(titleByAttr);

// по селектору наследника
const elemByParent = document.querySelector('body>p')
// console.log(elemByParent);
// console.dir(elemByParent);
// коллекция наследников
const elemsByParent = document.querySelectorAll('body>p')
// console.log(elemsByParent);
// по селектору потомка
const elemByProto = document.querySelector('body p')
// console.log(elemByProto);
// коллекция потомков
const elemsByProto = document.querySelectorAll('body p')
// console.log(elemByProto);

// навигация 
// console.log(titleByTag.parentNode);   // получаем родителя
// console.log(titleByTag.childNodes);  // ноудлист
// console.log(titleByTag.children);  // HTML collection tag only
//  свойства
// console.dir(titleByTag);
// console.dir(titleByTag.classList);
titleByTag.classList.add('new-class')
// console.log(titleByTag.classList.contains('jvhvig'));
// console.log(titleByTag.classList.contains('title'));
titleByTag.classList.remove('main-class')
titleByTag.classList.replace('title', 'new-title')
titleByTag.classList.toggle('new-class')
titleByTag.classList.toggle('new-class')

// id - отдельное свойство
// console.log(titleByTag.id);

// атрибуты
// console.log(titleByTag.attributes);
// console.log(titleByTag.attributes.id);

// console.log(titleByTag.value);
// console.log(titleByTag.textContent);
// console.log(titleByTag.dataset);
// добавить новый атрибут
titleByTag.setAttribute('title', 'main-title')
// console.log(titleByTag.getAttribute('name'));
// titleByTag.remove('data-id')
titleByTag.textContent = 'leaves of the tree'
titleByTag.style.color = 'blue'
titleByTag.style.background = 'yellow'
titleByTag.style.padding = '20px'
titleByTag.style.margin = '20px'
titleByTag.style.textAlign = 'center'
//  создание узлов 2 способа
// 1. createElement() => 0bject
const button = document.createElement('button')
button.textContent = 'click'
console.log(button.textContent);
console.dir(button);
console.log(button);
button.style.background = 'green'
button.classList.add('my-btn')
button.setAttribute('type', 'button')
button.dataset.type = 'my-button'
// 2. строчная разметка
const stringBtn = '<button class="" type="button" data-type="my-button" style="background: red">STRING BTN </button>'
console.log(stringBtn);
// клонирование
const cloneButtonBefore = button.cloneNode(false)
cloneButtonBefore.textContent = 'before'

const cloneButtonAfter = button.cloneNode(false)
cloneButtonAfter.textContent = 'after'

const cloneButtonPrepend = button.cloneNode(false)
cloneButtonPrepend.textContent = 'Prepend'

const cloneButtonAppend = button.cloneNode(false)
cloneButtonAppend.textContent = 'Append'

// встаивание 2 вида
// для объектов созданных через createElem
// titleByTag.after(cloneButtonAfter) // строго после
// titleByTag.before(cloneButtonBefore) // строго перед

// titleByTag.appendChild(cloneButtonAppend)
// titleByTag.prepend(cloneButtonPrepend)
// ============================================

titleByTag.insertAdjacentElement('beforebegin', cloneButtonBefore)
titleByTag.insertAdjacentElement('afterbegin', cloneButtonPrepend)
titleByTag.insertAdjacentElement('beforeend', cloneButtonAppend)
titleByTag.insertAdjacentElement('afterend', cloneButtonAfter)

// для строк
// titleByTag.innerHTML = stringBtn

titleByTag.insertAdjacentHTML('beforebegin', stringBtn)
titleByTag.insertAdjacentHTML('afterbegin', stringBtn)
titleByTag.insertAdjacentHTML('beforeend', stringBtn)
titleByTag.insertAdjacentHTML('afterend', stringBtn)

// удаление
// titleByTag.innerHTML = '' - можно для строчных

// titleByTag.removeChild(cloneButtonBefore) // нельзя удалить, потому что не является вложеным элементом
titleByTag.removeChild(cloneButtonAppend)
titleByTag.removeChild(cloneButtonPrepend)
// titleByTag.removeChild(cloneButtonAfter) // нельзя удалить, потому что не является вложеным элементом

cloneButtonBefore.remove()
cloneButtonAfter.remove()