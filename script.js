$(document).ready(function(){

    $('#userInput').change(function(){
        var input = $(this).val();
        $('ul').append('<li>' + input + '<i class="fas fa-check"></i><i class="fas fa-trash"></i> </li');
        $(this).val('');
    })

})