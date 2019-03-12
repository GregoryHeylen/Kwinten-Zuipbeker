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
                                <a id="addScore" value="' + team + '" class="btn-flat border center col l3">-</a> \
                                <input id="' + team + '" class="col l4 browser-default border offset-l1" type="number"> \
                                <a id="substractScore"value="' + team + '" class="btn-flat border center col l3 offset-l1 1">+</a> \
                            </div> \
                        </div> \
                        <p>Score: ' + score + '</p> \
                    </span> \
                </div> \
                </div>')
            }
        }
    }
})


{/*  */}