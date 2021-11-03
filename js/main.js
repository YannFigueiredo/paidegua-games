(function(){
    carrosel_consoles = new Carrosel({
        container: '.carrosel-consoles',
        tam_container: 1250,
        itens: '.carrosel-consoles img',
        btn_anterior: '.carrosel-consoles .btn-anterior',
        btn_proximo: '.carrosel-consoles .btn-proximo'
    })

    carrosel_categorias = new Carrosel({
        container: '.carrosel-categorias',
        tam_container: 230,
        itens: '.carrosel-categorias img',
        btn_anterior: '.carrosel-categorias .btn-anterior',
        btn_proximo: '.carrosel-categorias .btn-proximo'
    })
}());