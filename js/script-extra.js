/******************************************************************************************************************/
/************************************** World Time ****************************************************************/
/******************************************************************************************************************/
$(function() {

    setInterval(() => {
        getClocktoRender('Bengaluru', (new Date().toISOString()), 'Asia/Kolkata');
        getClocktoRender('Vancouver', (new Date().toISOString()), 'America/Vancouver');
        getClocktoRender('Dublin', (new Date().toISOString()), 'Europe/Dublin');
        getClocktoRender('Fiji', (new Date().toISOString()), 'Pacific/Fiji');
    }, 1000);
    getPlacedetailstoRender('Bengaluru', (new Date().toISOString()), 'Asia/Kolkata');
    getPlacedetailstoRender('Vancouver', (new Date().toISOString()), 'America/Vancouver');
    getPlacedetailstoRender('Dublin', (new Date().toISOString()), 'Europe/Dublin');
    getPlacedetailstoRender('Fiji', (new Date().toISOString()), 'Pacific/Fiji');

    const places = [];
    d3.json("/js/countries+states+cities.json").then(function(data) {
        data.forEach(function(country, index0) {
            var states = country.states;
            states.forEach(function(state, index1) {
                var cities = state.cities;
                cities.forEach(function(city, index2) {
                    var place = city.name + ' - ' + state.name + ' - ' + country.name;
                    places.push(place);
                });
            });
        });
        autocomplete(document.getElementById("selectPlace"), places);
    });

    $('.searchPlace .clear').click(function (event) {
        location.reload(true);
    })

});
Number.prototype.padLeft = function(base,chr){
    var  len = (String(base || 10).length - String(this).length)+1;
    return len > 0? new Array(len).join(chr || '0')+this : this;
}
function convertTZ(date, tzString) {
    var d = new Date((typeof date === "string" ? new Date(date) : date).toLocaleString("en-US", {timeZone: tzString})),
        dformat = [d.getDate().padLeft(),
                (d.getMonth()+1).padLeft(),
                d.getFullYear()].join('-') +' ' +
            [d.getHours().padLeft(),
                d.getMinutes().padLeft(),
                d.getSeconds().padLeft()].join(':');
    return dformat;
}
function getClocktoRender(place, date, tzString) {
    var d = new Date((typeof date === "string" ? new Date(date) : date).toLocaleString("en-US", {timeZone: tzString}));
    hr = d.getHours();
    min = d.getMinutes();
    sec = d.getSeconds();
    hr_rotation = 30 * hr + min / 2; //converting current time
    min_rotation = 6 * min;
    sec_rotation = 6 * sec;
    if (place == 'Bengaluru') {
        hourBengaluru.style.transform = `rotate(${hr_rotation}deg)`;
        minuteBengaluru.style.transform = `rotate(${min_rotation}deg)`;
        secondBengaluru.style.transform = `rotate(${sec_rotation}deg)`;
    }
    if (place == 'Vancouver') {
        hourVancouver.style.transform = `rotate(${hr_rotation}deg)`;
        minuteVancouver.style.transform = `rotate(${min_rotation}deg)`;
        secondVancouver.style.transform = `rotate(${sec_rotation}deg)`;
    }
    if (place == 'Dublin') {
        hourDublin.style.transform = `rotate(${hr_rotation}deg)`;
        minuteDublin.style.transform = `rotate(${min_rotation}deg)`;
        secondDublin.style.transform = `rotate(${sec_rotation}deg)`;
    }
    if (place == 'Fiji') {
        hourFiji.style.transform = `rotate(${hr_rotation}deg)`;
        minuteFiji.style.transform = `rotate(${min_rotation}deg)`;
        secondFiji.style.transform = `rotate(${sec_rotation}deg)`;
    }
}
function getPlacedetailstoRender(place, date, tzString) {
    var monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    var d = new Date((typeof date === "string" ? new Date(date) : date).toLocaleString("en-US", {timeZone: tzString}));
    var classNameDate = '.place-details.'+place+' .date';
    var classNameTime = '.place-details.'+place+' .time';
    var classNameTimezone = '.place-details.'+place+' .timezone';
    $(classNameDate).html(getOrdinalNum(d.getDate().padLeft())+' '+monthNames[d.getMonth()]+' '+d.getFullYear());
    $(classNameTime).html([d.getHours().padLeft(),
            d.getMinutes().padLeft(),
            d.getSeconds().padLeft()].join(':'));
    var time = $(classNameTime).html().split(":");
    setInterval(() => {
        time[2] = numberFormat(Number(time[2]) + Number(1));
        if (time[2] == 60) {
            time[1] = numberFormat(Number(time[1]) + Number(1));
            time[2] = numberFormat(0);
        }
        if (time[1] == 60) {
            time[0] = numberFormat(Number(time[0]) + Number(1));
            time[1] = numberFormat(0);
            time[2] = numberFormat(0);
        }
        $(classNameTime).html(time[0]+':'+time[1]+':'+time[2]);
    }, 1000);
    $(classNameTimezone).html(tzString);
}
function numberFormat(n) {
    return n > 9 ? "" + n: "0" + n;
}
function getOrdinalNum(n) {
    return n + (n > 0 ? [
        '<sup>th</sup>',
        '<sup>st</sup>',
        '<sup>nd</sup>',
        '<sup>rd</sup>'
    ][(n > 3 && n < 21) || n % 10 > 3 ? 0 : n % 10] : '');
}

function autocomplete(inp, arr) {
    /*the autocomplete function takes two arguments,
    the text field element and an array of possible autocompleted values:*/
    var currentFocus;
    /*execute a function when someone writes in the text field:*/
    inp.addEventListener("input", function(e) {
        var a, b, i, val = this.value;
        /*close any already open lists of autocompleted values*/
        closeAllLists();
        if (!val) { return false;}
        currentFocus = -1;
        /*create a DIV element that will contain the items (values):*/
        a = document.createElement("DIV");
        a.setAttribute("id", this.id + "autocomplete-list");
        a.setAttribute("class", "autocomplete-items");
        /*append the DIV element as a child of the autocomplete container:*/
        this.parentNode.appendChild(a);
        /*for each item in the array...*/
        for (i = 0; i < arr.length; i++) {
            /*check if the item starts with the same letters as the text field value:*/
            if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
                /*create a DIV element for each matching element:*/
                b = document.createElement("DIV");
                /*make the matching letters bold:*/
                b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
                b.innerHTML += arr[i].substr(val.length);
                /*insert a input field that will hold the current array item's value:*/
                b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
                /*execute a function when someone clicks on the item value (DIV element):*/
                b.addEventListener("click", function(e) {
                    /*insert the value for the autocomplete text field:*/
                    inp.value = this.getElementsByTagName("input")[0].value;

                    // Login after autocomplete.
                    console.log(inp.value);
                    getLatandLong(inp.value);

                    /*close the list of autocompleted values,
                    (or any other open lists of autocompleted values:*/
                    closeAllLists();
                });
                a.appendChild(b);
            }
        }
    });
    /*execute a function presses a key on the keyboard:*/
    inp.addEventListener("keydown", function(e) {
        var x = document.getElementById(this.id + "autocomplete-list");
        if (x) x = x.getElementsByTagName("div");
        if (e.keyCode == 40) {
            /*If the arrow DOWN key is pressed,
            increase the currentFocus variable:*/
            currentFocus++;
            /*and and make the current item more visible:*/
            addActive(x);
        } else if (e.keyCode == 38) { //up
            /*If the arrow UP key is pressed,
            decrease the currentFocus variable:*/
            currentFocus--;
            /*and and make the current item more visible:*/
            addActive(x);
        } else if (e.keyCode == 13) {
            /*If the ENTER key is pressed, prevent the form from being submitted,*/
            e.preventDefault();
            if (currentFocus > -1) {
                /*and simulate a click on the "active" item:*/
                if (x) x[currentFocus].click();
            }
        }
    });
    function addActive(x) {
        /*a function to classify an item as "active":*/
        if (!x) return false;
        /*start by removing the "active" class on all items:*/
        removeActive(x);
        if (currentFocus >= x.length) currentFocus = 0;
        if (currentFocus < 0) currentFocus = (x.length - 1);
        /*add class "autocomplete-active":*/
        x[currentFocus].classList.add("autocomplete-active");
    }
    function removeActive(x) {
        /*a function to remove the "active" class from all autocomplete items:*/
        for (var i = 0; i < x.length; i++) {
            x[i].classList.remove("autocomplete-active");
        }
    }
    function closeAllLists(elmnt) {
        /*close all autocomplete lists in the document,
        except the one passed as an argument:*/
        var x = document.getElementsByClassName("autocomplete-items");
        for (var i = 0; i < x.length; i++) {
            if (elmnt != x[i] && elmnt != inp) {
                x[i].parentNode.removeChild(x[i]);
            }
        }
    }
    /*execute a function when someone clicks in the document:*/
    document.addEventListener("click", function (e) {
        closeAllLists(e.target);
    });
}
function getLatandLong(inputPlace) {
    const places = [];
    d3.json("/js/countries+states+cities.json").then(function(data) {
        data.forEach(function(country, index0) {
            var states = country.states;
            states.forEach(function(state, index1) {
                var cities = state.cities;
                cities.forEach(function(city, index2) {
                    var place = city.name + ' - ' + state.name + ' - ' + country.name;
                    if (inputPlace == place) {
                        var timezone = tzlookup(city.latitude, city.longitude);
                        var timeRender = convertTZ((new Date().toISOString()), timezone);
                        $('.dynamic-clock').addClass('show');
                        $('.searchPlace .clear').addClass('show');
                        $('.searchPlace #selectPlace').addClass('disabled');
                        $('.searchPlace #selectPlace').attr('disabled', 'disabled');
                        setInterval(() => {
                            getClocktoRenderDynamic((new Date().toISOString()), timezone);
                        }, 1000);
                        getPlacedetailstoRenderDynamic((new Date().toISOString()), timezone, country, state, city);
                        $('.world-clock hr').addClass('show');
                        console.log(country);
                        console.log(state);
                        console.log(city);
                    }
                });
            });
        });
    });
}
function getClocktoRenderDynamic(date, tzString) {
    var d = new Date((typeof date === "string" ? new Date(date) : date).toLocaleString("en-US", {timeZone: tzString}));
    var hr = d.getHours();
    var min = d.getMinutes();
    var sec = d.getSeconds();
    var hr_rotation = (30 * hr) + (min / 2); //converting current time
    var min_rotation = 6 * min;
    var sec_rotation = 6 * sec;
    hourdynamic.style.transform = `rotate(${hr_rotation}deg)`;
    minutedynamic.style.transform = `rotate(${min_rotation}deg)`;
    seconddynamic.style.transform = `rotate(${sec_rotation}deg)`;
}
function getPlacedetailstoRenderDynamic(date, tzString, country, state, city) {
    var classNameFlag = 'flag-icon-'+(country.iso2).toLowerCase();
    $('.dynamic-clock.place-details.dynamic .flag-icon').addClass(classNameFlag);
    $('.dynamic-clock.place-details.dynamic .city-name').html(city.name+', '+ state.name +', '+country.name);
    // date & time
    var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var d = new Date((typeof date === "string" ? new Date(date) : date).toLocaleString("en-US", {timeZone: tzString}));
    var classNameDate = '.place-details.dynamic .date';
    var classNameTime = '.place-details.dynamic .time';
    var classNameTimezone = '.place-details.dynamic .timezone';
    $(classNameDate).html(getOrdinalNum(d.getDate().padLeft())+' '+monthNames[d.getMonth()]+' '+d.getFullYear());
    $(classNameTime).html([d.getHours().padLeft(),
        d.getMinutes().padLeft(),
        d.getSeconds().padLeft()].join(':'));
    var time = $(classNameTime).html().split(":");
    setInterval(() => {
        time[2] = numberFormat(Number(time[2]) + Number(1));
        if (time[2] == 60) {
            time[1] = numberFormat(Number(time[1]) + Number(1));
            time[2] = numberFormat(0);
        }
        if (time[1] == 60) {
            time[0] = numberFormat(Number(time[0]) + Number(1));
            time[1] = numberFormat(0);
            time[2] = numberFormat(0);
        }
        $(classNameTime).html(time[0]+':'+time[1]+':'+time[2]);
    }, 1000);
    $(classNameTimezone).html(tzString);
}