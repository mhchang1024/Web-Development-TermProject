var itemCount = 0;
var div = document.createElement('div');





function createPhotocard (imgLink, Title){
   
    let div = document.createElement('div');
    let img = document.createElement('img');
    let text = document.createElement('div');
    let bre = document.createElement('br')
    
    img.src = imgLink;
    img.width = "200";
    img.height = "200";
   
    text.innerText = Title;
    text.height = "75";
    text.width = "200"
    text.style.fontSize= "6"
    
    text.setAttribute("class", "title")
    div.setAttribute("class", "image")
    div.appendChild(img);
    div.appendChild(bre);
    div.appendChild(text);
    
    itemCount += 1;
    document.getElementById("item-count").innerHTML = `there are ${itemCount} photos shown`;
    div.onclick = fadeout;

    function fadeout(){
            let opacity = Number(window.getComputedStyle(div).getPropertyValue("opacity"));
            let timer = setInterval(() => {
            if (opacity > 0){
                opacity = opacity - 0.1;
                div.style.opacity = opacity
            }else{
                clearInterval(timer);
                div.remove();
                itemCount = itemCount - 1;
                document.getElementById("item-count").innerHTML = `there are ${itemCount} photos shown`;
            }
        }, 20 ); 

    }
   
    return div;
}

    

var url = " https://jsonplaceholder.typicode.com/albums/2/photos";



fetch(url)
.then((response) =>{
    return response.json();
})
.then( (data_json) => {
        var div = document.getElementById("container");

        data_json.forEach( photo => {
            //console.log(gif.images['downsized_large'].url);
            div.appendChild(createPhotocard(photo.thumbnailUrl, photo.title));
        });
})
.catch((error) =>{
    console.log(error);
});

