function CreateCard(header, body) {
    var colDiv = document.createElement("div");
    colDiv.className = "col-md-4 col-sm-6 col-6 mx-0 my-2";
    
    var cardDiv = document.createElement("div");
    cardDiv.className = "card bg-C text-white rounded-A shadow";
    
    var headerDiv = document.createElement("div");
    headerDiv.className = "card-header";
    
    var headerH3 = document.createElement("h3");
    headerH3.innerHTML = header;
    
    var bodyDiv = document.createElement("div");
    bodyDiv.className = "card-body"

    bodyDiv.innerHTML = body;
    
    headerDiv.appendChild(headerH3);
    cardDiv.appendChild(headerDiv);
    cardDiv.appendChild(bodyDiv);
    colDiv.appendChild(cardDiv);

    document.getElementById("card-container").appendChild(colDiv);
}

function LoadCardData() {
    var dict = {}
    dict["오늘의 추천 음식"] = "비옥야채쌈";
    dict["TOP 치확 증가 음식"] = "비옥야채쌈";
    dict["TOP 치유 음식"] = "몬드 생성구이";
    dict["TOP 방어력 증가 음식"] = "비옥야채쌈";
    dict["즐겨찾는 음식"] = "비옥야채쌈 <br> 몬드 생선구이";
    
    for (var header in dict) {
        CreateCard(header, dict[header]);
    }
   
}

LoadCardData();