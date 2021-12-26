var i=0, text;
text="Welcome to the world of indie game development"

function typing(){
	if(i<text.length){
		document.getElementById("span-welcome").innerHTML += text.charAt(i);
		i++;
		setTimeout(typing,75);
	}
}
typing();
