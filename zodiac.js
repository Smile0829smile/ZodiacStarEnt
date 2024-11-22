//Global variables
//////////////////
//Memberiin ymnuud
//1
var members = ["Nazuke"]
//2
members.push("Ahri")
//3
members.push("Yunji")


//1
var memberAge = ["16"]
//2
memberAge.push("12")
//3
memberAge.push("13")



//1
var memberNamtar = ["Ceo of Zodiac Entertaiment"]
//2
memberNamtar.push("Manager")
//3
memberNamtar.push("Soloist")

/////////////////////


/////////////////////
//Hamtlagiin ymnuud
var hamtlagNer = [""];

var hamtlagGishuud = [""];

var hamtlagUria = [""];

//////////////////////

//////////////////////
//recorduud
var records = [""];

var recordOwner = [""];

var recordDate = [""];
//////////////////////
//Button
//Join
var otherButton = ["<input type='button' id='idButtonJoin' value='Бүртгүүлэх' onClick='joinEnt()'> "];

//Togloom
otherButton.push("<input type='button' id='idButtonGame' value='Тоглоомнууд' onClick='playGame()'>");
    var games = ["<input type='button' id='idGame1' value='Mongol Wordle' onClick='playWordle()'>"];





//button to back
var butsah = "<input type='button' id='idBackBtn' value='Буцах' onClick='goBack()'>"
var butsahTogloom = "<input type='button' id='idBackBtn' value='Буцах' onClick='goBackTogloom()'>"


//Function uud

//main functions
function homePage(){
    var output = "<br>Zodiac Entertaiment-ын main page-д тайвтай морил нь уу!<br>";
    output+= "Манай Entertaiment 2024-09-22 ньд <u>Nazuke Ceo</u> нээж байсан юм."

    output+="<br><br>"
    idDivDisplay.innerHTML = output;
}

function gishuun(){
    var output = "<br>";
    output += "<table><tr><th>Нэр</th><th>Нас</th><th>Үүрэг</th></tr>"

    for(i=0; i<=members.length-1; i++){
        output+= "<tr><td>"+members[i]+"</td><td>"+memberAge[i]+"</td><td>"+memberNamtar[i]+"</td></tr>"
    }

    output += "</table><br>"

    idDivDisplay.innerHTML = output;
}

function hamtlag(){
    var output = "<br>";
    output+= "<table><tr><th>Хамтлагийн нэр</th><th>Гишүүд</th><th>Уриа</th></tr>"

    for(i=0; i<=hamtlagNer.length-1; i++){
        output+= "<tr><td>"+hamtlagNer[i]+"</td><td>"+hamtlagGishuud[i]+"</td><td>"+hamtlagUria[i]+"</td></tr>"
    }

    output+= "</table><br>"

    idDivDisplay.innerHTML = output;
}

function record(){
    var output = "<br>";
    output+= "<table><tr><th>Рекорд</th><th>Эзэмшигч</th><th>Он/Сар</th></tr>"

    for(i=0; i<=records.length-1; i++){
        output+= "<tr><td>"+records[i]+"</td><td>"+recordOwner[i]+"</td><td>"+recordDate[i]+"</td></tr>"
    }

    output+= "</table><br>"

    idDivDisplay.innerHTML = output;
}

function other(){
    // document.getElementById("idDivDisplay").style.textAlign = "";
    var output = "<br>";

    for(i=0; i<=otherButton.length-1; i++){
        output+= otherButton[i];
    }

    output+= "<br><br>"


    idDivDisplay.innerHTML = output;
}


//secondary buttons

function joinEnt(){
    var output = "<div id='idDivHelper' class='divHelper'>"
    output+= butsah+"</div><br>"

    output += "<div id='idDivSeondary' class='divSecondary'>"
        output += "Манай энтд орохын тулд доорх линкээр ороод бөглөөрэй эсвэл манай СЕО нарын нэгэн рүү нь чат бичээрэй баярлалаа ;)<br>"
        output += "<hr width='70%'>"
        output += "<u><div class='linkJoinEnt' onClick='urlJoinEnt()'>элсэх</div></u>"
    output += "</div>"

    output+= "<br><br>"

    idDivDisplay.innerHTML = output;
}

function playGame(){
    var output = "<div id='idDivHelper' class='divHelper'>"
    output+= butsah+"</div><br>"

    for(i=0; i<=games.length-1; i++){
        output+= games[i];
    }

    output += "<br><br>"

    idDivDisplay.innerHTML = output;
}

function playWordle(){
    // document.getElementById("idDivDisplay").style.backgroundColor = "lightgrey"
    var output = "<div id='idDivHelper' class='divHelper'>"
    output+= butsahTogloom+"</div><br>"

    output += "<p>Энэ тоглоомны зорилго нь та нууцлагдсан 5 үсэгтэй үгийг таах юм. "
    output += "Хэрэв ногоон болвол тэр 5 үсэгний Ногоон байгаа нь зөв газраа орсон гэсэн үг. "
    output += "Харин хэрэв Шар байвал тэр үгэнд орж байгаа ч буруу байрлалд байна гэсэн үг.</p>"
    output += '<input type="text" class="wordleTextbox" id="idPlayerAnswer" placeholder="Үгээ энд оруулана уу"><br><br>'
    output += '<input type="button" class="wordleButton" id="idStartGame" value="Таах" onclick="startGame()">'
    output += '<div id="idShowMessage"></div>'
    output += '<div id="idShowHistory"></div>'

    output += "<br><br>"
    
    idDivDisplay.innerHTML = output;
}




//thirdary buttons

function goBack(){
    other();
}

function goBackTogloom(){
    playGame();
}

function urlJoinEnt(){
    window.open("https://docs.google.com/forms/d/1tWi_Mbr_i3qB1DWIl4NXlRJ50V8qkgGqrsx6RsS2xEA/edit")
}