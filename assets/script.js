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

function validaEmail(elemento) {
    elemento.addEventListener('focusout', function(event) {
        event.preventDefault();

        let email = /^[a-z0-9.]+@[a-z0-9.]+\.[a-z]+(\.[a-z]+)?/i;
        if(this.value.match(email)) {
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

function validaCampoNumerico(elemento) {
    elemento.addEventListener('focusout', function(event) {
        event.preventDefault();

        let numero = /(\b\(\d{2}\)\s?[9]?\s?\d{4}(\-|\s)?\d\d{4})|(\b\d{2}\s?[9]?\s?\d{4}(\-|\s)?\d{4})|(\b([9]|[9]\s)?\d{4}(\-|\s)?\d{4})|(\b\d{4}(\-|\s)?\d{4})/im;

        if(this.value.match(numero)) {
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

let campoEmail = document.querySelectorAll('input.email');
for( let emFoco of campoEmail) {
    validaEmail(emFoco);
}

let campoUF = document.querySelectorAll('input.uf');
for( let emFoco of campoUF) {
    validaUF(emFoco);
}

let campoNumerico = document.querySelectorAll('input.numero');
for(let emFoco of campoNumerico) {
    validaCampoNumerico(emFoco);
}
