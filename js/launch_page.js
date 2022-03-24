$(document).ready(function () {

    let launchNameAndTitle = $('#launchNameAndTitle');
    let launchButtonArea = $('#launchButtonArea');
    let about = $('#aboutArea');

    //Appends my name to the section with id of launchName
    launchNameAndTitle.append(`
    <h1 id='myName' class="launchItems biggerH1 merriweather">James R. Woodward</h1>
    <h2 id='jobTitle' class="launchItems biggerH2 merriweather">Full Stack<br>Web Developer</h2>
    `)

    launchButtonArea.append(`
    <div id="buttonArea">
        <div id="launchButton" class="d-flex align-items-center justify-content-center">
        <p class="merriweather my-auto">Launch</p>
        </div>
        <div id="launchButtonClicked" class="justify-content-center row">
            <a href="#aboutArea" class="d-flex col-4 text-center justify-content-center text-decoration-none"><p class="merriweather navItemsLaunch align-self-center" id="aboutTopLink">About</p></a>
            <a class="d-flex col-4 text-center justify-content-center text-decoration-none"><p class="merriweather navItemsLaunch align-self-center" id="skillsTopLink">Skills</p></a>
            <a class="d-flex col-4 text-center justify-content-center text-decoration-none"><p class="merriweather navItemsLaunch align-self-center" id="projectsTopLink">Projects</p></a>
            <a class="d-flex col-6 text-center justify-content-center text-decoration-none"><p class="merriweather navItemsLaunch align-self-center" id="resumeTopLink">Resume</p></a>
            <a class="d-flex col-6 text-center justify-content-center text-decoration-none"><p class="merriweather navItemsLaunch align-self-center" id="contactTopLink">Contact</p></a>
        </div>
    </div>
    `)

    $('#launchButton').click(function (e) {
        e.preventDefault();
            $('#launchButton').addClass('ld ld-vortex-out')
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

