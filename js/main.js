/**
 * Created by kosta on 2016-08-24.
 */
function changeFont() {
    document.getElementById("demo").style.fontSize = "40px";


    window.alert("Hello, World!");
    document.write("<h1>document.write 실행했어요.</h1>");

    console.log('hello, world!');
}

function doCalc() {
    // 1. 텍스트박스(numOne, numTow)의 적힌 숫자를 가져온다.
    var numOne = document.getElementById("numOne").value;
    var numTwo = document.getElementById("numTwo").value;

    // 2. 두 숫자를 더해서 결과를 만든다.
    // 주)스트링을 숫자로 변환한다.
    var numberOne = parseInt(numOne);
    var numberTwo = parseInt(numTwo);

    var result = numberOne + numberTwo;

    // 3. 결과를 span 태그에 적는다.
    document.getElementById("result").innerHTML = result;
}

function changeFah() {
    var celsius = parseInt(document.getElementById("celsius").value);

    // 섭씨를 화씨로 변환하는 공식 --> (섭씨온도 * 1.8) + 32
    var result = (celsius * 1.8) + 32;

    document.getElementById("Fahrenheit").innerHTML = result;

}

function test() {
    return 10;
}

function example() {
    var a = 5;
    var a2 = 5.6;
    var b = 'abc';
    var d = new Date();
    var c = [1, 2, 3, 4, 5];
    var obj = {
        a: "1",
        b: "2",
        c: "3",
        d: function a() {
        }
    };  // javascript object notation --> json

    var t = test();
    console.log(t);

    var tt = test;  // 변수로 함수를 호출할 수 있다.

    var ttt = tt();

    var a = {
        type: "Fiat",
        model: 500,
        color: "white",
        drive: function () {
            console.log("붕붕");
        }

    };

    var type = a.type;
    a["type"];

    a.drive();
}

function doValidate() {
    var passwd = document.getElementById("pwd").value;

    // 1. 매우 강함 : 8자이상 숫자, 문자, 특수문자 모두 포함
    // 2. 강함 : 8자이상 숫자와 문자로만 구성됨
    // 3. 약함 : 8자이상 숫자로만 구성됨
    // 4. 매우 약함 : 8자 미만일 때

    var result = "";
    if (passwd.length < 8) {
        result = "매우약함";
    } else if (isNumber(passwd)) {
        result = "약함";
    } else {
        result = "매우 강하거나 강함// 구현 필요";
    }

    document.getElementById("result").innerHTML = result;
}

function isNumber(param) {
    // param 가 8글자 이상이고 모두 숫자로 이루어지면 'true'를 리턴
    var toInt = parseInt(param);
    if (toInt !== NaN && toInt > 9999999) {
        return true;
    } else {
        return false;
    }
}

function getDiceNumber() {
    var r = Math.floor(Math.random() * 6 + 1);
}

function setCharge() {
    var adult = document.getElementById("adult");
    var young = document.getElementById("young");
    var children = document.getElementById("children");

    var adult_value = adult.options[adult.selectedIndex].value;
    var young_value = young.options[young.selectedIndex].value;
    var children_value = children.options[children.selectedIndex].value;

    var la = document.getElementById("la");
    var bk = document.getElementById("bk");
    var sd = document.getElementById("sd");

    var destination = 0;
    var charge = 0;
    var tax = 0.05;

    if (la.checked) {
        console.log(la.checked);
        console.log(bk.checked);
        console.log(sd.checked);

        destination = 932000;

        charge = ((adult_value * destination) + ( young_value * (destination * 0.20)) + (children_value * (destination * 0.20))) * tax;

    }

    if (bk.checked) {
        console.log(la.checked);
        console.log(bk.checked);
        console.log(sd.checked);

        destination = 525000;

        charge = ((adult_value * destination) + ( young_value * (destination * 0.20)) + (children_value * (destination * 0.20))) * tax;

    }

    if (sd.checked) {
        console.log(la.checked);
        console.log(bk.checked);
        console.log(sd.checked);

        destination = 1103350;

        charge = ((adult_value * destination) + ( young_value * (destination * 0.20)) + (children_value * (destination * 0.20))) * tax;

    }


    document.getElementById("result").innerHTML = charge + "원";


}