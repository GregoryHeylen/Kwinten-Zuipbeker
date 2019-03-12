$(document).ready(function() {
    init()
    
    $('#addTeam').on("click", function() {        
        var naam = $('#teamNaamNieuw').val();
        var array = {}
        if(localStorage.getItem('team') != null) {
            array =  JSON.parse(localStorage.getItem('team'))
        }
        if(array[naam] == undefined) {
            array[naam] = 0
            console.log(array);
            localStorage.setItem('team' , JSON.stringify(array));
        } else {
            console.log('error')
        }
    })

    $('#removeAllTeams').on("click", function() {
        console.log('verwijder alle teams');
        localStorage.clear();
    })

    $('#addScore').on("click", function() {
        console.log('test');

    })

    $('#substractScore').on("click", function() {
        console.log('test');

    })

    function init() {
        console.log('klaar voor gebruik')

    }
})