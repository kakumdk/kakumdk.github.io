/**************************************
    File Name: custom.js
    Template Name: Peoples BLOG
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

/******************************************************************************************************************/
/******************************************************************************************************************/
/******************************************************************************************************************/
/******************************************************************************************************************/
/******************************************************************************************************************/
/* Custom */
/******************************************************************************************************************/
/******************************************************************************************************************/
/******************************************************************************************************************/
/******************************************************************************************************************/
/******************************************************************************************************************/
$(function() {

    $("#head").load("content/head.html");
    $("#header").load("content/header.html");
    $("#footer").load("content/footer.html");

    readFile("/blogs-content-merged/blogs.json", function(text){
        var data = JSON.parse(text);
        var output = writeBlogsHomepageHeader(data);
        $('.blog-list-homepage').html(output);
    });
    readFile("/../blogs-content-merged/blogs.json", function(text){
        var data = JSON.parse(text);
        var output = writeBlogsHomepage(data);
        $('.blog-list-homepage-blogs').html(output);
        $(".blog-list-homepage-blogs_pager").append(writeBlogsHomepagePager(data));
        $('.blog-list-homepage-footer').html(writeBlogsFooter(data));
    });
    readFile("/../blogs-content-merged/blogs.json", function(text){
        var data = JSON.parse(text);
        var output = writeBlogs(data);
        $('.blog-list-blogs').html(output);
        $(".blog-list-blogs_pager").append(writeBlogsPager(data));
        $('.blog-list-homepage-footer').html(writeBlogsFooter(data));
    });
    readFile("/../../blogs-content-merged/blogs.json", function(text){
        var data = JSON.parse(text);
        var output = writeBlogTypes(data);
        $('.blog-list-type').html(output);
        $(".blog-list-type_pager").append(writeBlogTypesPager(data));
        $('.blog-list-homepage-footer').html(writeBlogsFooter(data));
    });
    readFile("../../../blogs-content-merged/blogs.json", function(text){
        var data = JSON.parse(text);
        var output = writeBlogTypeCategories(data);
        $('.blog-list-category').html(output);
        $(".blog-list-category_pager").append(writeBlogTypeCategoriesPager(data));
        $('.blog-list-homepage-footer').html(writeBlogsFooter(data));
    });
    // $("#see-more").click(function() {
    //     $('.blog-list-homepage-blogs .blog-box').removeClass('hidden');
    //     $('.blog-list-blogs div').removeClass('hidden');
    //     $('.blog-list-blogs .blog-box').removeClass('hidden');
    //     $('.blog-list-type .blog-box').removeClass('hidden');
    //     $('.blog-list-category .blog-box').removeClass('hidden');
    //     $(this).addClass('hidden');
    //     $("html, body").animate({ scrollTop: $(document).height() }, 3000);
    // });
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        if (scroll >= 500) {
            // $('.blog-list-homepage-blogs .blog-box').removeClass('hidden');
            // $('.blog-list-blogs div').removeClass('hidden');
            // $('.blog-list-blogs .blog-box').removeClass('hidden');
            // $('.blog-list-type .blog-box').removeClass('hidden');
            // $('.blog-list-category .blog-box').removeClass('hidden');
            $("#see-more").hide();
        }
    });
    $(".post-sharing-top").html(writeSocialShareLinks('blog'));
    $(".post-sharing-footer").html(writeSocialShareLinks('footer'));

    readFile("/blogs-content-merged/blogs.json", function(text){
        $(".peoplesblog-categories-links").html('<h5>Categories</h5>');
        $(".peoplesblog-categories-links").append(writeLinks(JSON.parse(text)));
    });
    readFile("/../../../blogs-content-merged/blogs.json", function(text){
        $(".prevnext-articles").html(writePreviousNextArticles(JSON.parse(text)));
    });
    readFile("/../blogs-content-merged/blogs.json", function(text){
        var data = JSON.parse(text);
        var output = writeAuthorBlogs(data);
        $('.blog-list-blogs-authors').html(output);
        $(".blog-list-blogs-authors_pager").append(writeAuthorBlogsPager(data));
        $('.blog-list-homepage-footer').html(writeBlogsFooter(data));
    });
    setTimeout(function () {
        $("#peoplessearch").on("keyup", function(event) {
            $('.blog-list-homepage-blogs .blog-box').removeClass('hidden');
            $('.blog-list-blogs div').removeClass('hidden');
            $('.blog-list-blogs .blog-box').removeClass('hidden');
            $('.blog-list-type .blog-box').removeClass('hidden');
            $('.blog-list-category .blog-box').removeClass('hidden');
            $('._pager').css('display', 'none');
            $(this).siblings('.ads-page-6').hide();
            $(this).siblings('.ads-page-4').hide();
            $(this).siblings('.ads-page-3').hide();
            $(this).siblings('.blog-box').each(function () {
                var title = $(this).find('h4').children('a').text().toLowerCase();
                title += " " + $(this).find('.blog-content-overflow').text();
                var search = event.currentTarget.value.toLowerCase();
                if (title.indexOf(search) !== -1) {
                    $(this).show();
                }
                else {
                    $(this).hide();
                }
            });
        });
        $("#peoplessearchblog").on("keyup", function(event) {
            $('.blog-list-homepage-blogs .blog-box').removeClass('hidden');
            $('.blog-list-blogs div').removeClass('hidden');
            $('.blog-list-blogs .blog-box').removeClass('hidden');
            $('.blog-list-type .blog-box').removeClass('hidden');
            $('.blog-list-category .blog-box').removeClass('hidden');
            $('._pager').css('display', 'none');
            $(this).parent().siblings('.ads-page-5').hide();
            $(this).parent().siblings('div').each(function () {
                var title = $(this).find('h4').children('a').text().toLowerCase();
                title += " " + $(this).find('.blog-content-overflow').text();
                var search = event.currentTarget.value.toLowerCase();
                if (title.indexOf(search) !== -1) {
                    $(this).show();
                }
                else {
                    $(this).hide();
                }
            });
        });
    }, 2000);
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
function writeBlogsHomepageHeader(data) {
    var output = '';
    for (var i = data.length - 1; i >= 0; i--) {
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
        if (i === data.length - 1) {
            output +=
                '<div class="first-slot">' +
                    '<div class="masonry-box post-media">' +
                        '<a href="' + path + '" title="' + data[i]['title'] + '">' +
                        '<img loading="lazy" alt="Peoples BLOG" src="'+data[i]['banner788x443']+'" class="img-fluid">' +
                        '</a>' +
                        '<div class="shadoweffect">' +
                            '<div class="shadow-desc">' +
                                '<div class="blog-meta">' +
                                    '<span class="bg-orange"><a href="/blogs/' + currentType + '/index.html" title="' + currentTypeLabel + '">' + currentTypeLabel + '</a></span>' +
                                    '<h4><a href="' + path + '" title="' + data[i]['title'] + '">' + data[i]['title'] + '</a></h4>' +
                                    '<small>' + data[i]['created'] + ' / by <a href="/authors/'+data[i]['author'].replaceAll(" ", "-")+'.html">' + data[i]['author'] + '</a></small>' +
                                    // '<small>by ' + data[i]['author'] + '</small>' +
                                '</div><!-- end meta -->' +
                            '</div><!-- end shadow-desc -->' +
                        '</div><!-- end shadow -->' +
                    '</div><!-- end post-media -->' +
                '</div><!-- end first-side -->';
        }
        else if (i === data.length - 2) {
            output +=
                '<div class="second-slot">' +
                    '<div class="masonry-box post-media">' +
                        '<a href="' + path + '" title="' + data[i]['title'] + '">' +
                        '<img loading="lazy" alt="Peoples BLOG" src="'+data[i]['banner394x449']+'" class="img-fluid">' +
                        '</a>' +
                        '<div class="shadoweffect">' +
                            '<div class="shadow-desc">' +
                                '<div class="blog-meta">' +
                                    '<span class="bg-orange"><a href="/blogs/' + currentType + '/index.html" title="' + currentTypeLabel + '">' + currentTypeLabel + '</a></span>' +
                                    '<h4><a href="' + path + '" title="' + data[i]['title'] + '">' + data[i]['title'] + '</a></h4>' +
                                    '<small>' + data[i]['created'] + ' / by <a href="/authors/'+data[i]['author'].replaceAll(" ", "-")+'.html">' + data[i]['author'] + '</a></small>' +
                                    // '<small>by ' + data[i]['author'] + '</small>' +
                                '</div><!-- end meta -->' +
                            '</div><!-- end shadow-desc -->' +
                        '</div><!-- end shadow -->' +
                    '</div><!-- end post-media -->' +
                '</div><!-- end second-side -->';
        }
        else if (i === data.length - 3) {
            output +=
                '<div class="last-slot">' +
                    '<div class="masonry-box post-media">' +
                        '<a href="' + path + '" title="' + data[i]['title'] + '">' +
                        '<img loading="lazy" alt="Peoples BLOG" src="'+data[i]['banner394x449']+'" class="img-fluid">' +
                        '</a>' +
                        '<div class="shadoweffect">' +
                            '<div class="shadow-desc">' +
                                '<div class="blog-meta">' +
                                    '<span class="bg-orange"><a href="/blogs/' + currentType + '/index.html" title="' + currentTypeLabel + '">' + currentTypeLabel + '</a></span>' +
                                    '<h4><a href="' + path + '" title="' + data[i]['title'] + '">' + data[i]['title'] + '</a></h4>' +
                                    '<small>' + data[i]['created'] + ' / by <a href="/authors/'+data[i]['author'].replaceAll(" ", "-")+'.html">' + data[i]['author'] + '</a></small>' +
                                    // '<small>by ' + data[i]['author'] + '</small>' +
                                '</div><!-- end meta -->' +
                            '</div><!-- end shadow-desc -->' +
                        '</div><!-- end shadow -->' +
                    '</div><!-- end post-media -->' +
                '</div><!-- end second-side -->';
        }
        continue;
    }
    return output;
}
const numberofArticlesPerPage = 5;
function writeBlogsHomepage(data) {
    var output = '';
    output += '<input class="form-control" type="text" id="peoplessearch" placeholder="Search articles on Peoples BLOG" /><hr class="invis">';
    var itr = 0;
    for (var i = data.length - 1; i >= 0; i--) {
        var type = data[i]['type'].split(',');
        var category = data[i]['category'].split(',');
        var path = '/blogs/' +
            type[0].replace(" ", "-") + '/' +
            category[0].replace(" ", "-") + '/' +
            data[i]['file'].replace(".json", ".html");
        if (itr >= numberofArticlesPerPage) {
            output += '<div class="blog-box row hidden">';
        }
        else {
            output += '<div class="blog-box row">';
        }
        itr = itr + 1;
        output +=
            '<div class="col-md-4">' +
            '<div class="post-media">' +
            '<a href="' + path + '" title="' + data[i]['title'] + '">' +
            // '<img loading="lazy" alt="Peoples BLOG" src="../../../' + val.banner + '" class="img-fluid">' +
            '<img loading="lazy" alt="Peoples BLOG" src="../../../'+data[i]['banner600x500']+'" class="img-fluid">' +
            '<div class="hovereffect"></div>' +
            '</a>' +
            '</div><!-- end media -->' +
            '</div><!-- end col -->' +
            '<div class="blog-meta big-meta col-md-8">' +
            '<h4><a href="' + path + '" title="' + data[i]['title'] + '">' + data[i]['title'] + '</a></h4>' +
            '<div class="blog-content-overflow"><p>' + data[i]['content'] + '</p></div>' +
            '<small class="firstsmall"><a class="bg-orange" href="/blogs/'+type[0].replace(" ", "-")+'/index.html" title="' + type[0] + '">' + type[0] + '</a></small>' +
            '<small>' + data[i]['created'] + ' / by <a href="/authors/'+data[i]['author'].replaceAll(" ", "-")+'.html">' + data[i]['author'] + '</a></small>' +
            // '<small>by ' + data[i]['author'] + '</small>' +
            // '<small><a href="single.html" title=""><i class="fa fa-eye"></i> 1114</a></small>' +
            '</div><!-- end meta -->' +
            '</div><!-- end blog-box -->';
        output += '<hr class="invis">';
        if (itr % 2 === 0) {
            // output += '<div class="ads-page-6"></div>';
        }
    }
    return output;
}
function writeBlogs(data) {
    var output = '';
    output += '<div class="col-md-12">' +
        '<input class="form-control" type="text" id="peoplessearchblog" placeholder="Search articles on Peoples BLOG" /><hr class="invis">' +
        '</div>';
    var itr = 0;
    for (var i = data.length - 1; i >= 0; i--) {
        var type = data[i]['type'].split(',');
        var category = data[i]['category'].split(',');
        var path = '/blogs/' +
            type[0].replace(" ", "-") + '/' +
            category[0].replace(" ", "-") + '/' +
            data[i]['file'].replace(".json", ".html");
        if (itr >= (numberofArticlesPerPage + 1)) {
            output += '<div class="col-md-6 hidden">';
        }
        else {
            output += '<div class="col-md-6">';
        }
        itr = itr + 1;
        output +=
            '<div class="blog-box">' +
            '<div class="post-media">' +
            '<a href="' + path + '" title="' + data[i]['title'] + '">' +
            '<img loading="lazy" alt="Peoples BLOG" src="../../../'+data[i]['banner800x460']+'" class="img-fluid">' +
            '</a>' +
            '</div><!-- end media -->' +
            '<div class="blog-meta big-meta">' +
            '<span class="color-orange"><a href="/blogs/'+type[0].replace(" ", "-")+'/index.html" title="' + type[0] + '">' + type[0] + '</a></span>' +
            '<h4><a href="' + path + '" title="' + data[i]['title'] + '">' + data[i]['title'] + '</a></h4>' +
            '<div class="blog-content-overflow"><p>' + data[i]['content'] + '</p></div>' +
            '<small>' + data[i]['created'] + ' / by <a href="/authors/'+data[i]['author'].replaceAll(" ", "-")+'.html">' + data[i]['author'] + '</a></small>' +
            // '<small>by ' + data[i]['author'] + '</small>' +
            '</div><!-- end meta -->' +
            '</div><!-- end blog-box -->' +
            '</div>'+
            '<hr class="invis">';
        if (itr % 2 === 0) {
            // output += '<div class="col-md-12"><div class="ads-page-5"></div></div>';
        }
    }
    return output;
}
function writeBlogTypes(data) {
    var currentpath = window.location.pathname.split('/');
    var output = '';
    output += '<input class="form-control" type="text" id="peoplessearch" placeholder="Search for '+currentpath[2]+' related articles on Peoples BLOG" /><hr class="invis">';
    var itr = 0;
    for (var i = data.length - 1; i >= 0; i--) {
        var type = data[i]['type'].split(',');
        var category = data[i]['category'].split(',');
        for (var j = 0; j < type.length; j++) {
            var currentType = type[j].trim().replace(" ", "-");
            var path = '/blogs/' + currentType + '/' +
                category[0].trim().replace(" ", "-") + '/' +
                data[i]['file'].replace(".json", ".html");
            if (currentType === currentpath[2]) {
                if (itr >= numberofArticlesPerPage) {
                    output += '<div class="blog-box row hidden">';
                }
                else {
                    output += '<div class="blog-box row">';
                }
                itr = itr + 1;
                output +=
                    '<div class="col-md-4">' +
                    '<div class="post-media">' +
                    '<a href="' + path + '" title="' + data[i]['title'] + '">' +
                    // '<img loading="lazy" alt="Peoples BLOG" src="../../../' + val.banner + '" class="img-fluid">' +
                    '<img loading="lazy" alt="Peoples BLOG" src="../../../'+data[i]['banner600x500']+'" class="img-fluid">' +
                    '<div class="hovereffect"></div>' +
                    '</a>' +
                    '</div><!-- end media -->' +
                    '</div><!-- end col -->' +
                    '<div class="blog-meta big-meta col-md-8">' +
                    '<h4><a href="' + path + '" title="' + data[i]['title'] + '">' + data[i]['title'] + '</a></h4>' +
                    '<div class="blog-content-overflow"><p>' + data[i]['content'] + '</p></div>' +
                    '<small class="firstsmall"><a class="bg-orange" href="/blogs/'+currentType+'/'+category[0].replace(" ", "-")+'/index.html" title="' + category[0] + '">' + category[0] + '</a></small>' +
                    '<small>' + data[i]['created'] + ' / by <a href="/authors/'+data[i]['author'].replaceAll(" ", "-")+'.html">' + data[i]['author'] + '</a></small>' +
                    // '<small>by ' + data[i]['author'] + '</small>' +
                    // '<small><a href="single.html" title=""><i class="fa fa-eye"></i> 1114</a></small>' +
                    '</div><!-- end meta -->' +
                    '</div><!-- end blog-box -->' +
                    '<hr class="invis">';
                if (itr % 2 === 0) {
                    // output += '<div class="ads-page-4"></div>';
                }
            }
            continue;
        }

        continue;
    }
    return output;
}
function writeBlogTypeCategories(data) {
    var currentpath = window.location.pathname.split('/');
    var output = '';
    output += '<input class="form-control" type="text" id="peoplessearch" placeholder="Search for '+currentpath[3]+' related articles on Peoples BLOG" /><hr class="invis">';
    var itr = 0;
    for (var i = data.length - 1; i >= 0; i--) {
        var type = data[i]['type'].split(',');
        var category = data[i]['category'].split(',');
        for (var j = 0; j < type.length; j++) {
            var currentType = type[j].trim().replace(" ", "-");
            for (var k = 0; k < category.length; k++) {
                var currentCat = category[k].trim().replace(" ", "-");
                var path = '/blogs/' + currentType + '/' + currentCat + '/' + data[i]['file'].replace(".json", ".html");
                if (currentCat === currentpath[3]) {
                    if (itr >= numberofArticlesPerPage) {
                        output += '<div class="blog-box row hidden">';
                    }
                    else {
                        output += '<div class="blog-box row">';
                    }
                    itr = itr + 1;
                    // output +=
                    //     '<div class="post-media">' +
                    //     '<a href="' + path + '" title="' + data[i]['title'] + '">' +
                    //     '<img loading="lazy" alt="Peoples BLOG" src="../../../'+data[i]['banner800x460']+'" class="img-fluid">' +
                    //     '</a>' +
                    //     '</div>' +
                    //     '<!-- end media -->' +
                    //     '<div class="blog-meta big-meta text-center">' +
                    //     '<h4><a href="' + path + '" title="' + data[i]['title'] + '">' + data[i]['title'] + '</a></h4>' +
                    //     '<div class="blog-content-overflow"><p>' + data[i]['content'] + '</p></div>' +
                    //     '<small class="firstsmall"><a class="bg-orange" href="/blogs/'+currentType+'/index.html" title="' + type[j].trim() + '">' + type[j].trim() + '</a></small>' +
                    //     '<small>' + data[i]['created'] + ' / by <a href="/authors/'+data[i]['author'].replaceAll(" ", "-")+'.html">' + data[i]['author'] + '</a></small>' +
                    //     // '<small>by ' + data[i]['author'] + '</small>' +
                    //     '</div><!-- end meta -->' +
                    //     '</div><!-- end blog-box -->' +
                    //     '<hr class="invis">';
                    // if (itr % 2 === 0) {
                    //     // output += '<div class="ads-page-3"></div>';
                    // }
                    output +=
                        '<div class="col-md-4">' +
                        '<div class="post-media">' +
                        '<a href="' + path + '" title="' + data[i]['title'] + '">' +
                        // '<img loading="lazy" alt="Peoples BLOG" src="../../../' + val.banner + '" class="img-fluid">' +
                        '<img loading="lazy" alt="Peoples BLOG" src="../../../'+data[i]['banner600x500']+'" class="img-fluid">' +
                        '<div class="hovereffect"></div>' +
                        '</a>' +
                        '</div><!-- end media -->' +
                        '</div><!-- end col -->' +
                        '<div class="blog-meta big-meta col-md-8">' +
                        '<h4><a href="' + path + '" title="' + data[i]['title'] + '">' + data[i]['title'] + '</a></h4>' +
                        '<div class="blog-content-overflow"><p>' + data[i]['content'] + '</p></div>' +
                        '<small class="firstsmall"><a class="bg-orange" href="/blogs/'+currentType+'/'+category[0].replace(" ", "-")+'/index.html" title="' + category[0] + '">' + category[0] + '</a></small>' +
                        '<small>' + data[i]['created'] + ' / by <a href="/authors/'+data[i]['author'].replaceAll(" ", "-")+'.html">' + data[i]['author'] + '</a></small>' +
                        // '<small>by ' + data[i]['author'] + '</small>' +
                        // '<small><a href="single.html" title=""><i class="fa fa-eye"></i> 1114</a></small>' +
                        '</div><!-- end meta -->' +
                        '</div><!-- end blog-box -->' +
                        '<hr class="invis">';
                    if (itr % 2 === 0) {
                        // output += '<div class="ads-page-4"></div>';
                    }
                }
            }
            continue;
        }

        continue;
    }
    return output;
}
function writeBlogsFooter(data) {
    var output = '';
    var allCat = {};
    var uniqueCat = [];
    for (var i = data.length - 1; i >= 0; i--) {
        var type = data[i]['type'].split(',');
        for (var j = 0; j < type.length; j++)
            var currentType = type[j].trim().replace(" ", "-");{
            var category = data[i]['category'].split(',');
            for (var k = 0; k < category.length; k++) {
                var currentCat = category[k].trim().replace(" ", "-");
                allCat[currentCat] = '/blogs/' + currentType + '/' + currentCat + '/index.html';
            }
        }
    }
    var f_itr = 0;
    $.each(allCat, function(i, el){
        if($.inArray(el, uniqueCat) === -1) {
            if (f_itr <= 4) {
                uniqueCat[i] = el;
                output += '<li><a href="'+el+'" title="Peoples BLOG">'+i.replace("-", " ")+'</a></li>';
                f_itr = f_itr + 1;
            }
        }
    });
    return output;
}
function writeSocialShareLinks(region) {
    var title = $(document).find("title").text();
    var url = window.location.href;
    var hashtags = 'PeoplesBlog'
    var linkedin = 'http://www.linkedin.com/shareArticle?mini=true&amp;url=' + url;
    var twitter = 'https://twitter.com/share?url='+url+'&amp;text='+title+'&amp;hashtags='+hashtags;
    var facebook = 'http://www.facebook.com/sharer.php?u='+url;
    var whatsapp = 'https://web.whatsapp.com/send?text='+url;
    var whatsapp_phone = 'https://api.whatsapp.com/send?text='+url;
    var mail = 'mailto:?Subject='+title+'&amp;Body='+title+' '+url+'';
    if (region === 'blog') {
        var output = '' +
            '<ul class="list-inline">' +
            '<li><a title="Share now on Linkedin" href="'+linkedin+'" target="_blank" class="btn-floating btn-lg btn-li" type="button" role="button"><i class="fa fa-linkedin"></i></a></li>' +
            '<li><a title="Share now on Twitter" href="'+twitter+'" target="_blank" class="btn-floating btn-lg btn-tw" type="button" role="button"><i class="fa fa-twitter"></i></a></li>' +
            '<li><a title="Share now on Facebook" href="'+facebook+'" target="_blank" class="btn-floating btn-lg btn-fb" type="button" role="button"><i class="fa fa-facebook"></i></a></li>' +
            '<li class="whatsapp-desktop"><a title="Share now on Whatsapp web" href="'+whatsapp+'" target="_blank" class="btn-floating btn-lg btn-whatsapp" type="button" role="button"><i class="fa fa-whatsapp"></i></a></li>' +
            '<li class="whatsapp-mobile"><a href="'+whatsapp_phone+'" target="_blank" class="btn-floating btn-lg btn-whatsapp" type="button" role="button"><i class="fa fa-whatsapp"></i></a></li>' +
            '<li><a title="Share now on E-mail" href="'+mail+'" target="_blank" class="btn-floating btn-lg btn-email" type="button" role="button"><i class="fa fa-envelope"></i></a></li>' +
            '</ul>';
        return output;
    }
    if (region === 'footer') {
        var facebook_social = 'https://www.facebook.com/peoplesblog1989';
        var twitter_social = 'https://twitter.com/peoplesblog1989';
        var instagram_social = 'https://www.instagram.com/peoplesblog1989';
        var tumbler_social = 'https://peoplesblog1989.tumblr.com';
        // var quora_social = 'https://www.quora.com/q/peoplesblog1989';
        return '' +
            // '<a href="'+linkedin+'" target="_blank"  data-toggle="tooltip" data-placement="bottom" title="Linkedin"><i class="fa fa-linkedin"></i></a>' +
            '<a href="'+facebook_social+'" target="_blank"  data-toggle="tooltip" data-placement="bottom" title="Facebook"><i class="fa fa-facebook-square"></i></a>' +
            '<a href="'+twitter_social+'" target="_blank"  data-toggle="tooltip" data-placement="bottom" title="Twitter"><i class="fa fa-twitter-square"></i></a>' +
            '<a href="'+instagram_social+'" target="_blank"  data-toggle="tooltip" data-placement="bottom" title="Instagram"><i class="fa fa-instagram"></i></a>' +
            '<a href="'+tumbler_social+'" target="_blank"  data-toggle="tooltip" data-placement="bottom" title="Tumbler"><i class="fa fa-tumblr-square"></i></a>';
            // '<a href="'+quora_social+'" target="_blank"  data-toggle="tooltip" data-placement="bottom" title="Quora"><i class="fa fa-quora"></i></a>';
            // '<a class="whatsapp-desktop" href="'+whatsapp+'" target="_blank"  data-toggle="tooltip" data-placement="bottom" title="Whatsapp"><i class="fa fa-whatsapp"></i></a>' +
            // '<a class="whatsapp-mobile" href="'+whatsapp_phone+'" target="_blank"  data-toggle="tooltip" data-placement="bottom" title="Whatsapp"><i class="fa fa-whatsapp"></i></a>' +
            // '<a href="'+mail+'" target="_blank"  data-toggle="tooltip" data-placement="bottom" title="Email"><i class="fa fa-envelope"></i></a>';
    }
}
function writeLinks(data) {
    var output = '';
    var itr = 0;
    var links = [];
    for (var i = data.length - 1; i >= 0; i--) {
        var type = data[i]['type'].split(',');
        var category = data[i]['category'].split(',');
        for (var j = 0; j < type.length; j++) {
            var currentType = type[j].trim().replace(" ", "-");
            for (var k = 0; k < category.length; k++) {
                var currentCat = category[k].trim().replace(" ", "-");
                var baseurl = window.location.origin;
                var catLink = baseurl+'/blogs/'+currentType+'/'+currentCat+'/index.html';
                links[currentCat] = '<div class="child"><span><i class="fa fa-tag"></i> <a href="'+catLink+'">'+currentCat+'</a></span></div>';
            }
        }
    }
    output += '<div class="site-links">';
    for (var key in links) {
        if (links.hasOwnProperty(key)) {
            output += links[key];
        }
    }
    output += '</div>';
    return output;
}
function writePreviousNextArticles(data) {
    var output = '<div class="row">';
    var url = window.location.pathname;
    var currentFile = url.substring(url.lastIndexOf("/") + 1, url.length).replace(".html", ".json");
    for (var i = data.length - 1; i >= 0; i--) {
        if (data[i]['file'] === currentFile) {
            var prev = i - 1;
            var next = i + 1;
            if (prev in data) {
                var prevtypes = data[prev]['type'].split(',');
                var prevtype = prevtypes[0].trim().replace(" ", "-");
                var prevcategorys = data[prev]['category'].split(',');
                var prevcategory = prevcategorys[0].trim().replace(" ", "-");
                var prevUrl = '/blogs/'+prevtype+'/'+prevcategory+'/'+data[prev]['file'].replace(".json", ".html");
                output += '' +
                    '<div class="col-lg-6">' +
                    '<div class="blog-list-widget">' +
                    '<div class="list-group">' +
                    '<a href="'+prevUrl+'" class="list-group-item list-group-item-action flex-column align-items-start">' +
                    '<div class="w-100 justify-content-between text-right">' +
                    '<img loading="lazy" src="../../../'+data[prev]['banner800x460']+'" alt="" class="img-fluid float-right">' +
                    '<h5 class="mb-1">'+data[prev]['title']+'</h5>' +
                    '<small><i class="fa fa-angle-double-left"></i> Prev Post</small>' +
                    '</div>' +
                    '</a>' +
                    '</div>' +
                    '</div>' +
                    '</div><!-- end col -->';
            }
            else {
                output += '' +
                    '<div class="col-lg-6">' +
                    '<div class="blog-list-widget">' +
                    '<div class="list-group">' +
                    '<div class="w-100 justify-content-between text-right">' +
                    '<h5 class="mb-1 subscribe">Subscribe for latest posts</h5>' +
                    '<div class="newsletter-widget-subscribe newsletter-widget text-left">' +
                    '<form name="subscribe" action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSewRpoqyq6TYnR_VU12LRPD1ahr2xP19akLcFhBjcylfPlWjw/formResponse" class="form-inline" target="_blank"><input type="text" class="form-control" placeholder="Enter your email address" name="entry.1045781291" required=""><button type="submit" class="newsletter-widget-subscribe-button btn btn-primary">Subscribe</button></form>' +
                    '</div>' +
                    '</div>' +
                    '</div>' +
                    '</div>' +
                    '</div><!-- end col -->';
            }
            if (next in data) {
                var nexttypes = data[next]['type'].split(',');
                var nexttype = nexttypes[0].trim().replace(" ", "-");
                var nextcategorys = data[next]['category'].split(',');
                var nextcategory = nextcategorys[0].trim().replace(" ", "-");
                var nextUrl = '/blogs/'+nexttype+'/'+nextcategory+'/'+data[next]['file'].replace(".json", ".html");
                output += '' +
                    '<div class="col-lg-6">' +
                    '<div class="blog-list-widget">' +
                    '<div class="list-group">' +
                    '<a href="'+nextUrl+'" class="list-group-item list-group-item-action flex-column align-items-start">' +
                    '<div class="w-100 justify-content-between">' +
                    '<img loading="lazy" src="../../../'+data[next]['banner800x460']+'" alt="" class="img-fluid float-left">' +
                    '<h5 class="mb-1">'+data[next]['title']+'</h5>' +
                    '<small>Next Post <i class="fa fa-angle-double-right"></i></small>' +
                    '</div>' +
                    '</a>' +
                    '</div>' +
                    '</div>' +
                    '</div><!-- end col -->';
            }
            else {
                output += '' +
                    '<div class="col-lg-6">' +
                    '<div class="blog-list-widget">' +
                    '<div class="list-group">' +
                    '<div class="w-100 justify-content-between">' +
                    '<h5 class="mb-1 subscribe">Subscribe for latest posts</h5>' +
                    '<div class="newsletter-widget-subscribe newsletter-widget text-left">' +
                    '<form name="subscribe" action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSewRpoqyq6TYnR_VU12LRPD1ahr2xP19akLcFhBjcylfPlWjw/formResponse" class="form-inline" target="_blank"><input type="text" class="form-control" placeholder="Enter your email address" name="entry.1045781291" required=""><button type="submit" class="newsletter-widget-subscribe-button btn btn-primary">Subscribe</button></form>' +
                    '</div>' +
                    '</div>' +
                    '</div>' +
                    '</div>' +
                    '</div><!-- end col -->';
            }
        }
    }
    return output + "</div>";
}
function writeAuthorBlogs(data) {
    var output = '';
    var currentpath = window.location.pathname.split('/');
    if (currentpath['2']) {
        if (currentpath['2'].replaceAll('.html', '')) {
            if (currentpath['2'].replaceAll('.html', '').replaceAll('-', ' ')) {
                var author = currentpath['2'].replaceAll('.html', '').replaceAll('-', ' ');
                // output += '<div class="">' +
                //     '<input class="form-control" type="text" id="peoplessearchblog" placeholder="Search articles, Authored by ' + author + ' on Peoples BLOG" /><hr class="invis">' +
                //     '</div>';
                var itr = 0;
                for (var i = data.length - 1; i >= 0; i--) {
                    if (author === data[i]['author']) {
                        var type = data[i]['type'].split(',');
                        var category = data[i]['category'].split(',');
                        var path = '/blogs/' +
                            type[0].replace(" ", "-") + '/' +
                            category[0].replace(" ", "-") + '/' +
                            data[i]['file'].replace(".json", ".html");
                        if (itr >= (numberofArticlesPerPage - 1)) {
                            output += '<div class="blog-box row hidden">';
                        }
                        else {
                            output += '<div class="blog-box row">';
                        }
                        itr = itr + 1;
                        output +=
                            '<div class="col-md-4">' +
                            '<div class="post-media">' +
                            '<a href="' + path + '" title="' + data[i]['title'] + '">' +
                            // '<img loading="lazy" alt="Peoples BLOG" src="../../../' + val.banner + '" class="img-fluid">' +
                            '<img loading="lazy" alt="Peoples BLOG" src="../../../'+data[i]['banner600x500']+'" class="img-fluid">' +
                            '<div class="hovereffect"></div>' +
                            '</a>' +
                            '</div><!-- end media -->' +
                            '</div><!-- end col -->' +
                            '<div class="blog-meta big-meta col-md-8">' +
                            '<h4><a href="' + path + '" title="' + data[i]['title'] + '">' + data[i]['title'] + '</a></h4>' +
                            '<div class="blog-content-overflow"><p>' + data[i]['content'] + '</p></div>' +
                            '<small class="firstsmall"><a class="bg-orange" href="/blogs/'+type[0].replace(" ", "-")+'/index.html" title="' + type[0] + '">' + type[0] + '</a></small>' +
                            '<small>' + data[i]['created'] + '</small>' +
                            '<small>by ' + data[i]['author'] + '</small>' +
                            // '<small><a href="single.html" title=""><i class="fa fa-eye"></i> 1114</a></small>' +
                            '</div><!-- end meta -->' +
                            '</div><!-- end blog-box -->'+
                            '<hr class="invis">';
                        if (itr % 2 === 0) {
                            // output += '<div class="col-md-12"><div class="ads-page-5"></div></div>';
                        }
                    }
                }
            }
        }
    }
    return output;
}

/******************************************************************************************************************/
/************************************** ADS ***********************************************************************/
/******************************************************************************************************************/
$(function() {
    readFile("/ads/ads.json", function(text){
        $('.ads-home').html(writeAds300x600(JSON.parse(text), 'home'));
        $('.ads-home').append(writeAds1200x1200(JSON.parse(text), 'home'));
        $('.ads-home').append(writeAds300x600(JSON.parse(text), 'home'));
        $('.ads-home').append(writeAds1200x1200(JSON.parse(text), 'home'));
        $('.ads-home').append(writeAds300x600(JSON.parse(text), 'home'));
        $('.ads-page-6').html(writeAds728x90(JSON.parse(text), 'home'));
        adShowHidePage('ads-page-6');
    });
    readFile("/../ads/ads.json", function(text){
        $('.ads-blogs').html(writeAds1200x1200(JSON.parse(text), 'blogs'));
        $('.ads-blogs').append(writeAds300x600(JSON.parse(text), 'blogs'));
        $('.ads-blogs').append(writeAds1200x1200(JSON.parse(text), 'blogs'));
        $('.ads-blogs').append(writeAds300x600(JSON.parse(text), 'blogs'));
        $('.ads-blogs').append(writeAds1200x1200(JSON.parse(text), 'blogs'));
        $('.ads-blogs').append(writeAds300x600(JSON.parse(text), 'blogs'));
        $('.ads-blogs').append(writeAds1200x1200(JSON.parse(text), 'blogs'));
        $('.ads-page-5').html(writeAds728x90(JSON.parse(text), 'blogs'));
        adShowHidePage('ads-page-5');
    });
    readFile("/../../ads/ads.json", function(text){
        $('.ads-type').html(writeAds300x600(JSON.parse(text), 'type'));
        $('.ads-type').append(writeAds1200x1200(JSON.parse(text), 'type'));
        $('.ads-type').append(writeAds300x600(JSON.parse(text), 'type'));
        $('.ads-type').append(writeAds1200x1200(JSON.parse(text), 'type'));
        $('.ads-type').append(writeAds300x600(JSON.parse(text), 'type'));
        $('.ads-page-4').html(writeAds728x90(JSON.parse(text), 'type'));
        adShowHidePage('ads-page-4');
    });
    readFile("/../../../ads/ads.json", function(text){
        $('.ads').append(writeAds300x600(JSON.parse(text), 'cat'));
        $('.ads').append(writeAds1200x1200(JSON.parse(text), 'cat'));
        $('.ads').append(writeAds300x600(JSON.parse(text), 'cat'));
        $('.ads').append(writeAds1200x1200(JSON.parse(text), 'cat'));
        $('.ads').append(writeAds300x600(JSON.parse(text), 'cat'));
        $('.ads-article').html(writeAds1200x1200(JSON.parse(text), 'cat'));
        $('.ads-article').append(writeAds1200x1200(JSON.parse(text), 'cat'));
        $('.ads-article').append(writeAds1200x1200(JSON.parse(text), 'cat'));
        $('.ads-article').append(writeAds1200x1200(JSON.parse(text), 'cat'));
        $('.ads-article').append(writeAds1200x1200(JSON.parse(text), 'cat'));
        $('.ads-article').append(writeAds1200x1200(JSON.parse(text), 'cat'));
        $('.ads-article').append(writeAds1200x1200(JSON.parse(text), 'cat'));
        $('.ads-article').append(writeAds1200x1200(JSON.parse(text), 'cat'));
        $('.ads-article').append(writeAds1200x1200(JSON.parse(text), 'cat'));
        $('.ads-article').append(writeAds1200x1200(JSON.parse(text), 'cat'));
        $('.ads-article').append(writeAds1200x1200(JSON.parse(text), 'cat'));
        $('.ads-article').append(writeAds1200x1200(JSON.parse(text), 'cat'));
        $('.ads-article').append(writeAds1200x1200(JSON.parse(text), 'cat'));
        $('.ads-article').append(writeAds1200x1200(JSON.parse(text), 'cat'));
        setTimeout(function() {
            $('.ads-page-1').html(writeAds728x90(JSON.parse(text), 'cat'));
            adShowHidePage('ads-page-1');
        }, 3000);
        setTimeout(function() {
            $('.ads-page-2').html(writeAds728x90(JSON.parse(text), 'cat'));
            adShowHidePage('ads-page-2');
        }, 5000);
        setTimeout(function() {
            $('.ads-page-3').html(writeAds728x90(JSON.parse(text), 'cat'));
            adShowHidePage('ads-page-3');
        }, 8000);
    });
    setTimeout(function() {
        adShowHide('ads-home');
        adShowHide('ads-blogs');
        adShowHide('ads-type');
        adShowHide('ads');
        adShowHide('ads-article');
    }, 3000);

    setTimeout(function() {
        showSlidesAds();
    }, 10000);

});
function showSlidesAds() {
    var itr = 0;
    var slides = 4;
    setInterval(function() {
        $(".ads-home.sidebar .widget").each(function (index) {
            if (itr >= 5) {
                itr = 0;
            }
            if (itr === index) {
                $(this).addClass('hide');
            }
            else if (itr === (index + 2)) {
                $(this).addClass('hide');
            }
            else if (itr === (index - 3)) {
                $(this).addClass('hide');
            }
            else {
                $(this).removeClass('hide');
            }
        });
        itr++;
    }, 500);
}
function writeAds300x600(data, page) {
    var output = "";
    var random = data[Math.floor(Math.random() * data.length)];
    output += '' +
        '<div class="widget">' +
        '<div class="banner-spot clearfix">' +
        '<div class="banner-img">' +
        '';
    if (page === 'home') {
        output += '<a target="_blank" href="'+random['url']+'"><span class="price">'+random['price']+'</span><img loading="lazy" alt="Peoples BLOG" src="'+random['img300x600']+'" class="img-fluid"></a>';
    }
    else if (page === 'blogs') {
        output += '<a target="_blank" href="'+random['url']+'"><span class="price">'+random['price']+'</span><img loading="lazy" alt="Peoples BLOG" src="../'+random['img300x600']+'" class="img-fluid"></a>';
    }
    else if (page === 'type') {
        output += '<a target="_blank" href="'+random['url']+'"><span class="price">'+random['price']+'</span><img loading="lazy" alt="Peoples BLOG" src="../../'+random['img300x600']+'" class="img-fluid"></a>';
    }
    else if (page === 'cat') {
        output += '<a target="_blank" href="'+random['url']+'"><span class="price">'+random['price']+'</span><img loading="lazy" alt="Peoples BLOG" src="../../../'+random['img300x600']+'" class="img-fluid"></a>';
    }
        output += '' +
        '</div><!-- end banner-img -->' +
        '</div><!-- end banner -->' +
        '</div><!-- end widget -->' +
        '';
    return output;
}
function writeAds728x90(data, page) {
    var output = "";
    var random = data[Math.floor(Math.random() * data.length)];
    output += '' +
        '<div class="row">' +
        '<div class="col-lg-12">' +
        '<div class="banner-spot clearfix">' +
        '<div class="banner-img">';
    if (page === 'home') {
        output += '<a target="_blank" href="'+random['url']+'"><span class="price">'+random['price']+'</span><img loading="lazy" alt="Peoples BLOG" src="'+random['img728x90']+'" class="img-fluid"></a>';
    }
    if (page === 'blogs') {
        output += '<a target="_blank" href="'+random['url']+'"><span class="price">'+random['price']+'</span><img loading="lazy" alt="Peoples BLOG" src="../'+random['img728x90']+'" class="img-fluid"></a>';
    }
    if (page === 'type') {
        output += '<a target="_blank" href="'+random['url']+'"><span class="price">'+random['price']+'</span><img loading="lazy" alt="Peoples BLOG" src="../../'+random['img728x90']+'" class="img-fluid"></a>';
    }
    if (page === 'cat') {
        output += '<a target="_blank" href="'+random['url']+'"><span class="price">'+random['price']+'</span><img loading="lazy" alt="Peoples BLOG" src="../../../'+random['img728x90']+'" class="img-fluid"></a>';
    }
    output += '</div><!-- end banner-img -->' +
        '</div><!-- end banner -->' +
        '</div><!-- end col -->' +
        '</div><!-- end row -->' +
        // '<hr class="invis1">' +
        '';
    return output;
}
function writeAds1200x1200(data, page) {
    var output = "";
    var random = data[Math.floor(Math.random() * data.length)];
    output += '' +
        '<div class="widget">' +
        '<div class="banner-spot clearfix">' +
        '<div class="banner-img">';
    if (page === 'home') {
        output += '<a target="_blank" href="'+random['url']+'"><span class="price">'+random['price']+'</span><img loading="lazy" alt="Peoples BLOG" src="'+random['img1200x1200']+'" class="img-fluid"></a>';
    }
    if (page === 'blogs') {
        output += '<a target="_blank" href="'+random['url']+'"><span class="price">'+random['price']+'</span><img loading="lazy" alt="Peoples BLOG" src="../'+random['img1200x1200']+'" class="img-fluid"></a>';
    }
    if (page === 'type') {
        output += '<a target="_blank" href="'+random['url']+'"><span class="price">'+random['price']+'</span><img loading="lazy" alt="Peoples BLOG" src="../../'+random['img1200x1200']+'" class="img-fluid"></a>';
    }
    if (page === 'cat') {
        output += '<a target="_blank" href="'+random['url']+'"><span class="price">'+random['price']+'</span><img loading="lazy" alt="Peoples BLOG" src="../../../'+random['img1200x1200']+'" class="img-fluid"></a>';
    }
    output += '</div><!-- end banner-img -->' +
        '</div><!-- end banner -->' +
        '</div><!-- end widget -->' +
        '';
    return output;
}
function adShowHide(ad) {
    $('div.'+ad+'.sidebar .widget').prepend('' +
        '<span class="ad-open">Open Ad <i class="fa fa-lock"></i></span>' +
        '<span class="ad-close">Close Ad <i class="fa fa-unlock"></i></span>' +
        '');
    $('div.'+ad+'.sidebar .widget .ad-open').hide();
    $('div.'+ad+'.sidebar .widget .ad-close').click(function(){
        $(this).parent().children('.banner-spot').hide();
        $(this).hide();
        $(this).siblings('.ad-open').show();
    });
    $('div.'+ad+'.sidebar .widget .ad-open').click(function(){
        $(this).parent().children('.banner-spot').show();
        $(this).hide();
        $(this).siblings('.ad-close').show();
    });
}
function adShowHidePage(ad) {
    $('div.'+ad).prepend('' +
        '<span class="ad-open">Open Ad <i class="fa fa-lock"></i></span>' +
        '<span class="ad-close">Close Ad <i class="fa fa-unlock"></i></span>' +
        '');
    $('div.'+ad+' .ad-open').hide();
    $('div.'+ad+' .ad-close').click(function(){
        $(this).parent().children('.row').hide();
        $(this).hide();
        $(this).siblings('.ad-open').show();
    });
    $('div.'+ad+' .ad-open').click(function(){
        $(this).parent().children('.row').show();
        $(this).hide();
        $(this).siblings('.ad-close').show();
    });
}


/******************************************************************************************************************/
/************************************** QADSuotes ***********************************************************************/
/******************************************************************************************************************/
$(function() {
    readFile("/quotes/quotes.json", function (text) {
        $('.peoples-quotes').html(writeQuotes(JSON.parse(text)));
    });
    readFile("/../quotes/quotes.json", function (text) {
        $('.peoples-quotes').html(writeQuotes(JSON.parse(text)));
    });
    readFile("/../../quotes/quotes.json", function (text) {
        $('.peoples-quotes').html(writeQuotes(JSON.parse(text)));
    });
    readFile("/../../../quotes/quotes.json", function (text) {
        $('.peoples-quotes').html(writeQuotes(JSON.parse(text)));
    });
});
function writeQuotes(data) {
    var output = "";
    var random = data[Math.floor(Math.random() * data.length)];
    output += '<span>'+random['quote']+'</span>';
    return output;
}


/******************************************************************************************************************/
/************************************** Read Article **************************************************************/
/******************************************************************************************************************/
function getReadableContentforArticle() {
    var title = $('.read-article-title').html();
    var content = $('.read-article-content').html().toString().replace( /(<([^>]+)>)/ig, '');
    var contentTmp = '';
    for (var i = 0; i < content.length; i++) {
        if (!(content[i] === '\n' || content[i] === '\r')) {
            contentTmp += content[i];
        }
    }
    var thankyou = " Thanks for hearing Article. Please do subscribe, for latest articles. Contact us for any clarification or information. Thank you once again.";
    // return title.trim();
    return title.trim() + '. ' + contentTmp.replace(/\s+/g, ' ').trim() + thankyou;
}
$(function() {
    supportsSpeechSynthesis = function (){
        return 'speechSynthesis' in window
    }
    if (supportsSpeechSynthesis()) {
        var readArticle = $(".read-article");
        var readPause = $(".read-article-pause");
        var readResume = $(".read-article-resume");
        var readStop = $(".read-article-stop");
        readPause.hide();
        readResume.hide();
        readStop.hide();
        readArticle.click(function () {
            var contentReadable = getReadableContentforArticle();
            var utterance = new SpeechSynthesisUtterance(contentReadable);
            var voices = window.speechSynthesis.getVoices()
            for (var i = 0; i < voices.length ; i++) {
                if (voices[i].name === "Google UK English Female"
                    || voices[i].name === "English_(Received_Pronunciation) (en-GB)") {
                    utterance.voice = voices[i];
                    utterance.lang = voices[i].lang;
                }
            }
            readArticle.hide();
            readResume.hide();
            readPause.show();
            readStop.show();
            // window.speechSynthesis.speak(utterance);
            speechUtteranceChunker(utterance, {
                chunkLength: 90
            }, function () {
                console.log('done');
            });
        });
        readPause.click(function () {
            readArticle.hide();
            readResume.show();
            readPause.hide();
            readStop.show();
            window.speechSynthesis.pause();
        });
        readResume.click(function () {
            readArticle.hide();
            readResume.hide();
            readPause.show();
            readStop.show();
            window.speechSynthesis.resume();
        });
        readStop.click(function () {
            readArticle.show();
            readResume.hide();
            readPause.hide();
            readStop.hide();
            speechUtteranceChunker.cancel = true;
            window.speechSynthesis.cancel();
        });
    }
});
var speechUtteranceChunker = function (utt, settings, callback) {
    settings = settings || {};
    var newUtt;
    var txt = (settings && settings.offset !== undefined ? utt.text.substring(settings.offset) : utt.text);
    if (utt.voice && utt.voice.voiceURI === 'native') { // Not part of the spec
        newUtt = utt;
        newUtt.text = txt;
        newUtt.addEventListener('end', function () {
            if (speechUtteranceChunker.cancel) {
                speechUtteranceChunker.cancel = false;
            }
            if (callback !== undefined) {
                callback();
            }
        });
    }
    else {
        var chunkLength = (settings && settings.chunkLength) || 160;
        var pattRegex = new RegExp('^[\\s\\S]{' + Math.floor(chunkLength / 2) + ',' + chunkLength + '}[.!?,]{1}|^[\\s\\S]{1,' + chunkLength + '}$|^[\\s\\S]{1,' + chunkLength + '} ');
        var chunkArr = txt.match(pattRegex);
        if (chunkArr[0] === undefined || chunkArr[0].length <= 2) {
            if (callback !== undefined) {
                callback();
            }
            return;
        }
        var chunk = chunkArr[0];
        newUtt = new SpeechSynthesisUtterance(chunk);
        var x;
        for (x in utt) {
            if (utt.hasOwnProperty(x) && x !== 'text') {
                newUtt[x] = utt[x];
            }
        }
        newUtt.addEventListener('end', function () {
            if (speechUtteranceChunker.cancel) {
                speechUtteranceChunker.cancel = false;
                return;
            }
            settings.offset = settings.offset || 0;
            settings.offset += chunk.length - 1;
            speechUtteranceChunker(utt, settings, callback);
        });
    }
    if (settings.modifier) {
        settings.modifier(newUtt);
    }
    console.log(newUtt); //IMPORTANT!! Do not remove: Logging the object out fixes some onend firing issues.
    //placing the speak invocation inside a callback fixes ordering and onend issues.
    setTimeout(function () {
        speechSynthesis.speak(newUtt);
    }, 0);
};


/******************************************************************************************************************/
/************************************** Subscription **************************************************************/
/******************************************************************************************************************/
$(function() {
    // setTimeout(function() {
    //     writeSubscriptionFromFooter();
    // }, 2000);
    $("form[name='subscribe']").validate({
        rules: {
            'entry.1045781291': {
                required: true,
                email: true
            },
        },
        messages: {
            'entry.1045781291': "Please enter a valid email address",
        },
        submitHandler: function(form) {
            form.submit();
        }
    });
    $("form[name='contact']").validate({
        rules: {
            'entry.986979754': "required",
            'entry.1994351775': {
                required: true,
                email: true
            },
            'entry.1982419716': "required",
            'entry.1643398314': "required",
        },
        messages: {
            'entry.986979754': "Please enter your name",
            'entry.1994351775': "Please enter a valid email address",
            'entry.1982419716': "Please enter some subject",
            'entry.1643398314': "Please enter some message",
        },
        submitHandler: function(form) {
            form.submit();
        }
    });
});

/******************************************************************************************************************/
/************************************** Cookie ********************************************************************/
/******************************************************************************************************************/
$(function() {

    var key = 'peoples-blog-cookie';
    setTimeout(function() {
        var cookie = getStoredValue(key);
        showAcceptCookie(cookie);
        $(".policy-button").click(function() {
            storeValue(key, 'true');
            $("#policy-container").hide(1000);
        });
        $("span.x").click(function() {
            $("#policy-container").hide(1000);
        });
    }, 1000);
    setTimeout(function() {
        storeValue(key, '');
    }, 60 * 60 * 1000);

});
function showAcceptCookie(cookie) {
    if (cookie === 'true') {
        return '';
    }
    var output = '';
    output = '' +
        '<div class="container-fluid policy-container">' +
        '   <div class="title">' +
        '       <span>We Need Your Consent</span>' +
        '       <span class="x"><i class="fa fa-close"></i></span>' +
        '   </div>' +
        '   <div class="desc">' +
        '       <span>By clicking “I Accept Cookies”, you agree to the storing of cookies on your device to enhance site navigation & analyze site usage.</span>' +
        '   </div>' +
        '   <div class="policy-button">I Accept Cookies</div>' +
        '</div>';
    $('#policy-container').html(output);
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

/******************************************************************************************************************/
/************************************** TopBar ********************************************************************/
/******************************************************************************************************************/
$(function() {

    setTimeout(function() {
        showTopBar();
        fontIncreaseDecreaseReset();
    }, 10);

    setTimeout(function() {
        $('p').filter(function() {
            return $.trim($(this).text()) === ''
        }).hide();
    }, 1000);

});
function showTopBar() {
    var url = window.location.href;
    url = url.split(/[?#]/)[0];
    var output = '';
    output = '' +
        '<div class="container-fluid text-right">' +
        '<span class="sizechanger">' +
        '<a id="text_resize_decrease" >-A</a>' +
        '<a id="text_resize_reset">A</a>' +
        '<a id="text_resize_increase">+A</a>' +
        '</span>' +
        '<div class="dropdown">' +
        '<button class="dropbtn">Language</button>' +
        '<div class="dropdown-content">' +
        '<a href="'+url+'?ln=en#googtrans(en|en)" class="lang-en lang-select" data-lang="en">English</a>' +
        '<a href="'+url+'?ln=hi#googtrans(en|hi)" class="lang-hi lang-select" data-lang="hi">Hindi</a>' +
        '<a href="'+url+'?ln=kn#googtrans(en|kn)" class="lang-kn lang-select" data-lang="kn">Kannada</a>' +
        '<a href="'+url+'?ln=ml#googtrans(en|ml)" class="lang-ml lang-select" data-lang="ml">Malayalam</a>' +
        '<a href="'+url+'?ln=ta#googtrans(en|ta)" class="lang-kn lang-select" data-lang="kn">Tamil</a>' +
        '<a href="'+url+'?ln=te#googtrans(en|te)" class="lang-te lang-select" data-lang="te">Telugu</a>' +
        '</div>' +
        '</div>' +
        '</div>';
    $('#top-bar').html(output);
}
function fontIncreaseDecreaseReset() {
    var $affectedElements = $("p, li, small"); // Can be extended, ex. $("div, p, span.someClass")
    $affectedElements.each( function(){
        var $this = $(this);
        $this.data("orig-size", $this.css("font-size") );
    });
    $("#text_resize_increase").click(function() {
        changeFontSize(1);
    })
    $("#text_resize_decrease").click(function(){
        changeFontSize(-1);
    })
    $("#text_resize_reset").click(function(){
        $affectedElements.each( function(){
            var $this = $(this);
            $this.css( "font-size" , $this.data("orig-size") );
        });
    })
    function changeFontSize(direction){
        $affectedElements.each( function(){
            var $this = $(this);
            $this.css( "font-size" , parseInt($this.css("font-size"))+direction );
        });
    }
}

/******************************************************************************************************************/
/************************************** Security ******************************************************************/
/******************************************************************************************************************/
$(function() {
    setTimeout(function() {
        if (localEnv() === false) {
            disableCtrlU();
            disableInspectElement();
        }
    }, 10);
});
function localEnv() {
    var baseurl = window.location.origin;
    if (baseurl === 'http://kakumdk.local') {
        return true;
    }
    return false;
}
function disableCtrlU() {
    document.onkeydown = function(e) {
        if (e.ctrlKey &&
            (e.keyCode === 67 ||
                e.keyCode === 86 ||
                e.keyCode === 85 ||
                e.keyCode === 117)) {
            return false;
        }
        else {
            return true;
        }
    };
}
function disableInspectElement() {
    document.addEventListener('contextmenu', function(e) {
        e.preventDefault();
    });
}


/******************************************************************************************************************/
/************************************** Authors ******************************************************************/
/******************************************************************************************************************/
$(function() {

    readFile("/authors-content-merged/authors.json", function (text) {
        $(".peoplesblog-authors-links").html(writeAuthorLinks(JSON.parse(text)));
        $(".peoplesblog-authors").append(writeAuthors(JSON.parse(text)));
    });

});
function writeAuthorLinks(data) {
    var output = '';
    output += '<hr class="invis"><h5 id="authors">Authors</h5>' +
        '<div class="site-links">';
    for (var i = 0; i < data.length; i++) {
        var author = data[i]['author'];
        var authorLink = '/authors/' + data[i]['file'].replaceAll('.json', '.html');
        output += '<div class="child"><span><i class="fa fa-user"></i> <a href="'+authorLink+'">'+author+'</a></span></div>';
    }
    output += '</div>';
    // console.log(output);
    return output;
}
function writeAuthors(data) {
    var output = '';
    output += '<div class="site-links">';
    for (var i = 0; i < data.length; i++) {
        var author = data[i]['author'];
        var authorLink = '/authors/' + data[i]['file'].replaceAll('.json', '.html');
        output += '<span><i class="fa fa-user"></i> <a href="'+authorLink+'">'+author+'</a></span><br/>';
    }
    output += '</div>';
    return output;
}

/******************************************************************************************************************/
/************************************** Pager ******************************************************************/
/******************************************************************************************************************/
$(function() {

    setTimeout(function () {
        $(".blog-list-homepage-blogs_pager ._pager li").click(function() {
            var clickedPageArray = $(this).attr('class').split(/\s+/);
            var clickedPage = clickedPageArray[0];
            var i = 1;
            var from = (clickedPage - 1) * numberofArticlesPerPage
            var to = from + numberofArticlesPerPage;
            $("ul._pager li").each(function () {
                $(this).removeClass('prev');
                $(this).removeClass('active');
                $(this).removeClass('next');
            });
            $(this).prev().addClass('prev');
            $(this).addClass('active');
            $(this).next().addClass('next');
            $(".blog-list-homepage-blogs div.blog-box").each(function() {
                if (i > from && i < (to + 1)) {
                    $(this).removeClass('hidden');
                }
                else {
                    $(this).addClass('hidden');
                }
                i++;
            });
            $("html, body").animate({ scrollTop: 0 }, "slow");
        });
    }, 2000);
    setTimeout(function () {
        $(".blog-list-blogs_pager ._pager li").click(function() {
            var clickedPageArray = $(this).attr('class').split(/\s+/);
            var clickedPage = clickedPageArray[0];
            var i = 1;
            var from = (clickedPage - 1) * (numberofArticlesPerPage + 1)
            var to = from + (numberofArticlesPerPage + 1);
            $("ul._pager li").each(function () {
                $(this).removeClass('prev');
                $(this).removeClass('active');
                $(this).removeClass('next');
            });
            $(this).prev().addClass('prev');
            $(this).addClass('active');
            $(this).next().addClass('next');
            $("html, body").animate({ scrollTop: 0 }, "slow");
            $(".blog-grid-system .blog-list-blogs > div.col-md-6").each(function() {
                if (i > from && i < (to + 1)) {
                    $(this).removeClass('hidden');
                }
                else {
                    $(this).addClass('hidden');
                }
                i++;
            });
        });
        $(".blog-list-type_pager ._pager li").click(function() {
            var clickedPageArray = $(this).attr('class').split(/\s+/);
            var clickedPage = clickedPageArray[0];
            var i = 1;
            var from = (clickedPage - 1) * numberofArticlesPerPage
            var to = from + numberofArticlesPerPage;
            $("ul._pager li").each(function () {
                $(this).removeClass('prev');
                $(this).removeClass('active');
                $(this).removeClass('next');
            });
            $(this).prev().addClass('prev');
            $(this).addClass('active');
            $(this).next().addClass('next');
            $("html, body").animate({ scrollTop: 0 }, "slow");
            $(".blog-list-type div.blog-box").each(function() {
                if (i > from && i < (to + 1)) {
                    $(this).removeClass('hidden');
                }
                else {
                    $(this).addClass('hidden');
                }
                i++;
            });
        });
        $(".blog-list-category_pager ._pager li").click(function() {
            var clickedPageArray = $(this).attr('class').split(/\s+/);
            var clickedPage = clickedPageArray[0];
            var i = 1;
            var from = (clickedPage - 1) * numberofArticlesPerPage
            var to = from + numberofArticlesPerPage;
            $("ul._pager li").each(function () {
                $(this).removeClass('prev');
                $(this).removeClass('active');
                $(this).removeClass('next');
            });
            $(this).prev().addClass('prev');
            $(this).addClass('active');
            $(this).next().addClass('next');
            $("html, body").animate({ scrollTop: 0 }, "slow");
            $(".blog-list-category div.blog-box").each(function() {
                if (i > from && i < (to + 1)) {
                    $(this).removeClass('hidden');
                }
                else {
                    $(this).addClass('hidden');
                }
                i++;
            });
        });
        $(".blog-list-blogs-authors_pager ._pager li").click(function() {
            var clickedPageArray = $(this).attr('class').split(/\s+/);
            var clickedPage = clickedPageArray[0];
            var i = 1;
            var from = (clickedPage - 1) * (numberofArticlesPerPage - 1)
            var to = from + (numberofArticlesPerPage - 1);
            $("ul._pager li").each(function () {
                $(this).removeClass('prev');
                $(this).removeClass('active');
                $(this).removeClass('next');
            });
            $(this).prev().addClass('prev');
            $(this).addClass('active');
            $(this).next().addClass('next');
            $("html, body").animate({ scrollTop: 0 }, "slow");
            $(".blog-list-blogs-authors div.blog-box").each(function() {
                if (i > from && i < (to + 1)) {
                    $(this).removeClass('hidden');
                }
                else {
                    $(this).addClass('hidden');
                }
                i++;
            });
        });
    }, 2000);

});
function writeBlogsHomepagePager(data) {
    var pagerItems = Math.ceil(data.length / numberofArticlesPerPage);
    var output = '';
    output += '<ul class="_pager pagination justify-content-center">';
    for (var i = 1; i <= pagerItems; i++) {
        if (i === 1) {
            output += '<li class="'+i+' page-item active"><a class="page-link" href="#">'+i+'</a></li>';
        }
        else if (i === 2) {
            output += '<li class="'+i+' page-item next"><a class="page-link" href="#">'+i+'</a></li>';
        }
        else {
            output += '<li class="'+i+' page-item"><a class="page-link" href="#">'+i+'</a></li>';
        }
    }
    output += '' +
        '</ul>';
    return output;
}
function writeBlogsPager(data) {
    var pagerItems = Math.ceil(data.length / (numberofArticlesPerPage + 1));
    var output = '';
    output += '<ul class="_pager pagination justify-content-center">';
    for (var i = 1; i <= pagerItems; i++) {
        if (i === 1) {
            output += '<li class="'+i+' page-item active"><a class="page-link" href="#">'+i+'</a></li>';
        }
        else if (i === 2) {
            output += '<li class="'+i+' page-item next"><a class="page-link" href="#">'+i+'</a></li>';
        }
        else {
            output += '<li class="'+i+' page-item"><a class="page-link" href="#">'+i+'</a></li>';
        }
    }
    output += '' +
        '</ul>';
    return output;
}
function writeBlogTypesPager(data) {
    var currentpath = window.location.pathname.split('/');
    var pageCount = 0;
    for (var i = data.length - 1; i >= 0; i--) {
        var type = data[i]['type'].split(',');
        var category = data[i]['category'].split(',');
        for (var j = 0; j < type.length; j++) {
            var currentType = type[j].trim().replace(" ", "-");
            var path = '/blogs/' + currentType + '/' +
                category[0].trim().replace(" ", "-") + '/' +
                data[i]['file'].replace(".json", ".html");
            if (currentType === currentpath[2]) {
                pageCount++;
            }
        }
    }
    var pagerItems = Math.ceil(pageCount / numberofArticlesPerPage);
    var output = '';
    if (pageCount > numberofArticlesPerPage) {
        output += '<ul class="_pager pagination justify-content-center">';
        for (var i = 1; i <= pagerItems; i++) {
            if (i === 1) {
                output += '<li class="'+i+' page-item active"><a class="page-link" href="#">'+i+'</a></li>';
            }
            else if (i === 2) {
                output += '<li class="'+i+' page-item next"><a class="page-link" href="#">'+i+'</a></li>';
            }
            else {
                output += '<li class="'+i+' page-item"><a class="page-link" href="#">'+i+'</a></li>';
            }
        }
        output += '' +
            '</ul>';
    }
    return output;
}
function writeBlogTypeCategoriesPager(data) {
    var currentpath = window.location.pathname.split('/');
    var pageCount = 0;
    for (var i = data.length - 1; i >= 0; i--) {
        var type = data[i]['type'].split(',');
        var category = data[i]['category'].split(',');
        for (var j = 0; j < type.length; j++) {
            var currentType = type[j].trim().replace(" ", "-");
            for (var k = 0; k < category.length; k++) {
                var currentCat = category[k].trim().replace(" ", "-");
                var path = '/blogs/' + currentType + '/' + currentCat + '/' + data[i]['file'].replace(".json", ".html");
                if (currentCat === currentpath[3]) {
                    pageCount++;
                }
            }
        }
    }
    var pagerItems = Math.ceil(pageCount / numberofArticlesPerPage);
    var output = '';
    if (pageCount > numberofArticlesPerPage) {
        output += '<ul class="_pager pagination justify-content-center">';
        for (var i = 1; i <= pagerItems; i++) {
            if (i === 1) {
                output += '<li class="'+i+' page-item active"><a class="page-link" href="#">'+i+'</a></li>';
            }
            else if (i === 2) {
                output += '<li class="'+i+' page-item next"><a class="page-link" href="#">'+i+'</a></li>';
            }
            else {
                output += '<li class="'+i+' page-item"><a class="page-link" href="#">'+i+'</a></li>';
            }
        }
        output += '' +
            '</ul>';
    }
    return output;
}
function writeAuthorBlogsPager(data) {
    var currentpath = window.location.pathname.split('/');
    var pageCount = 0;
    if (currentpath['2']) {
        if (currentpath['2'].replaceAll('.html', '')) {
            if (currentpath['2'].replaceAll('.html', '').replaceAll('-', ' ')) {
                var author = currentpath['2'].replaceAll('.html', '').replaceAll('-', ' ');
                for (var i = data.length - 1; i >= 0; i--) {
                    if (author === data[i]['author']) {
                        pageCount++;
                    }
                }
            }
        }
    }
    console.log(pageCount);
    var pagerItems = Math.ceil(pageCount / (numberofArticlesPerPage - 1));
    var output = '';
    if (pageCount > (numberofArticlesPerPage - 2)) {
        output += '<ul class="_pager pagination justify-content-center">';
        for (var i = 1; i <= pagerItems; i++) {
            if (i === 1) {
                output += '<li class="'+i+' page-item active"><a class="page-link" href="#">'+i+'</a></li>';
            }
            else if (i === 2) {
                output += '<li class="'+i+' page-item next"><a class="page-link" href="#">'+i+'</a></li>';
            }
            else {
                output += '<li class="'+i+' page-item"><a class="page-link" href="#">'+i+'</a></li>';
            }
        }
        output += '' +
            '</ul>';
    }
    return output;
}