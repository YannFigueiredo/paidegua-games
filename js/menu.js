function Menu(config){
    this.menu = document.querySelector(config.menu);
    this.menuInterno = document.querySelectorAll(config.menuInterno);
    this.btnMenu = document.querySelector(config.btnMenu);
    this.btnMenuAberto = document.querySelector(config.btnMenuAberto);
    this.btnExpandirMenu = document.querySelectorAll(config.btnExpandirMenu);
    this.btnMenuInterno = document.querySelectorAll(config.btnMenuInterno);

    _this = this;

    console.log(_this.btnMenuInterno);

    _this.btnMenu.addEventListener('click', abrirMenu);

    _this.btnMenuAberto.addEventListener('click', fecharMenu);
    
    for(let i = 0; i < _this.btnExpandirMenu.length; i++){
        _this.btnExpandirMenu[i].addEventListener('click', function(){
            abrirMenuInterno(_this.menuInterno[i].id);
        })
    }

    for(let i = 0; i < _this.btnMenuInterno.length; i++){
        _this.btnMenuInterno[i].addEventListener('click', function(){
            for(let i = 0; i < _this.menuInterno.length; i++){
                fecharMenuInterno(_this.menuInterno[i].id);
            }
        })
    }

    function abrirMenu(){
        _this.menu.style.transform = 'translate(0px)';
    }

    function fecharMenu(){
        _this.menu.style.transform = 'translate(-265px)';
    }

    function abrirMenuInterno(_menu){
        console.log(_menu);
        document.getElementById(_menu).style.transform = 'translate(0px)';
    }

    function fecharMenuInterno(_menu){
        document.getElementById(_menu).style.transform = 'translate(-265px)';
    }
}