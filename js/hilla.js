let questionNumber = 0 ;

const EKA_KYSYMYS = "<img src='../images/17201168820_46f12e2296_o.jpg'>";
const TOKA_KYSYMYS = "<img src='../images/25947862078_05b8b051f3_o.jpg'>";

function startValues() {
    document.getElementById("progress1").innerHTML = "<img src='../images/vastaamaton.png'>";
    document.getElementById("progress2").innerHTML = "<img src='../images/vastaamaton.png'>";
    document.getElementById("progress3").innerHTML = "<img src='../images/vastaamaton.png'>";
    document.getElementById("progress4").innerHTML = "<img src='../images/vastaamaton.png'>";
    document.getElementById("progress5").innerHTML = "<img src='../images/vastaamaton.png'>";
    printName();
}

function printName() {
    var nimiTieto = sessionStorage.getItem("nimiTieto");
    let firstLetter = nimiTieto.charAt(0).toUpperCase();
    let printableName = firstLetter + nimiTieto.substring(1);
    document.getElementById("tulostanimi").innerHTML = printableName;
}



function printProgress(kysymysnumero, vastaus) {
    if (kysymysnumero == 1){
        if (vastaus = true){
            document.getElementById("progress1").innerHTML = "<img src='../images/true.png'>";
        } else {
            document.getElementById("progress1").innerHTML = "<img src='../images/false.png'>";
        }
    }
}

function printQuiz() {
    questionNumber ++ ;
    if (questionNumber == 1) {
        let firstOption = "Varis" ;
        let secondOption = "Harakka" ;
        let thirdOption = "Korppi" ;
        document.getElementById("question").innerHTML = EKA_KYSYMYS ;
        printOptions(firstOption, secondOption, thirdOption) ;

    } else if (questionNumber == 2) {
        let firstOption = "Naali" ;
        let secondOption = "Susi" ;
        let thirdOption = "Kettu" ;
        document.getElementById("question").innerHTML = TOKA_KYSYMYS ;
        printOptions(firstOption, secondOption, thirdOption) ;
    }

}

function printOptions(first, second, third) {
    const VAIHTOEHDOT = '<form id="vaihtoehdot">' +
    '<input type="radio" id="first" name="vastaus" value="1">' +
    '<label for="first">' + first + '</label><br>' +
    '<input type="radio" id="second" name="vastaus" value="2">' +
    '<label for="second">' + second + '</label><br>' +
    '<input type="radio" id="third" name="vastaus" value="3">' +
    '<label for="third">' + third + '</label>' +
    '<button id="vastaa" onclick="answerQuestion()">Vastaa</button>' +
    '</form>'

    document.getElementById("answer").innerHTML = VAIHTOEHDOT ;
}

function answerQuestion() {
    let vastaus = document.getElementByName("vastaus").value ;

    printProgress(questionNumber, checkAnswer(vastaus)) ;
    questionNumber ++ ;
}

function checkAnswer(option) {
    if (questionNumber == 1) {
        if (option == 2) {
            return true ;
        } else {
            return false ;
        }
    } if (questionNumber == 2) {
        if (option == 3) {
            return true ;
        } else {
            return false ;
        }
    }
}