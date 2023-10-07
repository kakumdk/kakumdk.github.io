/**
 * Helpers
 * @param key
 * @param value
 */
function putLocalStorageValue(key, value) {
    if (localStorage) {
        localStorage.setItem(key, value);
    } else {
        $.cookies.set(key, value);
    }
}
function getLocalStorageValue(key) {
    if (localStorage) {
        return localStorage.getItem(key);
    } else {
        return $.cookies.get(key);
    }
}

/**
 *
 */
$(function() {

    searchArticlesListPage();
    topBarGoogleTranslation();
    scrollTopBottom();
    siteFixedAd();
    cookiePolicy();

    $(".post-sharing-top").html(writeSocialShareLinks('blog'));
    $(".social-copy").click(function (event) {
        event.preventDefault();
        socialCopyLink();
    });
    $(".social-web-share-api").click(function (event) {
        event.preventDefault();
        socialWebShare();
    });

    homePageSlideshow();

});

function searchArticlesListPage() {
    $('input[type=text]#search-articles').focus();
    $("#search-articles").on("keyup", function(event) {
        $('.search-articles .article').removeClass('hide');
        $('.search-articles').children('.article').each(function () {
            var title = $(this).find('h4').children('a').text().toLowerCase();
            title += " " + $(this).find('.articles-summary').text().toLowerCase();
            title += " " + $(this).find('.articles-author').text().toLowerCase();
            title += " " + $(this).find('.articles-labels').text().toLowerCase();
            var search = event.currentTarget.value.toLowerCase();
            var searchFor = search.split(' ');
            for (var i = 0, ln = searchFor.length; i < ln; i++) {
                if (title.indexOf(searchFor[i]) !== -1) {
                    $(this).show();
                }
                else {
                    $(this).hide();
                }
            }
        });
    });
}

function topBarGoogleTranslation() {
    var url = window.location.href;
    url = url.split(/[?#]/)[0];
    var output = '' +
        '<a href="'+url+'?ln=en#googtrans(en|en)" class="lang-en lang-select" data-lang="en">English</a>' +
        '<a href="'+url+'?ln=hi#googtrans(en|hi)" class="lang-hi lang-select" data-lang="hi">Hindi</a>' +
        '<a href="'+url+'?ln=kn#googtrans(en|kn)" class="lang-kn lang-select" data-lang="kn">Kannada</a>' +
        '<a href="'+url+'?ln=ml#googtrans(en|ml)" class="lang-ml lang-select" data-lang="ml">Malayalam</a>' +
        '<a href="'+url+'?ln=ta#googtrans(en|ta)" class="lang-kn lang-select" data-lang="kn">Tamil</a>' +
        '<a href="'+url+'?ln=te#googtrans(en|te)" class="lang-te lang-select" data-lang="te">Telugu</a>';
    $('.dropdown-content').append(output);
}

function scrollTopBottom() {
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
}

function siteFixedAd() {
    setTimeout(function() {
        $("#site-fixed-ad-container .x").removeClass('d-none');
        $("#site-fixed-ad-container .x").click(function() {
            $("#site-fixed-ad-container").hide(1000);
        });
    }, 1000 * 5);
}

function cookiePolicy() {
    var key = 'peoples-blog-cookie';
    var cookie = getStoredValue(key);
    // console.log(cookie);
    if (cookie === 'true') {
        $("#policy-container").hide();
    }
    $(".policy-button").click(function() {
        storeValue(key, 'true');
        $("#policy-container").hide(1000);
    });
    $("#policy-container span.x").click(function() {
        $("#policy-container").hide(1000);
    });
    setTimeout(function() {
        storeValue(key, '');
    }, 60 * 60 * 1000);
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

function writeSocialShareLinks() {
    var title = $(document).find("title").text().replaceAll("|", "-");
    var url = window.location.href;
    var hashtags = 'People&#039;sBlog'
    var linkedin = 'http://www.linkedin.com/shareArticle?mini=true&amp;url=' + url;
    var twitter = 'https://twitter.com/share?url=' + url + '&amp;text=' + title + '&amp;hashtags=' + hashtags;
    var facebook = 'http://www.facebook.com/sharer.php?u=' + url;
    var whatsapp = 'https://web.whatsapp.com/send?text=' + url;
    var whatsapp_phone = 'https://api.whatsapp.com/send?text=' + url;
    var mail = 'mailto:?Subject=' + title + '&amp;Body=' + title + ' ' + url + '';
    var output = '' +
        '<ul class="list-inline">' +
        '<li class="whatsapp-desktop"><a title="Share now on Linkedin" href="' + linkedin + '" target="_blank" class="btn-floating btn-lg btn-li" type="button" role="button"><i class="fa fa-linkedin"></i></a></li>' +
        '<li class="whatsapp-mobile"><a title="Share now on Linkedin" href="' + linkedin + '" class="btn-floating btn-lg btn-li" type="button" role="button"><i class="fa fa-linkedin"></i></a></li>' +
        '<li class="whatsapp-desktop"><a title="Share now on Twitter" href="' + twitter + '" target="_blank" class="btn-floating btn-lg btn-tw" type="button" role="button"><i class="fa fa-twitter"></i></a></li>' +
        '<li class="whatsapp-mobile"><a title="Share now on Twitter" href="' + twitter + '" class="btn-floating btn-lg btn-tw" type="button" role="button"><i class="fa fa-twitter"></i></a></li>' +
        '<li class="whatsapp-desktop"><a title="Share now on Facebook" href="' + facebook + '" target="_blank" class="btn-floating btn-lg btn-fb" type="button" role="button"><i class="fa fa-facebook"></i></a></li>' +
        '<li class="whatsapp-mobile"><a title="Share now on Facebook" href="' + facebook + '" class="btn-floating btn-lg btn-fb" type="button" role="button"><i class="fa fa-facebook"></i></a></li>' +
        '<li class="whatsapp-desktop"><a title="Share now on Whatsapp" href="' + whatsapp + '" target="_blank" class="btn-floating btn-lg btn-whatsapp" type="button" role="button"><i class="fa fa-whatsapp"></i></a></li>' +
        '<li class="whatsapp-mobile"><a title="Share now on Whatsapp" href="' + whatsapp_phone + '" class="btn-floating btn-lg btn-whatsapp" type="button" role="button"><i class="fa fa-whatsapp"></i></a></li>' +
        '<li class="whatsapp-mobile sticky"><a title="Share now on Whatsapp" href="' + whatsapp_phone + '" class="btn-floating btn-lg btn-whatsapp" type="button" role="button"><i class="fa fa-whatsapp"></i></a></li>' +
        // '<li><a title="Share now on E-mail" href="'+mail+'" target="_blank" class="btn-floating btn-lg btn-email" type="button" role="button"><i class="fa fa-envelope"></i></a></li>' +
        '<li class="whatsapp-desktop"><a title="Copy Link" href="' + url + '" class="btn-floating btn-lg social-copy" type="button" role="button"><i class="fa fa-link"></i></a></li>' +
        '<li class="whatsapp-mobile"><a title="' + title + '" href="' + url + '" class="btn-floating btn-lg social-web-share-api" type="button" role="button"><i class="fa fa-share-alt"></i></a></li>' +
        '<li class="whatsapp-mobile sticky sticky1"><a title="' + title + '" href="' + url + '" class="btn-floating btn-lg social-web-share-api" type="button" role="button"><i class="fa fa-share-alt"></i></a></li>' +
        '</ul>';
    return output;
}

function socialCopyLink() {
    var url = $(".social-copy").attr("href");
    document.addEventListener('copy', function(e) {
        e.clipboardData.setData('text/plain', url);
        e.preventDefault();
    }, true);
    document.execCommand("copy");
    $(".social-copy").append('<span class="hide-copied">Copied!</span>');
    setTimeout(function () {
        $('.social-copy .hide-copied').attr('style', 'display: none !important');
    }, 1000);
}

function socialWebShare() {
    if (navigator.share) {
        navigator.share({
            url: $(".social-web-share-api").attr("href"),
            title: $(".social-web-share-api").attr("title")
        });
    }
}

function homePageSlideshow() {
    var itr = 0;
    setInterval(function() {
        $(".blog-list-homepage-single.articles").each(function() {
            $(this).find('.article').removeClass('active');
        });
        $(".blog-list-homepage-single.articles").each(function() {
            $(this).find('.article.'+itr).addClass('active');
        });
        itr++;
        if (itr > 1) {
            itr = 0;
        }
    }, 4000);
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
    if (baseurl === 'https://peoplesblog.local:8089') {
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
/************************************** Last Updated **************************************************************/
/******************************************************************************************************************/
$(function() {
    setTimeout(function () {
        var date = $('.last-updated').text();
        var timestamp = getTimestamp(date);
        var currentDate = new Date();
        var currentTimestamp = currentDate.getTime();
        var difference = currentTimestamp - timestamp;
        var yearsDifference = Math.floor(difference/1000/60/60/24/30/12);
        var monthsDifference = Math.floor(difference/1000/60/60/24/30);
        var daysDifference = Math.floor(difference/1000/60/60/24);
        var hoursDifference = Math.floor(difference/1000/60/60);
        var minutesDifference = Math.floor(difference/1000/60);
        if (yearsDifference > 0) {
            if (yearsDifference == 1) { $('.last-updated').html('<em>Updated</em>'+yearsDifference+' year ago'); }
            else { $('.last-updated').html('<em>Updated</em>'+yearsDifference+' years ago'); }
        }
        else if (monthsDifference > 0) {
            if (monthsDifference == 1) { $('.last-updated').html('<em>Updated</em>'+monthsDifference+' month ago'); }
            else { $('.last-updated').html('<em>Updated</em>'+monthsDifference+' months ago'); }
        }
        else if (daysDifference > 0) {
            if (yearsDifference == 1) { $('.last-updated').html('<em>Updated</em>'+daysDifference+' day ago'); }
            else { $('.last-updated').html('<em>Updated</em>'+daysDifference+' days ago'); }
        }
        else if (hoursDifference > 0) {
            if (hoursDifference == 1) { $('.last-updated').html('<em>Updated</em>'+hoursDifference+' hour ago'); }
            else { $('.last-updated').html('<em>Updated</em>'+hoursDifference+' hours ago'); }
        }
        else if (minutesDifference > 0) {
            if (minutesDifference == 1) { $('.last-updated').html('<em>Updated</em>'+minutesDifference+' minute ago'); }
            else { $('.last-updated').html('<em>Updated</em>'+minutesDifference+' minutes ago'); }
        }
    }, 500);
});
function getTimestamp(date) {
    var date = new Date(date);
    return date.getTime();
}
function getReadableDate(timestamp) {
    var date = new Date(timestamp);
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    var readableDate = ('0' + date.getDate()).slice(-2) + ' '
        + monthNames[date.getMonth()] + ', '
        + date.getFullYear();
    return readableDate;
}

/******************************************************************************************************************/
/************************************** PWA - Service Worker ******************************************************/
/******************************************************************************************************************/
// Notification.requestPermission(function(status) {
//     console.log('Notification permission status:', status);
// });
// Notification.requestPermission(result => {
//     if (result === 'granted') {
//         showNotification('So nice to have you here!', 'Hey there!')
//     }
// });
// function showNotification(title, message) {
//     if ('Notification' in window) {
//         navigator.serviceWorker.ready.then(registration => {
//             registration.showNotification(title, {
//                 body: message,
//                 tag: 'vibration-sample'
//             });
//         });
//     }
// }
// if ('serviceWorker' in navigator) {
//     navigator.serviceWorker.register('/service-worker.js')
//         .then(function(registration) {
//             console.log('Registration successful, scope is:', registration.scope);
//             // Notification on update (not push on update)
//             if (registration.active) {
//                 registration.addEventListener('updatefound', () => {
//                     var title = 'Coping up with Life in an Effective Way';
//                     var body = 'Life tends to go on as we go on with our daily routine works. Whatever stage of life you are in now, one has things to do, atleast to take care of family by providing what they need by doing what one can do.';
//                     navigator.serviceWorker.ready.then(registration => {
//                         registration.showNotification(title, {
//                             body: body,
//                             tag: 'vibration-sample',
//                             actions: [
//                                 {action: 'read', title: 'Read this Article'}
//                             ]
//                         });
//                     });
//                     // console.log('Update found. Waiting for install to complete.');
//                     // const installingWorker = registration.installing;
//                     // installingWorker.addEventListener('statechange', () => {
//                     //     if (installingWorker.state === 'installed') {
//                     //         console.log('Install complete. Triggering update prompt.');
//                     //
//                     //     }
//                     // });
//                 });
//             }
//         }).catch(function(error) {
//             console.log('Service worker registration failed, error:', error);
//         });
// }
// if ('serviceWorker' in navigator) {
//     navigator.serviceWorker.register('/service-worker.js')
//         .then(function(registration) {
//             console.log('Registration successful, scope is:', registration.scope);
//         })
//         .catch(function(error) {
//             console.log('Service worker registration failed, error:', error);
//         });
// }
(function(w, d, s, id) {
    if (typeof(w.webpushr) !== 'undefined') return;
    w.webpushr = w.webpushr || function() {
        (w.webpushr.q = w.webpushr.q || []).push(arguments)
    };
    var js, fjs = d.getElementsByTagName(s)[0];
    js = d.createElement(s);
    js.id = id;
    js.async = 1;
    js.src = "https://cdn.webpushr.com/app.min.js";
    fjs.parentNode.appendChild(js);
}(window, document, 'script', 'webpushr-jssdk'));
webpushr('setup', {
    'key': 'BN9JHKmZWB5ivR9Sv2l_rgsouuLmGD2wsqIJmTsobxJMz4byi2Hnk1Fk50vNqX5HgfMuPD2GKjs1cUb4OpOStDM'
});

/******************************************************************************************************************/
/************************************** Topbar - Scrollbar ********************************************************/
/******************************************************************************************************************/
$(function (){
    $('.simple-marquee-container').SimpleMarquee();
});

/******************************************************************************************************************/
/************************************** Search Quick Read *********************************************************/
/******************************************************************************************************************/
$(function() {
    searchQuickReadListPage();
});
function searchQuickReadListPage() {
    $('input[type=text]#search-quick-read').focus();
    $("#search-quick-read").on("keyup", function(event) {
        $('.search-quick-read .row .col-md-3 .quick-read').removeClass('hide');
        $('.search-quick-read .row').children('.col-md-3').each(function () {
            var title = $(this).find('.quick-read-title').text().toLowerCase();
            title += " " + $(this).find('.quick-read-content').text().toLowerCase();
            title += " " + $(this).find('.quick-read-author').text().toLowerCase();
            // title += " " + $(this).find('.articles-labels').text().toLowerCase();
            var search = event.currentTarget.value.toLowerCase();
            var searchFor = search.split(' ');
            for (var i = 0, ln = searchFor.length; i < ln; i++) {
                if (title.indexOf(searchFor[i]) !== -1) {
                    $(this).show();
                }
                else {
                    $(this).hide();
                }
            }
        });
    });
}

/******************************************************************************************************************/
/************************************** Search Videos *************************************************************/
/******************************************************************************************************************/
$(function() {
    searchVideosListPage();
});
function searchVideosListPage() {
    $('input[type=text]#search-videos').focus();
    $("#search-videos").on("keyup", function(event) {
        $('.search-videos .video').removeClass('hide');
        $('.search-videos').children('.video').each(function () {
            var title = $(this).find('.video-title').text().toLowerCase();
            // title += " " + $(this).find('.quick-read-content').text().toLowerCase();
            // title += " " + $(this).find('.quick-read-author').text().toLowerCase();
            // title += " " + $(this).find('.articles-labels').text().toLowerCase();
            var search = event.currentTarget.value.toLowerCase();
            var searchFor = search.split(' ');
            for (var i = 0, ln = searchFor.length; i < ln; i++) {
                if (title.indexOf(searchFor[i]) !== -1) {
                    $(this).show();
                }
                else {
                    $(this).hide();
                }
            }
        });
    });
}

/******************************************************************************************************************/
/************************************** Search Quotes *************************************************************/
/******************************************************************************************************************/
$(function() {
    searchQuotesListPage();
});
function searchQuotesListPage() {
    $('input[type=text]#search-quotes').focus();
    $("#search-quotes").on("keyup", function(event) {
        $('.search-quotes .quotes').removeClass('hide');
        $('.search-quotes').children('.quotes').each(function () {
            var title = $(this).find('.quote-title').text().toLowerCase();
            title += " " + $(this).find('.author').text().toLowerCase();
            title += " " + $(this).find('.tags a').text().toLowerCase();
            var search = event.currentTarget.value.toLowerCase();
            var searchFor = search.split(' ');
            for (var i = 0, ln = searchFor.length; i < ln; i++) {
                if (title.indexOf(searchFor[i]) !== -1) {
                    $(this).show();
                }
                else {
                    $(this).hide();
                }
            }
        });
    });
}

/******************************************************************************************************************/
/************************************** Search Shop *********************************************************/
/******************************************************************************************************************/
$(function() {
    searchShopListPage();
    searchShopListPageByCategory();
});
function searchShopListPage() {
    $('input[type=text]#search-shop').focus();
    $("#search-shop").on("keyup", function(event) {
        $(".shop-category ul li input").prop('checked', false);
        $(".shop-category .clear").addClass('hide');
        $('.shop-data-results .row .shop-item-wrapper').removeClass('hide');
        $('.shop-data-results .row').children('.shop-item-wrapper').each(function () {
            var title = $(this).find('.shop-title-value').text().toLowerCase();
            title += " " + $(this).find('.summary').text().toLowerCase();
            // title += " " + $(this).find('.quick-read-author').text().toLowerCase();
            // title += " " + $(this).find('.articles-labels').text().toLowerCase();
            var search = event.currentTarget.value.toLowerCase();
            var searchFor = search.split(' ');
            for (var i = 0, ln = searchFor.length; i < ln; i++) {
                if (title.indexOf(searchFor[i]) !== -1) {
                    $(this).show();
                }
                else {
                    $(this).hide();
                }
            }
        });
    });
}
function searchShopListPageByCategory() {
    $(".shop-category ul li input").on("click", function(event) {
        $('.shop-data-results .row .shop-item-wrapper').removeClass('hide');
        $(".shop-category .clear").removeClass('hide');
        $('.shop-category ul').children('li').each(function () {
            $(this).find('input').prop('checked', false);
            if ($(this).find('input').val() == event.currentTarget.value) {
                $(this).find('input').prop('checked', true);
            }
        });
        $('.shop-data-results .row').children('.shop-item-wrapper').each(function () {
            var category = $(this).find('.category').text().toLowerCase();
            var search = event.currentTarget.value.toLowerCase();
            var searchFor = search.split('-SHOPSEARCH-');
            for (var i = 0, ln = searchFor.length; i < ln; i++) {
                if (category.indexOf(searchFor[i]) !== -1) {
                    $(this).show();
                }
                else {
                    $(this).hide();
                }
            }
        });
    });
    $(".shop-category .clear").on("click", function(event) {
        $('.shop-data-results .row .shop-item-wrapper').show();
        $('.shop-category ul').children('li').each(function () {
            $(this).find('input').prop('checked', false);
        });
        $(".shop-category .clear").addClass('hide');
    });
}

/******************************************************************************************************************/
/************************************** Search Great People *******************************************************/
/******************************************************************************************************************/
$(function() {
    searchGreatPeopleListPage();
});
function searchGreatPeopleListPage() {
    $('input[type=text]#search-great-people').focus();
    $("input[type=text]#search-great-people").on("keyup", function(event) {
        $('.great-people-data-results .row .col-md-4.great-people-item-wrapper').removeClass('d-none');
        $('.great-people-data-results .row').children('.col-md-4.great-people-item-wrapper').each(function () {
            var title = $(this).find('.great-people-title-value').text().toLowerCase();
            title += " " + $(this).find('.summary').text().toLowerCase();
            var search = event.currentTarget.value.toLowerCase();
            var searchFor = search.split(' ');
            for (var i = 0, ln = searchFor.length; i < ln; i++) {
                if (title.indexOf(searchFor[i]) !== -1) {
                    $(this).show();
                }
                else {
                    $(this).hide();
                }
            }
        });
    });
}

/******************************************************************************************************************/
/************************************** Global Search *************************************************************/
/******************************************************************************************************************/
$(function() {
    showOrHideGlobalSearchPopup();
    globalSearch();
});
function showOrHideGlobalSearchPopup() {
    $('.top-search.global_search').click(function () {
        var search = getLocalStorageValue('global-search-value');
        if (search !== '') {
            $('.global_search_modal .global_search_modal_content .modal-content input[type=text]').val(search);
        }
        $("#global_search_popup").show();
    });
    $('.global_search_modal_content_close').click(function () {
        $("#global_search_popup").hide();
    });
}
function globalSearch() {
    $('.global_search_modal .global_search_modal_content .modal-content input[type=text]').keypress(function (e) {
        var key = e.which;
        if (key == 13) {
            $('.global_search_modal .global_search_modal_content .modal-content input[type=button]').click();
            return false;
        }
    });
    $('.global_search_modal .global_search_modal_content .modal-content input[type=button]').click(function () {
        var search = $('.global_search_modal .global_search_modal_content .modal-content input[type=text]').val();
        if (search !== '') {
            putLocalStorageValue('global-search-value', search);
            setTimeout(function() {
                window.location.replace("/search.html");
            }, 100);
        }
    });
    if (window.location.href.indexOf("/search.html") > -1) {
        var search = getLocalStorageValue('global-search-value');
        $('.global_search_modal .global_search_modal_content .modal-content input[type=text]').val(search);
        $('.global-search-action input[type=text]').val(search);
        setTimeout(function() {
            showGlobalSearchResults(search);
        }, 100);
    }
    if (window.location.href.indexOf("/search.html") > -1) {
        $('.global-search-action input[type=text]').keypress(function (e) {
            var key = e.which;
            if (key == 13) {
                $('.global-search-action .global-search-submit').click();
                return false;
            }
        });
    }
    $('.global-search-action .global-search-submit').click(function () {
        var search = $('.global-search-action input[type=text]').val();
        if (search !== '') {
            $('.global_search_modal .global_search_modal_content .modal-content input[type=text]').val(search);
            putLocalStorageValue('global-search-value', search);
            setTimeout(function() {
                showGlobalSearchResults(search);
            }, 100);
        }
    });
}
function showGlobalSearchResults(search) {
    var resultsCount = 0;
    var results = [];
    var output = '<div class="header"><span>Found results containing the words: </span><strong>' + search + '</strong></div>';
    $('.global-search-results').html(output);
    readJsonFile("/data/articles.json", function(text) {
        var data = JSON.parse(text);
        data.slice().reverse().forEach(function (_data) {
            var title = _data.title.toLowerCase();
            title += " " + _data.summary.toLowerCase();
            title += " " + _data.content.toLowerCase();
            title += " " + _data.author.toLowerCase();
            if (search !== null) {
                var searchFor = search.toLowerCase().split(' ');
                var found = false;
                for (var i = 0, ln = searchFor.length; i < ln; i++) {
                    if (title.includes(searchFor[i])) {
                        found = true;
                    }
                    else {
                        found = false;
                        break;
                    }
                }
                if (found == true) {
                    var url = getArticleURL(_data.file);
                    var _tmp = [_data.title, _data.summary, url.toLowerCase(), '<i class="fa fa-book"></i><span>Article</span>'];
                    results.push(_tmp);
                    found = false;
                }
            }
        });
    });
    readJsonFile("/data/quick-read.json", function(text){
        var data = JSON.parse(text);
        data.slice().reverse().forEach(function (_data) {
            var title = _data.title.toLowerCase();
            title += " " + _data.summary.toLowerCase();
            title += " " + _data.content.toLowerCase();
            title += " " + _data.author.toLowerCase();
            if (search !== null) {
                var searchFor = search.toLowerCase().split(' ');
                var found = false;
                for (var i = 0, ln = searchFor.length; i < ln; i++) {
                    if (title.includes(searchFor[i])) {
                        found = true;
                    }
                    else {
                        found = false;
                        break;
                    }
                }
                if (found == true) {
                    var url = getQuickReadURL(_data.file);
                    var _tmp = [_data.title, _data.summary, url.toLowerCase(), '<i class="fa fa-file"></i><span>Quick Read</span>'];
                    results.push(_tmp);
                    found = false;
                }
            }
        });
    });
    readJsonFile("/data/great-people.json", function(text){
        var data = JSON.parse(text);
        data.slice().reverse().forEach(function (_data) {
            var title = _data.title.toLowerCase();
            title += " " + _data.summary.toLowerCase();
            title += " " + _data.content.toLowerCase();
            // title += " " + _data.author.toLowerCase();
            if (search !== null) {
                var searchFor = search.toLowerCase().split(' ');
                var found = false;
                for (var i = 0, ln = searchFor.length; i < ln; i++) {
                    if (title.includes(searchFor[i])) {
                        found = true;
                    }
                    else {
                        found = false;
                        break;
                    }
                }
                if (found == true) {
                    var url = getGreatPeopleURL(_data.file);
                    var _tmp = [_data.title, _data.summary, url.toLowerCase(), '<i class="fa fa-file"></i><span>Great People</span>'];
                    results.push(_tmp);
                    found = false;
                }
            }
        });
    });
    readJsonFile("/data/videos.json", function(text){
        var data = JSON.parse(text);
        data.slice().reverse().forEach(function (_data) {
            var title = _data.title.toLowerCase();
            if (search !== null) {
                var searchFor = search.toLowerCase().split(' ');
                var found = false;
                for (var i = 0, ln = searchFor.length; i < ln; i++) {
                    if (title.includes(searchFor[i])) {
                        found = true;
                    }
                    else {
                        found = false;
                        break;
                    }
                }
                if (found == true) {
                    var url = "/videos/"+_data.videoId+".html";
                    var _tmp = [_data.title, "", url, '<i class="fa fa-youtube-play"></i><span>Video</span>'];
                    results.push(_tmp);
                    found = false;
                }
            }
        });
    });
    readJsonFile("/data/shop.json", function(text){
        var data = JSON.parse(text);
        data.slice().reverse().forEach(function (_data) {
            var title = _data.title.toLowerCase();
            title += " " + _data.summary.toLowerCase();
            title += " " + _data.asin.toLowerCase();
            if (search !== null) {
                var searchFor = search.toLowerCase().split(' ');
                var found = false;
                for (var i = 0, ln = searchFor.length; i < ln; i++) {
                    if (title.includes(searchFor[i])) {
                        found = true;
                    }
                    else {
                        found = false;
                        break;
                    }
                }
                if (found == true) {
                    var url = "/shop/"+_data.asin+".html";
                    var _tmp = [_data.title, "", url.toLowerCase(), '<i class="fa fa-shopping-cart"></i><span>Shop</span>'];
                    results.push(_tmp);
                    found = false;
                }
            }
        });
    });
    readJsonFile("/data/authors.json", function(text){
        var data = JSON.parse(text);
        data.slice().reverse().forEach(function (_data) {
            var title = _data.author.toLowerCase();
            title += " " + _data.intro.toLowerCase();
            if (search !== null) {
                var searchFor = search.toLowerCase().split(' ');
                var found = false;
                for (var i = 0, ln = searchFor.length; i < ln; i++) {
                    if (title.includes(searchFor[i])) {
                        found = true;
                    }
                    else {
                        found = false;
                        break;
                    }
                }
                if (found == true) {
                    var url = getAuthorsURL(_data.file);
                    var _tmp = [_data.author, _data.intro, url.toLowerCase(), '<i class="fa fa-user"></i><span>Author</span>'];
                    results.push(_tmp);
                    found = false;
                }

            }
        });
    });
    setTimeout(function () {
        var uniqueResults = [];
        uniqueResults = multiDimensionalUnique(results);
        uniqueResults.forEach(function (_result) {
            resultsCount++;
            var output = '<div class="global-search-result">' +
                '<div class="global-search-result-type">'+_result[3]+'</div>' +
                '<h2><a href="'+_result[2]+'">'+_result[0]+'</a></h2>' +
                '<p>'+_result[1]+'</p>' +
                '<a href="'+_result[2]+'">'+_result[2]+'</a>' +
                '</div>';
            $('.global-search-results').append(output);
        });
        if (resultsCount == 0) {
            var search = getLocalStorageValue('global-search-value');
            if (search === null) {
                var output = '<div class="header"><span>Please enter some keywords to search.</div>';
                $('.global-search-results').html(output);
                $('.global-search-action input[type=text]').focus();
            }
            else {
                var output = '<div class="header"><span>We didn\'t find any matches: </span><strong>' + search + '</strong>, check your search and try again</div>';
                $('.global-search-results').html(output);
            }
        }
    }, 100);
    setTimeout(function () {
        if (resultsCount > 0) {
            // console.log(resultsCount);
            var search = getLocalStorageValue('global-search-value');
            var output = '<span>Found ' + resultsCount + ' results containing the words: </span><strong>' + search + '</strong>';
            $('.global-search-results .header').html(output);
            // console.log(search);
        }
        // document.getElementById('global_search_scroll').scrollIntoView({
        //     behavior: 'smooth'
        // });
    }, 200);
    
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
function getArticleURL(file) {
    var url = '';
    url = file
        .replaceAll(".json", ".html")
        .replace(/\d+/g, '')
        .replaceAll('----', '')
        .replaceAll('---', '');
    return '/articles/' + url;
}
function getQuickReadURL(file) {
    var url = '';
    url = file
        .replaceAll(".json", ".html")
        .replace(/\d+/g, '')
        .replaceAll('----', '')
        .replaceAll('---', '');
    return '/quick-read/' + url;
}
function getGreatPeopleURL(file) {
    var url = '';
    url = file
        .replaceAll(".json", ".html")
        .replace(/\d+/g, '')
        .replaceAll('----', '')
        .replaceAll('---', '');
    return '/great-people/' + url;
}
function getAuthorsURL(file) {
    var url = '';
    url = file
        .replaceAll(".json", ".html")
        .replace(/\d+/g, '')
        .replaceAll('----', '')
        .replaceAll('---', '');
    return '/authors/' + url;
}
function multiDimensionalUnique(arr) {
    var uniques = [];
    var itemsFound = {};
    for(var i = 0, l = arr.length; i < l; i++) {
        var stringified = JSON.stringify(arr[i]);
        if(itemsFound[stringified]) { continue; }
        uniques.push(arr[i]);
        itemsFound[stringified] = true;
    }
    return uniques;
}

/******************************************************************************************************************/
/************************************** Global Progress Bar On Scroll *********************************************/
/******************************************************************************************************************/
window.onscroll = function() {globalProgressBarOnScroll()};
function globalProgressBarOnScroll() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("globalProgressBarOnScroll").style.width = scrolled + "%";
  document.getElementById("globalProgressBarOnScroll").style.backgroundColor = "#292b2c";
}

/******************************************************************************************************************/
/************************************** Add ALT tag to webpushr img ***********************************************/
/******************************************************************************************************************/
setTimeout(function () {
    $(".webpushr-notification-img").attr('alt', 'Peoples BLOG - Webpushr');
    // console.log('hello');
}, 2000);

/******************************************************************************************************************/
/********************************************* Age Calculator *****************************************************/
/******************************************************************************************************************/
$(function() {
    ageCalculator();
});
function ageCalculator() {
    $(".age-calculator button[type=submit]").on("click", function(event) {
        $(".age-calculator .error").html('');
        $(".age-calculator .result").html('');
        var fromDate = $('.age-calculator .dateFrom').val();
        var dateTo = $('.age-calculator .dateTo').val();
        if (fromDate != '' && dateTo != '') {
            var from = new Date(fromDate);
            var to = new Date(dateTo);
            var milli_secs = to.getTime() - from.getTime();
            if (milli_secs < 0) {
                var output = "<span class='error'>Date of Birth should be earlier than the Age at the Date of.</span>";
                $(".age-calculator .from").before(output);
            }
            else {
                var results = _ageCalculator(fromDate, to);
                var output = "<span class='age'>Age:</span><span>"+results+"</span>";
                $(".age-calculator .result").append(output);
            }
        }
        if (fromDate == '') {
            var output = "<span class='error'>Date of Birth should be filled.</span>";
            $(".age-calculator .from").append(output);
        }
        if (dateTo == '') {
            var output = "<span class='error'>Age at the Date of should be filled.</span>";
            $(".age-calculator .to").append(output);
        }
    });
}
function _ageCalculator(fromDate, toDate) {
    fromDate = fromDate.toString().split("-");
    var to = new Date(toDate);    
    var year = to.getFullYear();
    var month = to.getMonth() + 1;
    var day = to.getDate();
    var yy = parseInt(fromDate[0]);
    var mm = parseInt(fromDate[1]);
    var dd = parseInt(fromDate[2]);
    var years, months, days;
    // months
    months = month - mm;
    if (day < dd) {
        months = months - 1;
    }
    // years
    years = year - yy;
    if (month * 100 + day < mm * 100 + dd) {
        years = years - 1;
        months = months + 12;
    }
    // days
    days = Math.floor((to.getTime() - (new Date(yy + years, mm + months - 1, dd)).getTime()) / (24 * 60 * 60 * 1000));
    return years + " years " + months + ' months ' + days + ' days ';
}

/******************************************************************************************************************/
/********************************************* Generate Password **************************************************/
/******************************************************************************************************************/
$(function() {
    generatePassword();
});
function generatePassword() {
    $(".generate-password .result").addClass('d-none');
    $(".generate-password button[type=submit]").on("click", function(event) {
        var password = _generatePassword();
        $(".generate-password .result").removeClass('d-none');
        $(".generate-password .result").html(password);
    });
}
function _generatePassword() {
    var pass = '';
    var str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' +
            'abcdefghijklmnopqrstuvwxyz0123456789@#$';
    for (let i = 1; i <= 8; i++) {
        var char = Math.floor(Math.random()
                    * str.length + 1);
        pass += str.charAt(char)
    }
    return pass;
}

/******************************************************************************************************************/
/********************************************* Hide Ads on pages **************************************************/
/******************************************************************************************************************/
$(function() {
    hideAdsOnPages();
});
function hideAdsOnPages() {
    const pages = [
        "/articles/get-more-pleasure-from-lotus-position.html"
    ];
    for (var i = 0; i < pages.length; i++) {
        var currentLocation = window.location.pathname;
        if (pages[i] == currentLocation) {
            $(".google-ad").addClass('d-none');
            $(".google-ad").html("");
            $("#site-fixed-ad-container").addClass('d-none');
            $("#site-fixed-ad-container").html("");
        }
    }
}
