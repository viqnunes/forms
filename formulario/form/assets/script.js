function validaCampo(elemento) {
    elemento.addEventListener('focusout', function(event) {
        event.preventDefault();

        if(this.value == "") {
            document.querySelector('.mensagem').innerHTML = "Verifique o preenchimento dos campos em vermelho";
            this.classList.add('erro');
            this.parentNode.classList.add('erro');
            return false;
        } else {
            document.querySelector('.mensagem').innerHTML = "";
            this.classList.remove('erro');
            this.parentNode.classList.remove('erro');
        }
    });
}

function validaUF(elemento) {
    elemento.addEventListener('focusout', function(event) {
        event.preventDefault();

        let uf = /^[a-zA-Z]{2}$/;
        if(this.value.match(uf)) {
            document.querySelector('.mensagem').innerHTML = "";
            this.classList.remove('erro');
            this.parentNode.classList.remove('erro');
        } else {
            document.querySelector('.mensagem').innerHTML = "Verifique o preenchimento do campo em destaque.";
            this.classList.add('erro');
            this.parentNode.classList.add('erro');
            return false;
        }
    });
}

function validaCampoNumerico(elemento) {
    elemento.addEventListener('focusout', function(event) {
        event.preventDefault();

        let numero = this.value.match(/^[\d]5-[\d]3/) ? this.value.replace(/-/, "") : this.value;

        if(numero != this.value.match(/[0-9]*/) && numero >= 0 && numero <= 10) {
            document.querySelector('.mensagem').innerHTML = "";
            this.classList.remove('erro');
            this.parentNode.classList.remove('erro');
        } else {
            document.querySelector('.mensagem').innerHTML = "Verifique o preenchimento dos campos em destaque.";
            this.classList.add('erro');
            this.parentNode.classList.add('erro');
            return false;
        }
    });
}

let campoObrigatorio = document.querySelectorAll('input.obrigatorio');
for( let emFoco of campoObrigatorio) {
    validaCampo(emFoco);
}

let campoUF = document.querySelectorAll('input.uf');
for( let emFoco of campoUF) {
    validaUF(emFoco);
}

let campoNumerico = document.querySelectorAll('input.numero');
for(let emFoco of campoNumerico) {
    validaCampoNumerico(emFoco);
}
