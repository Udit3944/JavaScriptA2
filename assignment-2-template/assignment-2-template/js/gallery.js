
//Taking all the images in UI element so in case if user add another li element we can access the new image
let listOfImages = document.getElementById('images');
//storing all the li elements images in images variable
let images = listOfImages.getElementsByTagName('img');

//Accessing every images and add an event listern so when user click in any images the change image function is called
for(let i=0;i<images.length;i++)
{
    images[i].addEventListener('click',function(){
        changeImage(this.src,this.alt);
    })
}



//This function is used to change the featured image and it's caption.
function changeImage(src,alt){
    //Take the featured element
    let featuredImage = document.getElementById('featuredImage');
    //Change the url of the image
    src = src.slice(0,-9)+"large.jpg";
    //Assign to the feature src attribute
    featuredImage.src = src;
    
    //Take the image caption
    let caption = document.getElementById('caption');
    //Assign to the feature caption
    caption.textContent = alt
}