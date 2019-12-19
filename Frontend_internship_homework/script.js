// function for vertical responsiveness
function autoResizeDiv()
{
    document.getElementById('document-height').style.height = window.innerHeight +'px';
}
window.onresize = autoResizeDiv;
autoResizeDiv();

// function for receiving data and put place in the document
async function getData() {
    let picturesUrl = 'https://picsum.photos/v2/list';
    let response = await fetch(picturesUrl);

    if (response.ok) {
        let myPictures = await response.json();
        var thumbnailContainer = '<div class="main-thumbnail-container">';

        for (let i=0; i < myPictures.length; i++) {
            thumbnailContainer += '<div class="thumbnail-container"><img src="' + myPictures[i].download_url + '" alt="Author: ' + myPictures[i].author + '. Width x Height: ' + myPictures[i].width + ' x ' + myPictures[i].height + '" onclick="myFunction(this);"></div>';
        }
    } else {
      alert("HTTP-Error: " + response.status);
    }
    thumbnailContainer += '</div>';
    document.getElementById("left-container").innerHTML = thumbnailContainer;

}
getData();

// function for right side image expansion
function myFunction(imgs) {
  var expandImg = document.getElementById("expanded-img");
  var imgText = document.getElementById("expanded-image-data");
  expandImg.src = imgs.src;
  imgText.innerHTML = imgs.alt;
  expandImg.parentElement.style.display = "block";
}
