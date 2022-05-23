var names= new Array();
names[0]="Manasa";
names[1]="Jyothi";
names[2]="Jin";
names[3]="jayanth";
names[4]="Minnu";
names[5]="Sajju";
names[6]="Sindhu";
names[7]="Laddu";
names[8]="Swetha";
names[9]="john";

for(var i=0;i < names.length; i++){
	if(names[i].charAt(0)=='J'||names[i].charAt(0)=='j')
	{
		console.log("Goodbye " + names[i])

	}
	else
	{
		console.log("Hello "+ names[i])
	}
}


