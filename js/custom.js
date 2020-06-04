/**************************************
    File Name: custom.js
    Template Name: Peoples Blog
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

/******************************************************************************************************************
 File Name: custom.js
 Custom
 ******************************************************************************************************************/
$(function() {

    $("#head").load("content/head.html");
    $("#header").load("content/header.html");
    $("#footer").load("content/footer.html");

    readFile("blogs-content-merged/blogs.json", function(text){
        var data = JSON.parse(text);
        var output = writeBlogsHomepageHeader(data);
        $('.blog-list-homepage').html(output);
    });
    readFile("../blogs-content-merged/blogs.json", function(text){
        var data = JSON.parse(text);
        var output = writeBlogsHomepage(data);
        $('.blog-list-homepage-blogs').html(output);
        $('.blog-list-homepage-footer').html(writeBlogsFooter(data));
    });
    readFile("../blogs-content-merged/blogs.json", function(text){
        var data = JSON.parse(text);
        var output = writeBlogs(data);
        $('.blog-list-blogs').html(output);
        $('.blog-list-homepage-footer').html(writeBlogsFooter(data));
    });
    readFile("../../blogs-content-merged/blogs.json", function(text){
        var data = JSON.parse(text);
        var output = writeBlogTypes(data);
        $('.blog-list-type').html(output);
        $('.blog-list-homepage-footer').html(writeBlogsFooter(data));
    });
    readFile("../../../blogs-content-merged/blogs.json", function(text){
        var data = JSON.parse(text);
        var output = writeBlogTypeCategories(data);
        $('.blog-list-category').html(output);
        $('.blog-list-homepage-footer').html(writeBlogsFooter(data));
    });
    $("#see-more").click(function() {
        $('.blog-list-homepage-blogs .blog-box').removeClass('hidden');
        $('.blog-list-blogs .blog-box').removeClass('hidden');
        $('.blog-list-type .blog-box').removeClass('hidden');
        $('.blog-list-category .blog-box').removeClass('hidden');
        $(this).addClass('hidden');
    });
    $(".post-sharing-top").html(writeSocialShareLinks('blog'));
    $(".post-sharing-footer").html(writeSocialShareLinks('footer'));

    readFile("blogs-content-merged/blogs.json", function(text){
        $(".techblog-links").html(writeLinks(JSON.parse(text)));
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
                        '<img src="'+data[i]['banner788x443']+'" alt="" class="img-fluid">' +
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
        else if (i === data.length - 2) {
            output +=
                '<div class="second-slot">' +
                    '<div class="masonry-box post-media">' +
                        '<img src="'+data[i]['banner394x449']+'" alt="" class="img-fluid">' +
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
        else if (i === data.length - 3) {
            output +=
                '<div class="last-slot">' +
                    '<div class="masonry-box post-media">' +
                        '<img src="'+data[i]['banner394x449']+'" alt="" class="img-fluid">' +
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
        continue;
    }
    return output;
}
function writeBlogsHomepage(data) {
    var output = '';
    var itr = 0;
    for (var i = data.length - 1; i >= 0; i--) {
        var type = data[i]['type'].split(',');
        var category = data[i]['category'].split(',');
        var path = '/blogs/' +
            type[0].replace(" ", "-") + '/' +
            category[0].replace(" ", "-") + '/' +
            data[i]['file'].replace(".json", ".html");
        if (itr >= 5) {
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
            // '<img src="../../../' + val.banner + '" alt="" class="img-fluid">' +
            '<img src="../../../'+data[i]['banner600x500']+'" alt="" class="img-fluid">' +
            '<div class="hovereffect"></div>' +
            '</a>' +
            '</div><!-- end media -->' +
            '</div><!-- end col -->' +
            '<div class="blog-meta big-meta col-md-8">' +
            '<h4><a href="' + path + '" title="">' + data[i]['title'] + '</a></h4>' +
            '<div class="blog-content-overflow"><p>' + data[i]['content'] + '</p></div>' +
            '<small class="firstsmall"><a class="bg-orange" href="/blogs/'+type[0].replace(" ", "-")+'" title="">' + type[0] + '</a></small>' +
            '<small>' + data[i]['created'] + '</small>' +
            '<small>by ' + data[i]['author'] + '</small>' +
            // '<small><a href="single.html" title=""><i class="fa fa-eye"></i> 1114</a></small>' +
            '</div><!-- end meta -->' +
            '</div><!-- end blog-box -->';
        output += '<hr class="invis">';
        if (itr === 2) {
            output += '<div class="ads-page-6"></div>';
        }
        if (itr === 4) {
            output += '<div class="ads-page-6"></div>';
        }
    }
    return output;
}
function writeBlogs(data) {
    var output = '';
    var itr = 0;
    for (var i = data.length - 1; i >= 0; i--) {
        var type = data[i]['type'].split(',');
        var category = data[i]['category'].split(',');
        var path = '/blogs/' +
            type[0].replace(" ", "-") + '/' +
            category[0].replace(" ", "-") + '/' +
            data[i]['file'].replace(".json", ".html");
        if (itr >= 5) {
            output += '<div class="col-md-6 hidden">';
        }
        else {
            output += '<div class="col-md-6">';
        }
        itr = itr + 1;
        output +=
            '<div class="blog-box">' +
            '<div class="post-media">' +
            '<a href="' + path + '" title="">' +
            '<img src="../../../'+data[i]['banner800x460']+'" alt="" class="img-fluid">' +
            '<div class="hovereffect">' +
            '<span></span>' +
            '</div><!-- end hover -->' +
            '</a>' +
            '</div><!-- end media -->' +
            '<div class="blog-meta big-meta">' +
            '<span class="color-orange"><a href="/blogs/'+type[0].replace(" ", "-")+'" title="">' + type[0] + '</a></span>' +
            '<h4><a href="' + path + '" title="">' + data[i]['title'] + '</a></h4>' +
            '<div class="blog-content-overflow"><p>' + data[i]['content'] + '</p></div>' +
            '<small>' + data[i]['created'] + '</small>' +
            '<small>by ' + data[i]['author'] + '</small>' +
            '</div><!-- end meta -->' +
            '</div><!-- end blog-box -->' +
            '</div>'+
            '<hr class="invis">';
        if (itr % 2 === 0) {
            output += '<div class="col-md-12"><div class="ads-page-5"></div></div>';
        }
    }
    return output;
}
function writeBlogTypes(data) {
    var output = '';
    var itr = 0;
    for (var i = data.length - 1; i >= 0; i--) {
        var type = data[i]['type'].split(',');
        var category = data[i]['category'].split(',');
        for (var j = 0; j < type.length; j++) {
            var currentType = type[j].trim().replace(" ", "-");
            var path = '/blogs/' + currentType + '/' +
                category[0].trim().replace(" ", "-") + '/' +
                data[i]['file'].replace(".json", ".html");
            var currentpath = window.location.pathname.split('/');
            if (currentType === currentpath[2]) {
                if (itr >= 5) {
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
                    // '<img src="../../../' + val.banner + '" alt="" class="img-fluid">' +
                    '<img src="../../../'+data[i]['banner600x500']+'" alt="" class="img-fluid">' +
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
                if (itr === 2) {
                    output += '<div class="ads-page-4"></div>';
                }
                if (itr === 4) {
                    output += '<div class="ads-page-4"></div>';
                }
            }
            continue;
        }

        continue;
    }
    return output;
}
function writeBlogTypeCategories(data) {
    var output = '';
    var itr = 0;
    for (var i = data.length - 1; i >= 0; i--) {
        var type = data[i]['type'].split(',');
        var category = data[i]['category'].split(',');
        for (var j = 0; j < type.length; j++) {
            var currentType = type[j].trim().replace(" ", "-");
            var path = '/blogs/' + currentType + '/' +
                category[0].trim().replace(" ", "-") + '/' +
                data[i]['file'].replace(".json", ".html");
            var currentpath = window.location.pathname.split('/');
            if (currentType === currentpath[2]) {
                if (itr >= 5) {
                    output += '<div class="blog-box hidden">';
                }
                else {
                    output += '<div class="blog-box">';
                }
                itr = itr + 1;
                output +=
                    '<div class="post-media">' +
                    '<a href="' + path + '" title="">' +
                    '<img src="../../../'+data[i]['banner800x460']+'" alt="" class="img-fluid">' +
                    '<div class="hovereffect">' +
                    '<span class="videohover"></span>' +
                    '</div>' +
                    '<!-- end hover -->' +
                    '</a>' +
                    '</div>' +
                    '<!-- end media -->' +
                    '<div class="blog-meta big-meta text-center">' +
                    '<h4><a href="' + path + '" title="">' + data[i]['title'] + '</a></h4>' +
                    '<div class="blog-content-overflow"><p>' + data[i]['content'] + '</p></div>' +
                    '<small class="firstsmall"><a class="bg-orange" href="/blogs/'+currentType+'" title="">' + type[j].trim() + '</a></small>' +
                    '<small>' + data[i]['created'] + '</small>' +
                    '<small>by ' + data[i]['author'] + '</small>' +
                    '</div><!-- end meta -->' +
                    '</div><!-- end blog-box -->' +
                    '<hr class="invis">';
                if (itr === 2) {
                    output += '<div class="ads-page-3"></div>';
                }
                if (itr === 4) {
                    output += '<div class="ads-page-3"></div>';
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
                allCat[currentCat] = '/blogs/' + currentType + '/' + currentCat;
            }
        }
    }
    var f_itr = 0;
    $.each(allCat, function(i, el){
        if($.inArray(el, uniqueCat) === -1) {
            if (f_itr <= 3) {
                uniqueCat[i] = el;
                output += '<li><a href="'+el+'" title="">'+i+'</a></li>';
                f_itr = f_itr + 1;
            }
        }
    });
    return output;
}
function writeSocialShareLinks(region) {
    var title = $(document).find("title").text();
    var url = window.location.href;
    var hashtags = 'TechBlog'
    var linkedin = 'http://www.linkedin.com/shareArticle?mini=true&amp;url=' + url;
    var twitter = 'https://twitter.com/share?url='+url+'&amp;text='+title+'&amp;hashtags='+hashtags;
    var facebook = 'http://www.facebook.com/sharer.php?u='+url;
    var whatsapp = 'https://web.whatsapp.com/send?text='+url;
    var whatsapp_phone = 'https://api.whatsapp.com/send?text='+url;
    var mail = 'mailto:?Subject='+title+'&amp;Body='+title+' '+url+'';
    if (region === 'blog') {
        var output = '' +
            '<ul class="list-inline">' +
            '<li><a href="'+linkedin+'" target="_blank" class="btn-floating btn-lg btn-li" type="button" role="button"><i class="fa fa-linkedin"></i></a></li>' +
            '<li><a href="'+twitter+'" target="_blank" class="btn-floating btn-lg btn-tw" type="button" role="button"><i class="fa fa-twitter"></i></a></li>' +
            '<li><a href="'+facebook+'" target="_blank" class="btn-floating btn-lg btn-fb" type="button" role="button"><i class="fa fa-facebook"></i></a></li>' +
            '<li class="whatsapp-desktop"><a href="'+whatsapp+'" target="_blank" class="btn-floating btn-lg btn-whatsapp" type="button" role="button"><i class="fa fa-whatsapp"></i></a></li>' +
            '<li class="whatsapp-mobile"><a href="'+whatsapp_phone+'" target="_blank" class="btn-floating btn-lg btn-whatsapp" type="button" role="button"><i class="fa fa-whatsapp"></i></a></li>' +
            '<li><a href="'+mail+'" target="_blank" class="btn-floating btn-lg btn-email" type="button" role="button"><i class="fa fa-envelope"></i></a></li>' +
            '</ul>';
        return output;
    }
    if (region === 'footer') {
        return '' +
            '<a href="'+linkedin+'" target="_blank"  data-toggle="tooltip" data-placement="bottom" title="Linkedin"><i class="fa fa-linkedin"></i></a>' +
            '<a href="'+twitter+'" target="_blank"  data-toggle="tooltip" data-placement="bottom" title="Twitter"><i class="fa fa-twitter"></i></a>' +
            '<a href="'+facebook+'" target="_blank"  data-toggle="tooltip" data-placement="bottom" title="Facebook"><i class="fa fa-facebook"></i></a>' +
            '<a class="whatsapp-desktop" href="'+whatsapp+'" target="_blank"  data-toggle="tooltip" data-placement="bottom" title="Whatsapp"><i class="fa fa-whatsapp"></i></a>' +
            '<a class="whatsapp-mobile" href="'+whatsapp_phone+'" target="_blank"  data-toggle="tooltip" data-placement="bottom" title="Whatsapp"><i class="fa fa-whatsapp"></i></a>' +
            '<a href="'+mail+'" target="_blank"  data-toggle="tooltip" data-placement="bottom" title="Email"><i class="fa fa-envelope"></i></a>';
    }
}
function writeLinks(data) {
    var output = '';
    var itr = 0;
    for (var i = data.length - 1; i >= 0; i--) {
        var type = data[i]['type'].split(',');
        var category = data[i]['category'].split(',');
        for (var j = 0; j < type.length; j++) {
            var currentType = type[j].trim().replace(" ", "-");
            for (var k = 0; k < category.length; k++) {
                var currentCat = category[k].trim().replace(" ", "-");
                var baseurl = window.location.origin;
                var typeLink = baseurl+'/blogs/'+currentType;
                var catLink = baseurl+'/blogs/'+currentType+'/'+currentCat;
                var path = baseurl+'/blogs/' + currentType + '/' +
                    category[0].trim().replace(" ", "-") + '/' +
                    data[i]['file'].replace(".json", ".html");
                output += '<div class="site-links">' +
                    '<span><i class="fa fa-file"></i> <a href="'+typeLink+'">'+type[j]+'</a></span>' +
                    '<span><i class="fa fa-tag"></i> <a href="'+catLink+'">'+currentCat+'</a></span>' +
                    '<span><i class="fa fa-book"></i> <a href="'+path+'">'+path+'</a></span>' +
                    '</div>';
            }
        }
    }
    return output;
}

/******************************************************************************************************************/
/************************************** ADS ***********************************************************************/
/******************************************************************************************************************/
$(function() {
    readFile("ads/ads.json", function(text){
        $('.ads-home').html(writeAds300x600(JSON.parse(text), 'home'));
        $('.ads-home').append(writeAds1200x1200(JSON.parse(text), 'home'));
        $('.ads-home').append(writeAds300x600(JSON.parse(text), 'home'));
        $('.ads-page-6').html(writeAds728x90(JSON.parse(text), 'home'));
        adShowHidePage('ads-page-6');
    });
    readFile("../ads/ads.json", function(text){
        $('.ads-blogs').html(writeAds1200x1200(JSON.parse(text), 'blogs'));
        $('.ads-blogs').append(writeAds300x600(JSON.parse(text), 'blogs'));
        $('.ads-blogs').append(writeAds300x600(JSON.parse(text), 'blogs'));
        $('.ads-blogs').append(writeAds1200x1200(JSON.parse(text), 'blogs'));
        $('.ads-page-5').html(writeAds728x90(JSON.parse(text), 'blogs'));
        adShowHidePage('ads-page-5');
    });
    readFile("../../ads/ads.json", function(text){
        $('.ads-type').html(writeAds300x600(JSON.parse(text), 'type'));
        $('.ads-type').append(writeAds1200x1200(JSON.parse(text), 'type'));
        $('.ads-type').append(writeAds300x600(JSON.parse(text), 'type'));
        $('.ads-page-4').html(writeAds728x90(JSON.parse(text), 'type'));
        adShowHidePage('ads-page-4');
    });
    readFile("../../../ads/ads.json", function(text){
        $('.ads').html(writeAds1200x1200(JSON.parse(text), 'cat'));
        $('.ads').append(writeAds300x600(JSON.parse(text), 'cat'));
        $('.ads').append(writeAds300x600(JSON.parse(text), 'cat'));
        $('.ads').append(writeAds1200x1200(JSON.parse(text), 'cat'));
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
    }, 3000);

});
function writeAds300x600(data, page) {
    var output = "";
    var random = data[Math.floor(Math.random() * data.length)];
    output += '' +
        '<div class="widget">' +
        '<div class="banner-spot clearfix">' +
        '<div class="banner-img">' +
        '';
    if (page === 'home') {
        output += '<a target="_blank" href="'+random['url']+'"><img src="'+random['img300x600']+'" alt="" class="img-fluid"></a>';
    }
    else if (page === 'blogs') {
        output += '<a target="_blank" href="'+random['url']+'"><img src="../'+random['img300x600']+'" alt="" class="img-fluid"></a>';
    }
    else if (page === 'type') {
        output += '<a target="_blank" href="'+random['url']+'"><img src="../../'+random['img300x600']+'" alt="" class="img-fluid"></a>';
    }
    else if (page === 'cat') {
        output += '<a target="_blank" href="'+random['url']+'"><img src="../../../'+random['img300x600']+'" alt="" class="img-fluid"></a>';
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
        output += '<a target="_blank" href="'+random['url']+'"><img src="'+random['img728x90']+'" alt="" class="img-fluid"></a>';
    }
    if (page === 'blogs') {
        output += '<a target="_blank" href="'+random['url']+'"><img src="../'+random['img728x90']+'" alt="" class="img-fluid"></a>';
    }
    if (page === 'type') {
        output += '<a target="_blank" href="'+random['url']+'"><img src="../../'+random['img728x90']+'" alt="" class="img-fluid"></a>';
    }
    if (page === 'cat') {
        output += '<a target="_blank" href="'+random['url']+'"><img src="../../../'+random['img728x90']+'" alt="" class="img-fluid"></a>';
    }
    output += '</div><!-- end banner-img -->' +
        '</div><!-- end banner -->' +
        '</div><!-- end col -->' +
        '</div><!-- end row -->' +
        '<hr class="invis1">';
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
        output += '<a target="_blank" href="'+random['url']+'"><img src="'+random['img1200x1200']+'" alt="" class="img-fluid"></a>';
    }
    if (page === 'blogs') {
        output += '<a target="_blank" href="'+random['url']+'"><img src="../'+random['img1200x1200']+'" alt="" class="img-fluid"></a>';
    }
    if (page === 'type') {
        output += '<a target="_blank" href="'+random['url']+'"><img src="../../'+random['img1200x1200']+'" alt="" class="img-fluid"></a>';
    }
    if (page === 'cat') {
        output += '<a target="_blank" href="'+random['url']+'"><img src="../../../'+random['img1200x1200']+'" alt="" class="img-fluid"></a>';
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
/************************************** ADS ***********************************************************************/
/******************************************************************************************************************/
$(function() {
    readFile("quotes/quotes.json", function (text) {
        $('.peoples-quotes').html(writeQuotes(JSON.parse(text)));
    });
    readFile("../quotes/quotes.json", function (text) {
        $('.peoples-quotes').html(writeQuotes(JSON.parse(text)));
    });
    readFile("../../quotes/quotes.json", function (text) {
        $('.peoples-quotes').html(writeQuotes(JSON.parse(text)));
    });
    readFile("../../../quotes/quotes.json", function (text) {
        $('.peoples-quotes').html(writeQuotes(JSON.parse(text)));
    });
});
function writeQuotes(data) {
    var output = "";
    var random = data[Math.floor(Math.random() * data.length)];
    output += '<span>'+random['quote']+'</span>';
    return output;
}