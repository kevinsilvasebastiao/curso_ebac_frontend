$(document).ready(function() {
    $('form').submit(function(e) {
    e.preventDefault();
    const tarefa = $('#nome-tarefa').val();
    const novoItem = $('<li></li>');

    $(novoItem).text(tarefa);
    $(novoItem).appendTo('ul');

    $('#nome-tarefa').val('');
    });

    $(document).on('click', 'li', function() {
    $(this).toggleClass('completed');
    });
});
