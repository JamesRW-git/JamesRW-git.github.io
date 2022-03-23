$(document).ready(function() {

    let launchNameAndTitle = $('#launchNameAndTitle');

    //Appends my name to the section with id of launchName
    launchNameAndTitle.append(`
    <h1 id='myName' class="launchItems gradient-text">James R. Woodward</h1>
    `)

    //Appends title to section with id of launchName
    launchNameAndTitle.append(`
    <h2 id='jobTitle' class="launchItems gradient-text">Full Stack<br>Web Developer</h2>
    `)
})