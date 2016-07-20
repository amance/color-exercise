var fruity = [
{
	fruit: "apple",
	rightColor: "red",
	image: "img/red.jpg"	
},
{
	fruit: "banana",
	rightColor: "yellow",
	image: "img/yellow.jpg"
},
{
	fruit: "lime",
	rightColor: "green",
	image: "img/green.jpg"
}
]

function getColor() {
	var rightColor = document.getElementById("rightColor").value.toLowerCase()

	for(i = 0; i < fruity.length; i++) {
		if(rightColor === fruity[i].rightColor) {
			document.getElementById("fruitName").innerHTML = fruity[i].fruit
			document.getElementById("colorPic").src = fruity[i].image
			return
		} else {
			document.getElementById("fruitName").innerHTML = "Try again!"
		}
	}
}
