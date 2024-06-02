$(document).ready(function () {
    $('#hideButton').click(function () {
        $('#esconderH1 , #paragrafoP').fadeOut();
        $('#esconderH1 , #paragrafoP').delay(1000)
        $('#esconderH1 , #paragrafoP').toggle(2000)

    });
});


$(function nomeDaFuncaoMasOnomePodeSerEmBranco() {
    var isOriginalColor = true
    $('#changeColorButton').click(function () {
        if (isOriginalColor) {
            $('#mudarCorH1').css('color', 'red').css('background-color', 'yellow')
        } else {
            $('#mudarCorH1').css('color', 'black').css('background-color', 'white')
        }
        isOriginalColor = !isOriginalColor
    })
})

$(function () {
    $('#changeColorButton').click(function () {
        $('#mensagem')
            .text("Cor alterada com sucesso")
            .css({ color: 'black', border: '1px solid red' })
            .fadeOut(5000)
            .addClass('green')

        $('#changeColorButton').removeClass('red')
    })
})

$(function () {
    $('#l1').click(function () {
        $('#i1').show()
        $('#i2').hide()
    }) 
    $('#l2').click(function () {
        $('#i1').hide()
        $('#i2').show()
    }) 
})