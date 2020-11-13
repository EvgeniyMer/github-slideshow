for (x=1;x<=33;x++) {
	document.writeln(x);
}
if (x==34) {
	document.write("<br/>"+x+"<br/>");
}
var i=0;
while (i<=10) {
	document.write(i + "<br/>");
i++;
}
switch(x) {
	case 1:
	case 34:
		document.write("b");
		break;
	case 44:
		document.write("c");
		break;
}
do {
	document.write("p");
}
while (x==35);
