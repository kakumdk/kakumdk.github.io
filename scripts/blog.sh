
##### Write Blogs
pwd=$(pwd)
blogscontent=$pwd/blogs-content
blogs=$pwd/blogs

files=`ls $blogscontent`
for file in $files
do
   filepath=$blogscontent'/'$file
   title=`jq -r '.content .title' $filepath`
   created=`jq -r '.content .created' $filepath`
   author=`jq -r '.content .author' $filepath`
   views=`jq -r '.content .views' $filepath`
   summary=`jq -r '.content .summary' $filepath`
   content=`jq -r '.content .content' $filepath`
   type=`jq -r '.content .type' $filepath`
   category=`jq -r '.content .category' $filepath`
   banner=`jq -r '.content .banner788x443' $filepath`
   ## Blogs index page
   blogsfolderpath=$blogs
   mkdir -p $blogsfolderpath
   blogsfilepath=$blogsfolderpath'/'index.html
   #################################################################################################################
   #################################################################################################################
   ##### BLOGS
   #################################################################################################################
   #################################################################################################################
   echo '<!DOCTYPE html>
<html lang="en">
<head>
    <!-- Basic -->
    <meta charset="utf-8">
    <meta http-equiv="content-language" content="en" />
    <!-- Mobile Metas -->
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Site Metas -->
    <title>Blogs | People&#039;s BLOG</title>
    <meta name="description" content="Blogs People&#039;s BLOG articles, came out of Thoughts, Ideas & Experiences. Articles about Lifestyle, Travel, Food, Science & Technology">
    <meta name="author" content="People&#039;s BLOG">
    <link rel="canonical" href="https://peoplesblog.co.in/blogs/index.html" />
    <link rel="shortlink" href="https://peoplesblog.co.in/blogs/index.html" />
    <link rel="revision" href="https://peoplesblog.co.in/blogs/index.html" />
    <meta name="robots" content="index, follow">
    <meta name="icbm" content="13.1071,77.5931" />
    <meta name="geo.region" content="IN" />
    <meta name="geo.placename" content="Bangalore" />
    <meta name="geo.position" content="13.1071,77.5931" />
    <meta name="Generator" content="People&#039;s BLOGs (https://peoplesblog.co.in)" />
    <meta name="MobileOptimized" content="width" />
    <meta name="HandheldFriendly" content="true" />
    <meta property="og:type" content="profile" />
    <meta property="og:title" content="Blogs | People&#039;s BLOG" />
    <meta property="og:description" content="Blogs People&#039;s BLOG articles, came out of Thoughts, Ideas & Experiences. Articles about Lifestyle, Travel, Food, Science & Technology" />
    <meta property="og:url" content="https://peoplesblog.co.in/blogs/index.html" />
    <meta property="og:image" content="https://peoplesblog.co.in/upload/logo_new.webp" />
    <meta name="twitter:title" content="Blogs | People&#039;s BLOG">
    <meta name="twitter:description" content="Blogs People&#039;s BLOG articles, came out of Thoughts, Ideas & Experiences. Articles about Lifestyle, Travel, Food, Science & Technology">
    <meta name="twitter:image" content="https://peoplesblog.co.in/upload/logo_new.webp">
    <meta name="twitter:card" content="summary_large_image">
    <meta name="google-site-verification" content="oIpwGHdguWnER2N8lKSljpYFSSUvg8A-sFzQkn-xLnU" />

    <!-- Global site tag (gtag.js) - Google Analytics -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-3RSZRK91SH"></script>
    <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag("js", new Date());
        gtag("config", "G-3RSZRK91SH");
    </script>
    <!-- Global site tag (gtag.js) - Google Analytics -->

    <!-- Site Icons -->
    <link rel="shortcut icon" href="../../../upload/favicon.webp" type="image/x-icon" />
    <link rel="apple-touch-icon" href="../../../upload/favicon.webp">

    <!-- Design fonts -->
    <link href="https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700" rel="stylesheet">

    <!-- Bootstrap core CSS -->
    <link href="../../../css/bootstrap.css" rel="stylesheet">

    <!-- FontAwesome Icons core CSS -->
    <link href="../../../css/font-awesome.min.css" rel="stylesheet">

    <!-- Custom styles for this template -->
    <link href="../../../css/style.css" rel="stylesheet">

    <!-- Responsive styles for this template -->
    <link href="../../../css/responsive.css" rel="stylesheet">

    <!-- Colors for this template -->
    <link href="../../../css/colors.css" rel="stylesheet">

    <!-- Version Tech CSS for this template -->
    <link href="../../../css/version/tech.css" rel="stylesheet">

    <!--[if lt IE 9]>
    <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
    <script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
    <![endif]-->
</head>
<body>

    <div id="wrapper">
        <div id="top-bar" class="top-bar"></div>
        <header class="tech-header header">
        <div class="container-fluid">
            <nav class="navbar navbar-toggleable-md navbar-inverse bg-inverse">
                <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <a class="navbar-brand" href="/index.html"><img loading="lazy" alt="People&#039;s BLOG" src="../../../upload/logo_new.webp"></a>
                <div class="collapse navbar-collapse" id="navbarCollapse">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item">
                            <a class="nav-link" href="/blogs/index.html" title="Blogs">Blogs</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/blogs/Sci-Tech/index.html" title="Sci-Tech">Sci-Tech</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/blogs/Lifestyle/index.html" title="Lifestyle">Lifestyle</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/blogs/Food/index.html" title="Food">Food</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/blogs/Travel/index.html" title="Travel">Travel</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/blogs/Social-Media/index.html" title="Social Media">Social Media</a>
                        </li>
                    </ul>
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link" href="/about.html" title="About">About</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/links.html" title="Links">Links</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/privacy.html" title="Privacy">Privacy</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/terms-and-conditions.html" title="T & C">T & C</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/contact.html" title="Contact">Contact</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div><!-- end container-fluid -->
        </header>

        <div class="page-title lb single-wrapper">
            <div class="container">
                <div class="row">
                    <div class="col-lg-8 col-md-8 col-sm-12 col-xs-12">
                        <h1><i class="fa fa-list bg-orange"></i> Blogs <small class="hidden-xs-down hidden-sm-down peoples-quotes"></small></h1>
                    </div><!-- end col -->
                    <div class="col-lg-4 col-md-4 col-sm-12 hidden-xs-down hidden-sm-down">
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item"><a href="/index.html">Home</a></li>
                            <li class="breadcrumb-item active">Blog</li>
                        </ol>
                    </div><!-- end col -->
                </div><!-- end row -->
            </div><!-- end container -->
        </div><!-- end page-title -->

        <section class="section">
            <div class="container">
                <div class="row">
                    <div class="col-lg-2 col-md-12 col-sm-12 col-xs-12">
                        <div class="ads-blogs sidebar">

                        </div><!-- end sidebar -->
                    </div><!-- end col -->

                    <div class="col-lg-10 col-md-12 col-sm-12 col-xs-12">
                        <div class="page-wrapper">
                            <div class="blog-grid-system">
                                <div class="row blog-list-blogs">

                                </div>
                            </div>
                        </div><!-- end page-wrapper -->

                        <div class="row">
                            <div class="col-md-12">
                                <nav aria-label="Page navigation">
                                    <div class="blog-list-blogs_pager">

                                    </div>
                                </nav>
                            </div><!-- end col -->
                        </div><!-- end row -->
                    </div><!-- end col -->

                </div><!-- end row -->
            </div><!-- end container -->
        </section>

        <footer class="footer">
        <div class="container">
            <div class="row">
                <div class="col-lg-7">
                    <div class="widget">
                        <div class="footer-text text-left">
                            <a href="/index.html"><img loading="lazy" alt="People&#039;s BLOG" src="../../../upload/logo_new.webp" class="img-fluid"></a>
                            <p>People&#039;s BLOG has a mixture of articles which came out of Thoughts, Ideas & Experiences of People behind this Blog, We generally write articles about Lifestyle, Travel, Food, Science & Technology.. <a class="read-more" href="/about.html">Read More >></a></p>
                            <div class="post-sharing-footer social">

                            </div>

                            <hr class="invis">

                            <div class="newsletter-widget-subscribe newsletter-widget text-left">
                                <form name="subscribe" action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSewRpoqyq6TYnR_VU12LRPD1ahr2xP19akLcFhBjcylfPlWjw/formResponse" class="form-inline" target="_blank"><input type="text" class="form-control" placeholder="Enter your email address" name="entry.1045781291" required=""><button type="submit" class="newsletter-widget-subscribe-button btn btn-primary">Subscribe</button></form>
                            </div>

                        </div><!-- end footer-text -->
                    </div><!-- end widget -->
                </div><!-- end col -->

                <div class="col-lg-3 col-md-12 col-sm-12 col-xs-12">
                    <div class="widget">
                        <h2 class="widget-title">Popular Categories</h2>
                        <div class="link-widget">
                            <ul class="blog-list-homepage-footer">

                            </ul>
                        </div><!-- end link-widget -->
                    </div><!-- end widget -->
                </div><!-- end col -->

                <div class="col-lg-2 col-md-12 col-sm-12 col-xs-12">
                    <div class="widget">
                        <h2 class="widget-title">Misc</h2>
                        <div class="link-widget">
                            <ul>
                                <li><a title="About" href="/about.html">About</a></li>
                                <li><a title="Links" href="/links.html">Links</a></li>
                                <li><a title="Privacy" href="/privacy.html">Privacy</a></li>
                                <li><a title="T & C" href="/terms-and-conditions.html">T & C</a></li>
                                <li><a title="Contact" href="/contact.html">Contact</a></li>
                            </ul>
                        </div><!-- end link-widget -->
                    </div><!-- end widget -->
                </div><!-- end col -->
            </div>

            <div class="row">
                <div class="col-md-12 text-center">
                    <div class="copyright">
                            <span class="affliate"><br/>This site contains affiliate links to products. We may receive a commission for purchases made through these links. However, this does not impact our reviews and comparisons. We only suggest products we’ve reviewed, and in many instances also use, in order to help you make the best choices.</span>
                            <span class="_copyright">Copyright <i class="fa fa-copyright"></i> 2014 - 2021, People&#039;s BLOG</span>
                        </div>
                </div>
            </div>
        </div><!-- end container -->
        </footer>

        <div class="dmtop">Scroll to Top</div>

    </div><!-- end wrapper -->

    <!-- Core JavaScript
    ================================================== -->
    <script src="../js/jquery.min.js"></script>
    <script src="../js/jquery.validate.min.js"></script>
    <script src="../js/tether.min.js"></script>
    <script src="../js/bootstrap.min.js"></script>
    <script src="../js/custom.js"></script>

    <div id="policy-container"></div>

    <script type="text/javascript">
        function googleTranslateElementInit() {
            new google.translate.TranslateElement({pageLanguage: "es"}, "google_translate_element");
        }
    </script>
    <script type="text/javascript" src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"></script>

</body>
</html>' > $blogsfilepath
   ## Types
   IFS=',' read -ra type_array <<< "$type"
   for _type_i in "${type_array[@]}"
   do
     _type=`echo $_type_i | sed -e 's/^[[:space:]]*//'`
     blogsfolderpath=$blogs'/'${_type// /-}
     mkdir -p $blogsfolderpath
     ## Types index page
     blogsfilepath=$blogsfolderpath
     #################################################################################################################
     #################################################################################################################
     ##### TYPE
     #################################################################################################################
     #################################################################################################################
     echo '<!DOCTYPE html>
<html lang="en">
<head>
    <!-- Basic -->
    <meta charset="utf-8">
    <meta http-equiv="content-language" content="en" />

    <!-- Mobile Metas -->
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Site Metas -->
    <title>'$_type' - Blogs | People&#039;s BLOG</title>
    <meta name="description" content="'$_type' People&#039;s BLOG articles, came out of Thoughts, Ideas & Experiences. Articles about Lifestyle, Travel, Food, Science & Technology">
    <meta name="author" content="People&#039;s BLOG">
    <link rel="canonical" href="https://peoplesblog.co.in/blogs/'${_type// /-}'/index.html" />
    <link rel="shortlink" href="https://peoplesblog.co.in/blogs/'${_type// /-}'/index.html" />
    <link rel="revision" href="https://peoplesblog.co.in/blogs/'${_type// /-}'/index.html" />
    <meta name="robots" content="index, follow">
    <meta name="icbm" content="13.1071,77.5931" />
    <meta name="geo.region" content="IN" />
    <meta name="geo.placename" content="Bangalore" />
    <meta name="geo.position" content="13.1071,77.5931" />
    <meta name="Generator" content="People&#039;s BLOGs (https://peoplesblog.co.in)" />
    <meta name="MobileOptimized" content="width" />
    <meta name="HandheldFriendly" content="true" />
    <meta property="og:type" content="profile" />
    <meta property="og:title" content="'$_type' - Blogs | People&#039;s BLOG" />
    <meta property="og:description" content="'$_type' People&#039;s BLOG articles, came out of Thoughts, Ideas & Experiences. Articles about Lifestyle, Travel, Food, Science & Technology" />
    <meta property="og:url" content="https://peoplesblog.co.in/blogs/'${_type// /-}'/index.html" />
    <meta property="og:image" content="https://peoplesblog.co.in/upload/logo_new.webp" />
    <meta name="twitter:title" content="'$_type' - Blogs | People&#039;s BLOG">
    <meta name="twitter:description" content="'$_type' People&#039;s BLOG articles, came out of Thoughts, Ideas & Experiences. Articles about Lifestyle, Travel, Food, Science & Technology">
    <meta name="twitter:image" content="https://peoplesblog.co.in/upload/logo_new.webp">
    <meta name="twitter:card" content="summary_large_image">
    <meta name="google-site-verification" content="oIpwGHdguWnER2N8lKSljpYFSSUvg8A-sFzQkn-xLnU" />

    <!-- Global site tag (gtag.js) - Google Analytics -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-3RSZRK91SH"></script>
    <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag("js", new Date());
        gtag("config", "G-3RSZRK91SH");
    </script>
    <!-- Global site tag (gtag.js) - Google Analytics -->

    <!-- Site Icons -->
    <link rel="shortcut icon" href="../../../upload/favicon.webp" type="image/x-icon" />
    <link rel="apple-touch-icon" href="../../../upload/favicon.webp">

    <!-- Design fonts -->
    <link href="https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700" rel="stylesheet">

    <!-- Bootstrap core CSS -->
    <link href="../../../css/bootstrap.css" rel="stylesheet">

    <!-- FontAwesome Icons core CSS -->
    <link href="../../../css/font-awesome.min.css" rel="stylesheet">

    <!-- Custom styles for this template -->
    <link href="../../../css/style.css" rel="stylesheet">

    <!-- Responsive styles for this template -->
    <link href="../../../css/responsive.css" rel="stylesheet">

    <!-- Colors for this template -->
    <link href="../../../css/colors.css" rel="stylesheet">

    <!-- Version Tech CSS for this template -->
    <link href="../../../css/version/tech.css" rel="stylesheet">

    <!--[if lt IE 9]>
    <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
    <script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
    <![endif]-->
</head>
<body>

    <div id="wrapper">
        <div id="top-bar" class="top-bar"></div>
        <header class="tech-header header">
        <div class="container-fluid">
            <nav class="navbar navbar-toggleable-md navbar-inverse bg-inverse">
                <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <a class="navbar-brand" href="/index.html"><img loading="lazy" alt="People&#039;s BLOG" src="../../../upload/logo_new.webp"></a>
                <div class="collapse navbar-collapse" id="navbarCollapse">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item">
                            <a class="nav-link" href="/blogs/index.html" title="Blogs">Blogs</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/blogs/Sci-Tech/index.html" title="Sci-Tech">Sci-Tech</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/blogs/Lifestyle/index.html" title="Lifestyle">Lifestyle</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/blogs/Food/index.html" title="Food">Food</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/blogs/Travel/index.html" title="Travel">Travel</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/blogs/Social-Media/index.html" title="Social Media">Social Media</a>
                        </li>
                    </ul>
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link" href="/about.html" title="About">About</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/links.html" title="Links">Links</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/privacy.html" title="Privacy">Privacy</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/terms-and-conditions.html" title="T & C">T & C</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/contact.html" title="Contact">Contact</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div><!-- end container-fluid -->
        </header>

        <div class="page-title lb single-wrapper">
            <div class="container">
                <div class="row">
                    <div class="col-lg-8 col-md-8 col-sm-12 col-xs-12">
                        <h1><i class="fa fa-file bg-orange"></i> '$_type' <small class="hidden-xs-down hidden-sm-down peoples-quotes"></small></h1>
                    </div><!-- end col -->
                    <div class="col-lg-4 col-md-4 col-sm-12 hidden-xs-down hidden-sm-down">
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item"><a href="/index.html">Home</a></li>
                            <li class="breadcrumb-item"><a href="/blogs/index.html">Blog</a></li>
                            <li class="breadcrumb-item active">'$_type'</li>
                        </ol>
                    </div><!-- end col -->
                </div><!-- end row -->
            </div><!-- end container -->
        </div><!-- end page-title -->

        <section class="section">
            <div class="container">
                <div class="row">
                    <div class="col-lg-10 col-md-12 col-sm-12 col-xs-12">
                        <div class="page-wrapper">
                            <div class="blog-list-type blog-list clearfix">

                            </div><!-- end blog-list -->
                        </div><!-- end page-wrapper -->

                        <hr class="invis">

                        <div class="row">
                            <div class="col-md-12">
                                <nav aria-label="Page navigation">
                                    <div class="blog-list-type_pager">

                                    </div>
                                </nav>
                            </div><!-- end col -->
                        </div><!-- end row -->
                    </div><!-- end col -->

                    <div class="col-lg-2 col-md-12 col-sm-12 col-xs-12">
                        <div class="ads-type sidebar">

                        </div><!-- end sidebar -->
                    </div><!-- end col -->
                </div><!-- end row -->
            </div><!-- end container -->
        </section>

        <footer class="footer">
        <div class="container">
            <div class="row">
                <div class="col-lg-7">
                    <div class="widget">
                        <div class="footer-text text-left">
                            <a href="/index.html"><img loading="lazy" alt="People&#039;s BLOG" src="../../../upload/logo_new.webp" class="img-fluid"></a>
                            <p>People&#039;s BLOG has a mixture of articles which came out of Thoughts, Ideas & Experiences of People behind this Blog, We generally write articles about Lifestyle, Travel, Food, Science & Technology.. <a class="read-more" href="/about.html">Read More >></a></p>
                            <div class="post-sharing-footer social">

                            </div>

                            <hr class="invis">

                            <div class="newsletter-widget-subscribe newsletter-widget text-left">
                                <form name="subscribe" action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSewRpoqyq6TYnR_VU12LRPD1ahr2xP19akLcFhBjcylfPlWjw/formResponse" class="form-inline" target="_blank"><input type="text" class="form-control" placeholder="Enter your email address" name="entry.1045781291" required=""><button type="submit" class="newsletter-widget-subscribe-button btn btn-primary">Subscribe</button></form>
                            </div>

                        </div><!-- end footer-text -->
                    </div><!-- end widget -->
                </div><!-- end col -->

                <div class="col-lg-3 col-md-12 col-sm-12 col-xs-12">
                    <div class="widget">
                        <h2 class="widget-title">Popular Categories</h2>
                        <div class="link-widget">
                            <ul class="blog-list-homepage-footer">

                            </ul>
                        </div><!-- end link-widget -->
                    </div><!-- end widget -->
                </div><!-- end col -->

                <div class="col-lg-2 col-md-12 col-sm-12 col-xs-12">
                    <div class="widget">
                        <h2 class="widget-title">Misc</h2>
                        <div class="link-widget">
                            <ul>
                                <li><a title="About" href="/about.html">About</a></li>
                                <li><a title="Links" href="/links.html">Links</a></li>
                                <li><a title="Privacy" href="/privacy.html">Privacy</a></li>
                                <li><a title="T & C" href="/terms-and-conditions.html">T & C</a></li>
                                <li><a title="Contact" href="/contact.html">Contact</a></li>
                            </ul>
                        </div><!-- end link-widget -->
                    </div><!-- end widget -->
                </div><!-- end col -->
            </div>

            <div class="row">
                <div class="col-md-12 text-center">
                    <div class="copyright">
                            <span class="affliate"><br/>This site contains affiliate links to products. We may receive a commission for purchases made through these links. However, this does not impact our reviews and comparisons. We only suggest products we’ve reviewed, and in many instances also use, in order to help you make the best choices.</span>
                            <span class="_copyright">Copyright <i class="fa fa-copyright"></i> 2014 - 2021, People&#039;s BLOG</span>
                        </div>
                </div>
            </div>
        </div><!-- end container -->
        </footer>

        <div class="dmtop">Scroll to Top</div>

    </div><!-- end wrapper -->

    <!-- Core JavaScript
    ================================================== -->
    <script src="../../js/jquery.min.js"></script>
    <script src="../../js/jquery.validate.min.js"></script>
    <script src="../../js/tether.min.js"></script>
    <script src="../../js/bootstrap.min.js"></script>
    <script src="../../js/custom.js"></script>

    <div id="policy-container"></div>

    <script type="text/javascript">
        function googleTranslateElementInit() {
            new google.translate.TranslateElement({pageLanguage: "es"}, "google_translate_element");
        }
    </script>
    <script type="text/javascript" src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"></script>

</body>
</html>' > $blogsfilepath'/'index.html
     ## Category
     IFS=',' read -ra category_array <<< "$category"
     categories=''
     for _category_i in "${category_array[@]}"
     do
       _category=`echo $_category_i | sed -e 's/^[[:space:]]*//'`
       blogsfolderpath=$blogs'/'${_type// /-}'/'${_category// /-}
       mkdir -p $blogsfolderpath
       #################################################################################################################
       #################################################################################################################
       ##### CATEGORY
       #################################################################################################################
       #################################################################################################################
       echo '<!DOCTYPE html>
<html lang="en">
<head>
    <!-- Basic -->
    <meta charset="utf-8">
    <meta http-equiv="content-language" content="en" />

    <!-- Mobile Metas -->
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Site Metas -->
    <title>'$_category' - '$_type' Blogs | People&#039;s BLOG</title>
    <meta name="description" content="'$_category' People&#039;s BLOG articles, came out of Thoughts, Ideas & Experiences. Articles about Lifestyle, Travel, Food, Science & Technology">
    <meta name="author" content="People&#039;s BLOG">
    <link rel="canonical" href="https://peoplesblog.co.in/blogs/'${_type// /-}'/'${_category// /-}'/index.html" />
    <link rel="shortlink" href="https://peoplesblog.co.in/blogs/'${_type// /-}'/'${_category// /-}'/index.html" />
    <link rel="revision" href="https://peoplesblog.co.in/blogs/'${_type// /-}'/'${_category// /-}'/index.html" />
    <meta name="robots" content="index, follow">
    <meta name="icbm" content="13.1071,77.5931" />
    <meta name="geo.region" content="IN" />
    <meta name="geo.placename" content="Bangalore" />
    <meta name="geo.position" content="13.1071,77.5931" />
    <meta name="Generator" content="People&#039;s BLOGs (https://peoplesblog.co.in)" />
    <meta name="MobileOptimized" content="width" />
    <meta name="HandheldFriendly" content="true" />
    <meta property="og:type" content="profile" />
    <meta property="og:title" content="'$_category' - '$_type' Blogs | People&#039;s BLOG" />
    <meta property="og:description" content="'$_category' People&#039;s BLOG articles, came out of Thoughts, Ideas & Experiences. Articles about Lifestyle, Travel, Food, Science & Technology" />
    <meta property="og:url" content="https://peoplesblog.co.in/blogs/'${_type// /-}'/'${_category// /-}'/index.html" />
    <meta property="og:image" content="https://peoplesblog.co.in/upload/logo_new.webp" />
    <meta name="twitter:title" content="'$_category' - '$_type' Blogs | People&#039;s BLOG">
    <meta name="twitter:description" content="'$_category' People&#039;s BLOG articles, came out of Thoughts, Ideas & Experiences. Articles about Lifestyle, Travel, Food, Science & Technology">
    <meta name="twitter:image" content="https://peoplesblog.co.in/upload/logo_new.webp">
    <meta name="twitter:card" content="summary_large_image">
    <meta name="google-site-verification" content="oIpwGHdguWnER2N8lKSljpYFSSUvg8A-sFzQkn-xLnU" />

    <!-- Global site tag (gtag.js) - Google Analytics -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-3RSZRK91SH"></script>
    <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag("js", new Date());
        gtag("config", "G-3RSZRK91SH");
    </script>
    <!-- Global site tag (gtag.js) - Google Analytics -->

    <!-- Site Icons -->
    <link rel="shortcut icon" href="../../../upload/favicon.webp" type="image/x-icon" />
    <link rel="apple-touch-icon" href="../../../upload/favicon.webp">

    <!-- Design fonts -->
    <link href="https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700" rel="stylesheet">

    <!-- Bootstrap core CSS -->
    <link href="../../../css/bootstrap.css" rel="stylesheet">

    <!-- FontAwesome Icons core CSS -->
    <link href="../../../css/font-awesome.min.css" rel="stylesheet">

    <!-- Custom styles for this template -->
    <link href="../../../css/style.css" rel="stylesheet">

    <!-- Responsive styles for this template -->
    <link href="../../../css/responsive.css" rel="stylesheet">

    <!-- Colors for this template -->
    <link href="../../../css/colors.css" rel="stylesheet">

    <!-- Version Tech CSS for this template -->
    <link href="../../../css/version/tech.css" rel="stylesheet">

    <!--[if lt IE 9]>
    <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
    <script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
    <![endif]-->
</head>
<body>

    <div id="wrapper">
        <div id="top-bar" class="top-bar"></div>
        <header class="tech-header header">
        <div class="container-fluid">
            <nav class="navbar navbar-toggleable-md navbar-inverse bg-inverse">
                <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <a class="navbar-brand" href="/index.html"><img loading="lazy" alt="People&#039;s BLOG" src="../../../upload/logo_new.webp"></a>
                <div class="collapse navbar-collapse" id="navbarCollapse">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item">
                            <a class="nav-link" href="/blogs/index.html" title="Blogs">Blogs</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/blogs/Sci-Tech/index.html" title="Sci-Tech">Sci-Tech</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/blogs/Lifestyle/index.html" title="Lifestyle">Lifestyle</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/blogs/Food/index.html" title="Food">Food</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/blogs/Travel/index.html" title="Travel">Travel</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/blogs/Social-Media/index.html" title="Social Media">Social Media</a>
                        </li>
                    </ul>
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link" href="/about.html" title="About">About</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/links.html" title="Links">Links</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/privacy.html" title="Privacy">Privacy</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/terms-and-conditions.html" title="T & C">T & C</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/contact.html" title="Contact">Contact</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div><!-- end container-fluid -->
        </header>

        <div class="page-title lb single-wrapper">
            <div class="container">
                <div class="row">
                    <div class="col-lg-8 col-md-8 col-sm-12 col-xs-12">
                        <h1><i class="fa fa-tag bg-orange"></i> '$_category' <small class="hidden-xs-down hidden-sm-down peoples-quotes"></small></h1>
                    </div><!-- end col -->
                    <div class="col-lg-4 col-md-4 col-sm-12 hidden-xs-down hidden-sm-down">
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item"><a href="/index.html">Home</a></li>
                            <li class="breadcrumb-item"><a href="/blogs/index.html">Blog</a></li>
                            <li class="breadcrumb-item"><a href="/blogs/'${_type// /-}'/index.html">'$_type'</a></li>
                            <li class="breadcrumb-item active">'$_category'</li>
                        </ol>
                    </div><!-- end col -->
                </div><!-- end row -->
            </div><!-- end container -->
        </div><!-- end page-title -->

        <section class="section">
            <div class="container">
                <div class="row">
                    <div class="col-lg-10 col-md-12 col-sm-12 col-xs-12">
                        <div class="page-wrapper">
                            <div class="blog-list-category blog-list clearfix">

                            </div><!-- end blog-list -->
                        </div><!-- end page-wrapper -->

                        <hr class="invis">

                        <div class="row">
                            <div class="col-md-12">
                                <nav aria-label="Page navigation">
                                    <div class="blog-list-category_pager">

                                    </div>
                                </nav>
                            </div><!-- end col -->
                        </div><!-- end row -->
                    </div><!-- end col -->

                    <div class="col-lg-2 col-md-12 col-sm-12 col-xs-12">
                        <div class="ads sidebar">

                        </div><!-- end sidebar -->
                    </div><!-- end col -->
                </div><!-- end row -->
            </div><!-- end container -->
        </section>

        <footer class="footer">
        <div class="container">
            <div class="row">
                <div class="col-lg-7">
                    <div class="widget">
                        <div class="footer-text text-left">
                            <a href="/index.html"><img loading="lazy" alt="People&#039;s BLOG" src="../../../upload/logo_new.webp" class="img-fluid"></a>
                            <p>People&#039;s BLOG has a mixture of articles which came out of Thoughts, Ideas & Experiences of People behind this Blog, We generally write articles about Lifestyle, Travel, Food, Science & Technology.. <a class="read-more" href="/about.html">Read More >></a></p>
                            <div class="post-sharing-footer social">

                            </div>

                            <hr class="invis">

                            <div class="newsletter-widget-subscribe newsletter-widget text-left">
                                <form name="subscribe" action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSewRpoqyq6TYnR_VU12LRPD1ahr2xP19akLcFhBjcylfPlWjw/formResponse" class="form-inline" target="_blank"><input type="text" class="form-control" placeholder="Enter your email address" name="entry.1045781291" required=""><button type="submit" class="newsletter-widget-subscribe-button btn btn-primary">Subscribe</button></form>
                            </div>

                        </div><!-- end footer-text -->
                    </div><!-- end widget -->
                </div><!-- end col -->

                <div class="col-lg-3 col-md-12 col-sm-12 col-xs-12">
                    <div class="widget">
                        <h2 class="widget-title">Popular Categories</h2>
                        <div class="link-widget">
                            <ul class="blog-list-homepage-footer">

                            </ul>
                        </div><!-- end link-widget -->
                    </div><!-- end widget -->
                </div><!-- end col -->

                <div class="col-lg-2 col-md-12 col-sm-12 col-xs-12">
                    <div class="widget">
                        <h2 class="widget-title">Misc</h2>
                        <div class="link-widget">
                            <ul>
                                <li><a title="About" href="/about.html">About</a></li>
                                <li><a title="Links" href="/links.html">Links</a></li>
                                <li><a title="Privacy" href="/privacy.html">Privacy</a></li>
                                <li><a title="T & C" href="/terms-and-conditions.html">T & C</a></li>
                                <li><a title="Contact" href="/contact.html">Contact</a></li>
                            </ul>
                        </div><!-- end link-widget -->
                    </div><!-- end widget -->
                </div><!-- end col -->
            </div>

            <div class="row">
                <div class="col-md-12 text-center">
                    <div class="copyright">
                            <span class="affliate"><br/>This site contains affiliate links to products. We may receive a commission for purchases made through these links. However, this does not impact our reviews and comparisons. We only suggest products we’ve reviewed, and in many instances also use, in order to help you make the best choices.</span>
                            <span class="_copyright">Copyright <i class="fa fa-copyright"></i> 2014 - 2021, People&#039;s BLOG</span>
                        </div>
                </div>
            </div>
        </div><!-- end container -->
        </footer>

        <div class="dmtop">Scroll to Top</div>

    </div><!-- end wrapper -->

    <!-- Core JavaScript
    ================================================== -->
    <script src="../../../js/jquery.min.js"></script>
    <script src="../../../js/jquery.validate.min.js"></script>
    <script src="../../../js/tether.min.js"></script>
    <script src="../../../js/bootstrap.min.js"></script>
    <script src="../../../js/custom.js"></script>

    <div id="policy-container"></div>

    <script type="text/javascript">
        function googleTranslateElementInit() {
            new google.translate.TranslateElement({pageLanguage: "es"}, "google_translate_element");
        }
    </script>
    <script type="text/javascript" src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"></script>

</body>
</html>' > $blogsfolderpath'/'index.html
       categories+='<small><a href="/blogs/'${_type// /-}'/'${_category// /-}'/index.html">'$_category'</a></small>'
       ## Article
       blogspath=$blogsfolderpath'/'$file
       blogsfilepath=${blogspath/%.json}.html
       #################################################################################################################
       #################################################################################################################
       ##### BLOG
       #################################################################################################################
       #################################################################################################################
       echo "Writing Article - "$file
       echo '<!DOCTYPE html>
<html lang="en">
<head>
    <!-- Basic -->
    <meta charset="utf-8">
    <meta http-equiv="content-language" content="en" />

    <!-- Mobile Metas -->
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Site Metas -->
    <title>'$title' - '$_category' Blogs | People&#039;s BLOG</title>
    <meta name="description" content="'$summary'">
    <meta name="author" content="People&#039;s BLOG">
    <link rel="canonical" href="https://peoplesblog.co.in/blogs/'${_type// /-}'/'${_category// /-}'/'${file/%.json}.html'" />
    <link rel="shortlink" href="https://peoplesblog.co.in/blogs/'${_type// /-}'/'${_category// /-}'/'${file/%.json}.html'" />
    <link rel="revision" href="https://peoplesblog.co.in/blogs/'${_type// /-}'/'${_category// /-}'/'${file/%.json}.html'" />
    <meta name="robots" content="index, follow">
    <meta name="icbm" content="13.1071,77.5931" />
    <meta name="geo.region" content="IN" />
    <meta name="geo.placename" content="Bangalore" />
    <meta name="geo.position" content="13.1071,77.5931" />
    <meta name="Generator" content="People&#039;s BLOGs (https://peoplesblog.co.in)" />
    <meta name="MobileOptimized" content="width" />
    <meta name="HandheldFriendly" content="true" />
    <meta property="og:type" content="profile" />
    <meta property="og:title" content="'$title' - '$_category' Blogs | People&#039;s BLOG" />
    <meta property="og:description" content="'$summary'" />
    <meta property="og:url" content="https://peoplesblog.co.in/blogs/'${_type// /-}'/'${_category// /-}'/'${file/%.json}.html'" />
    <meta property="og:image" content="https://peoplesblog.co.in/'$banner'" />
    <meta name="twitter:title" content="'$title' - '$_category' Blogs | People&#039;s BLOG">
    <meta name="twitter:description" content="'$summary'">
    <meta name="twitter:image" content="https://peoplesblog.co.in/'$banner'">
    <meta name="twitter:card" content="summary_large_image">
    <meta name="google-site-verification" content="oIpwGHdguWnER2N8lKSljpYFSSUvg8A-sFzQkn-xLnU" />

    <!-- Global site tag (gtag.js) - Google Analytics -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-3RSZRK91SH"></script>
    <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag("js", new Date());
        gtag("config", "G-3RSZRK91SH");
    </script>
    <!-- Global site tag (gtag.js) - Google Analytics -->

    <!-- Site Icons -->
    <link rel="shortcut icon" href="../../../upload/favicon.webp" type="image/x-icon" />
    <link rel="apple-touch-icon" href="../../../upload/favicon.webp">

    <!-- Design fonts -->
    <link href="https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700" rel="stylesheet">

    <!-- Bootstrap core CSS -->
    <link href="../../../css/bootstrap.css" rel="stylesheet">

    <!-- FontAwesome Icons core CSS -->
    <link href="../../../css/font-awesome.min.css" rel="stylesheet">

    <!-- Custom styles for this template -->
    <link href="../../../css/style.css" rel="stylesheet">

    <!-- Responsive styles for this template -->
    <link href="../../../css/responsive.css" rel="stylesheet">

    <!-- Colors for this template -->
    <link href="../../../css/colors.css" rel="stylesheet">

    <!-- Version Tech CSS for this template -->
    <link href="../../../css/version/tech.css" rel="stylesheet">

    <!--[if lt IE 9]>
    <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
    <script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
    <![endif]-->

    <script type="application/ld+json">
      {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": "https://peoplesblog.co.in/blogs/'${_type// /-}'/'${_category// /-}'/index.html"
        },
        "headline": "'$title'",
        "description": "'$summary'",
        "image": "https://peoplesblog.co.in/'$banner'",
        "author": {
          "@type": "Person",
          "name": "Karthik"
        },
        "publisher": {
          "@type": "Organization",
          "name": "People&#039;s BLOG",
          "logo": {
            "@type": "ImageObject",
            "url": "https://peoplesblog.co.in/upload/favicon.webp"
          }
        },
        "datePublished": "'$created'",
        "dateModified": "'$created'"
      }
    </script>

</head>
<body>
    <div id="wrapper">
        <div id="top-bar" class="top-bar"></div>
        <header class="tech-header header">
        <div class="container-fluid">
            <nav class="navbar navbar-toggleable-md navbar-inverse bg-inverse">
                <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <a class="navbar-brand" href="/index.html"><img loading="lazy" alt="People&#039;s BLOG" src="../../../upload/logo_new.webp"></a>
                <div class="collapse navbar-collapse" id="navbarCollapse">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item">
                            <a class="nav-link" href="/blogs/index.html" title="Blogs">Blogs</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/blogs/Sci-Tech/index.html" title="Sci-Tech">Sci-Tech</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/blogs/Lifestyle/index.html" title="Lifestyle">Lifestyle</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/blogs/Food/index.html" title="Food">Food</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/blogs/Travel/index.html" title="Travel">Travel</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/blogs/Social-Media/index.html" title="Social Media">Social Media</a>
                        </li>
                    </ul>
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link" href="/about.html" title="About">About</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/links.html" title="Links">Links</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/privacy.html" title="Privacy">Privacy</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/terms-and-conditions.html" title="T & C">T & C</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/contact.html" title="Contact">Contact</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div><!-- end container-fluid -->
        </header>

        <section class="section single-wrapper">
            <div class="container">
                <div class="row">
                    <div class="col-lg-10 col-md-12 col-sm-12 col-xs-12">
                        <div class="page-wrapper">
                            <div class="blog-title-area text-center">
                                <ol class="breadcrumb hidden-xs-down">
                                    <li class="breadcrumb-item"><a href="/index.html">Home</a></li>
                                    <li class="breadcrumb-item"><a href="/blogs/index.html">Blog</a></li>
                                    <li class="breadcrumb-item"><a href="/blogs/'${_type// /-}'/index.html">'$_type'</a></li>
                                    <li class="breadcrumb-item"><a href="/blogs/'${_type// /-}'/'${_category// /-}'/index.html">'$_category'</a></li>
                                    <li class="breadcrumb-item active">'$title'</li>
                                </ol>

                                <!-- span class="color-orange"><a href="/blogs/'${_type// /-}'/index.html" title="'$_type'">'$_type'</a></span -->

                                <h1 class="read-article-title">'$title'</h1>

                                <div class="blog-meta big-meta">
                                    <small><i>'$created'</i></small>
                                    <small class="author-by">by <i><a href="/authors/'${author// /-}'.html">'$author'</a></i></small>
                                    <small class="read-article-section">
                                      <i class="fa fa-play read-article"> <div>Read Article</div></i>
                                      <i class="fa fa-pause read-article-pause"> <div>Pause</div></i>
                                      <i class="fa fa-play read-article-resume"> <div>Resume</div></i>
                                      <i class="fa fa-stop read-article-stop"> <div>Stop</div></i>
                                    </small>
                                </div><!-- end meta -->

                                <div class="post-sharing-top post-sharing"></div><!-- end post-sharing -->

                            </div><!-- end title -->

                            <div class="single-post-media">
                                <img loading="lazy" alt="People&#039;s BLOG" src="../../../'$banner'" class="img-fluid">
                            </div><!-- end media -->

                            <div class="blog-content read-article-content">
                                <div>'$content'</div>
                            </div><!-- end content -->

                            <div class="blog-title-area tag">
                                <div class="tag-cloud-single">
                                    <span>Tags</span>
                                    '$categories'
                                </div><!-- end meta -->

                                <br/>
                                <!-- div class="post-sharing-top post-sharing"></div --><!-- end post-sharing -->

                            </div><!-- end title -->

                            <div class="ads-page-1"></div><!-- end ads-page-1 -->

                            <!-- hr class="invis1" -->
                            <!-- div class="prevnext-articles custombox prevnextpost clearfix"></div -->

                            <!-- hr class="invis1" -->
                            <div class="custombox clearfix">
                                <h4 class="small-title">Comments</h4>
                                <div class="row">
                                    <div class="col-lg-12">
                                        <div class="comments-list">
                                            <!-- script src="https://utteranc.es/client.js"
                                                    repo="kakumdk/kakumdk.github.io"
                                                    issue-term="url"
                                                    theme="github-light"
                                                    crossorigin="anonymous"
                                                    async>
                                            </script -->
                                            <div id="disqus_thread"></div>
                                            <script>
                                                (function() { // DONT EDIT BELOW THIS LINE
                                                    var d = document, s = d.createElement("script");
                                                    s.src = "https://peoplesblog.disqus.com/embed.js";
                                                    s.setAttribute("data-timestamp", +new Date());
                                                    (d.head || d.body).appendChild(s);
                                                })();
                                            </script>
                                            <noscript>Please enable JavaScript to view the <a href="https://disqus.com/?ref_noscript">comments powered by Disqus.</a></noscript>
                                            <script id="dsq-count-scr" src="//peoplesblog.disqus.com/count.js" async></script>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <hr class="invis0">
                            <div class="prevnext-articles custombox prevnextpost clearfix"></div>

                            <div class="ads-page-2"></div><!-- end ads-page-1 -->

                        </div><!-- end page-wrapper -->
                    </div><!-- end col -->

                    <div class="col-lg-2 col-md-12 col-sm-12 col-xs-12">
                        <div class="ads-article sidebar">

                        </div><!-- end sidebar -->
                    </div><!-- end col -->
                </div><!-- end row -->
            </div><!-- end container -->
        </section>

        <footer class="footer">
        <div class="container">
            <div class="row">
                <div class="col-lg-7">
                    <div class="widget">
                        <div class="footer-text text-left">
                            <a href="/index.html"><img loading="lazy" alt="People&#039;s BLOG" src="../../../upload/logo_new.webp" class="img-fluid"></a>
                            <p>People&#039;s BLOG has a mixture of articles which came out of Thoughts, Ideas & Experiences of People behind this Blog, We generally write articles about Lifestyle, Travel, Food, Science & Technology.. <a class="read-more" href="/about.html">Read More >></a></p>
                            <div class="post-sharing-footer social">

                            </div>

                            <hr class="invis">

                            <div class="newsletter-widget-subscribe newsletter-widget text-left">
                                <form name="subscribe" action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSewRpoqyq6TYnR_VU12LRPD1ahr2xP19akLcFhBjcylfPlWjw/formResponse" class="form-inline" target="_blank"><input type="text" class="form-control" placeholder="Enter your email address" name="entry.1045781291" required=""><button type="submit" class="newsletter-widget-subscribe-button btn btn-primary">Subscribe</button></form>
                            </div>

                        </div><!-- end footer-text -->
                    </div><!-- end widget -->
                </div><!-- end col -->

                <div class="col-lg-3 col-md-12 col-sm-12 col-xs-12">
                    <div class="widget">
                        <h2 class="widget-title">Popular Categories</h2>
                        <div class="link-widget">
                            <ul class="blog-list-homepage-footer">

                            </ul>
                        </div><!-- end link-widget -->
                    </div><!-- end widget -->
                </div><!-- end col -->

                <div class="col-lg-2 col-md-12 col-sm-12 col-xs-12">
                    <div class="widget">
                        <h2 class="widget-title">Misc</h2>
                        <div class="link-widget">
                            <ul>
                                <li><a title="About" href="/about.html">About</a></li>
                                <li><a title="Links" href="/links.html">Links</a></li>
                                <li><a title="Privacy" href="/privacy.html">Privacy</a></li>
                                <li><a title="T & C" href="/terms-and-conditions.html">T & C</a></li>
                                <li><a title="Contact" href="/contact.html">Contact</a></li>
                            </ul>
                        </div><!-- end link-widget -->
                    </div><!-- end widget -->
                </div><!-- end col -->
            </div>

            <div class="row">
                <div class="col-md-12 text-center">
                    <div class="copyright">
                            <span class="affliate"><br/>This site contains affiliate links to products. We may receive a commission for purchases made through these links. However, this does not impact our reviews and comparisons. We only suggest products we’ve reviewed, and in many instances also use, in order to help you make the best choices.</span>
                            <span class="_copyright">Copyright <i class="fa fa-copyright"></i> 2014 - 2021, People&#039;s BLOG</span>
                        </div>
                </div>
            </div>
        </div><!-- end container -->
        </footer>

        <div class="dmtop">Scroll to Top</div>
    </div><!-- end wrapper -->
    <!-- Core JavaScript
    ================================================== -->
    <script src="../../../js/jquery.min.js"></script>
    <script src="../../../js/jquery.validate.min.js"></script>
    <script src="../../../js/tether.min.js"></script>
    <script src="../../../js/bootstrap.min.js"></script>
    <script src="../../../js/custom.js"></script>

    <div id="policy-container"></div>

    <script type="text/javascript">
        function googleTranslateElementInit() {
            new google.translate.TranslateElement({pageLanguage: "es"}, "google_translate_element");
        }
    </script>
    <script type="text/javascript" src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"></script>

</body>
</html>' > $blogsfilepath
     done
   done
done

#################################################################################################################
#################################################################################################################
##### JSON content, Multiple to Single
#################################################################################################################
#################################################################################################################
blogscontentmerged=$pwd/blogs-content-merged
jq -s '[.[][]]' $blogscontent'/'*.json > $blogscontentmerged'/blogs.json'

#################################################################################################################
#################################################################################################################
##### SiteMap
#################################################################################################################
#################################################################################################################
date=$(date +'%Y-%m-%d')
echo '<?xml version="1.0" encoding="UTF-8"?>
        <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
          <url><loc>https://peoplesblog.co.in/</loc><lastmod>'$date'</lastmod></url>
          <url><loc>https://peoplesblog.co.in/about.html</loc><lastmod>'$date'</lastmod></url>
          <url><loc>https://peoplesblog.co.in/links.html</loc><lastmod>'$date'</lastmod></url>
          <url><loc>https://peoplesblog.co.in/privacy.html</loc><lastmod>'$date'</lastmod></url>
          <url><loc>https://peoplesblog.co.in/terms-and-conditions.html</loc><lastmod>'$date'</lastmod></url>
          <url><loc>https://peoplesblog.co.in/contact.html</loc><lastmod>'$date'</lastmod></url>
          <url><loc>https://peoplesblog.co.in/authors/index.html</loc><lastmod>'$date'</lastmod></url>
          <url><loc>https://peoplesblog.co.in/authors/Hanukkah-John.html</loc><lastmod>'$date'</lastmod></url>
          <url><loc>https://peoplesblog.co.in/authors/Jyothi-S-N.html</loc><lastmod>'$date'</lastmod></url>
          <url><loc>https://peoplesblog.co.in/authors/Karthik-Kumar-D-K.html</loc><lastmod>'$date'</lastmod></url>
          <url><loc>https://peoplesblog.co.in/authors/Leela-Vasundhara.html</loc><lastmod>'$date'</lastmod></url>
          <url><loc>https://peoplesblog.co.in/blogs/index.html</loc><lastmod>'$date'</lastmod></url>
          <url><loc>https://peoplesblog.co.in/blogs/Sci-Tech/index.html</loc><lastmod>'$date'</lastmod></url>
          <url><loc>https://peoplesblog.co.in/blogs/Lifestyle/index.html</loc><lastmod>'$date'</lastmod></url>
          <url><loc>https://peoplesblog.co.in/blogs/Food/index.html</loc><lastmod>'$date'</lastmod></url>
          <url><loc>https://peoplesblog.co.in/blogs/Travel/index.html</loc><lastmod>'$date'</lastmod></url>
          <url><loc>https://peoplesblog.co.in/blogs/Social-Media/index.html</loc><lastmod>'$date'</lastmod></url>' > $pwd'/sitemap.xml'
data=`jq -r '' $pwd/blogs-content-merged/blogs.json`
for row in $(echo "${data}" | jq -r '.[] | @base64'); do
    _jq() {
     echo ${row} | base64 --decode | jq -r ${1}
    }
    IFS=',' read -ra category_array <<< "$(_jq '.category')"
    categories=''
    for _category_i in "${category_array[@]}"
    do
      _type=`echo $(_jq '.type') | sed -e 's/^[[:space:]]*//'`
      _category=`echo $_category_i | sed -e 's/^[[:space:]]*//'`
#      echo '          <url><loc>https://peoplesblog.co.in/blogs/'${_type// /-}'/'${_category// /-}'/index.html</loc><lastmod>'$date'</lastmod></url>' >> $pwd'/sitemap.xml'
      jsonfile=$(_jq '.file')
      echo "Writing sitemap.xml - "$jsonfile
      echo '          <url><loc>https://peoplesblog.co.in/blogs/'${_type// /-}'/'${_category// /-}'/'${jsonfile/%.json}.html'</loc><lastmod>'$date'</lastmod></url>' >> $pwd'/sitemap.xml'
    done
done
echo '</urlset>' >> $pwd'/sitemap.xml'


#################################################################################################################
#################################################################################################################
##### Robots.txt
#################################################################################################################
#################################################################################################################
echo 'User-agent: Googlebot
Allow: /index.html
Allow: /about.html
Allow: /links.html
Allow: /privacy.html
Allow: /terms-and-conditions.html
Allow: /contact.html
Allow: /authors/index.html
Allow: /authors/Hanukkah-John.html
Allow: /authors/Jyothi-S-N.html
Allow: /authors/Karthik-Kumar-D-K.html
Allow: /authors/Leela-Vasundhara.html
Allow: /blogs/index.html
Allow: /blogs/Sci-Tech/index.html
Allow: /blogs/Lifestyle/index.html
Allow: /blogs/Food/index.html
Allow: /blogs/Travel/index.html
Allow: /blogs/Social-Media/index.html' > $pwd'/robots.txt'
data=`jq -r '' $pwd/blogs-content-merged/blogs.json`
for row in $(echo "${data}" | jq -r '.[] | @base64'); do
    _jq() {
     echo ${row} | base64 --decode | jq -r ${1}
    }
    IFS=',' read -ra category_array <<< "$(_jq '.category')"
    categories=''
    for _category_i in "${category_array[@]}"
    do
      _type=`echo $(_jq '.type') | sed -e 's/^[[:space:]]*//'`
      _category=`echo $_category_i | sed -e 's/^[[:space:]]*//'`
#      echo 'Allow: /blogs/'${_type// /-}'/'${_category// /-}'/index.html' >> $pwd'/robots.txt'
#      echo 'Allow: https://peoplesblog.co.in/blogs/'${_type// /-}'/'${_category// /-} >> $pwd'/robots.txt'
      jsonfile=$(_jq '.file')
      echo "Writing robots.txt - "$jsonfile
      echo 'Allow: /blogs/'${_type// /-}'/'${_category// /-}'/'${jsonfile/%.json}.html >> $pwd'/robots.txt'
#      echo 'Allow: https://peoplesblog.co.in/blogs/'${_type// /-}'/'${_category// /-}'/'${jsonfile/%.json}.html >> $pwd'/robots.txt'
    done
done
echo 'Disallow: /ads/ads.json
Disallow: /authors-content
Disallow: /authors-content/
Disallow: /authors-content-merged
Disallow: /authors-content-merged/
Disallow: /blogs-content
Disallow: /blogs-content/
Disallow: /blogs-content-merged
Disallow: /blogs-content-merged/
Disallow: /quotes/quotes.json
Disallow: /scripts
Disallow: /scripts/
Disallow: /content
Disallow: /content/
Disallow: /tmp.html

Sitemap: https://peoplesblog.co.in/sitemap.xml

User-agent: *
Allow: /index.html
Allow: /about.html
Allow: /links.html
Allow: /privacy.html
Allow: /terms-and-conditions.html
Allow: /contact.html
Allow: /authors/index.html
Allow: /authors/Hanukkah-John.html
Allow: /authors/Jyothi-S-N.html
Allow: /authors/Karthik-Kumar-D-K.html
Allow: /authors/Leela-Vasundhara.html
Allow: /blogs/index.html
Allow: /blogs/Sci-Tech/index.html
Allow: /blogs/Lifestyle/index.html
Allow: /blogs/Food/index.html
Allow: /blogs/Travel/index.html
Allow: /blogs/Social-Media/index.html' >> $pwd'/robots.txt'
data=`jq -r '' $pwd/blogs-content-merged/blogs.json`
for row in $(echo "${data}" | jq -r '.[] | @base64'); do
    _jq() {
     echo ${row} | base64 --decode | jq -r ${1}
    }
    IFS=',' read -ra category_array <<< "$(_jq '.category')"
    categories=''
    for _category_i in "${category_array[@]}"
    do
      _type=`echo $(_jq '.type') | sed -e 's/^[[:space:]]*//'`
      _category=`echo $_category_i | sed -e 's/^[[:space:]]*//'`
#      echo 'Allow: /blogs/'${_type// /-}'/'${_category// /-}'/index.html' >> $pwd'/robots.txt'
#      echo 'Allow: https://peoplesblog.co.in/blogs/'${_type// /-}'/'${_category// /-} >> $pwd'/robots.txt'
      jsonfile=$(_jq '.file')
      echo 'Allow: /blogs/'${_type// /-}'/'${_category// /-}'/'${jsonfile/%.json}.html >> $pwd'/robots.txt'
#      echo 'Allow: https://peoplesblog.co.in/blogs/'${_type// /-}'/'${_category// /-}'/'${jsonfile/%.json}.html >> $pwd'/robots.txt'
    done
done
echo 'Disallow: /ads/ads.json
Disallow: /authors-content
Disallow: /authors-content/
Disallow: /authors-content-merged
Disallow: /authors-content-merged/
Disallow: /blogs-content
Disallow: /blogs-content/
Disallow: /blogs-content-merged
Disallow: /blogs-content-merged/
Disallow: /quotes/quotes.json
Disallow: /scripts
Disallow: /scripts/
Disallow: /content
Disallow: /content/
Disallow: /tmp.html

Sitemap: https://peoplesblog.co.in/sitemap.xml' >> $pwd'/robots.txt'
