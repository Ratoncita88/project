﻿$(function(){
    
	
    if($('.table').length){
		writeTable();
		$(document).on('click', '.quantity button', function(){
			let delta = 1;
			if (this.innerHTML == '-') {
				delta = -1;
			}
			let id = +$(this).parents('tr').find('.id').prop('id').slice(6);
			for (item of tovardata){
				if (item.id == id) {
					item.qty += delta;
					if (item.qty <= 0) removeTovar(id);
					break;
				}
			}
			writeTable();
		})
		$(document).on('click', '.delete button', function(){
			let id = +$(this).parents('tr').find('.id').prop('id').slice(6);
			if (removeTovar(id)) writeTable();

		})
		$('#date').focus(makeCalendar);
		$('.form button').click(function(){
			makeOrder();
		})
	}
  
    
    if ($('.gallery').length) {
        galstep = $('.smallimage').width(); // померили ширину блока с мелкой картинкой
        galgap = parseInt($('.gallery_rail').css('gap')); // померили промежуток между картинками
        /* подключаем кнопки */
        $('.g_left').click(function(){
            galSlide('left'); // если двигать блок некуда, кнопка не видна - и нажать на нее не получится. если по дизайну неактивная кнопка должна быть видна, тут лучше сделать проверку класса.
        });
        $('.g_right').click(function(){
            galSlide('right');
        });
        $('.smallimage img').click(function(){
            $('.bigimage img').prop('src', $(this).prop('src').split('min').join('big'));
        });
        $('.bigimage img').click(function(){
            lightbox(this);
        });
    }
    
    
    
    if ($('.retaimer').length) {
        retimer();
        setInterval(retimer, 500);
    }
    
    if ($('.slider_block').length) {
		setInterval(function(){
            sliderRun('toleft');
        }, 4000);
        $('.slider .to_left').click(function(){
            sliderRun('toleft');
        });
        $('.slider .to_right').click(function(){
            sliderRun('toright');
        });
    }
})













