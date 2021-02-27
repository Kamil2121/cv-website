const languageButtom = document.querySelector('.language-button');
const polishContent = document.querySelectorAll('.pl');
const englishContent = document.querySelectorAll('.eng');
const contactButton = document.querySelector('#contact-button');
const formName = document.querySelector('#form-name');
const formMessage = document.querySelector('#form-message');
const formSubmit = document.querySelector('#form-submit');

function chooseLanguage() {
    if (languageButtom.classList[1]) {
        languageButtom.src = "img/english.png";
        languageButtom.classList.remove('polish');
        contactButton.innerHTML = "kontakt";
        formName.placeholder = "Imię";
        formMessage.placeholder = "Wiadomość";
        formSubmit.value = "Prześlij";
        for (i=0; i < polishContent.length; i++) {
            polishContent[i].classList.remove('hide');
        }
        for (i = 0; i < englishContent.length; i++) {
            englishContent[i].classList.add('hide');
        }
    } else {
        languageButtom.src = "img/polish.png";
        languageButtom.classList.add('polish');
        contactButton.innerHTML = "contact me";
        formName.placeholder = "Full Name";
        formMessage.placeholder = "Message";
        formSubmit.value = "Send";
        for (i = 0; i < polishContent.length; i++) {
            polishContent[i].classList.add('hide');
        }
        for (i = 0; i < englishContent.length; i++) {
            englishContent[i].classList.remove('hide');
        }
    }
}

const spans = document.querySelectorAll('h1 span')
spans.forEach(span => span.addEventListener('mouseover', function(e) {
    span.classList.add('animated', 'rubberBand')
}))
spans.forEach(span => span.addEventListener('mouseout', function (e) {
    span.classList.remove('animated', 'rubberBand')
}))

const htmlBar = document.querySelector('.bar-html')
const cssBar = document.querySelector('.bar-css')
const jsBar = document.querySelector('.bar-javascript')
const angularBar = document.querySelector('.bar-angular')


var tl = new TimelineLite()

tl.fromTo(htmlBar, .55, { width: 'calc(0% - 6px)' }, { width: 'calc(80% - 6px)', ease: Power4.easeOut })
    .fromTo(cssBar, .55, { width: 'calc(0% - 6px)' }, { width: 'calc(90% - 6px)', ease: Power4.easeOut })
    .fromTo(jsBar, .55, { width: 'calc(0% - 6px)' }, { width: 'calc(60% - 6px)', ease: Power4.easeOut })
    .fromTo(angularBar, .55, { width: 'calc(0% - 6px)' }, { width: 'calc(60% - 6px)', ease: Power4.easeOut })

var controller = new ScrollMagic.Controller();
var scene = new ScrollMagic.Scene({
    triggerElement: "#skills",
    triggerHook: 0,
})
.setTween(tl)
.addTo(controller)


const showRequiredCategory = event => {
    const getId = event.id;
    const links = document.querySelectorAll('.work-category button');
    for (i=0; i<links.length; i++) {
        if (links[i].hasAttribute('class')) {
            links[i].classList.remove('active');
        }
    }

    event.classList.add('active');
    const getCategory = document.querySelector('.category-' + getId);
    const categories = document.querySelectorAll('div[class ^= "category-"]');
    for (i=0; i<categories.length; i++) {
        if (categories[i].hasAttribute('class')) {
            categories[i].classList.remove('showCategory');
            categories[i].classList.add('hideCategory');
        }
    }

    getCategory.classList.remove('hideCategory');
    getCategory.classList.add('showCategory');
};
