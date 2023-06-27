$("#addRow").click(function () {
    var html = '';
    html += '<div id="inputFormRow">';
    html += '<div class="input-group mb-3">';
    html += '<input type="text" name="title[]" class="form-control m-input" placeholder="Enter player name" autocomplete="off">';
    html += '<div class="input-group-append">';
    html += '<button id="removeRow" type="button" class="btn btn-danger">Remove</button>';
    html += '</div>';
    html += '</div>';

    $('#newRow').append(html);
});

$(document).on('click', '#removeRow', function () {
    $(this).closest('#inputFormRow').remove();
});


$(function() {
    playNow();
});

function playNow() {
    $('#play-truth-dare').click(function () {
        savePlayers();
        $('.truth-dare-users').addClass('d-none');
        $('.truth-dare').removeClass('d-none');
        $('.truth-dare .truth-dare-buttons').addClass('d-none');
        $('.truth-dare .truth-dare-question').addClass('d-none');
        setTimeout(function() {
            $('.ticking-time').addClass('d-none');
            $('.truth-dare .truth-dare-buttons').removeClass('d-none');
            $('.truth-dare .truth-dare-question').addClass('d-none');
            var player = getPlayerToGame();
            $('.player').html(player);
        }, 2000);
    });
    $('#truth').click(function () {
        $('.truth-dare .truth-dare-buttons').addClass('d-none');
        $('.ticking-time').removeClass('d-none');
        setTimeout(function() {
            $('.ticking-time').addClass('d-none');
            $('.truth-dare .truth-dare-question').removeClass('d-none');
            $('.truth-dare-type').html("Truth");
            var player = getCurrentPlayerToGame();
            $('.current_player').html(player);
            getQuestion('truth');
        }, 2000);
    });
    $('#dare').click(function () {
        $('.truth-dare .truth-dare-buttons').addClass('d-none');
        $('.ticking-time').removeClass('d-none');
        setTimeout(function() {
            $('.ticking-time').addClass('d-none');
            $('.truth-dare .truth-dare-question').removeClass('d-none');
            $('.truth-dare-type').html("Dare");
            var player = getCurrentPlayerToGame();
            $('.current_player').html(player);
            getQuestion('dare');
        }, 2000);
    });
    $('#play-truth-dare-next').click(function () {
        $('.truth-dare .truth-dare-question').addClass('d-none');
        $('.ticking-time').removeClass('d-none');
        setTimeout(function() {
            $('.ticking-time').addClass('d-none');
            $('.truth-dare .truth-dare-buttons').removeClass('d-none');
            var player = getPlayerToGame();
            $('.player').html(player);
        }, 2000);
    });
}

function savePlayers() {
    var players = [];
    players.push($('#inputFormRow input[type=text]').val());
    $('#newRow #inputFormRow').each(function () {
        var player = $(this).find('input[type=text]').val();
        players.push(player);
    });
    storeValue('players', players);
}

function getPlayerToGame() {
    var players = getStoredValue('players');
    var players_array = new Array();
    players_array = players.split(",");
    var current_player = players_array[Math.floor(Math.random() * players_array.length)];
    storeValue('current_player', current_player);
    return current_player;
}

function getCurrentPlayerToGame() {
    return getStoredValue('current_player');
}

function getQuestion(type) {
    var file = '';
    if (type == 'dare') {
        file = '/data/dare.json';
    }
    else if (type == 'truth') {
        file = '/data/truth.json';
    }
    readJsonFile(file, function(text) {
        var data = JSON.parse(text);
        var length = Object.keys(data).length;
        var key = Math.floor(Math.random() * length);
        $.each(data, function (i, v) {
            if (i == key) {
                $('.player-question').html(v);
            }
        });
    });
}

function storeValue(key, value) {
    if (localStorage) {
        localStorage.setItem(key, value);
    } else {
        $.cookies.set(key, value);
    }
}
function getStoredValue(key) {
    if (localStorage) {
        return localStorage.getItem(key);
    } else {
        return $.cookies.get(key);
    }
}

function readJsonFile(file, callback) {
    var rawFile = new XMLHttpRequest();
    rawFile.overrideMimeType("application/json");
    rawFile.open("GET", file, true);
    rawFile.onreadystatechange = function() {
        if (rawFile.readyState === 4 && rawFile.status == "200") {
            callback(rawFile.responseText);
        }
    }
    rawFile.send(null);
}