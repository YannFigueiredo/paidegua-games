function Carrosel(config){
    this.container = document.querySelector(config.container);
    this.tam_container = config.tam_container;
    this.itens = document.querySelectorAll(config.itens);
    this.btnAnterior = document.querySelector(config.btn_anterior);
    this.btnProximo = document.querySelector(config.btn_proximo);

    var _this = this;
    var slideAtual = 0;
    var posicaoAtual = 0;
    var deslocamento = _this.tam_container/calcularDeslocamento();

    _this.btnAnterior.addEventListener('click', function(){
        voltarSlide();

        atualizarSlideAtual();
    });

    _this.btnProximo.addEventListener('click', function(){
        avancarSlide();

        atualizarSlideAtual();
    });

    function calcularDeslocamento(){
        return Math.abs(_this.tam_container/_this.container.clientWidth);
    }

    function avancarSlide(){
        for(var i = 0; i < calcularDeslocamento(); i++){
            console.log('slide atual: ', slideAtual);
            console.log('slide posterior: ', slideAtual+1);
            posicaoAtual = Math.abs(posicaoAtual) >= checarDeslocamento() ? 0 : posicaoAtual - deslocamento;
            console.log('posicao atual: ', posicaoAtual);

            _this.itens[slideAtual].style.transform = 'translateX('+ posicaoAtual +'px)';
            _this.itens[slideAtual+1 >= _this.itens.length ? 0 : slideAtual+1].style.transform = 'translateX('+ posicaoAtual +'px)';
        }

        slideAtual += 1;
    }

    function voltarSlide(){
        for(var i = 0; i < calcularDeslocamento(); i++){
            console.log('slide atual: ', slideAtual);
            console.log('slide posterior: ', slideAtual-1);
            posicaoAtual = posicaoAtual == 0 ? -1*checarDeslocamento() : posicaoAtual + deslocamento;
            console.log('posicao atual: ', posicaoAtual);

            _this.itens[slideAtual].style.transform = 'translateX('+ posicaoAtual +'px)';
            _this.itens[slideAtual-1 < 0 ? _this.itens.length-1  : slideAtual-1].style.transform = 'translateX('+ posicaoAtual +'px)';
        }

        slideAtual -= 1;
    }

    function atualizarSlideAtual(){
        if(slideAtual >= _this.itens.length){
            slideAtual = 0;
        }else if(slideAtual < 0){
            slideAtual = _this.itens.length - 1;
        }
    }

    function checarDeslocamento(){
        return (_this.itens.length-1)*(calcularDeslocamento()*_this.tam_container);
    }
}