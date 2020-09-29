const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },

  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

const nav = document.querySelectorAll('nav a');
nav[0].textContent = siteContent.nav['nav-item-1']
nav[1].textContent = siteContent.nav['nav-item-2']
nav[2].textContent = siteContent.nav['nav-item-3']
nav[3].textContent = siteContent.nav['nav-item-4']
nav[4].textContent = siteContent.nav['nav-item-5']
nav[5].textContent = siteContent.nav['nav-item-6']

const h1 = document.querySelector('h1')
const button = document.querySelector('button')
const src = document.querySelector('#cta-img')

h1.textContent = siteContent.cta.h1
button.textContent = siteContent.cta.button
src.setAttribute('src', siteContent['cta']['img-src'])

const toph4 = document.querySelectorAll('.top-content h4')
const topP = document.querySelectorAll('.top-content p')

toph4[0].textContent = siteContent['main-content']['features-h4']
topP[0].textContent = siteContent['main-content']['features-content']
toph4[1].textContent = siteContent['main-content']['about-h4']
topP[1].textContent = siteContent['main-content']['about-content']

const middleSrc = document.querySelector('#middle-img')
middleSrc.setAttribute('src', siteContent['main-content']['middle-img-src'])

const bottomh4 = document.querySelectorAll('.bottom-content h4')
const bottomp = document.querySelectorAll('.bottom-content p')

bottomh4[0].textContent = siteContent['main-content']['services-h4']
bottomp[0].textContent = siteContent['main-content']['services-content']
bottomh4[1].textContent = siteContent['main-content']['product-h4']
bottomp[1].textContent = siteContent['main-content']['product-content']
bottomh4[2].textContent = siteContent['main-content']['vision-h4']
bottomp[2].textContent = siteContent['main-content']['vision-content']

document.querySelector('.contact h4').textContent = siteContent.contact['contact-h4']

const contactP = document.querySelectorAll('.contact p')

contactP[0].textContent = siteContent.contact['address']
contactP[1].textContent = siteContent.contact['phone']
contactP[2].textContent = siteContent.contact['email']

document.querySelector('footer p').textContent = siteContent.footer.copyright

// header.classList.add('green')
// header.style.textColor = 'green'

const navItem7 = document.createElement('a')
navItem7.textContent = 'Blog'
navItem7.href = '#'
document.querySelector('nav a').appendChild(navItem7)

const navItem8 = document.createElement('a')
navItem8.textContent = 'Team'
navItem8.href = '#'
document.querySelector('nav a').prepend(navItem8)