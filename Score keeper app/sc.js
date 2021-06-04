var p1 = document.querySelector("#p1");
var p2 = document.querySelector("#p2");
var resetButton = document.getElementById("reset");
var p1Display = document.querySelector("#p1Display");
var p2Display = document.querySelector("#p2Display");
var num = document.querySelector("input");
var chan = document.querySelector("#changing")
var p1s = 0;
var p2s = 0;
var gameOver = false;
var ws=5;

p1.addEventListener("click",function()
{
	if(!gameOver){
	p1s++; 
}
if (p1s === ws) {
	p1Display.classList.add("Winner");
	gameOver = true;
}
	p1Display.textContent = p1s;
});
p2.addEventListener("click",function()
{  if(!gameOver){
	p2s++;}
	if (p2s === ws)
	{ 
			p2Display.classList.add("Winner");
		gameOver= true;
	}
	p2Display.textContent = p2s;
});

resetButton.addEventListener("click",function(){
	reset();


});


function reset()
{
		p1s = 0;
	p2s =0;
	p1Display.textContent = 0;
    p2Display.textContent = 0;
    p1Display.classList.remove("Winner");
    p2Display.classList.remove("Winner");
    gameOver = false;

}

num.addEventListener("change",function(){
	chan.textContent = num.value;
	ws = Number(num.value);
     reset();

});