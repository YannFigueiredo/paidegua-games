(function(){
    carrosel_consoles = new Carrosel_Slides({
        container: '.carrosel-consoles',
        tam_container: 1250,
        itens: '.carrosel-consoles img',
        btn_anterior: '.carrosel-consoles .btn-anterior',
        btn_proximo: '.carrosel-consoles .btn-proximo'
    });

    carrosel_categorias = new Carrosel_Scroll({
        container: '.carrosel-categorias',
        btn_anterior: '.carrosel-categorias .btn-anterior',
        btn_proximo: '.carrosel-categorias .btn-proximo'
    });

    menu_principal = new Menu({
        menu: '.container-menu',
        menuInterno: '.container-menu .interno',
        btnMenu: '.btn-menu',
        btnMenuAberto: '.btn-menu-aberto',
        btnExpandirMenu: '.btn-expandir-menu',
        btnMenuInterno: '.btn-menu-interno'
    });
}());