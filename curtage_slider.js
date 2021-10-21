
var $=jQuery.noConflict();


document.querySelector("body").insertAdjacentHTML("beforeEnd", '<div class="calculator_outer_wrap">'+

  '<div class="head">Hur stora affärer brukar du göra?</div>' +
  '<div class="slide_wrap">' +
    '<form>' +

      '<div class="range-control">' +

       ' <div class="range-wrap">' +
         ' <input type="range" class="range" min="0" max="120000" step="1000" id="slider">' +
        '  <output class="bubble"></output>' +
       ' </div>' +
    '  </div>' +
    '</form>' +
    '<div class="result_wrap">' +
     ' <div class="loader_wrap">' +
        '<div class="loader"></div>' +
      '</div>' +

      '<table id="result" cellspacing="0" cellpadding="0" style="overflow-x:auto;">' +

       ' <thead>' +
         ' <tr>' +
           ' <th>Mäklare</th>' +
           ' <th>Courtage just nu<div class="tooltip">ⓘ' +
             '   <span class="tooltiptext">Senast uppdaterad 2021-03-20</span>' +
            '  </div>' +
           ' </th>' +
           ' <th>Hemsida</th>' +
          '</tr>' +
        '</thead>' +
        '<tbody class="lists">' +

        '</tbody>' +
      '</table>' +
    '</div>' +
  '</div>');






var styles = '.calculator_outer_wrap {' +
'display: flex;' +
' flex-direction: column;' +
'width: 100%;' +
'align-items: center;' +
'margin-bottom: 15px;' +
'margin-top: 15px;' +
'font-family: sans-serif;' +
'}' +
'.head {' +
'margin-bottom: 10px;' +
'}' +
'.calculator_outer_wrap div {' +
' font-family: Georgia, serif;' +
' font-weight: 700;' +
' color: #000000;' +
'}' +
'.bubble {' +
'background: #f47555;' +
'color: white;' +
'padding: 4px 12px;' +
'position: absolute;' +
'border-radius: 4px;' +
'left: 50%;' +
'transform: translateX(-50%);' +
'margin-top: 10px;' +
'}' +
'.bubble::after {' +
'content: "";' +
'position: absolute;' +
'width: 4px;' +
'height: 9px;' +
'background: #f47555;' +
'top: -9px;' +
'left: 50%;' +
'}' +
'.calculator_outer_wrap th,.calculator_outer_wrap td {' +
'position: relative;' +

' border-bottom: 1px solid #ddd;' +
' padding: 5px;' +
'text-align: center;' +
    'vertical-align: middle;' +
'}' +
'.val {' +
'text-align: center;' +
'}' +
'.best {' +
'font-size: 0.7rem;' +
'background-color: lightgreen;' +
'margin-left: 5px;' +
'padding: 5px;' +
'text-align: center;' +
'border-radius: 5px;' +
'display: none;' +
'}' +
'.click_here {' +
' border-radius: 10px;' +
'font-size: 0.8rem;' +
'background-color: #0693e3;' +
'padding: 5px;' +
'color: #fff;' +
'white-space: nowrap;' +
    'padding-top: 10px;' +
'padding-bottom: 10px;' +


'}' +
'.click_here:hover {' +
'background-color: lightblue;' +
'cursor: pointer;' +
'}' +
'.tooltip .tooltiptext {' +
'visibility: hidden;' +
'width: 120px;' +
'background-color: black;' +
'color: #fff;' +
'text-align: center;' +
'border-radius: 6px;' +
'padding: 5px 0;' +
'position: absolute;' +
'z-index: 1;' +
'}' +
'.tooltip {' +
'color: green;' +
'margin-left: 4px;' +
'display: inline-block;' +
'font-weight: bold;' +
'}' +
'a {' +
'text-decoration: none;' +
'}' +
'.dh-img {' +
'width: 90px;' +
'}' +
'.dh-img img {' +
'max-width: 100%;' +
'}' +
'.name {' +
'font-size: .4rem;' +
'}' +
'.tooltip:hover .tooltiptext {' +
'visibility: visible;' +
'}' +
' .loader {' +
'border: 16px solid #f3f3f3; /* Light grey */' +
'border-top: 16px solid #3498db; /* Blue */' +
'border-radius: 50%;' +
'width: 4rem;' +
'height: 4rem;' +
'animation: spin 1s linear infinite;' +
'position: absolute;' +
'margin-top: 55%;' +
'display: none;' +
'}' +
'.loader_wrap {' +
'display: flex;' +
'justify-content: center;' +
'align-items: center;' +
'align-content: center;' +
'}' +
'@keyframes spin {' +
'0% { transform: rotate(0deg); }' +
'100% { transform: rotate(360deg); }' +
'}' +
'.dh-img {' +
'height: 40px;' +
'display: flex;' +
'justify-content: center;' +
'align-items: center;' +
'align-content: center;' +
'overflow: hidden;' +
'}' +
'.dh-img img{' +
'overflow: hidden;' +
'object-fit: scale-down;' +
'}' +
'.dh-text {' +
'font-size: .5rem;' +
'object-fit: scale-down;' +
'text-align: center;' +
'font-family: sans-serif;' +

    '}' +
'.range {' +
'-webkit-appearance: none;' +
'width: 100%;' +
'height: 10px;' +
'border-radius: 5px;' +
'background: #d3d3d3;' +
'outline: none;' +
'opacity: 0.7;' +
'-webkit-transition: .2s;' +
'transition: opacity .2s;' +
'}' +
'.range::-webkit-slider-thumb {' +
'-webkit-appearance: none;' +
'appearance: none;' +
'width: 15px;' +
'height: 15px;' +
'border-radius: 50%;' +
'background: #0693e3;' +
'cursor: pointer;' +
'}' +
'.range::-moz-range-thumb {' +
'width: 15px;' +
'height: 15px;' +
'border-radius: 50%;' +
'background: #0693e3;' +
'cursor: pointer;' +
'}' +
'.range-wrap {' +
'position: relative;' +
'margin: 0 auto 4rem;' +
'}' +
'.range {' +
'width: 100%;' +
'cursor: pointer;' +
'padding: unset;' +

'}' +

 '.slide_wrap {' +
  'min-width: 75%;' +
'}'+

 '.result_wrap {' +
  'margin-top: 20px;' +
'}' +

 '.img_row {' +
'display: flex;' +
    'justify-content: center;' +
    'align-items: center;' +
    'flex-direction: column;' +
'}'


var styleSheet = document.createElement("style")
styleSheet.type = "text/css"
styleSheet.innerText = styles
document.head.appendChild(styleSheet)


$(function() {


  /// LUCAS FYLL I HÄR

  var data = [{
      "name": "Avanza Mini",
      "min": 1,
      "max": 0,
      "rate": 0.0025,
      "img": 'https://sparsajten.se/wp-content/uploads/2021/01/Avanza_logotyp.png',
      "value": 0,
      "prodname": "Avanza Mini",
      "url": "https://click.adrecord.com?c=29403&p=836"

    },
    {
      "name": "Swedbank",
      "cur1": 29,
      "cur2": 59,
      "cur3": 99,
      "img": 'https://sparsajten.se/wp-content/uploads/2021/03/Swedbank.png',
      "value": 0,
      "url": "https://www.swedbank.se",
      "prodname": "",

    },
    {
      "name": "Avanza Small",
      "min": 39,
      "max": 0,
      "rate": 0.0015,
      "img": 'https://sparsajten.se/wp-content/uploads/2021/01/Avanza_logotyp.png',
      "value": 0,
      "url": "https://click.adrecord.com?c=29403&p=836",
      "prodname": "Avanza Small"

    },
    {
      "name": "Avanza Medium",
      "min": 69,
      "max": 0,
      "rate": 0.0007,
      "img": 'https://sparsajten.se/wp-content/uploads/2021/01/Avanza_logotyp.png',
      "value": 0,
      "url": "https://click.adrecord.com?c=29403&p=836",
      "prodname": "Avanza Medium"

    },
    {
      "name": "Avanza Fast Pris",
      "min": 99,
      "max": 99,
      "rate": 0,
      "img": 'https://sparsajten.se/wp-content/uploads/2021/01/Avanza_logotyp.png',
      "value": 0,
      "url": "https://click.adrecord.com?c=29403&p=836",
      "prodname": "Avanza Fast Pris"

    },
    {
      "name": "Nordnet Mini",
      "min": 1,
      "max": 0,
      "rate": 0.0025,
      "img": 'https://sparsajten.se/wp-content/uploads/2021/03/Nordnet.png',
      "value": 0,
      "url": "https://www.nordnet.se/",
      "prodname": "Nordnet Mini"

    },
    {
      "name": "Nordnet Liten",
      "min": 39,
      "max": 0,
      "rate": 0.0015,
      "img": 'https://sparsajten.se/wp-content/uploads/2021/03/Nordnet.png',
      "value": 0,
      "url": "https://www.nordnet.se/",
      "prodname": "Nordnet Liten"

    },
    {
      "name": "Nordnet Mellan",
      "min": 69,
      "max": 0,
      "rate": 0.0007,
      "img": 'https://sparsajten.se/wp-content/uploads/2021/03/Nordnet.png',
      "value": 0,
      "url": "https://www.nordnet.se/",
      "prodname": "Nordnet Mellan"


    },
    {
      "name": "Nordnet Fast",
      "min": 99,
      "max": 99,
      "rate": 0,
      "img": 'https://sparsajten.se/wp-content/uploads/2021/03/Nordnet.png',
      "value": 0,
      "url": "https://www.nordnet.se/",
      "prodname": "Nordnet Fast"

    },
    {
      "name": "Nordea",
      "min": 1,
      "max": 199,
      "rate": 0.0009,
      "img": 'https://sparsajten.se/wp-content/uploads/2021/03/Nordea.png',
      "value": 0,
      "url": "https://www.nordnet.se/",
      "prodname": ""

    },
    {
      "name": "Länsförsäkringar",
      "min": 20,
      "max": 0,
      "rate": 0.0005,
      "img": 'https://sparsajten.se/wp-content/uploads/2021/03/Länsförsäkrungar.png',
      "value": 0,
      "url": "https://lansforsakringar.se",
      "prodname": ""

    },
    {
      "name": "Handelsbanken",
      "min": 9,
      "max": 0,
      "rate": 0.0009,
      "img": 'https://sparsajten.se/wp-content/uploads/2021/03/Handelsbanken.png',
      "value": 0,
      "url": "https://www.handelsbanken.se",
      "prodname": ""

    },
    {
      "name": "SEB",
      "min": 1,
      "max": 0,
      "rate": 0.0009,
      "img": 'https://sparsajten.se/wp-content/uploads/2021/03/SEB.png',
      "value": 0,
      "url": "https://seb.se",
      "prodname": ""

    },
    {
      "name": "Danske Bank",
      "min": 79,
      "max": 0,
      "rate": 0.0010,
      "img": 'https://sparsajten.se/wp-content/uploads/2021/03/Danske.jpeg',
      "value": 0,
      "url": "https://danskebank.se/privat",
      "prodname": ""


    },
    {
      "name": "Aktieinvest Liten",
      "min": 39,
      "max": 0,
      "rate": 0.0015,
      "img": 'https://sparsajten.se/wp-content/uploads/2021/03/Aktieinvest.png',
      "value": 0,
      "url": "https://www.aktieinvest.se",
      "prodname": "Aktieinvest Liten"

    },

    {
      "name": "Aktieinvest Stor",
      "min": 139,
      "max": 0,
      "rate": 0.0005,
      "img": 'https://sparsajten.se/wp-content/uploads/2021/03/Aktieinvest.png',
      "value": 0,
      "url": "https://www.aktieinvest.se",
      "prodname": "Aktieinvest Stor"

    },

  ]


  $(".slide_value").text(parseInt($('#slider').val()) + " kr");

  go();
  blur()
  $(document).on('input', '#slider', function() {
    go(), blur()
  });


  function blur() {
    document.querySelector('.lists').style.opacity = '0'
    document.querySelector('.loader').style.display = 'block'


    setTimeout(function() {
      document.querySelector('.lists').style.opacity = '1';
      document.querySelector('.loader').style.display = 'none'


    }, 1000);


  }


  function go() {
    var grade_array = [];
    var retur_calc;
    //Ranking
    var sum = parseInt($('#slider').val());


    ///RATES & CURTAGE CALCULATION

    for (var i = 0; i < data.length; i++) {
      calculate_rate(i, data[i].name)

    }

    function calculate_rate(a, b) {


      //SWEDBANK

      if (b === "Swedbank") {

        if (sum <= 25000) {

          retur_calc = data[a].cur1


        } else if (sum > 25000 && sum <= 100000) {

          retur_calc = data[a].cur2

        } else if (sum > 100000) {

          retur_calc = data[a].cur3
        }

      } else {


        var retur_calc;



        retur_calc = Math.max(data[a].min, Math.round(sum * data[a].rate));

        if (data[a].max !== 0 && data[a].max <= retur_calc) {



          retur_calc = data[a].max;

        }


      }


      data[i].value = retur_calc



    }


    data.sort((a, b) => (a.value > b.value) ? 1 : -1)


    // ADD TO TABLE

    $result = $('#result');
    $result.find('tbody').empty();
    for (var x = 0; x < data.length; x++) {

      var current = data[x];

      $row = $('<tr><td class="img_row"><div class="dh-img"><img src=' + current.img + '></div><div class="dh-text">' + current.prodname + '</div></td><td class="val">' + current.value + ' kr<div class="best">Billigast</div></td><td><a href="' + current.url + '" class="click_here">Klicka här</a></td></tr>');
      $result.find('tbody').append($row);



    }
    if (data[0].value === data[1].value) {

      document.querySelectorAll('.best')[0].style.display = "inline-block"
      document.querySelectorAll('.best')[1].style.display = "inline-block"

    } else {
      document.querySelectorAll('.best')[0].style.display = "inline-block"


    }

  }

});

/// Värde i handtaget

const allRanges = document.querySelectorAll(".range-wrap");
allRanges.forEach(wrap => {
  const range = wrap.querySelector(".range");
  const bubble = wrap.querySelector(".bubble");

  range.addEventListener("input", () => {
    setBubble(range, bubble);
  });
  setBubble(range, bubble);
});

function setBubble(range, bubble) {
  const val = range.value;
  const min = range.min ? range.min : 0;
  const max = range.max ? range.max : 10;
  const newVal = Number(((val - min) * 100) / (max - min));
  bubble.innerHTML = val + " kr";

  // Sorta magic numbers based on size of the native UI thumb
  bubble.style.left = `calc(${newVal}% + (${8 - newVal * 0.15}px))`;
}
