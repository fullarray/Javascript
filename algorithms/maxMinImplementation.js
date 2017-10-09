var tab = new Array(11, 9, 34, 90, 45, 3, 78, 240, 118);
// declare default array variables
var min = tab[0];
var max = tab[0];

for (var i = 0; i < tab.length; i++) {
    
    if (min > tab[i]) {
        min = tab[i];
    }
	
    if (max < tab[i]) {
        max = tab[i];
    }
}

alert("Min = " + min + ", Max = " + max);
