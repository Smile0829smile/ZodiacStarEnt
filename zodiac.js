//Global variables
//////////////////
//Memberiin ymnuud
//1
var members = ["Nazuke"]
//2
// members.push("Ahri")
//3
members.push("Yunji")
//4
members.push("Gena")
//5
members.push("Jinna")
//6
members.push("Rose")
//7
members.push("Jiyu")
//8
members.push("Kimmy")
//9
members.push("Jusong")
//10
members.push("Amy")
//11
members.push("Minji")
//12
members.push("Rora")
//13
members.push("Monix")


//1
var memberAge = ["16"]
//2
// memberAge.push("12")
//3
memberAge.push("13")
//4
memberAge.push("16")
//5
memberAge.push("11")
//6
memberAge.push("15")
//7
memberAge.push("12")
//8
memberAge.push("14")
//9
memberAge.push("16")
//10
memberAge.push("11")
//11
memberAge.push("13")
//12
memberAge.push("15")
//13
memberAge.push("10")


//1
var memberNamtar = ["Ceo of Zodiac Entertaiment"]
//2
// memberNamtar.push("XtraOnes (Хамтлаг)")
//3
memberNamtar.push("Soloist")
//4
memberNamtar.push("CEO of Zodiac Entertaiment")
//5 
memberNamtar.push("XtraOnes (Хамтлаг)")
//6
memberNamtar.push("Soloist")
//7
memberNamtar.push("Soloist")
//8
memberNamtar.push("Soloist")
//9
memberNamtar.push("Editor")
//10
memberNamtar.push("Soloist")
//11
memberNamtar.push("Soloist")
//12
memberNamtar.push("RAVYNX (Хамтлаг)")
//13
memberNamtar.push("Soloist")

/////////////////////


/////////////////////
//Hamtlagiin ymnuud
var hamtlagNer = ["XtraOnes"];
hamtlagNer.push("RAVYNX")

var hamtlagGishuud = ["Jinna"];
hamtlagGishuud.push("Minji<br> Jusong<br> Rora")

//////////////////////

//////////////////////
//recorduud
var records = [""];

var recordOwner = [""];

var recordDate = [""];
//5.73 (s)
//////////////////////
//Button
//Join
var otherButton = ["<input type='button' id='idButtonJoin' value='Бүртгүүлэх' onClick='joinEnt()'> "];

//Togloom
otherButton.push("<input type='button' id='idButtonGame' value='Тоглоомнууд' onClick='playGame()'>");
    var games = ["<input type='button' id='idGame0' value='Mongol Wordle' onClick='playWordle()'> "];
    games.push("<input type='button' id='idGame1' value='Dark/Light side romance' onClick='darkLightRomance()'>");
console.log(games)




//button to back
var butsah = "<input type='button' id='idBackBtn' value='Буцах' onClick='goBack()'>"
var butsahTogloom = "<input type='button' id='idBackBtn' value='Гарах' onClick='goBackTogloom()'>"


//Function uud

//main functions
function homePage(){
    var output = "<br>Zodiac Entertaiment-ын main page-д тайвтай морил нь уу!<br>";
    output+= "Манай Entertaiment 2024-09-22 ньд <u>Nazuke Ceo</u> нээж байсан юм."

    output+="<br><br>"
    idDivDisplay.innerHTML = output;
}

function gishuun(){
    var output = "<br><select id='idSelect'>";
    output += "<option></option>"
    output += "<option value='<'>Насаар жагсаах (багаас их)</option>"
    output += "<option value='>'>Насаар жагсаах (ихээс бага)</option></select>"
    output += "<input type='button' value='жагсаах' onClick='sort()'><br><br>"
    output += "<table><tr><th>Нэр</th><th>Нас</th><th>Үүрэг</th></tr>"

    for(i=0; i<=members.length-1; i++){
        output+= "<tr><td>"+members[i]+"</td><td>"+memberAge[i]+"</td><td>"+memberNamtar[i]+"</td></tr>"
    }

    output += "</table><br>"

    idDivDisplay.innerHTML = output;
}

function hamtlag(){
    var output = "<br>";
    output+= "<table><tr><th>Хамтлагийн нэр</th><th>Гишүүд</th></tr>"

    for(i=0; i<=hamtlagNer.length-1; i++){
        output+= "<tr><td>"+hamtlagNer[i]+"</td><td>"+hamtlagGishuud[i]+"</td></tr>"
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
    output += '<div id="idShowMessage"></div><br>'
    output += '<div id="idShowHistory"></div>'

    output += "<br><br>"
    
    idDivDisplay.innerHTML = output;
}

function darkLightRomance(){
    var output = "<div id='idDivHelper' class='divHelper'>";
    output += butsahTogloom+"</div><br>"

    output += "<p>Энэ нь зүгээр хөгжилтэй байлгах үүднээс нэмсэн"
    output += " хөгжилтэй тест. Та өөрийгөө романтик харилцааны сайн тал уу "
    output += "муу тал уу гэдэг олж мэдэх болно. Чин сэтгэлээсээ хариулаарай.</p>"
    output += "<br><input type='button' id='idBtn1' value='эхлэх' onClick='setUpGameArea()'>"

    output += "<br><br>"

    idDivDisplay.innerHTML = output;
}

function sort(){
    if(idSelect.value == ">"){
        bubblesort1(memberAge)

        gishuun()
    }
    else if(idSelect.value == "<"){
        bubblesort(memberAge)

        gishuun()
    }
}




//thirdary buttons

function goBack(){
    other();
}

function goBackTogloom(){
    playGame();
}

function urlJoinEnt(){
    // window.open("https://docs.google.com/forms/d/1tWi_Mbr_i3qB1DWIl4NXlRJ50V8qkgGqrsx6RsS2xEA/edit")
    window.open("https://www.facebook.com/profile.php?id=100076458789842")
}

function bubblesort(inputArray){
    var arraySize = inputArray.length;

    //if the given array has less than 2 elements, then it's already sorted!
    if(arraySize<2){
        return inputArray;
    }

    //Keep making passes through the array comparing/swapping adjacent elements.
    //We do this until we are able to make a passs through the array without 
    //having to make any swaps - since that must mean that the array is sorted.

    //This variable tracks whether the current pass will be the last one 
    var sortDone;

    do{
        //Assume that the array is iin sorted order, until we
        //are proven wrong (i.e. we have to swap elements)
        sortDone = true;

        for(var i=0; i< arraySize-1; i++)
        {
            if(inputArray[i]> inputArray[i+1])
            {
                //The array was not in sorted order, so we must
                //keep making passes through the array
                sortDone = false;

                //Swap the two out-of-order elements
                var temp = members[i];
                members[i]= members[i+1];
                members[i+1]= temp;
                
                var temp = memberAge[i];
                memberAge[i]= memberAge[i+1];
                memberAge[i+1]=temp

                var temp = memberNamtar[i];
                memberNamtar[i]= memberNamtar[i+1];
                memberNamtar[i+1]=temp
            }
        }
    }while(sortDone==false)

    //At this point, since we broke out of the while loop, it must
    //mean that array is sorted
    return inputArray;
}

function bubblesort1(inputArray){
    var arraySize = inputArray.length;

    //if the given array has less than 2 elements, then it's already sorted!
    if(arraySize<2){
        return inputArray;
    }

    //Keep making passes through the array comparing/swapping adjacent elements.
    //We do this until we are able to make a passs through the array without 
    //having to make any swaps - since that must mean that the array is sorted.

    //This variable tracks whether the current pass will be the last one 
    var sortDone;

    do{
        //Assume that the array is iin sorted order, until we
        //are proven wrong (i.e. we have to swap elements)
        sortDone = true;

        for(var i=0; i< arraySize-1; i++)
        {
            if(inputArray[i]< inputArray[i+1])
            {
                //The array was not in sorted order, so we must
                //keep making passes through the array
                sortDone = false;

                //Swap the two out-of-order elements
                var temp = members[i];
                members[i]= members[i+1];
                members[i+1]= temp;
                
                var temp = memberAge[i];
                memberAge[i]= memberAge[i+1];
                memberAge[i+1]=temp

                var temp = memberNamtar[i];
                memberNamtar[i]= memberNamtar[i+1];
                memberNamtar[i+1]=temp
            }
        }
    }while(sortDone==false)

    //At this point, since we broke out of the while loop, it must
    //mean that array is sorted
    return inputArray;
}
