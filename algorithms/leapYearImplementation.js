function checkLeapYearImplementation(year)
{
	if(((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0))
	{
		alert(year + ' is leap.');
		return true;
	}
	else
	{
		alert(year + ' is NOT leap.');
		return false;
	}
}

alert(checkLeapYearImplementation(2018));
alert(checkLeapYearImplementation(2013));