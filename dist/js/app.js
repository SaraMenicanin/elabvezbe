$(document).ready(function() {
    // init lazy loading
    let blazy = new Blazy({
        selector: '.lazyload',
    });

    // init validator plugin
    $('#form').validate();

    // init isotope
    let $grid = $('.products__product-list').isotope({
        // options
        itemSelector: '.products__product-wrapper',
    });

    // filter logic
    $('.products__filter').click(function() {
        $grid.isotope({
            filter: `${'.' + $(this).data('filter')}`,
        });
    });

    // menu logic
    // za svako dugme koje ima data-toggle atribut koji je jednak toggle se pokrene funkcija
    // vrednost tog atributa se prosledi toggleClass metodi u obliku template literal stringa (tome sluze `` i ${} sintaksta)
    // tom elementu se onda dodeli active klasa i css obavi sve ostalo
    $('button[data-toggle="toggle"]').click(function() {
        $(`${$(this).data('target')}`).toggleClass('active');
    });
});
