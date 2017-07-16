// client-side js
// run by the browser each time your view template is loaded

// alert methods are strictly for testing purposes

$(function() { // short-hand for jquery .ready method
  
    var date;
    var object = {
      unix: null,
      natural: null
    };
    var months = ['january',
      'february',
      'march',
      'april',
      'may',
      'june',
      'july',
      'august',
      'september',
      'october',
      'november',
      'december']; 

    var inst = document.getElementById('instructions');
    var resu = document.getElementById('results');
    var output = document.getElementById('dynaput');

    $.get('/url', function(datum) {
      
      var path = datum.toString().trim();
      path = path.replace(/(%20)/g, ' ').replace(/,/g, '').replace(/\//g, '').split(' ');

      if(path.length == 1 &&
        isNaN(parseInt(path[0])) == false) {
        // unix unput
        // alert('1');
        object.unix = parseInt(path[0]);
        date = new Date(parseInt(path[0]) * 1000);
        object.natural = months[date.getMonth() + 1] + ' ' + date.getDate() + ', ' + date.getFullYear(); 
        resu.style.display = 'block';
        output.innerHTML = 'UNIX: ' + object.unix + ' || NATURAL: ' + object.natural;
        
      } else if(path.length == 3 &&
               months.indexOf(path[0].toLowerCase()) > -1 &&
               isNaN(parseInt(path[1])) == false &&
               isNaN(parseInt(path[2])) == false) {   
        // natural input 
        // alert('2');
        date = new Date(months.indexOf(path[0].toLowerCase()) + '/' + path[1] + '/' + path[2]);
        object.unix = date.getTime() / 1000;
        object.natural = path[0].toLowerCase() + ' ' + path[1] + ', ' + path[2];
        resu.style.display = 'block';
        output.innerHTML = 'UNIX: ' + object.unix + ' || NATURAL: ' + object.natural;
        
      } else if(path.join('') == '') {
        // blank input
        // alert('3');
        inst.style.display = 'block';
        
      } else {
        // null input
        // alert('4');
        resu.style.display = 'block';
        output.innerHTML = 'UNIX: ' + object.unix + ' || NATURAL: ' + object.natural;
      }
      
    });
  
});