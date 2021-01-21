//VERSION=3
// Visible Atmospherically Resistant Index Green  (abbrv. VARIgreen)
//
// General formula: ( [545:565] - [620:680] ) / ( [545:565] + [620:680] - [459:490] )
// This is an auto-generated script. Double checking with the URL below is recommendated.
// URL https://www.indexdatabase.de/db/si-single.php?sensor_id=168&rsindex_id=356

let index = (B03 - B04) / (B03 + B04 - B02);
let min = -15.105;
let max = 15.491;
let zero = 0.0;

// colorBlend will return a color when the index is between min and max and white when it is less than min.
// To see black when it is more than max, uncomment the last line of colorBlend.
// The min/max values were computed automatically and may be poorly specified, feel free to change them to tweak the displayed range.
// This index crosses zero, so a diverging color map is used. To tweak the value of the break in the color map, change the variable 'zero'.

var underflow_color = [1, 1, 1];
var low_color = [208/255, 88/255, 126/255];
var high_color = [241/255, 234/255, 200/255];
var zero_color = [0, 147/255, 146/255];
var overflow_color = [0, 0, 0];

return colorBlend(index, [min, min, zero, max],
[
	underflow_color,
	low_color,
	zero_color, // divergent step at zero
	high_color,
	//overflow_color // uncomment to see overflows
]);
