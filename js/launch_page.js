$(document).ready(function () {

    $('#launchButton').click(function (e) {
        e.preventDefault();
            $('#launchButton').addClass('ld ld-zoom-out')
        setTimeout(function(){
            $('#launchButton').addClass('d-none')
        }, 1050)
        setTimeout( function(){
            $('#launchButtonClicked').css('display', 'block')
            $('#launchButtonClicked').addClass('ld ld-float-btt-in')
        }, 1100)
        setTimeout(function(){
            $('#launchButtonClicked').addClass('d-flex')
            setTimeout(function(){
                // $("p").fadeIn(2000);
                $("p").css("display", 'block');
                $("p").addClass('ld ld-flip-v-in');
            },100)
        }, 1500)
    })
})

