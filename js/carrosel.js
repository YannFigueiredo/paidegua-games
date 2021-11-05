function Carrosel(config){
    this.container = document.querySelector(config.container);
    this.tam_container = config.tam_container;
    this.itens = document.querySelectorAll(config.itens);
    this.btnAnterior = document.querySelector(config.btn_anterior);
    this.btnProximo = document.querySelector(config.btn_proximo);

    var _this = this;
    var slideAtual = 0;
    var qtdeparcelas = window.innerWidth > 765 ? 1 : 2;
    var parcelaAtual = 0;
    var posicaoAtual = 0;
    var deslocamento = _this.tam_container/qtdeparcelas;

    console.log('deslocamento a cada iteração: ', deslocamento);
    console.log('divisões de cada imagem: ', calcularParcelasDeslocamento());
    console.log('deslocamento total: ', checarDeslocamento());
    console.log('tamanho container: ', _this.container.clientWidth);

    monitorarJanela();

    if(_this.tam_container < 1250){
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
    }else{
        _this.btnAnterior.addEventListener('click', function(){
            voltarSlide();
    
            if(parcelaAtual >= qtdeparcelas){
                slideAtual -= 1;
                parcelaAtual = 0;
            }
    
            atualizarSlideAtual();
        });
    
        _this.btnProximo.addEventListener('click', function(){
            avancarSlide();
    
            if(parcelaAtual >= qtdeparcelas){
                slideAtual += 1;
                parcelaAtual = 0;
            }
    
            atualizarSlideAtual();
        });
    }

    function calcularParcelasDeslocamento(){
        return (_this.tam_container/_this.container.clientWidth);
    }

    function avancarSlide(){
        console.log('slide atual: ', slideAtual);
        
        if(qtdeparcelas == 1 && Math.abs(posicaoAtual) >= checarDeslocamento()){
            posicaoAtual = 0;
        } else {
            posicaoAtual = Math.abs(posicaoAtual) > checarDeslocamento() ? 0 : posicaoAtual - deslocamento;
        }

        console.log('posicao atual: ', posicaoAtual);

        _this.itens[slideAtual].style.transform = 'translateX('+ posicaoAtual +'px)';

        for(var i = slideAtual+1 >= _this.itens.length ? 0 : slideAtual+1; i < _this.itens.length; i++){
            _this.itens[i].style.transform = 'translateX('+ posicaoAtual +'px)';
            console.log('slide ' + i + ' translate ' + posicaoAtual);
        }

        parcelaAtual += 1;
    }

    function voltarSlide(){
        posicaoAtual = posicaoAtual == 0 ? -1*checarDeslocamento() : posicaoAtual + deslocamento;

        _this.itens[slideAtual].style.transform = 'translateX('+ posicaoAtual +'px)';

        for(var i = slideAtual-1 < 0 ? _this.itens.length-1 : slideAtual-1; i >= 0; i--){
            _this.itens[i].style.transform = 'translateX('+ posicaoAtual +'px)';
        }

        parcelaAtual += 1;
    }

    function atualizarSlideAtual(){
        if(slideAtual >= _this.itens.length){
            slideAtual = 0;
        }else if(slideAtual < 0){
            slideAtual = _this.itens.length - 1;
        }
    }

    function checarDeslocamento(){
        return (_this.itens.length-1)*(qtdeparcelas*deslocamento);
    }

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

    function monitorarJanela(){
        window.addEventListener('resize', function(){
            qtdeparcelas = window.innerWidth > 765 ? 1 : 2;
            parcelaAtual = 0;
            deslocamento = _this.tam_container/qtdeparcelas;
        });
    }
}