/**************************************
    File Name: custom.js
    Template Name: Tech Blog
    Created By: HTML.Design
    http://themeforest.net/user/wpdestek
**************************************/

(function($) {
    "use strict";
    $(document).ready(function() {
        $('#nav-expander').on('click', function(e) {
            e.preventDefault();
            $('body').toggleClass('nav-expanded');
        });
        $('#nav-close').on('click', function(e) {
            e.preventDefault();
            $('body').removeClass('nav-expanded');
        });
    });

    $(function() {
        $('[data-toggle="tooltip"]').tooltip()
    })

    $('.carousel').carousel({
        interval: 4000
    })

    $(window).load(function() {
        $("#preloader").on(500).fadeOut();
        $(".preloader").on(600).fadeOut("slow");
    });

    jQuery(window).scroll(function(){
        if (jQuery(this).scrollTop() > 1) {
            jQuery('.dmtop').css({bottom:"25px"});
        } else {
            jQuery('.dmtop').css({bottom:"-100px"});
        }
    });
    jQuery('.dmtop').click(function(){
        jQuery('html, body').animate({scrollTop: '0px'}, 800);
        return false;
    });

})(jQuery);


function openCategory(evt, catName) {
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the link that opened the tab
    document.getElementById(catName).style.display = "block";
    evt.currentTarget.className += " active";
}

/**************************************
 File Name: custom.js
 Custom
 **************************************/
$(function() {

    $("#head").load("content/head.html");
    $("#header").load("content/header.html");
    $("#footer").load("content/footer.html");

    readFile("blogs-content-merged/blogs.json", function(text){
        var data = JSON.parse(text);
        var output = writeBlogsHomepage(data);
        $('.blog-list-homepage').html(output);
    });
    readFile("../blogs-content-merged/blogs.json", function(text){
        var data = JSON.parse(text);
        var output = writeBlogs(data);
        $('.blog-list-homepage-blogs').html(output);
    });
    readFile("../blogs-content-merged/blogs.json", function(text){
        var data = JSON.parse(text);
        var output = writeBlogs(data);
        $('.blog-list-blogs').html(output);
    });
    readFile("../../blogs-content-merged/blogs.json", function(text){
        var data = JSON.parse(text);
        var output = writeBlogTypes(data);
        $('.blog-list-type').html(output);
    });
    readFile("../../../blogs-content-merged/blogs.json", function(text){
        var data = JSON.parse(text);
        var output = writeBlogTypeCategories(data);
        $('.blog-list-category').html(output);
    });

});
function readFile(file, callback) {
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
function writeBlogsHomepage(data) {
    var output = '';
    // for (var i = data.length - 1; i >= 0; i--) {
    for (var i = 0; i < data.length; i++) {
        var type = data[i]['type'].split(',');
        var category = data[i]['category'].split(',');
        var currentType = '';
        var currentTypeLabel = '';
        for (var j = 0; j < type.length; j++) {
            currentType = type[j].trim().replace(" ", "-");
            currentTypeLabel = type[j].trim();
        }
        var path = '/blogs/' + currentType + '/'
            + category[0].trim().replace(" ", "-") + '/'
            + data[i]['file'].replace(".json", ".html");
        if (i === 0) {
            output +=
                '<div class="first-slot">' +
                    '<div class="masonry-box post-media">' +
                        '<img src="upload/tech_01.jpg" alt="" class="img-fluid">' +
                        '<div class="shadoweffect">' +
                            '<div class="shadow-desc">' +
                                '<div class="blog-meta">' +
                                    '<span class="bg-orange"><a href="/blogs/' + currentType + '" title="">' + currentTypeLabel + '</a></span>' +
                                    '<h4><a href="' + path + '" title="">' + data[i]['title'] + '</a></h4>' +
                                    '<small>' + data[i]['created'] + '</small>' +
                                    '<small>by ' + data[i]['author'] + '</small>' +
                                '</div><!-- end meta -->' +
                            '</div><!-- end shadow-desc -->' +
                        '</div><!-- end shadow -->' +
                    '</div><!-- end post-media -->' +
                '</div><!-- end first-side -->';
        }
        else if (i === 1) {
            output +=
                '<div class="second-slot">' +
                    '<div class="masonry-box post-media">' +
                        '<img src="upload/tech_02.jpg" alt="" class="img-fluid">' +
                        '<div class="shadoweffect">' +
                            '<div class="shadow-desc">' +
                                '<div class="blog-meta">' +
                                    '<span class="bg-orange"><a href="/blogs/' + currentType + '" title="">' + currentTypeLabel + '</a></span>' +
                                    '<h4><a href="' + path + '" title="">' + data[i]['title'] + '</a></h4>' +
                                    '<small>' + data[i]['created'] + '</small>' +
                                    '<small>by ' + data[i]['author'] + '</small>' +
                                '</div><!-- end meta -->' +
                            '</div><!-- end shadow-desc -->' +
                        '</div><!-- end shadow -->' +
                    '</div><!-- end post-media -->' +
                '</div><!-- end second-side -->';
        }
        else if (i === 2) {
            output +=
                '<div class="last-slot">' +
                    '<div class="masonry-box post-media">' +
                        '<img src="upload/tech_03.jpg" alt="" class="img-fluid">' +
                        '<div class="shadoweffect">' +
                            '<div class="shadow-desc">' +
                                '<div class="blog-meta">' +
                                    '<span class="bg-orange"><a href="/blogs/' + currentType + '" title="">' + currentTypeLabel + '</a></span>' +
                                    '<h4><a href="' + path + '" title="">' + data[i]['title'] + '</a></h4>' +
                                    '<small>' + data[i]['created'] + '</small>' +
                                    '<small>by ' + data[i]['author'] + '</small>' +
                                '</div><!-- end meta -->' +
                            '</div><!-- end shadow-desc -->' +
                        '</div><!-- end shadow -->' +
                    '</div><!-- end post-media -->' +
                '</div><!-- end second-side -->';
        }
        else {
            break;
        }
        continue;
    }
    return output;
}
function writeBlogs(data) {
    var output = '';
    $.each(data, function(key, val){
        var type = val.type.split(',');
        var category = val.category.split(',');
        var path = '/blogs/' +
            type[0].replace(" ", "-") + '/' +
            category[0].replace(" ", "-") + '/' +
            val.file.replace(".json", ".html");
        output +=
            '<div class="blog-box row">' +
                '<div class="col-md-4">' +
                    '<div class="post-media">' +
                        '<a href="' + path + '" title="' + val.title + '">' +
                            // '<img src="../../../' + val.banner + '" alt="" class="img-fluid">' +
                            '<img src="../../../upload/tech_blog_01.jpg" alt="" class="img-fluid">' +
                            '<div class="hovereffect"></div>' +
                        '</a>' +
                    '</div><!-- end media -->' +
                '</div><!-- end col -->' +
                '<div class="blog-meta big-meta col-md-8">' +
                    '<h4><a href="' + path + '" title="">' + val.title + '</a></h4>' +
                    '<div class="blog-content-overflow"><p>' + val.content + '</p></div>' +
                        '<small class="firstsmall"><a class="bg-orange" href="/blogs/'+type[0].replace(" ", "-")+'" title="">' + type[0] + '</a></small>' +
                        '<small>' + val.created + '</small>' +
                        '<small>by ' + val.author + '</small>' +
                        // '<small><a href="single.html" title=""><i class="fa fa-eye"></i> 1114</a></small>' +
                    '</div><!-- end meta -->' +
            '</div><!-- end blog-box -->' +
            '<hr class="invis">';
    });
    return output;
}
function writeBlogTypes(data) {
    var output = '';
    for (var i = 0; i < data.length; i++) {
        var type = data[i]['type'].split(',');
        var category = data[i]['category'].split(',');
        for (var j = 0; j < type.length; j++) {
            var currentType = type[j].trim().replace(" ", "-");
            var path = '/blogs/' + currentType + '/' +
                category[0].trim().replace(" ", "-") + '/' +
                data[i]['file'].replace(".json", ".html");
            var currentpath = window.location.pathname.split('/');
            if (currentType === currentpath[2]) {
                output +=
                    '<div class="blog-box row">' +
                    '<div class="col-md-4">' +
                    '<div class="post-media">' +
                    '<a href="' + path + '" title="' + data[i]['title'] + '">' +
                    // '<img src="../../../' + val.banner + '" alt="" class="img-fluid">' +
                    '<img src="../../../upload/tech_blog_01.jpg" alt="" class="img-fluid">' +
                    '<div class="hovereffect"></div>' +
                    '</a>' +
                    '</div><!-- end media -->' +
                    '</div><!-- end col -->' +
                    '<div class="blog-meta big-meta col-md-8">' +
                    '<h4><a href="' + path + '" title="">' + data[i]['title'] + '</a></h4>' +
                    '<div class="blog-content-overflow"><p>' + data[i]['content'] + '</p></div>' +
                    '<small class="firstsmall"><a class="bg-orange" href="/blogs/'+currentType+'/'+category[0].replace(" ", "-")+'" title="">' + category[0] + '</a></small>' +
                    '<small>' + data[i]['created'] + '</small>' +
                    '<small>by ' + data[i]['author'] + '</small>' +
                    // '<small><a href="single.html" title=""><i class="fa fa-eye"></i> 1114</a></small>' +
                    '</div><!-- end meta -->' +
                    '</div><!-- end blog-box -->' +
                    '<hr class="invis">';
            }
            continue;
        }

        continue;
    }
    return output;
}
function writeBlogTypeCategories(data) {
    var output = '';
    for (var i = 0; i < data.length; i++) {
        var type = data[i]['type'].split(',');
        var category = data[i]['category'].split(',');
        for (var j = 0; j < type.length; j++) {
            var currentType = type[j].trim().replace(" ", "-");
            var path = '/blogs/' + currentType + '/' +
                category[0].trim().replace(" ", "-") + '/' +
                data[i]['file'].replace(".json", ".html");
            var currentpath = window.location.pathname.split('/');
            if (currentType === currentpath[2]) {
                output +=
                    '<div class="blog-box row">' +
                    '<div class="col-md-4">' +
                    '<div class="post-media">' +
                    '<a href="' + path + '" title="' + data[i]['title'] + '">' +
                    // '<img src="../../../' + val.banner + '" alt="" class="img-fluid">' +
                    '<img src="../../../upload/tech_blog_01.jpg" alt="" class="img-fluid">' +
                    '<div class="hovereffect"></div>' +
                    '</a>' +
                    '</div><!-- end media -->' +
                    '</div><!-- end col -->' +
                    '<div class="blog-meta big-meta col-md-8">' +
                    '<h4><a href="' + path + '" title="">' + data[i]['title'] + '</a></h4>' +
                    '<div class="blog-content-overflow"><p>' + data[i]['content'] + '</p></div>' +
                    '<small class="firstsmall"><a class="bg-orange" href="/blogs/'+currentType+'" title="">' + type[j].trim() + '</a></small>' +
                    '<small>' + data[i]['created'] + '</small>' +
                    '<small>by ' + data[i]['author'] + '</small>' +
                    // '<small><a href="single.html" title=""><i class="fa fa-eye"></i> 1114</a></small>' +
                    '</div><!-- end meta -->' +
                    '</div><!-- end blog-box -->' +
                    '<hr class="invis">';
            }
            continue;
        }

        continue;
    }
    return output;
}
