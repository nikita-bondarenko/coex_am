$(document).ready(function () {

//Настройки. Выбираем крипту для калькулятора: 

let strinOfCoins = 'bitcoin,ethereum,binancecoin,tron';
//ID смотреть на https://www.coingecko.com/en/coins/, выбрать монету и на странице поиском найти API id , например avian-network,dogecoin

let intervalseconds = 360; 
//Интервал обновления в секундах

//*********** Дальше не менять *****************

//Получаем курс usd-rub
var rub_usd = 0;
$.ajax({
  url: 'https://api.coingecko.com/api/v3/simple/price?ids=usd&vs_currencies=rub',
  method: "GET",
  success: function(data){
    rub_usd = data.usd.rub;
	console.log('*** RUB/USD ***');
	console.log(rub_usd);


//Получаем курсы крипты
var settings_1 = {
  "async": true,
  "crossDomain": true,
  "url": 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=' + strinOfCoins + '&order=id_asc&per_page=100&page=1&sparkline=false&price_change_percentage=24h',
  "method": "GET",
}

getCurses();

const intervalID = setInterval( getCurses, intervalseconds*1000)

function getCurses() {
$.ajax(settings_1).done(function (response) {
	  //console.log(response.length);

	for (let i = 0; i < response.length; i++)
	{
		//console.log('***' + response[i]['name'] + '***');
		//console.log(response[i]['id']);
		//console.log(response[i]['symbol']);
		//console.log(response[i]['current_price']);
		//console.log(response[i]['price_change_percentage_24h_in_currency']);
		//console.log('***');

		// Для каждого i-ого элемента в промо заполняем карточки
		var promoObject = $('body').find('.js_promocoin[data-coin=' + response[i]['id'] + ']');
		promoObject.find('.js_coinname').text(response[i]['name']);
		promoObject.find('.js_code').text(response[i]['symbol']);
		promoObject.find('.js_price').text(response[i]['current_price']);
		promoObject.find('.js_coinimg').html('<img src="img/coins/' +response[i]["symbol"] + '.svg">');
		var Procent_1 = (response[i]['price_change_percentage_24h_in_currency'].toFixed(2));
		var colors = promoObject.find('.js_delta');
		colors.removeClass('c_up');
		colors.removeClass('c_down');
		colors.text(Procent_1 + "%");
		  if (Procent_1 > 0) {
			colors.addClass('c_up');
			colors.text("+" + Procent_1 + "%");
		  } else {
		   colors.addClass('c_down');
		  }

		// Закончили с промо

	} // Цикл переборки массива

var $slickElement = $('.js-slider');

if ($(window).width() < 767) {

if (!$slickElement.hasClass('slick-initialized'))
{
$slickElement.slick({
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		dots: false,
		arrows: false,
//autoplaySpeed: 0,
autoplaySpeed: 3000,
 cssEase: "linear",
//	outerEdgeLimit: true,
	//variableWidth: true,

		responsive: [{
				breakpoint: 1200,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 1,
				}
			}, {
				breakpoint: 1080,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 1,
				}
			}, {
				breakpoint: 767,
				settings: {
					arrows: false,
					dots: false,
					infinite: true,
					//speed: 9000,
					speed: 300,
					slidesToShow: 1,
					slidesToScroll: 1,
					centerMode: true,
					outerEdgeLimit: true,
					variableWidth: true,

					pauseOnHover: false,
					autoplay: true,
				}
			}
		]
	});
}
}
/* выводим текущую дату и время на сайт в блок с id "current_date_time_block" */
    document.getElementById('current_date_time_block').innerHTML = date_time();
    
console.log(date_time());


});


	};



  },
});





   /* функция добавления ведущих нулей */
    /* (если число меньше десяти, перед числом добавляем ноль) */
    function zero_first_format(value)
    {
        if (value < 10)
        {
            value='0'+value;
        }
        return value;
    }


    /* функция получения текущей даты и времени */
    function date_time()
    {
        var current_datetime = new Date();
        var day = zero_first_format(current_datetime.getDate());
        var month = zero_first_format(current_datetime.getMonth()+1);
        var year = current_datetime.getFullYear();
        var hours = zero_first_format(current_datetime.getHours());
        var minutes = zero_first_format(current_datetime.getMinutes());
        var seconds = zero_first_format(current_datetime.getSeconds());

if ($('body').hasClass('en'))
{
 return "LAST UPDATED "+day+"."+month+" , "+hours+":"+minutes;
}
else
{
  return "Обновлено "+day+"."+month+" в "+hours+":"+minutes;
}
       
      
    }

    

  });