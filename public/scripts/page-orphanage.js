const options = {
    dragging: false,
    touchZoom: false,
    doubleClickZoom:false,
    scrollWheelZoom:false,
    zoomControl:false
}

//create map
const map = L.map('mapid', options).setView([-27.2109325,-49.6448719], 15);

//create and add tileLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',)
.addTo(map);


//create icon
const icon = L.icon({
    iconUrl: "./public/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29,68],
    popAnchor: [170, 2]

})



//create and add marker
L
.marker([-27.2109325,-49.6448719], { icon })
.addTo(map)

/* image gallery */

function selectImage(event){
    const button = event.currentTarget

    //remover todas as classes active
    const buttons = document.querySelectorAll(".images button")
    buttons.forEach((removeactiveclass))

    function removeactiveclass(button){
        button.classList.remove("active")
    }

    console.log(buttons)
    //selecionar a imagem clicada  
    const image = button.children[0]
    const imageContainer = document.querySelector(".orphanage-details > img")

    //atualizar o container de imagem
    imageContainer.src = image.src

    //adicionar a classe .active para o botão clickado
    button.classList.add('active')
}