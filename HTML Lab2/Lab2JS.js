var btnRed = document.getElementById("red");
var btnBlue = document.getElementById("blue");
var btnGreen = document.getElementById("green");

function changeColor(color){
   return this.fontcolor(color);
}   

String.prototype.changeColor = changeColor;

btnRed.onclick = function () {
    document.body.style.background = "red";
};
btnBlue.onclick = function () {
    document.body.style.background = "#00ffff";
};
btnGreen.onclick = function () {
    document.body.style.background = "#b0ff00";
};

 // Lấy 2 button và thẻ div
        var button1 = document.getElementById("btn1");
        var button2 = document.getElementById("btn2");
        var div = document.getElementById('content');

        // Thiết lập click cho button 1
        button1.onclick = function () {
            div.style.background = "red";
        };

        // Thiết lập click cho button 2
        button2.onclick = function () {
            div.style.background = "blue";
        };

        for(i = 0;i < 10;i++)
        {
            document.write("thảo ngáo lần " + i + "<br>");
        }