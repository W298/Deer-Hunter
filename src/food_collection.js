function CreateFoodCard(header, body) {
    var colDiv = document.createElement("div");
    colDiv.className = "col-md-3 col-sm-4 col-6 col-xl-2 mx-0 my-2";
    
    var cardDiv = document.createElement("div");
    cardDiv.className = "card bg-C text-white rounded-A shadow";
    
    var headerDiv = document.createElement("div");
    headerDiv.className = "card-header";
    
    var headerH3 = document.createElement("h3");
    headerH3.innerHTML = header;
    
    var bodyDiv = document.createElement("div");
    bodyDiv.className = "card-body"
    
    var foodImg = document.createElement("img");
    foodImg.setAttribute("src", body);
    foodImg.setAttribute("style", "width: 20%;");

    bodyDiv.appendChild(foodImg);
    headerDiv.appendChild(headerH3);
    cardDiv.appendChild(headerDiv);
    cardDiv.appendChild(bodyDiv);
    colDiv.appendChild(cardDiv);

    document.getElementById("card-container").appendChild(colDiv);
}

function LoadFoodCardData() {
    var dict = {}
    dict["비옥야채쌈1"] = "IMG_0538.JPG";
    dict["비옥야채쌈2"] = "IMG_0538.JPG";
    dict["비옥야채쌈3"] = "IMG_0538.JPG";
    dict["비옥야채쌈4"] = "IMG_0538.JPG";
    dict["비옥야채쌈5"] = "IMG_0538.JPG";
    
    for (var header in dict) {
        CreateFoodCard(header, dict[header]);
    }
   
}

LoadFoodCardData();