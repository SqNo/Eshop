document.getElementById('plus').addEventListener('click', function(){
	 document.getElementById('number').value++;
	 
	 var op = document.getElementById('resultat').value;
	 op = parseInt(op);
	 op += 12;
	 document.getElementById('resultat').value = op;
})

document.getElementById('moins').addEventListener('click', function(){
	
	if (document.getElementById('number').value > 1){
	document.getElementById('number').value--;
	
	 var op = document.getElementById('resultat').value;
	 op = parseInt(op);
	 op -= 12;
	 document.getElementById('resultat').value = op;
	}
})


// CHANGEMENT IMAGES 
var Images = document.getElementsByClassName('image');
for ( i = 0 ; i < Images.length ; i++ )
{
	Images[i].addEventListener('click', function()
	{
		 document.getElementById('big').src = this.src;
	})
}
	
var Images = document.getElementsByClassName('images');
for ( i = 0 ; i < Images.length ; i++ )
{
	Images[i].addEventListener('click', function()
	{
		for (j = 0; j < Images.length ;j++)
			Images[j].style.borderColor = "lightgrey";
		 this.style.borderColor = "red";
	})
}
