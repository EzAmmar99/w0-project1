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
    "middle-img-src": "img/mid-page.jpg",
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
    "copyright" : "Copyright Great Idea! 2019"
  },
};

// write your code here 
const container = document.querySelector('.container')
const navItems = container.querySelectorAll('a')

navItems.forEach((element, index) => {
  element.textContent = siteContent.nav[`nav-item-${index + 1}`]
})

const navImg = container.querySelector('.logo')
navImg['src']  =  siteContent.nav['img-src']

const cta = container.querySelector('.cta')
const cta_text = cta.querySelector('.cta-text')

const h1 = cta_text.querySelector('h1')
h1.textContent = siteContent.cta['h1']

const button = cta_text.querySelector('button')
button.textContent = siteContent.cta['button']

const img = cta.querySelector('img')
img['src'] = siteContent.cta['img-src']

const main_content = container.querySelector('.main-content')  
const top_content = main_content.querySelector('.top-content')  
const text_content = top_content.querySelectorAll('.text-content') 

const features = text_content[0] ;
const features_h4 = features.querySelector('h4')
features_h4.textContent = siteContent['main-content']['features-h4']

const features_content = features.querySelector('p')
features_content.textContent = siteContent['main-content']['features-content']

const about = text_content[1] ;
const about_h4 = about.querySelector('h4')
about_h4.textContent = siteContent['main-content']['about-h4']

const about_content = about.querySelector('p')
about_content.textContent = siteContent['main-content']['about-content']

const middle_img_src = main_content.querySelector('img')
middle_img_src['src'] = siteContent['main-content']['middle-img-src']

const bottom_content = container.querySelector('.bottom-content')
const text_content_services = bottom_content.querySelectorAll('.text-content')

const services = text_content_services[0]
const services_h4 = services.querySelector('h4')
services_h4.textContent = siteContent['main-content']['services-h4']

const services_content = services.querySelector('p')
services_content.textContent = siteContent['main-content']['services-content']

const product = text_content_services[1]
const product_h4 = product.querySelector('h4')
product_h4.textContent = siteContent['main-content']['product-h4']

const product_content = product.querySelector('p')
product_content.textContent = siteContent['main-content']['product-content']

const vision = text_content_services[2]
const vision_h4 = vision.querySelector('h4')
vision_h4.textContent = siteContent['main-content']['vision-h4']

const vision_content = vision.querySelector('p')
vision_content.textContent = siteContent['main-content']['vision-content']

const contact = container.querySelector('.contact')
const contact_h4 = contact.querySelector('h4')
contact_h4.textContent = siteContent['contact']['contact-h4']

const contacts = contact.querySelectorAll('p')
const address = contacts[0]
address.textContent = siteContent['contact']['address']

const phone = contacts[1]
phone.textContent = siteContent['contact']['phone']

const email = contacts[2]
email.textContent = siteContent['contact']['email']

const footer = container.querySelectorAll('footer')
footer[0].textContent = siteContent['footer']['copyright']


button.addEventListener('click', (e)=>{
  location.reload();
})

