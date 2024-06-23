import { cardInfo, colorPalette } from "./modules/data.js";
import { textTyping } from "./modules/textTyping.js";

let zIndexValue = 2;
const createCard = (type, data, i) => {
    cardInfo.filter(card => card.type == type).map(card => card.bgColorVal = `${colorPalette[Math.floor(Math.random() * colorPalette.length)]}`)

    //generate a bg-color value for each bit of the array
    // cardInfo.map(card => card.bgColorVal = `${colorPalette[Math.floor(Math.random() * colorPalette.length)]}`)
    //get cards div
    const elemz = document.getElementById('cards')
    //create a div
    const cardElem = document.createElement('div')
    //add a classname card to div
    cardElem.className = "card"

    const closeElem = document.createElement('div')
    const spanElem = document.createElement('span')
    spanElem.innerText = '[x]'
    spanElem.className = 'close-btn'
    closeElem.className = 'close-btn-wrapper'
    closeElem.appendChild(spanElem)
    cardElem.appendChild(closeElem)
    spanElem.addEventListener('click', () => {
        elemz.removeChild(cardElem)
    },)
    spanElem.addEventListener('touchstart', () => {
        elemz.removeChild(cardElem)
    }, { passive: false })

    let rotateVal = (Math.random()) * 180
    let rand = Math.random()
    let sign = rand < 0.5 ? '+' : '-'
    //add styles
    cardElem.style.zIndex = zIndexValue
    cardElem.style.userSelect = 'none'
    cardElem.style.touchAction = 'none'
    cardElem.style.top = `-${Math.random() * (300 - 280) + 280}px`
    cardElem.style.left = `-${Math.random() * (300 - 280) + 280}px`
    cardElem.style.transform = `rotate(${sign}${rotateVal}deg) translateZ(0px)`
    cardElem.style.transition = 'transform 0.8s ease,  left 0.8s ease, top 0.8s ease'





    cardElem.addEventListener('click', (e) => {
        zIndexValue++
        e.target.style.zIndex = zIndexValue
    },)
    cardElem.addEventListener('touchstart', (e) => {
        zIndexValue++
        e.target.style.zIndex = zIndexValue
    }, { passive: false })
    //mouse over card colors
    cardElem.addEventListener('mouseover', () => {
        cardElem.style.backgroundColor = cardInfo[i].bgColorVal || `${colorPalette[Math.floor(Math.random() * colorPalette.length)]}`

    }, { passive: false })
    cardElem.addEventListener('touchstart', () => {
        cardElem.style.backgroundColor = cardInfo[i].bgColorVal || `${colorPalette[Math.floor(Math.random() * colorPalette.length)]}`

    }, { passive: false })
    cardElem.addEventListener('mouseleave', () => {
        cardElem.style.backgroundColor = 'white'
    }, { passive: false })
    cardElem.addEventListener('touchend', () => {
        cardElem.style.backgroundColor = 'white'
    }, { passive: false })


    cardElem.classList.add('slide')
    cardElem.classList.add(type)
    cardElem.setAttribute('draggable', false);

    let startX = 0;
    let startY = 0;
    let offsetX = 0;
    let offsetY = 0;
    cardElem.addEventListener('mousedown', mouseDown)
    cardElem.addEventListener('touchstart', touchStart, { passive: false });

    //For now you could probably just add an empty ontouchstart and call the sane function with ontouchend

    let tiltValue = (Math.random() - .5) * 30
    function touchStart(e) {
        console.log(e)
        console.log('start')

        startX = e.touches[0].clientX;
        startY = e.touches[0].clientY;

        document.addEventListener('touchmove', touchMove);
        document.addEventListener('touchend', touchEnd);

        // Get initial transform values
        const transform = getComputedStyle(cardElem).transform;
        cardElem.style.transition = ''; // Remove transition during dragging
        const transformMatch = transform.match(/[-+]?[\d]*\.?[\d]+/g) || [0, 0, 0];
        offsetX = parseFloat(transformMatch[4]) || 0;
        offsetY = parseFloat(transformMatch[5]) || 0;
        // Prevent default touch behavior (scrolling, zooming, etc.)
        e.preventDefault()
    }
    function mouseDown(e) {
        startX = e.clientX;
        startY = e.clientY;
        document.addEventListener('mousemove', mouseMove);
        document.addEventListener('mouseup', mouseUp);
        const transform = getComputedStyle(cardElem).transform;
        cardElem.style.cursor = "grabbing";
        cardElem.style.transition = ''
        const transformMatch = transform.match(/[-+]?[\d]*\.?[\d]+/g) || [0, 0, 0];
        offsetX = parseFloat(transformMatch[4]) || 0;
        offsetY = parseFloat(transformMatch[5]) || 0;
    }


    function mouseMove(e) {
        const newX = offsetX + e.clientX - startX;
        const newY = offsetY + e.clientY - startY;
        cardElem.style.transform = `translate3d(${newX}px, ${newY}px, 0) rotate(${tiltValue}deg)`;
    }
    function touchMove(e) {
        console.log('move')
        const newX = offsetX + e.touches[0].clientX - startX;
        const newY = offsetY + e.touches[0].clientY - startY;
        cardElem.style.transform = `translate3d(${newX}px, ${newY}px, 0) rotate(${tiltValue}deg)`;
        e.preventDefault();
    }
    function touchEnd(e) {
        console.log('end')
        document.removeEventListener('touchmove', touchMove);
        document.removeEventListener('touchend', touchEnd);
        e.preventDefault();
    }

    function mouseUp(e) {
        cardElem.style.cursor = "grab";
        document.removeEventListener('mousemove', mouseMove)
        document.removeEventListener('mouseup', mouseUp);
    }

    if (type == "Navigation") {
        console.log(data)
        const cardDivWrapper = document.createElement('div')
        cardDivWrapper.className = 'card__div-wrapper'
        const cardH2a = document.createElement('h2')
        cardH2a.innerText = type + ' ' + data.emoji
        cardDivWrapper.appendChild(cardH2a)
        data.links.forEach(
            item => {
                const cardDiv = document.createElement('div')
                cardDiv.className = 'navigation'
                cardDiv.innerText = item
                cardDivWrapper.appendChild(cardDiv)
                cardElem.appendChild(cardDivWrapper)
                cardDiv.addEventListener('click', () => {
                    createCards(item)

                }, false)
                cardDiv.addEventListener('touchstart', () => {
                    createCards(item)
                }, { passive: false })

            }
        )

    } else if (type == "Contact") {
        const cardDivWrapper = document.createElement('div')
        cardDivWrapper.className = 'card__div-wrapper'
        const cardH2a = document.createElement('h2')
        cardH2a.innerText = type + ' ' + data.emoji
        cardDivWrapper.appendChild(cardH2a)
        data.links.forEach(
            item => {
                const cardDiv = document.createElement('div')
                cardDiv.className = 'contact'
                cardDiv.innerText = item.name
                cardDivWrapper.appendChild(cardDiv)
                cardElem.appendChild(cardDivWrapper)
                cardDiv.addEventListener('click', () => {
                    window.open(item.url)
                }, false)
                cardDiv.addEventListener('touchstart', () => {
                    window.open(item.url)
                }, { passive: false })

            }
        )
    }

    else {//make a h2 tags
        const cardH2a = document.createElement('h2')
        cardH2a.className = "card__card-type"
        cardH2a.innerText = type + ' ' + data.emoji
        const cardH2 = document.createElement('h2')
        cardH2.innerText = data.title
        //create a p tag
        const cardP = document.createElement('p')
        cardP.innerText = data.subtitle
        const cardP2 = document.createElement('p')
        cardP2.innerText = data.year

        //append h1,px2 to cardElem
        cardElem.appendChild(cardH2a)
        cardElem.appendChild(cardH2)
        cardElem.appendChild(cardP)
        cardElem.appendChild(cardP2)
    }

    //append cardElem to elem
    elemz.appendChild(cardElem)
    if (type == 'Navigation') {
        setTimeout(function () {
            cardElem.style.left = '50%'
            cardElem.style.top = '30%'
            cardElem.style.transform = `rotate(${tiltValue}deg) translateZ(0px)`
            if (window.matchMedia("(max-width: 1023px)").matches) {
                cardElem.style.left = '50%'
                cardElem.style.top = '40%'
                cardElem.style.transform = `rotate(${tiltValue}deg) translateZ(0px)`
            }
        }, 150)



    } else {
        setTimeout(function (i) {

            cardElem.style.left = `${Math.floor(Math.random() * 80)}%`;
            cardElem.style.top = `${Math.floor(Math.random() * 40)}%`;
            cardElem.style.transform = `rotate(${tiltValue}deg) translateZ(0px)`

        }, i * 150);
    }
}

const createCards = (type) => {

    const elements = document.getElementsByClassName(type);
    while (elements.length > 0) {
        elements[0].parentNode.removeChild(elements[0]);
    }

    for (let i = 0; i < cardInfo.length; i++) {
        if (cardInfo[i].type == type) {
            createCard(cardInfo[i].type, cardInfo[i].data, i)
        }
    }
}
// createCards('Navigation')
const containerElem = document.getElementById('hi5')
containerElem.addEventListener('click', () => {
    const tooltipElem = document.getElementById('tooltip')
    tooltipElem.setAttribute('data-tooltip', '(hi five!)')
    createCards('Navigation')
}, false)

//start textyping rotation
textTyping()

console.log('hope this worksgos')