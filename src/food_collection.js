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
    bodyDiv.className = "card-body m-2 p-0"
    
    var inContainer = document.createElement("div");
    inContainer.className = "container-fluid p-0"
    
    var inUpRow = document.createElement("div");
    inUpRow.className = "row";
    
    var inUpLeftCol = document.createElement("div");
    inUpLeftCol.className = "col-9 pe-2";
    
    var inUpRightCol = document.createElement("div");
    inUpRightCol.className = "col-3 ps-0";
    
    var inDownRow = document.createElement("div");
    inDownRow.className = "row";
    
    var inDownCol = document.createElement("div");
    inDownCol.className = "col pt-2";
    
    var foodImg = document.createElement("img");
    foodImg.setAttribute("src", body);
    foodImg.className = "rounded-A img-fluid";
    
    var img2 = document.createElement("img");
    img2.setAttribute("src", body);
    img2.className = "rounded-A img-fluid";
    
    var img3 = document.createElement("img");
    img3.setAttribute("src", "/asset/ex_prop.webp");
    img3.className = "rounded-A img-fluid";
    img3.setAttribute("style", "height: 2.2rem;");
    
    inUpLeftCol.appendChild(foodImg);
    inUpRightCol.appendChild(img2);
    
    inDownCol.appendChild(img3);
    inDownRow.appendChild(inDownCol);

	inUpRow.appendChild(inUpLeftCol);
	inUpRow.appendChild(inUpRightCol);
	inContainer.appendChild(inUpRow);
	inContainer.appendChild(inDownRow);
    bodyDiv.appendChild(inContainer);
    
    headerDiv.appendChild(headerH3);
    cardDiv.appendChild(headerDiv);
    cardDiv.appendChild(bodyDiv);
    colDiv.appendChild(cardDiv);

    document.getElementById("card-container").appendChild(colDiv);
}

function LoadFoodCardData() {
    var dict = {}
    dict["비옥야채쌈"] = "/asset/ex_food.png";
    dict["몬드 생선구이"] = "/asset/ex_food.png";
    dict["선도장"] = "/asset/ex_food.png";
    dict["진주비취백옥탕"] = "/asset/ex_food.png";
    dict["연밥 계란찜"] = "/asset/ex_food.png";
    
    for (var header in dict) {
        CreateFoodCard(header, dict[header]);
    }
   
}

LoadFoodCardData();