d = new Date();
year = d.getFullYear();
$(".year").text(year);

var row = $('.portfolio');
var count = 12; // number of images

for(i = 1; i <= count; i++) {
    if (i<10){
        row.append('<div class="col-4 col-6-medium col-12-small"><a href="#" class="image fit"><img src="static/'+
        'images/pic0' + i + '.jpg" alt=""></a></div>'); // changed the <pic0> to just <pic> below
    } else {
        row.append('<div class="col-4 col-6-medium col-12-small"><a href="#" class="image fit"><img src="static/'+
        'images/pic' + i + '.jpg" alt=""></a></div>');
    }
}