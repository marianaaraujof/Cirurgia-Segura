$( document ).ready(function() {
   

    $(function () {
        $('[data-toggle="popover"]').popover()
      })
});


$("#fechar").click(function(e){
  e.preventDefault(); // evita que o formulário seja submetido
  $("#higienizar").toggle();
});