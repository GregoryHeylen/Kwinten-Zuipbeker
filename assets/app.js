$(document).ready(function() {
    init()
    

    function toonTeams() {
        $('#teams').empty()
        if(localStorage.getItem('team') != null) {
            array = JSON.parse(localStorage.getItem('team'))
            for(var team in array) {
                var score = array[team]
                $('#teams').append('<div class="col l3 offset-l"> \
                <div class="card-panel white"> \
                    <span> \
                        <p>' + team + '</p> \
                        <div class="valign-wrapper"> \
                            <div class="col l12 valign-wrapper"> \
                                <button value="' + team + '" class="btn-flat border center col l3 substractScore">-</button> \
                                <input id="' + team + '" class="col l4 browser-default border offset-l1" type="text"> \
                                <button value="' + team + '" class="btn-flat border center col l3 offset-l1 addScore">+</button> \
                            </div> \
                        </div> \
                        <p>Score: ' + score + '</p> \
                    </span> \
                </div> \
                </div>')
            }
        }
    }
    
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
        location.reload()
    })

    $('#removeAllTeams').on("click", function() {
        localStorage.clear();
        location.reload()
    })

    $('.addScore').on("click", function() {
        var team = $(this).val();

        console.log(team)
        var toeTeVoegenScore = parseInt($('#' + team).val())
        console.log(toeTeVoegenScore)
        if(toeTeVoegenScore === '' || Number.isInteger(toeTeVoegenScore) == false){
        } else {
            array = JSON.parse(localStorage.getItem('team'))
            huidigeScore = array[team]
            array[team] = parseInt(huidigeScore) + parseInt(toeTeVoegenScore)
            localStorage.setItem('team' , JSON.stringify(array));
        }
        location.reload()
    })

    $('.substractScore').on("click", function() {
        var team = $(this).val();
        var toeTeVoegenScore = parseInt($('#' + team).val())
        console.log(toeTeVoegenScore)
        if(toeTeVoegenScore === '' || Number.isInteger(toeTeVoegenScore) == false){
        } else {
            array = JSON.parse(localStorage.getItem('team'))
            huidigeScore = array[team]
            array[team] = parseInt(huidigeScore) - parseInt(toeTeVoegenScore)
            localStorage.setItem('team' , JSON.stringify(array));
        }
        location.reload()
    })

    function init() {
        console.log('klaar voor gebruik')
        toonTeams()
    }
})