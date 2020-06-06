
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
   content=`jq -r '.content .content' $filepath`
   type=`jq -r '.content .type' $filepath`
   category=`jq -r '.content .category' $filepath`
   banner=`jq -r '.content .banner800x460' $filepath`
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
    <title>Blogs - Peoples Blog</title>
    <meta name="description" content="Blogs - Peoples Blog has a mixture of articles which came out of Thoughts, Ideas & Experiences of People behind this Blog, We generally write articles about Lifestyle, Travel, Food, Science & Technology..">
    <meta name="author" content="Karthik Kumar D K">
    <link rel="canonical" href="https://kakumdk.github.io/blogs/" />
    <link rel="shortlink" href="https://kakumdk.github.io/blogs/index.html" />
    <link rel="revision" href="https://kakumdk.github.io/blogs/" />
    <meta name="robots" content="index, follow">
    <meta name="icbm" content="13.1071,77.5931" />
    <meta name="geo.region" content="IN" />
    <meta name="geo.placename" content="Bangalore" />
    <meta name="geo.position" content="13.1071,77.5931" />
    <meta name="Generator" content="Karthik Kumar D K (https://karthikkumardk.co.in)" />
    <meta name="MobileOptimized" content="width" />
    <meta name="HandheldFriendly" content="true" />
    <meta property="og:type" content="profile" />
    <meta property="og:title" content="Blogs - Peoples Blog" />
    <meta property="og:description" content="Blogs - Peoples Blog has a mixture of articles which came out of Thoughts, Ideas & Experiences of People behind this Blog, We generally write articles about Lifestyle, Travel, Food, Science & Technology.." />
    <meta property="og:url" content="https://kakumdk.github.io/blogs/" />
<!--    <meta name="google-site-verification" content="" />-->
    <!-- Global site tag (gtag.js) - Google Analytics -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-93645678-6"></script>
    <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag("js", new Date());
        gtag("config", "UA-93645678-6");
    </script>
    <!-- Global site tag (gtag.js) - Google Analytics -->

    <!-- Site Icons -->
    <link rel="shortcut icon" href="../../../images/logo.png" type="image/x-icon" />
    <link rel="apple-touch-icon" href="images/logo.png">

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
        <header class="tech-header header">
        <div class="container-fluid">
            <nav class="navbar navbar-toggleable-md navbar-inverse fixed-top bg-inverse">
                <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <a class="navbar-brand" href="/index.html"><img src="../../../upload/logo.png" alt=""></a>
                <div class="collapse navbar-collapse" id="navbarCollapse">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item">
                            <a class="nav-link" href="/blogs">Blogs</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/blogs/Sci-Tech">Sci-Tech</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/blogs/Lifestyle">Lifestyle</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/blogs/Food">Food</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/blogs/Travel">Travel</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/blogs/News">News</a>
                        </li>
                    </ul>
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link" href="/about.html">About</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/privacy.html">Privacy</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/terms-and-conditions.html">T & C</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/links.html">Links</a>
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
                        <h2><i class="fa fa-list bg-orange"></i> Blogs <small class="hidden-xs-down hidden-sm-down peoples-quotes"></small></h2>
                    </div><!-- end col -->
                    <div class="col-lg-4 col-md-4 col-sm-12 hidden-xs-down hidden-sm-down">
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item"><a href="/">Home</a></li>
                            <li class="breadcrumb-item active">Blog</li>
                        </ol>
                    </div><!-- end col -->
                </div><!-- end row -->
            </div><!-- end container -->
        </div><!-- end page-title -->

        <section class="section">
            <div class="container">
                <div class="row">
                    <div class="col-lg-3 col-md-12 col-sm-12 col-xs-12">
                        <div class="ads-blogs sidebar">

                        </div><!-- end sidebar -->
                    </div><!-- end col -->

                    <div class="col-lg-9 col-md-12 col-sm-12 col-xs-12">
                        <div class="page-wrapper">
                            <div class="blog-grid-system">
                                <div class="row blog-list-blogs">

                                </div>
                            </div>
                        </div><!-- end page-wrapper -->

                        <hr class="invis">

                        <div class="row">
                            <div class="col-md-12">
                                <nav aria-label="Page navigation">
                                    <ul class="pagination justify-content-center">
                                        <li class="page-item">
                                            <button id="see-more" class="page-link">See More</button>
                                        </li>
                                    </ul>
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
                            <a href="/"><img src="../../../upload/logo.png" alt="" class="img-fluid"></a>
                            <p>Peoples Blog has a mixture of articles which came out of Thoughts, Ideas & Experiences of People behind this Blog, We generally write articles about Lifestyle, Travel, Food, Science & Technology.. <a class="read-more" href="/about.html">Read More >></a></p>
                            <div class="post-sharing-footer social">

                            </div>

                            <hr class="invis">

        <!--                    <div class="newsletter-widget text-left">-->
        <!--                        <form class="form-inline">-->
        <!--                            <input type="text" class="form-control" placeholder="Enter your email address">-->
        <!--                            <button type="submit" class="btn btn-primary">SUBMIT</button>-->
        <!--                        </form>-->
        <!--                    </div>&lt;!&ndash; end newsletter &ndash;&gt;-->
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
                                <li><a href="/about.html">About</a></li>
                                <li><a href="/privacy.html">Privacy</a></li>
                                <li><a href="/terms-and-conditions.html">T & C</a></li>
                                <li><a href="/links.html">Links</a></li>
                            </ul>
                        </div><!-- end link-widget -->
                    </div><!-- end widget -->
                </div><!-- end col -->
            </div>

            <div class="row">
                <div class="col-md-12 text-center">
                    <br>
                    <div class="copyright"><i class="fa fa-copyright"></i> Copyright Peoples Blog 2020. All Rights Reserved.</div>
                </div>
            </div>
        </div><!-- end container -->
        </footer>

        <div class="dmtop">Scroll to Top</div>

    </div><!-- end wrapper -->

    <!-- Core JavaScript
    ================================================== -->
    <script src="../js/jquery.min.js"></script>
    <script src="../js/tether.min.js"></script>
    <script src="../js/bootstrap.min.js"></script>
    <script src="../js/custom.js"></script>

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
    <title>'$_type' - Peoples Blog</title>
    <meta name="description" content="'$_type' - Peoples Blog has a mixture of articles which came out of Thoughts, Ideas & Experiences of People behind this Blog, We generally write articles about Lifestyle, Travel, Food, Science & Technology..">
    <meta name="author" content="Karthik Kumar D K">
    <link rel="canonical" href="https://kakumdk.github.io/blogs/'${_type// /-}'/" />
    <link rel="shortlink" href="https://kakumdk.github.io/blogs/'${_type// /-}'/index.html" />
    <link rel="revision" href="https://kakumdk.github.io/blogs/'${_type// /-}'/" />
    <meta name="robots" content="index, follow">
    <meta name="icbm" content="13.1071,77.5931" />
    <meta name="geo.region" content="IN" />
    <meta name="geo.placename" content="Bangalore" />
    <meta name="geo.position" content="13.1071,77.5931" />
    <meta name="Generator" content="Karthik Kumar D K (https://karthikkumardk.co.in)" />
    <meta name="MobileOptimized" content="width" />
    <meta name="HandheldFriendly" content="true" />
    <meta property="og:type" content="profile" />
    <meta property="og:title" content="'$_type' - Peoples Blog" />
    <meta property="og:description" content="'$_type' - Peoples Blog has a mixture of articles which came out of Thoughts, Ideas & Experiences of People behind this Blog, We generally write articles about Lifestyle, Travel, Food, Science & Technology.." />
    <meta property="og:url" content="https://kakumdk.github.io/blogs/'${_type// /-}'/" />
<!--    <meta name="google-site-verification" content="" />-->
    <!-- Global site tag (gtag.js) - Google Analytics -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-93645678-6"></script>
    <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag("js", new Date());
        gtag("config", "UA-93645678-6");
    </script>
    <!-- Global site tag (gtag.js) - Google Analytics -->

    <!-- Site Icons -->
    <link rel="shortcut icon" href="../../../images/logo.png" type="image/x-icon" />
    <link rel="apple-touch-icon" href="images/logo.png">

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
        <header class="tech-header header">
        <div class="container-fluid">
            <nav class="navbar navbar-toggleable-md navbar-inverse fixed-top bg-inverse">
                <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <a class="navbar-brand" href="/index.html"><img src="../../../upload/logo.png" alt=""></a>
                <div class="collapse navbar-collapse" id="navbarCollapse">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item">
                            <a class="nav-link" href="/blogs">Blogs</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/blogs/Sci-Tech">Sci-Tech</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/blogs/Lifestyle">Lifestyle</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/blogs/Food">Food</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/blogs/Travel">Travel</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/blogs/News">News</a>
                        </li>
                    </ul>
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link" href="/about.html">About</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/privacy.html">Privacy</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/terms-and-conditions.html">T & C</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/links.html">Links</a>
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
                        <h2><i class="fa fa-file bg-orange"></i> '$_type' <small class="hidden-xs-down hidden-sm-down peoples-quotes"></small></h2>
                    </div><!-- end col -->
                    <div class="col-lg-4 col-md-4 col-sm-12 hidden-xs-down hidden-sm-down">
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item"><a href="#">Home</a></li>
                            <li class="breadcrumb-item"><a href="/blogs">Blog</a></li>
                            <li class="breadcrumb-item active">'$_type'</li>
                        </ol>
                    </div><!-- end col -->
                </div><!-- end row -->
            </div><!-- end container -->
        </div><!-- end page-title -->

        <section class="section">
            <div class="container">
                <div class="row">
                    <div class="col-lg-9 col-md-12 col-sm-12 col-xs-12">
                        <div class="page-wrapper">
                            <div class="blog-list-type blog-list clearfix">

                            </div><!-- end blog-list -->
                        </div><!-- end page-wrapper -->

                        <hr class="invis">

                        <div class="row">
                            <div class="col-md-12">
                                <nav aria-label="Page navigation">
                                    <ul class="pagination justify-content-center">
                                        <li class="page-item">
                                            <button id="see-more" class="page-link">See More</button>
                                        </li>
                                    </ul>
                                </nav>
                            </div><!-- end col -->
                        </div><!-- end row -->
                    </div><!-- end col -->

                    <div class="col-lg-3 col-md-12 col-sm-12 col-xs-12">
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
                            <a href="/"><img src="../../../upload/logo.png" alt="" class="img-fluid"></a>
                            <p>Peoples Blog has a mixture of articles which came out of Thoughts, Ideas & Experiences of People behind this Blog, We generally write articles about Lifestyle, Travel, Food, Science & Technology.. <a class="read-more" href="/about.html">Read More >></a></p>
                            <div class="post-sharing-footer social">

                            </div>

                            <hr class="invis">

        <!--                    <div class="newsletter-widget text-left">-->
        <!--                        <form class="form-inline">-->
        <!--                            <input type="text" class="form-control" placeholder="Enter your email address">-->
        <!--                            <button type="submit" class="btn btn-primary">SUBMIT</button>-->
        <!--                        </form>-->
        <!--                    </div>&lt;!&ndash; end newsletter &ndash;&gt;-->
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
                                <li><a href="/about.html">About</a></li>
                                <li><a href="/privacy.html">Privacy</a></li>
                                <li><a href="/terms-and-conditions.html">T & C</a></li>
                                <li><a href="/links.html">Links</a></li>
                            </ul>
                        </div><!-- end link-widget -->
                    </div><!-- end widget -->
                </div><!-- end col -->
            </div>

            <div class="row">
                <div class="col-md-12 text-center">
                    <br>
                    <div class="copyright"><i class="fa fa-copyright"></i> Copyright Peoples Blog 2020. All Rights Reserved.</div>
                </div>
            </div>
        </div><!-- end container -->
        </footer>

        <div class="dmtop">Scroll to Top</div>

    </div><!-- end wrapper -->

    <!-- Core JavaScript
    ================================================== -->
    <script src="../../js/jquery.min.js"></script>
    <script src="../../js/tether.min.js"></script>
    <script src="../../js/bootstrap.min.js"></script>
    <script src="../../js/custom.js"></script>

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
    <title>'$_category' - Peoples Blog</title>
    <meta name="description" content="'$_category' - Peoples Blog has a mixture of articles which came out of Thoughts, Ideas & Experiences of People behind this Blog, We generally write articles about Lifestyle, Travel, Food, Science & Technology..">
    <meta name="author" content="Karthik Kumar D K">
    <link rel="canonical" href="https://kakumdk.github.io/blogs/'${_type// /-}'/'${_category// /-}'/" />
    <link rel="shortlink" href="https://kakumdk.github.io/blogs/'${_type// /-}'/'${_category// /-}'/index.html" />
    <link rel="revision" href="https://kakumdk.github.io/blogs/'${_type// /-}'/'${_category// /-}'/" />
    <meta name="robots" content="index, follow">
    <meta name="icbm" content="13.1071,77.5931" />
    <meta name="geo.region" content="IN" />
    <meta name="geo.placename" content="Bangalore" />
    <meta name="geo.position" content="13.1071,77.5931" />
    <meta name="Generator" content="Karthik Kumar D K (https://karthikkumardk.co.in)" />
    <meta name="MobileOptimized" content="width" />
    <meta name="HandheldFriendly" content="true" />
    <meta property="og:type" content="profile" />
    <meta property="og:title" content="'$_category' - Peoples Blog" />
    <meta property="og:description" content="'$_category' - Peoples Blog has a mixture of articles which came out of Thoughts, Ideas & Experiences of People behind this Blog, We generally write articles about Lifestyle, Travel, Food, Science & Technology.." />
    <meta property="og:url" content="https://kakumdk.github.io/blogs/'${_type// /-}'/'${_category// /-}'/" />
<!--    <meta name="google-site-verification" content="" />-->
    <!-- Global site tag (gtag.js) - Google Analytics -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-93645678-6"></script>
    <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag("js", new Date());
        gtag("config", "UA-93645678-6");
    </script>
    <!-- Global site tag (gtag.js) - Google Analytics -->

    <!-- Site Icons -->
    <link rel="shortcut icon" href="../../../images/logo.png" type="image/x-icon" />
    <link rel="apple-touch-icon" href="images/logo.png">

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
        <header class="tech-header header">
        <div class="container-fluid">
            <nav class="navbar navbar-toggleable-md navbar-inverse fixed-top bg-inverse">
                <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <a class="navbar-brand" href="/index.html"><img src="../../../upload/logo.png" alt=""></a>
                <div class="collapse navbar-collapse" id="navbarCollapse">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item">
                            <a class="nav-link" href="/blogs">Blogs</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/blogs/Sci-Tech">Sci-Tech</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/blogs/Lifestyle">Lifestyle</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/blogs/Food">Food</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/blogs/Travel">Travel</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/blogs/News">News</a>
                        </li>
                    </ul>
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link" href="/about.html">About</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/privacy.html">Privacy</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/terms-and-conditions.html">T & C</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/links.html">Links</a>
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
                        <h2><i class="fa fa-tag bg-orange"></i> '$_category' <small class="hidden-xs-down hidden-sm-down peoples-quotes"></small></h2>
                    </div><!-- end col -->
                    <div class="col-lg-4 col-md-4 col-sm-12 hidden-xs-down hidden-sm-down">
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item"><a href="#">Home</a></li>
                            <li class="breadcrumb-item"><a href="/blogs">Blog</a></li>
                            <li class="breadcrumb-item"><a href="/blogs/'${_type// /-}'">'$_type'</a></li>
                            <li class="breadcrumb-item active">'$_category'</li>
                        </ol>
                    </div><!-- end col -->
                </div><!-- end row -->
            </div><!-- end container -->
        </div><!-- end page-title -->

        <section class="section">
            <div class="container">
                <div class="row">
                    <div class="col-lg-9 col-md-12 col-sm-12 col-xs-12">
                        <div class="page-wrapper">
                            <div class="blog-list-category blog-custom-build">

                            </div><!-- end blog-list -->
                        </div><!-- end page-wrapper -->

                        <hr class="invis">

                        <div class="row">
                            <div class="col-md-12">
                                <nav aria-label="Page navigation">
                                    <ul class="pagination justify-content-center">
                                        <li class="page-item">
                                            <button id="see-more" class="page-link">See More</button>
                                        </li>
                                    </ul>
                                </nav>
                            </div><!-- end col -->
                        </div><!-- end row -->
                    </div><!-- end col -->

                    <div class="col-lg-3 col-md-12 col-sm-12 col-xs-12">
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
                            <a href="/"><img src="../../../upload/logo.png" alt="" class="img-fluid"></a>
                            <p>Peoples Blog has a mixture of articles which came out of Thoughts, Ideas & Experiences of People behind this Blog, We generally write articles about Lifestyle, Travel, Food, Science & Technology.. <a class="read-more" href="/about.html">Read More >></a></p>
                            <div class="post-sharing-footer social">

                            </div>

                            <hr class="invis">

        <!--                    <div class="newsletter-widget text-left">-->
        <!--                        <form class="form-inline">-->
        <!--                            <input type="text" class="form-control" placeholder="Enter your email address">-->
        <!--                            <button type="submit" class="btn btn-primary">SUBMIT</button>-->
        <!--                        </form>-->
        <!--                    </div>&lt;!&ndash; end newsletter &ndash;&gt;-->
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
                                <li><a href="/about.html">About</a></li>
                                <li><a href="/privacy.html">Privacy</a></li>
                                <li><a href="/terms-and-conditions.html">T & C</a></li>
                                <li><a href="/links.html">Links</a></li>
                            </ul>
                        </div><!-- end link-widget -->
                    </div><!-- end widget -->
                </div><!-- end col -->
            </div>

            <div class="row">
                <div class="col-md-12 text-center">
                    <br>
                    <div class="copyright"><i class="fa fa-copyright"></i> Copyright Peoples Blog 2020. All Rights Reserved.</div>
                </div>
            </div>
        </div><!-- end container -->
        </footer>

        <div class="dmtop">Scroll to Top</div>

    </div><!-- end wrapper -->

    <!-- Core JavaScript
    ================================================== -->
    <script src="../../../js/jquery.min.js"></script>
    <script src="../../../js/tether.min.js"></script>
    <script src="../../../js/bootstrap.min.js"></script>
    <script src="../../../js/custom.js"></script>

</body>
</html>' > $blogsfolderpath'/'index.html
       categories+='<small><a href="/blogs/'${_type// /-}'/'${_category// /-}'">'$_category'</a></small>'
       ## Article
       blogspath=$blogsfolderpath'/'$file
       blogsfilepath=${blogspath/%.json}.html
       #################################################################################################################
       #################################################################################################################
       ##### BLOG
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
    <title>'$title' - Peoples Blog</title>
    <meta name="description" content="'$title' - Peoples Blog has a mixture of articles which came out of Thoughts, Ideas & Experiences of People behind this Blog, We generally write articles about Lifestyle, Travel, Food, Science & Technology..">
    <meta name="author" content="Karthik Kumar D K">
    <link rel="canonical" href="https://kakumdk.github.io/blogs/'${_type// /-}'/'${_category// /-}'/'${file/%.json}.html'" />
    <link rel="shortlink" href="https://kakumdk.github.io/blogs/'${_type// /-}'/'${_category// /-}'/'${file/%.json}.html'" />
    <link rel="revision" href="https://kakumdk.github.io/blogs/'${_type// /-}'/'${_category// /-}'/'${file/%.json}.html'" />
    <meta name="robots" content="index, follow">
    <meta name="icbm" content="13.1071,77.5931" />
    <meta name="geo.region" content="IN" />
    <meta name="geo.placename" content="Bangalore" />
    <meta name="geo.position" content="13.1071,77.5931" />
    <meta name="Generator" content="Karthik Kumar D K (https://karthikkumardk.co.in)" />
    <meta name="MobileOptimized" content="width" />
    <meta name="HandheldFriendly" content="true" />
    <meta property="og:type" content="profile" />
    <meta property="og:title" content="'$title' - Peoples Blog" />
    <meta property="og:description" content="'$title' - Peoples Blog has a mixture of articles which came out of Thoughts, Ideas & Experiences of People behind this Blog, We generally write articles about Lifestyle, Travel, Food, Science & Technology.." />
    <meta property="og:url" content="https://kakumdk.github.io/blogs/'${_type// /-}'/'${_category// /-}'/'${file/%.json}.html'" />
<!--    <meta name="google-site-verification" content="" />-->
    <!-- Global site tag (gtag.js) - Google Analytics -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-93645678-6"></script>
    <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag("js", new Date());
        gtag("config", "UA-93645678-6");
    </script>
    <!-- Global site tag (gtag.js) - Google Analytics -->

    <!-- Site Icons -->
    <link rel="shortcut icon" href="../../../images/logo.png" type="image/x-icon" />
    <link rel="apple-touch-icon" href="images/logo.png">

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
        <header class="tech-header header">
        <div class="container-fluid">
            <nav class="navbar navbar-toggleable-md navbar-inverse fixed-top bg-inverse">
                <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <a class="navbar-brand" href="/index.html"><img src="../../../upload/logo.png" alt=""></a>
                <div class="collapse navbar-collapse" id="navbarCollapse">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item">
                            <a class="nav-link" href="/blogs">Blogs</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/blogs/Sci-Tech">Sci-Tech</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/blogs/Lifestyle">Lifestyle</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/blogs/Food">Food</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/blogs/Travel">Travel</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/blogs/News">News</a>
                        </li>
                    </ul>
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link" href="/about.html">About</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/privacy.html">Privacy</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/terms-and-conditions.html">T & C</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/links.html">Links</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div><!-- end container-fluid -->
        </header>

        <section class="section single-wrapper">
            <div class="container">
                <div class="row">
                    <div class="col-lg-9 col-md-12 col-sm-12 col-xs-12">
                        <div class="page-wrapper">
                            <div class="blog-title-area text-center">
                                <ol class="breadcrumb hidden-xs-down">
                                    <li class="breadcrumb-item"><a href="/">Home</a></li>
                                    <li class="breadcrumb-item"><a href="/blogs">Blog</a></li>
                                    <li class="breadcrumb-item"><a href="/blogs/'${_type// /-}'">'$_type'</a></li>
                                    <li class="breadcrumb-item"><a href="/blogs/'${_type// /-}'/'${_category// /-}'">'$_category'</a></li>
                                    <li class="breadcrumb-item active">'$title'</li>
                                </ol>

                                <span class="color-orange"><a href="/blogs/'${_type// /-}'" title="'$_type'">'$_type'</a></span>

                                <h3>'$title'</h3>

                                <div class="blog-meta big-meta">
                                    <small>'$created'</small>
                                    <small>by '$author'</small>
                                    <!-- small><i class="fa fa-eye"></i> '$views'</small -->
                                </div><!-- end meta -->

                                <div class="post-sharing-top post-sharing">

                                </div><!-- end post-sharing -->
                            </div><!-- end title -->

                            <div class="single-post-media">
                                <img src="../../../'$banner'" alt="" class="img-fluid">
                            </div><!-- end media -->

                            <div class="blog-content">
                                <div>'$content'</div>
                            </div><!-- end content -->

                            <div class="blog-title-area">
                                <div class="tag-cloud-single">
                                    <span>Tags</span>
                                    '$categories'
                                </div><!-- end meta -->

                                <br/>
                                <div class="post-sharing-top post-sharing">

                                </div><!-- end post-sharing -->

                                <!-- div class="post-sharing-bottom post-sharing">
                                    <ul class="list-inline">
                                        <li><a href="#" class="btn btn-primary btn-li"><i class="fa fa-linkedin pr-2"></i> <span class="down-mobile">Linkedin</span></a></li>
                                        <li><a href="#" class="btn btn-primary btn-tw"><i class="fa fa-twitter pr-2"></i> <span class="down-mobile">Twitter</span></a></li>
                                        <li><a href="#" class="btn btn-primary btn-fb"><i class="fa fa-facebook pr-2"></i> <span class="down-mobile">Facebook</span></a></li>
                                        <li><a href="#" class="btn btn-primary btn-whatsapp"><i class="fa fa-whatsapp pr-2"></i> <span class="down-mobile">Whatsapp</span></a></li>
                                        <li><a href="#" class="btn btn-primary btn-email"><i class="fa fa-envelope pr-2"></i> <span class="down-mobile">Email</span></a></li>
                                    </ul>
                                </div --><!-- end post-sharing -->
                            </div><!-- end title -->

                            <div class="ads-page-1"></div><!-- end ads-page-1 -->

                            <hr class="invis1">
                            <div class="custombox clearfix">
                                <h4 class="small-title">Comments</h4>
                                <div class="row">
                                    <div class="col-lg-12">
                                        <div class="comments-list">
                                            <script src="https://utteranc.es/client.js"
                                                    repo="kakumdk/kakumdk.github.io"
                                                    issue-term="url"
                                                    theme="github-light"
                                                    crossorigin="anonymous"
                                                    async>
                                            </script>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <!-- div class="ads-page-2"></div --><!-- end ads-page-2 -->

                        </div><!-- end page-wrapper -->
                    </div><!-- end col -->

                    <div class="col-lg-3 col-md-12 col-sm-12 col-xs-12">
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
                            <a href="/"><img src="../../../upload/logo.png" alt="" class="img-fluid"></a>
                            <p>Peoples Blog has a mixture of articles which came out of Thoughts, Ideas & Experiences of People behind this Blog, We generally write articles about Lifestyle, Travel, Food, Science & Technology.. <a class="read-more" href="/about.html">Read More >></a></p>
                            <div class="post-sharing-footer social">

                            </div>

                            <hr class="invis">

        <!--                    <div class="newsletter-widget text-left">-->
        <!--                        <form class="form-inline">-->
        <!--                            <input type="text" class="form-control" placeholder="Enter your email address">-->
        <!--                            <button type="submit" class="btn btn-primary">SUBMIT</button>-->
        <!--                        </form>-->
        <!--                    </div>&lt;!&ndash; end newsletter &ndash;&gt;-->
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
                                <li><a href="/about.html">About</a></li>
                                <li><a href="/privacy.html">Privacy</a></li>
                                <li><a href="/terms-and-conditions.html">T & C</a></li>
                                <li><a href="/links.html">Links</a></li>
                            </ul>
                        </div><!-- end link-widget -->
                    </div><!-- end widget -->
                </div><!-- end col -->
            </div>

            <div class="row">
                <div class="col-md-12 text-center">
                    <br>
                    <div class="copyright"><i class="fa fa-copyright"></i> Copyright Peoples Blog 2020. All Rights Reserved.</div>
                </div>
            </div>
        </div><!-- end container -->
        </footer>

        <div class="dmtop">Scroll to Top</div>
    </div><!-- end wrapper -->
    <!-- Core JavaScript
    ================================================== -->
    <script src="../../../js/jquery.min.js"></script>
    <script src="../../../js/tether.min.js"></script>
    <script src="../../../js/bootstrap.min.js"></script>
    <script src="../../../js/custom.js"></script>
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
          <url><loc>https://kakumdk.github.io</loc><lastmod>'$date'</lastmod></url>
          <url><loc>https://kakumdk.github.io/blogs</loc><lastmod>'$date'</lastmod></url>
          <url><loc>https://kakumdk.github.io/blogs/Sci-Tech</loc><lastmod>'$date'</lastmod></url>
          <url><loc>https://kakumdk.github.io/blogs/Lifestyle</loc><lastmod>'$date'</lastmod></url>
          <url><loc>https://kakumdk.github.io/blogs/Food</loc><lastmod>'$date'</lastmod></url>
          <url><loc>https://kakumdk.github.io/blogs/Travel</loc><lastmod>'$date'</lastmod></url>
          <url><loc>https://kakumdk.github.io/blogs/News</loc><lastmod>'$date'</lastmod></url>' > $pwd'/sitemap.xml'
data=`jq -r '' $pwd/blogs-content-merged/blogs.json`
for row in $(echo "${data}" | jq -r '.[] | @base64'); do
    _jq() {
     echo ${row} | base64 --decode | jq -r ${1}
    }
    IFS=',' read -ra category_array <<< "$(_jq '.category')"
    categories=''
    for _category_i in "${category_array[@]}"
    do
      _category=`echo $_category_i | sed -e 's/^[[:space:]]*//'`
      echo '          <url><loc>https://kakumdk.github.io/blogs/'$(_jq '.type')'/'${_category// /-}'</loc><lastmod>'$date'</lastmod></url>' >> $pwd'/sitemap.xml'
      jsonfile=$(_jq '.file')
      echo '          <url><loc>https://kakumdk.github.io/blogs/'$(_jq '.type')'/'${_category// /-}'/'${jsonfile/%.json}.html'</loc><lastmod>'$date'</lastmod></url>' >> $pwd'/sitemap.xml'
    done
done
echo '</urlset>' >> $pwd'/sitemap.xml'


#################################################################################################################
#################################################################################################################
##### Robots.txt
#################################################################################################################
#################################################################################################################
echo 'User-agent: *
Disallow: /scripts/
Disallow: /scripts/blogs.sh
Disallow: /jq
Disallow: /blogs-content
Disallow: /blogs-content/
Disallow: /blogs-content-merged
Disallow: /blogs-content-merged/' > $pwd'/robots.txt'