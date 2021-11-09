function Carrosel_Scroll(config){
    this.container = document.querySelector(config.container);
    this.btnAnterior = document.querySelector(config.btn_anterior);
    this.btnProximo = document.querySelector(config.btn_proximo);

    var _this = this;
    var posicao_scroll = 0;

    controlarBtn();

    _this.container.addEventListener('scroll', function(){
        posicao_scroll = _this.container.scrollLeft;
    });

    _this.btnAnterior.addEventListener('click', function(){ 
        _this.container.scroll((posicao_scroll - _this.container.clientWidth), 0);

        controlarBtn();
    });

    _this.btnProximo.addEventListener('click', function(){
        _this.container.scroll(posicao_scroll + _this.container.clientWidth, 0);

        controlarBtn();
    });
    
    function controlarBtn(){
        if(_this.container.scrollLeft == 0){
            _this.btnAnterior.style.display = 'none';
        }else if((_this.container.scrollLeft + _this.container.clientWidth) >= _this.container.scrollWidth){
            _this.btnProximo.style.display = 'none';
        }
    
        if(_this.container.scrollLeft > 0){
            _this.btnAnterior.style.display = 'flex';
        }
            
        if((_this.container.scrollLeft + _this.container.clientWidth) < _this.container.scrollWidth){
            _this.btnProximo.style.display = 'flex';
        }
    }
}