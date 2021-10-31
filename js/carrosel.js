function Carrosel(config){
    this.container = document.querySelector(config.container);
    this.itens = document.querySelectorAll(config.itens);
    this.btnAnterior = document.querySelector(config.btn_anterior);
    this.btnProximo = document.querySelector(config.btn_proximo);

    var _this = this;
    var slideAtual = 0;

    _this.btnProximo.addEventListener('click', function(){
        console.log('clicado');
        avancarSlide();
    });

    function calcularDeslocamento(){
        console.log(Math.abs(1250/_this.container.innerWidth));
        return Math.abs(1250/_this.container.innerWidth);
    }

    function avancarSlide(){
        for(var i = 0; i < calcularDeslocamento(); i++){
            _this.itens.style.transform = 'translateX(-'+ 1250/calcularDeslocamento() +')';
        }

        slideAtual += 1;
    }

    function voltarSlide(){

    }
}