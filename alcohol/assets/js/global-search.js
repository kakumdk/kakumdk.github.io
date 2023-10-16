$(function() {
    globalSearch();
});

function globalSearch() {
    $('input[type=text]#search-alcohol').focus();
    $("#search-alcohol").on("keyup", function(event) {
        $('.search-alcohol .alcohol').removeClass('d-none');
        $('.search-alcohol').children('.alcohol').each(function () {
            var title = $(this).children("._alcohol").find('h4').children('a').text().toLowerCase();
            title += " " + $(this).children("._alcohol").find('p').text().toLowerCase();
            var search = event.currentTarget.value.toLowerCase();
            var searchFor = search.split(' ');
            for (var i = 0, ln = searchFor.length; i < ln; i++) {
                if (title.indexOf(searchFor[i]) !== -1) {
                    $(this).removeClass('d-none');
                }
                else {
                    $(this).addClass('d-none');
                }
            }
        });
    });
}
