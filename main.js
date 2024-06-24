$(document).ready(function() {
    $('#btn-open-menu').click(function() {
        $('#todo-registre').show();
    })

    $('#todo-btn-cancelar').click(function() {
        $('#todo-registre').hide();
    })

    $('form').on('submit', function(e) {
        e.preventDefault();
        const addNovaTarefa = $('#nova-tarefa').val();
        const addNovaHora = $('#hora').val();
        const addNovaDescricao = $('#descricao').val();

        const novoItem = $('<li></li>');
        $(`<div class="task"><h3>${addNovaTarefa}</h3></div>`).appendTo(novoItem);
        $(`<div class="time">${addNovaHora}</div>`).appendTo(novoItem);
        $(`<div class="description">${addNovaDescricao}</div>`).appendTo(novoItem);
        $(`<button class="finish-todo">
            <i class="fa-solid fa-check"></i>
        </button>`).appendTo(novoItem);
        $(`<button class="remove-todo">
            <i class="fa-solid fa-xmark"></i>
        </button>`).appendTo(novoItem);

        $(novoItem).appendTo('ul');

        $('#nova-tarefa').val('');
        $('#hora').val('');
        $('#descricao').val('');
        $('#nova-tarefa').focus();
    })

    $('ul').on('click', '.finish-todo', function() {
        $(this).closest('li').toggleClass('concluido');
    })

    $('ul').on('click', '.remove-todo', function(){
        $(this).closest('li').remove();
    })

})