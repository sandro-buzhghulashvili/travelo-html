const menuToggler = document.getElementById("menuToggler")
const mainNavBar = document.querySelector("nav")
const mainMenu = document.getElementById("mainMenu")
const list = document.getElementById("list")
const sliderContainer = document.getElementById("sliderContainer")
const previous = document.getElementById("previous")
const next = document.getElementById("next")
const countryName = document.getElementById("countryName")
const sliderImages = [
    {
        countryName : "Australia",
        src : "./images/australia.jpg"
    },
    {
        countryName : "Indonesia",
        src : "./images/indonesia.jpg"
    },
    {
        countryName : "Switzerland",
        src : "./images/switzerland.jpg"
    }
]
let countryIndex = 0

next.addEventListener("click", ()=> {
    countryIndex += 1
    if(countryIndex > sliderImages.length - 1) {
        countryIndex = 0
    }
    loadSliderContent()
})
previous.addEventListener("click", ()=> {
    countryIndex -= 1
    if(countryIndex < 0) {
        countryIndex = sliderImages.length - 1
    }
    loadSliderContent()
})

setInterval(()=> {
    countryIndex += 1
    if(countryIndex > sliderImages.length - 1) {
        countryIndex = 0
    }
    loadSliderContent()
}, 7000)

const loadSliderContent = () => {
    sliderContainer.style.backgroundImage = `url(${sliderImages[countryIndex].src})`
    countryName.textContent = sliderImages[countryIndex].countryName
}

window.addEventListener("DOMContentLoaded", loadSliderContent)

let oddOrEven = 1

window.addEventListener("resize", ()=> {
    if(document.body.offsetWidth > 1000) {
        mainMenu.style.height = "48px"
        list.style.display = "block"
    } else {
        mainMenu.style.height = "0px"
        list.style.display = "none"
    }
})

menuToggler.addEventListener("click", ()=> {
    oddOrEven += 1
    if(oddOrEven % 2 === 0) {
        mainMenu.style.height = "248px"
        setTimeout(()=> {
            list.style.display = "block"
        }, 50)
    } else {
        mainMenu.style.height = "0px"
        list.style.display = "none"
    }
})
const allDestinationCards = document.querySelectorAll("#card")
const allDestinationCardsData = [
    {
        img : "./images/card-images/italy.webp",
        name: "Italy",
        places : 07
    },
    {
        img : "./images/card-images/brazil.webp",
        name: "Brazil",
        places : 03
    },
    {
        img : "./images/card-images/america.webp",
        name: "America",
        places : 10
    },
    {
        img : "./images/card-images/nepal.webp",
        name: "Nepal",
        places : 02
    },
    {
        img : "./images/card-images/maldives.webp",
        name: "Maldives",
        places : 02
    },
    {
        img : "./images/card-images/indonesia.webp",
        name: "Italy",
        places : 05
    },
]

let destinationCardsIndex = -1

for(let card of allDestinationCards) {
    destinationCardsIndex += 1
    card.style.backgroundImage = `url(${allDestinationCardsData[destinationCardsIndex].img})`
    const badge = document.createElement("div")
    badge.classList.add("content")
    const text = document.createElement("p")
    text.textContent = allDestinationCardsData[destinationCardsIndex].name
    badge.append(text)
    const placeAvailable = document.createElement('a')
    placeAvailable.href = "#"
    placeAvailable.innerText = `${allDestinationCardsData[destinationCardsIndex].places < 10 ? "0" + allDestinationCardsData[destinationCardsIndex].places + " Places" : allDestinationCardsData[destinationCardsIndex].places  + " Places"}`
    text.append(placeAvailable)
    card.append(badge)
}

const popularPlacesRow = document.getElementById("popularPlaces")
const allPopularPlacesCardsData = [
    {
        price : 500,
        placeName : "California",
        location : "United State of America",
        photo : "./images/popular-places/california.webp",
        rating : 5,
        reviewQuantity : 20,
        remainingDays : 5
    },
    {
        price : 500,
        placeName : "Korola Megna",
        location : "United State of America",
        photo : "./images/popular-places/korola.webp",
        rating : 5,
        reviewQuantity : 20,
        remainingDays : 5
    },
    {
        price : 500,
        placeName : "London",
        location : "United Kingdom",
        photo : "./images/popular-places/london.webp",
        rating : 5,
        reviewQuantity : 20,
        remainingDays : 5
    },
    {
        price : 500,
        placeName : "Miami Beach",
        location : "United State of America",
        photo : "./images/popular-places/miami.webp",
        rating : 5,
        reviewQuantity : 20,
        remainingDays : 5
    },
    {
        price : 500,
        placeName : "California",
        location : "United State of America",
        photo : "./images/popular-places/california-second.webp",
        rating : 5,
        reviewQuantity : 20,
        remainingDays : 5
    },
    {
        price : 500,
        placeName : "Saintmartine Iceland",
        location : "United State of America",
        photo : "./images/popular-places/saintmartine.webp",
        rating : 5,
        reviewQuantity : 20,
        remainingDays : 5
    }
]

for(card of allPopularPlacesCardsData) {
    const mainDiv = document.createElement("div")
    mainDiv.classList.add("card", "popular-place")
    const badge = document.createElement("a")
    badge.href = "#"
    badge.classList.add("price")
    badge.textContent = `$ ${card.price}`
    const brandPhoto = document.createElement("img")
    brandPhoto.src = card.photo
    const header = document.createElement("h3")
    header.textContent = card.placeName
    const location = document.createElement("p")
    location.textContent = card.location
    const ratingSection = document.createElement("div")
    ratingSection.classList.add("rating-days")
    for(let i = 1; i <= card.rating; i++) {
        const span = document.createElement("span")
        const icon = document.createElement("i")
        icon.classList.add("fa-solid", "fa-star")
        span.append(icon)
        ratingSection.append(icon)
    }
    const reviews = document.createElement("p")
    reviews.textContent = `(${card.reviewQuantity} ${card.reviewQuantity === 1 ? "reivew" : "reviews"})`
    ratingSection.append(reviews)
    const time = document.createElement("div")
    time.classList.add("time")
    const span = document.createElement("span")
    const icon = document.createElement("i")
    icon.classList.add("fa-solid","fa-clock")
    icon.style.color = "#7a838b"
    span.append(icon)
    const days = document.createElement("p")
    days.textContent = `${card.remainingDays} Days`
    time.append(span)
    time.append(days)
    ratingSection.append(time)
    mainDiv.append(badge)
    mainDiv.append(brandPhoto)
    mainDiv.append(header)
    mainDiv.append(location)
    mainDiv.append(ratingSection)
    popularPlacesRow.append(mainDiv)
}