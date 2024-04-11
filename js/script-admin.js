/******************************************************************************************************************/
/************************************** Show Ads on Content *******************************************************/
/******************************************************************************************************************/
$(function() {
    showAdsOnPages();
});
function showAdsOnPages() {
    var adScript = document.createElement("script");
    if (hasElementWithId('google-ad-1')) {
        createAd("google-ad-1", "ca-pub-2683569506254139", "5228875751", "fluid");
    }
    if (hasElementWithId('google-ad-2')) {
        createAd("google-ad-2", "ca-pub-2683569506254139", "9621211280", "fluid");
    }
    if (hasElementWithId('google-ad-3')) {
        createAd("google-ad-3", "ca-pub-2683569506254139", "4812668708", "fluid");
    }
}
function createAd(containerId, adClientId, adSlotId, adFormat) {
    // Create a div element for the ad unit
    var adUnit = document.createElement("ins");
    adUnit.className = "adsbygoogle";
    adUnit.style.display = "block";
    adUnit.setAttribute("data-ad-client", adClientId);
    adUnit.setAttribute("data-ad-slot", adSlotId);
    adUnit.setAttribute("data-ad-format", adFormat);
    // Append the ad unit to the container
    document.getElementById(containerId).appendChild(adUnit);
    // Initialize the ad
    (adsbygoogle = window.adsbygoogle || []).push({});
}
function hasElementWithId(id) {
    return document.getElementById(id) !== null;
}