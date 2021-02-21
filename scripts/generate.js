#! /usr/bin/env node

console.log("People's BLOG.. Welcome to Javascript!");

const blogsFolder = 'blogs-content/';
const generateAllBlogsJsonLocation = 'tmp/blogs-content-merged.json';

const fs = require('fs');
try { fs.unlinkSync(generateAllBlogsJsonLocation) } catch(err) { console.error(err) }
fs.readdirSync(blogsFolder).forEach(blogFile => {
    var blogPath = blogsFolder + "/" + blogFile;
    // var content = {};
    fs.readFile(blogPath, "utf8", function(err, blogData) {
        // var data = JSON.parse(blogData);
        // var title = data.content.title;
        // var created = getTimestamp(data.content.created);
        // content[created] = title;
        // createSingleJsonBlogsFileAsync(JSON.stringify(content));
        createSingleJsonBlogsFileAsync(blogData);
    });
});
function createSingleJsonBlogsFileAsync(content) {
    fs.appendFile(generateAllBlogsJsonLocation, content+"," , function (err) {
        if (err) throw err;
    });
}
setTimeout(function () {
    fs.readFile(generateAllBlogsJsonLocation, "utf8", function(err, blogs) {
        var data = JSON.parse("["+blogs.replace(/,\s*$/, "")+"]");
        var renderBlogs = [];
        data.forEach(function(data, index) {
            // console.log(data.content.title);
            var created = getTimestamp(data.content.created);
            renderBlogs[index] = created;
        });
        // console.log(renderBlogs);
        sortByCreated(data);
    });
}, 1000);
function sortByCreated(_data) {
    // console.log(_data);
    // _data.forEach(function(data, index) {
    //     console.log(index);
    //     console.log("Current: " + data[index]);
    //     if (index > 0) {
    //         console.log("Previous: " + data[index - 1]);
    //     }
    //     if (index < data.length - 1) {
    //         console.log("Next: " + data[index + 1]);
    //     }
    // });
    _data.forEach((item, index, arr) => {
        var _tmp = arr[index-1];
        // console.log(_tmp);
        _tmp.forEach(function(x, y) {
            console.log(x);
        });
        // console.log("Current: " + item.content.created);
        // console.log("Previous: " + ((0 === index)? "START" : arr[index-1]));
        // console.log("Next: " + ((arr.length - 1 === index)? "END" : arr[index+1]));
    });


    // console.log(JSON.parse(data));
    // for (var i = 0;)
    // return created;
}


/**
 * var date = "04 March, 2020";
 * console.log(date);
 * var timestamp = getTimestamp(date);
 * console.log(timestamp);
 * @param date
 * @returns {number}
 */
function getTimestamp(date) {
    var date = new Date(date);
    return date.getTime();
}

/**
 * var date = "04 March, 2020";
 * console.log(date);
 * var timestamp = getTimestamp(date);
 * console.log(timestamp);
 * var readableDate = getReadableDate(timestamp);
 * console.log(readableDate);
 * @param timestamp
 * @returns {string}
 */
function getReadableDate(timestamp) {
    var date = new Date(timestamp);
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    var readableDate = ('0' + date.getDate()).slice(-2) + ' '
        + monthNames[date.getMonth()] + ', '
        + date.getFullYear();
    return readableDate;
}
