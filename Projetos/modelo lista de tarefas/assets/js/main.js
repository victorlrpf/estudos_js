function listaTarefas() {
    const inputTarefa = document.querySelector('.input-nova-tarefa');
    const btnTarefa = document.querySelector('.btn-add-tarefa');
    const tarefas = document.querySelector('.tarefas');

    function criaElementoLi() {
        const li = document.createElement('li');
        return li;
    }

    inputTarefa.addEventListener('keypress', function (e) {
        if (e.keyCode === 13) {
            if (!inputTarefa.value) return
            criaTarefa(inputTarefa.value)
        }
    })

    function limpaInput() {
        inputTarefa.value = '';
        inputTarefa.focus();
    }

    function criaTarefa(textoInput) {
        const li = criaElementoLi();
        li.innerHTML = textoInput;
        tarefas.appendChild(li);
        limpaInput();
        botaoApagar(li);
        salvarTarefa();
        // tarefas.innerHTML += `<li>${textoInput}</li>` alternativa, que pensei
    }

    function botaoApagar(li) {
        li.innerText += ' ';
        const botaoApagar = document.createElement('button');
        botaoApagar.innerText = 'Apagar';
        botaoApagar.setAttribute('class', 'apagar');
        li.appendChild(botaoApagar);
    }

    document.addEventListener('click', function(e){
        const elementosTarefas = e.target;

        if(elementosTarefas.classList.contains('apagar')) {
            elementosTarefas.parentElement.remove()
            salvarTarefa();
        }

    })

    btnTarefa.addEventListener('click', function() {
        if (!inputTarefa.value) return
        criaTarefa(inputTarefa.value)
    })

    function salvarTarefa() {
        const tarefasLi = tarefas.querySelectorAll('li');
        const listaTarefasLi = [];

        for(let tarefa of tarefasLi) {
            let tarefaTexto = tarefa.innerText;
            tarefaTexto = tarefaTexto.replace('Apagar', '').trim();
            listaTarefasLi.push(tarefaTexto)
        }

        const tarefasJSON = JSON.stringify(listaTarefasLi); /// Converte um elemtno js para uma string
        localStorage.setItem('tarefas', tarefasJSON);
        console.log(listaTarefasLi)
    }

    function adicionaTarefasSalvas() {
        const tarefas = localStorage.getItem('tarefas');
        const listaDeTarefas = JSON.parse(tarefas); // converte para uma objeto js

        for(let tarefa of listaDeTarefas) {
            criaTarefa(tarefa)
        }
    }
    adicionaTarefasSalvas()

}
listaTarefas()