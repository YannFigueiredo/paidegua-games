function Menu(config){
    this.menu = document.querySelector(config.menu);
    this.btnMenu = document.querySelector(config.btnMenu);
    this.btnMenuAberto = document.querySelector(config.btnMenuAberto);

    _this = this;

    _this.btnMenu.addEventListener('click', abrirFecharMenu);

    function abrirFecharMenu(){
        if(_this.menu.style.transform != 'translate(0px)'){
            abrirMenu();
        }else{
            fecharMenu();
        }
    }

    function abrirMenu(){
        _this.menu.style.transform = 'translate(0px)';
        //_this.btnMenuAberto.style;
        //_this.btnMenu.querySelector('i').classList.remove('fa-bars');
        //_this.btnMenu.querySelector('i').classList.add('fa-times');
    }

    function fecharMenu(){
        _this.menu.style.transform = 'translate(-265px)';
        _this.btnMenu.style.transform = 'translate(0px)';
        _this.btnMenu.querySelector('i').classList.remove('fa-times');
        _this.btnMenu.querySelector('i').classList.add('fa-bars');
    }

}