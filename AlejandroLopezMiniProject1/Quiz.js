//declare an array to store the images
var randomImage = new Array();
var answers = new Array();
var capital = new Array();
var rightAns;
var indexAns;
var amountCorrect = 0;
var clicked = false


//insert the URL of images in array
randomImage[0] = "Colombia";
randomImage[1] = "Argentina";
randomImage[2] = "Bolivia";
randomImage[3] = "Brazil";
randomImage[4] = "Paraguay";
randomImage[5] = "Venezuela";
randomImage[6] = "Ecuador";
randomImage[7] = "Peru";
randomImage[8] = "Chile";
randomImage[9] = "Uruguay";

//Answer Choices
answers[0] = "Colombia";
answers[1] = "Argentina";
answers[2] = "Bolivia";
answers[3] = "Brazil";
answers[4] = "Paraguay";
answers[5] = "Venezuela";
answers[6] = "Ecuador";
answers[7] = "Peru";
answers[8] = "Chile";
answers[9] = "Uruguay";

//Answer Choices Capital Cities
capital[0] = "Bogota";
capital[1] = "Buenos Aires";
capital[2] = "Sucre";
capital[3] = "Brasilia";
capital[4] = "Asuncion";
capital[5] = "Caracas";
capital[6] = "Quito";
capital[7] = "Lima";
capital[8] = "Santiago";
capital[9] = "Montevideo";


var index = 0;

function getRandomImage() {

   

    if (index < 10) {
        getQuiz(getQuestionsFirst, answers);
    }
    else if (index < 20 && index >= 10)
    {
        if (index == 10)
        {
            randomImage[0] = "Colombia";
            randomImage[1] = "Argentina";
            randomImage[2] = "Bolivia";
            randomImage[3] = "Brazil";
            randomImage[4] = "Paraguay";
            randomImage[5] = "Venezuela";
            randomImage[6] = "Ecuador";
            randomImage[7] = "Peru";
            randomImage[8] = "Chile";
            randomImage[9] = "Uruguay";
        }
        getQuiz(getQuestionsSecond, capital);
    }
    else {
        if (amountCorrect < 14 && amountCorrect != 0)
        {
            document.getElementById("finish").innerHTML = '<p class="fail">You FAILED! With ' + ((amountCorrect/20)*100) + '%.</p>';
        }
        else if (amountCorrect == 20)
        {
            document.getElementById("finish").innerHTML = '<p class="perfect">PERFECT SCORE! With ' + ((amountCorrect/20)*100) + '%.</p>';
        }
        else if (amountCorrect == 0)
        {
            document.getElementById("finish").innerHTML = '<p class="fail">You FAILED! With 0%.</p>';
        }
        else
        {
            document.getElementById("finish").innerHTML = '<p class="pass">You PASS! With ' + ((amountCorrect / 20) * 100) + '%.</p>';
        }
        document.getElementById("btn").disabled = true;
        document.getElementById("button").disabled = true;
    }



}


function getQuiz(getQuestions, getRightAns)
{
    var number = Math.floor(Math.random() * randomImage.length);
    var numb = Math.floor(Math.random() * answers.length);
    if ((numb == 9) || (numb == 0)) {
        numb = 4;
    }
    else if ((numb == 8) || (numb == 1)) {
        numb = 6;
    }

    if ((randomImage[number] == "Colombia")) {
        document.getElementById("result").innerHTML = '<img src="https://i.ibb.co/jJRbzc4/' + randomImage[number] + ".png" + '"' + ' class="' + randomImage[number] + '"/>';
        indexAns = 0;
        rightAns = getRightAns[0];
        getQuestions(numb);
        const index = randomImage.indexOf(randomImage[number]);
        randomImage.splice(index, 1);
        resetQuestion();
    }
    else if (randomImage[number] == "Argentina") {
        document.getElementById("result").innerHTML = '<img src="https://i.ibb.co/ZWbcLvG/' + randomImage[number] + ".png" + '"' + ' class="' + randomImage[number] + '"/>';
        indexAns = 1;
        rightAns = getRightAns[1];
        getQuestions(numb);
        const index = randomImage.indexOf(randomImage[number]);
        randomImage.splice(index, 1);
        resetQuestion();
    }
    else if (randomImage[number] == "Bolivia") {
        document.getElementById("result").innerHTML = '<img src="https://i.ibb.co/41MLxVv/' + randomImage[number] + ".png" + '"' + ' class="' + randomImage[number] + '"/>';
        indexAns = 2;
        rightAns = getRightAns[2];
        getQuestions(numb);
        const index = randomImage.indexOf(randomImage[number]);
        randomImage.splice(index, 1);
        resetQuestion();
    }
    else if (randomImage[number] == "Brazil") {
        document.getElementById("result").innerHTML = '<img src="https://i.ibb.co/5r95hpz/' + randomImage[number] + ".png" + '"' + ' class="' + randomImage[number] + '"/>';
        indexAns = 3;
        rightAns = getRightAns[3];
        getQuestions(numb);
        const index = randomImage.indexOf(randomImage[number]);
        randomImage.splice(index, 1);
        resetQuestion();
    }
    else if (randomImage[number] == "Paraguay") {
        document.getElementById("result").innerHTML = '<img src="https://i.ibb.co/c8NHRYH/' + randomImage[number] + ".png" + '"' + ' class="' + randomImage[number] + '"/>';
        indexAns = 4;
        rightAns = getRightAns[4];
        getQuestions(numb);
        const index = randomImage.indexOf(randomImage[number]);
        randomImage.splice(index, 1);
        resetQuestion();
    }
    else if (randomImage[number] == "Venezuela") {
        document.getElementById("result").innerHTML = '<img src="https://i.ibb.co/HD4WQ61/' + randomImage[number] + ".png" + '"' + ' class="' + randomImage[number] + '"/>';
        indexAns = 5;
        rightAns = getRightAns[5];
        getQuestions(numb);
        const index = randomImage.indexOf(randomImage[number]);
        randomImage.splice(index, 1);
        resetQuestion();
    }
    else if (randomImage[number] == "Ecuador") {
        document.getElementById("result").innerHTML = '<img src="https://i.ibb.co/86K1xCC/' + randomImage[number] + ".png" + '"' + ' class="' + randomImage[number] + '"/>';
        indexAns = 6;
        rightAns = getRightAns[6];
        getQuestions(numb);
        const index = randomImage.indexOf(randomImage[number]);
        randomImage.splice(index, 1);
        resetQuestion();
    }
    else if (randomImage[number] == "Peru") {
        document.getElementById("result").innerHTML = '<img src="https://i.ibb.co/xjJQdxp/' + randomImage[number] + ".png" + '"' + ' class="' + randomImage[number] + '"/>';
        indexAns = 7;
        rightAns = getRightAns[7];
        getQuestions(numb);
        const index = randomImage.indexOf(randomImage[number]);
        randomImage.splice(index, 1);
        resetQuestion();
    }
    else if (randomImage[number] == "Chile") {
        document.getElementById("result").innerHTML = '<img src="https://i.ibb.co/59Pk6Qv/' + randomImage[number] + ".png" + '"' + ' class="' + randomImage[number] + '"/>';
        indexAns = 8;
        rightAns = getRightAns[8];
        getQuestions(numb);
        const index = randomImage.indexOf(randomImage[number]);
        randomImage.splice(index, 1);
        resetQuestion();
    }
    else if (randomImage[number] == "Uruguay") {
        document.getElementById("result").innerHTML = '<img src="https://i.ibb.co/bK0c6vw/' + randomImage[number] + ".png" + '"' + ' class="' + randomImage[number] + '"/>';
        indexAns = 9;
        rightAns = getRightAns[9];
        getQuestions(numb);
        const index = randomImage.indexOf(randomImage[number]);
        randomImage.splice(index, 1);
        resetQuestion();
    }
    else {

    }
}

function shuffleArray(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
}

function getQuestionsFirst(rand) {

    var ans2 = rand + 1;
    var ans3 = rand - 1;
    var ans4 = rand + 2;

    for (var i = 0; i < 4; i++)
    {
        if (ans2 == ans3) {
            ans2 = 0;
        }
        else if (ans2 == ans4) {
            ans2 = 0;
        }
        else if (ans3 == ans4) {
            ans3 = 0;
        }
        else if (ans2 == indexAns) {
            ans2 = Math.floor(Math.random() * answers.length);
        }
        else if (ans3 == indexAns) {
            ans3 = Math.floor(Math.random() * answers.length);
        }
        else if (ans4 == indexAns) {
            ans4 = Math.floor(Math.random() * answers.length);
        }
    }
    

    var choices = new Array();
    choices[0] = indexAns;
    choices[1] = ans2;
    choices[2] = ans3;
    choices[3] = ans4;
    shuffleArray(choices);


    document.getElementById("questions").innerHTML = '<div><label>' + answers[choices[0]] + '<input id= "answer1" name = "ans" type = "radio" value = "' + answers[choices[0]] + '"></label></div>' +
        '<div><label>' + answers[choices[1]] + '<input id= "answer2" name="ans" type="radio" value = "' + answers[choices[1]] + '"></label></div>' +
        '<div><label>' + answers[choices[2]] + '<input id= "answer3" name="ans" type="radio" value = "' + answers[choices[2]] + '"></label></div>' +
        '<div><label>' + answers[choices[3]] + '<input id= "answer4" name="ans" type="radio" value = "' + answers[choices[3]] + '"></label></div></p>';
}

function getQuestionsSecond(rand) {

    var ans2 = rand + 1;
    var ans3 = rand - 1;
    var ans4 = rand + 2;

    for (var i = 0; i < 4; i++) {
        if (ans2 == ans3) {
            ans2 = 0;
        }
        else if (ans2 == ans4) {
            ans2 = 0;
        }
        else if (ans3 == ans4) {
            ans3 = 0;
        }
        else if (ans2 == indexAns) {
            ans2 = Math.floor(Math.random() * answers.length);
        }
        else if (ans3 == indexAns) {
            ans3 = Math.floor(Math.random() * answers.length);
        }
        else if (ans4 == indexAns) {
            ans4 = Math.floor(Math.random() * answers.length);
        }
    }


    var choices = new Array();
    choices[0] = indexAns;
    choices[1] = ans2;
    choices[2] = ans3;
    choices[3] = ans4;
    shuffleArray(choices);


    document.getElementById("questions").innerHTML = '<div><label>' + capital[choices[0]] + '<input id= "answer1" name = "ans" type = "radio" value = "' + capital[choices[0]] + '"></label></div>' +
        '<div><label>' + capital[choices[1]] + '<input id= "answer2" name="ans" type="radio" value = "' + capital[choices[1]] + '"></label></div>' +
        '<div><label>' + capital[choices[2]] + '<input id= "answer3" name="ans" type="radio" value = "' + capital[choices[2]] + '"></label></div>' +
        '<div><label>' + capital[choices[3]] + '<input id= "answer4" name="ans" type="radio" value = "' + capital[choices[3]] + '"></label></div></p>';
}

function getResults() {

    //LOOP FOR CHECKING ANSWERS INSIDE EACH RADIO
    let radiosName = document.getElementsByName('ans');

    for (var j = 0; j < radiosName.length; j++) {
        if (clicked) {
            var radiosValue = radiosName[j];
            if (radiosValue.value == rightAns && radiosValue.checked) {
                amountCorrect++;
                document.getElementById("answer1").disabled = true;
                document.getElementById("answer2").disabled = true;
                document.getElementById("answer3").disabled = true;
                document.getElementById("answer4").disabled = true;
                document.getElementById("btn").disabled = false;
                document.getElementById("button").disabled = true;
                document.getElementById("questions").style.color = "green";
                document.getElementById("questions").style.fontWeight = "bolder";
            }
            else if (radiosValue.value != rightAns && radiosValue.checked) {
                document.getElementById("answer1").disabled = true;
                document.getElementById("answer2").disabled = true;
                document.getElementById("answer3").disabled = true;
                document.getElementById("answer4").disabled = true;
                document.getElementById("btn").disabled = false;
                document.getElementById("button").disabled = true;
                document.getElementById("questions").style.color = "red";
                document.getElementById("questions").style.fontWeight = "bolder";
            }
        }

    }
    document.getElementById("results").innerHTML = '<p >Correct Answers: ' + amountCorrect + '/20</p>';

}

function Submit() {
    clicked = true;
}

function resetQuestion() {
    document.getElementById("btn").disabled = true;
    document.getElementById("button").disabled = false;
    document.getElementById("questions").style.color = "white";
    document.getElementById("questions").style.fontWeight = "initial";
}



function count() {
    if (index < 10) {
        index++;
        document.getElementById("count").innerHTML = '<pclass="Center"><div><strong> Question ' + index + ': Which is the country shown on the map?</strong></div> <br>';
    }
    else if (index < 20 && index >= 10)
    {
        index++;
        document.getElementById("count").innerHTML = '<pclass="Center"><div><strong> Question ' + index + ': Which is the capital city of the country shown on the map?</strong></div> <br>';
    }
    
}
