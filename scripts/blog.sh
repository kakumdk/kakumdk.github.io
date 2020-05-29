
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
    <meta http-equiv="X-UA-Compatible" content="IE=edge">

    <!-- Mobile Metas -->
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Site Metas -->
    <title>Blogs - Tech Blog</title>
    <meta name="keywords" content="">
    <meta name="description" content="">
    <meta name="author" content="">

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
                <a class="navbar-brand" href="/index.html"><img src="../../../images/version/tech-logo.png" alt=""></a>
                <div class="collapse navbar-collapse" id="navbarCollapse">
                    <ul class="navbar-nav mr-auto">

                    </ul>
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link" href="/blogs">Blogs</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/blogs/Science">Science</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/blogs/Technology">Technology</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/blogs/Social-Media">Social Media</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/blogs/Worldwide">Worldwide</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/blogs/News">News</a>
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
                        <h2><i class="fa fa-list bg-orange"></i> Blogs <small class="hidden-xs-down hidden-sm-down">Nulla felis eros, varius sit amet volutpat non. </small></h2>
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
                        <div class="sidebar">

                            <div class="widget">
                                <div class="banner-spot clearfix">
                                    <div class="banner-img">
                                        <img src="../../../upload/banner_07.jpg" alt="" class="img-fluid">
                                    </div><!-- end banner-img -->
                                </div><!-- end banner -->
                            </div><!-- end widget -->

                            <div class="widget">
                                <div class="banner-spot clearfix">
                                    <div class="banner-img">
                                        <img src="../../../upload/banner_03.jpg" alt="" class="img-fluid">
                                    </div><!-- end banner-img -->
                                </div><!-- end banner -->
                            </div><!-- end widget -->
                        </div><!-- end sidebar -->
                    </div><!-- end col -->

                    <div class="col-lg-9 col-md-12 col-sm-12 col-xs-12">
                        <div class="page-wrapper">
                            <div class="blog-grid-system">
                                <div class="row blog-list-blogs">
                                    <div class="col-md-6">
                                        `<div class="blog-box">
                                            <div class="post-media">
                                                <a href="single.html" title="">
                                                    <img src="upload/tech_menu_01.jpg" alt="" class="img-fluid">
                                                    <div class="hovereffect">
                                                        <span></span>
                                                    </div><!-- end hover -->
                                                </a>
                                            </div><!-- end media -->
                                            <div class="blog-meta big-meta">
                                                <span class="color-orange"><a href="category-01.html" title="">Gadgets</a></span>
                                                <h4><a href="single.html" title="">We visited the ancient theater in Macedonia</a></h4>
                                                <p>Aenean interdum arcu blandit, vehicula magna non, placerat elit. Mauris et pharetratortor. Suspendissea sodales urna. In at augue elit. Vivamus enim nibh.</p>
                                                <small><a href="single.html" title="">14 July, 2017</a></small>
                                                <small><a href="author.html" title="">by Jack</a></small>
                                                <small><a href="single.html" title=""><i class="fa fa-eye"></i> 2887</a></small>
                                            </div><!-- end meta -->
                                        </div><!-- end blog-box -->
                                    </div><!-- end col -->
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

        <footer id="footer" class="footer">
        <div class="container">
            <div class="row">
                <div class="col-lg-7">
                    <div class="widget">
                        <div class="footer-text text-left">
                            <a href="index.html"><img src="../../../images/version/tech-footer-logo.png" alt="" class="img-fluid"></a>
                            <p>Tech Blog is a technology related blog, we share science, technology and news.</p>
                            <div class="social">
                                <a href="#" data-toggle="tooltip" data-placement="bottom" title="Facebook"><i class="fa fa-facebook"></i></a>
                                <a href="#" data-toggle="tooltip" data-placement="bottom" title="Twitter"><i class="fa fa-twitter"></i></a>
                                <a href="#" data-toggle="tooltip" data-placement="bottom" title="Instagram"><i class="fa fa-instagram"></i></a>
                                <a href="#" data-toggle="tooltip" data-placement="bottom" title="Google Plus"><i class="fa fa-google-plus"></i></a>
                                <a href="#" data-toggle="tooltip" data-placement="bottom" title="Pinterest"><i class="fa fa-pinterest"></i></a>
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
                                <li><a href="#">Marketing <span>(21)</span></a></li>
                                <li><a href="#">SEO Service <span>(15)</span></a></li>
                                <li><a href="#">Digital Agency <span>(31)</span></a></li>
                                <li><a href="#">Make Money <span>(22)</span></a></li>
                                <li><a href="#">Blogging <span>(66)</span></a></li>
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
                                <li><a href="/privacy-policy.html">Privacy Policy</a></li>
                                <li><a href="/terms-and-conditions.html">T & C</a></li>
                                <li><a href="/sitemap.xml">Sitemap</a></li>
                            </ul>
                        </div><!-- end link-widget -->
                    </div><!-- end widget -->
                </div><!-- end col -->
            </div>

            <div class="row">
                <div class="col-md-12 text-center">
                    <br>
                    <div class="copyright"><i class="fa fa-copyright"></i> Copyright Tech Blog 2020. All Rights Reserved.</div>
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
    <meta http-equiv="X-UA-Compatible" content="IE=edge">

    <!-- Mobile Metas -->
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Site Metas -->
    <title>'$_type' - Tech Blog</title>
    <meta name="keywords" content="">
    <meta name="description" content="">
    <meta name="author" content="">

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
                <a class="navbar-brand" href="/index.html"><img src="../../../images/version/tech-logo.png" alt=""></a>
                <div class="collapse navbar-collapse" id="navbarCollapse">
                    <ul class="navbar-nav mr-auto">

                    </ul>
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link" href="/blogs">Blogs</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/blogs/Science">Science</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/blogs/Technology">Technology</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/blogs/Social-Media">Social Media</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/blogs/Worldwide">Worldwide</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/blogs/News">News</a>
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
                        <h2><i class="fa fa-file bg-orange"></i> '$_type' <small class="hidden-xs-down hidden-sm-down">Nulla felis eros, varius sit amet volutpat non. </small></h2>
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
                                <div class="blog-box row">
                                    <div class="col-md-4">
                                        <div class="post-media">
                                            <a href="single.html" title="">
                                                <img src="../../../upload/tech_blog_01.jpg" alt="" class="img-fluid">
                                                <div class="hovereffect"></div>
                                            </a>
                                        </div><!-- end media -->
                                    </div><!-- end col -->
                                    <div class="blog-meta big-meta col-md-8">
                                        <h4><a href="single.html" title="">Top 10 phone applications and 2017 mobile design awards</a></h4>
                                        <p>Aenean interdum arcu blandit, vehicula magna non, placerat elit. Mauris et pharetratortor. Suspendissea sodales urna. In at augue elit. Vivamus enim nibh, maximus ac felis nec, maximus tempor odio.</p>
                                        <small class="firstsmall"><a class="bg-orange" href="category-01.html" title="">Reviews</a></small>
                                        <small><a href="single.html" title="">21 July, 2017</a></small>
                                        <small><a href="author.html" title="">by Matilda</a></small>
                                        <small><a href="single.html" title=""><i class="fa fa-eye"></i> 1114</a></small>
                                    </div><!-- end meta -->
                                </div><!-- end blog-box -->

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
                        <div class="sidebar">

                            <div class="widget">
                                <div class="banner-spot clearfix">
                                    <div class="banner-img">
                                        <img src="../../../upload/banner_07.jpg" alt="" class="img-fluid">
                                    </div><!-- end banner-img -->
                                </div><!-- end banner -->
                            </div><!-- end widget -->

                            <div class="widget">
                                <div class="banner-spot clearfix">
                                    <div class="banner-img">
                                        <img src="../../../upload/banner_03.jpg" alt="" class="img-fluid">
                                    </div><!-- end banner-img -->
                                </div><!-- end banner -->
                            </div><!-- end widget -->
                        </div><!-- end sidebar -->
                    </div><!-- end col -->
                </div><!-- end row -->
            </div><!-- end container -->
        </section>

        <footer id="footer" class="footer">
        <div class="container">
            <div class="row">
                <div class="col-lg-7">
                    <div class="widget">
                        <div class="footer-text text-left">
                            <a href="index.html"><img src="../../../images/version/tech-footer-logo.png" alt="" class="img-fluid"></a>
                            <p>Tech Blog is a technology related blog, we share science, technology and news.</p>
                            <div class="social">
                                <a href="#" data-toggle="tooltip" data-placement="bottom" title="Facebook"><i class="fa fa-facebook"></i></a>
                                <a href="#" data-toggle="tooltip" data-placement="bottom" title="Twitter"><i class="fa fa-twitter"></i></a>
                                <a href="#" data-toggle="tooltip" data-placement="bottom" title="Instagram"><i class="fa fa-instagram"></i></a>
                                <a href="#" data-toggle="tooltip" data-placement="bottom" title="Google Plus"><i class="fa fa-google-plus"></i></a>
                                <a href="#" data-toggle="tooltip" data-placement="bottom" title="Pinterest"><i class="fa fa-pinterest"></i></a>
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
                                <li><a href="#">Marketing <span>(21)</span></a></li>
                                <li><a href="#">SEO Service <span>(15)</span></a></li>
                                <li><a href="#">Digital Agency <span>(31)</span></a></li>
                                <li><a href="#">Make Money <span>(22)</span></a></li>
                                <li><a href="#">Blogging <span>(66)</span></a></li>
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
                                <li><a href="/privacy-policy.html">Privacy Policy</a></li>
                                <li><a href="/terms-and-conditions.html">T & C</a></li>
                                <li><a href="/sitemap.xml">Sitemap</a></li>
                            </ul>
                        </div><!-- end link-widget -->
                    </div><!-- end widget -->
                </div><!-- end col -->
            </div>

            <div class="row">
                <div class="col-md-12 text-center">
                    <br>
                    <div class="copyright"><i class="fa fa-copyright"></i> Copyright Tech Blog 2020. All Rights Reserved.</div>
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
    <meta http-equiv="X-UA-Compatible" content="IE=edge">

    <!-- Mobile Metas -->
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Site Metas -->
    <title>'$_category' - Tech Blog</title>
    <meta name="keywords" content="">
    <meta name="description" content="">
    <meta name="author" content="">

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
                <a class="navbar-brand" href="/index.html"><img src="../../../images/version/tech-logo.png" alt=""></a>
                <div class="collapse navbar-collapse" id="navbarCollapse">
                    <ul class="navbar-nav mr-auto">

                    </ul>
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link" href="/blogs">Blogs</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/blogs/Science">Science</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/blogs/Technology">Technology</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/blogs/Social-Media">Social Media</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/blogs/Worldwide">Worldwide</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/blogs/News">News</a>
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
                        <h2><i class="fa fa-tag bg-orange"></i> '$_category' <small class="hidden-xs-down hidden-sm-down">Nulla felis eros, varius sit amet volutpat non. </small></h2>
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
                            <div class="blog-list-category blog-list clearfix">
                                <div class="blog-box row">
                                    <div class="col-md-4">
                                        <div class="post-media">
                                            <a href="single.html" title="">
                                                <img src="../../../upload/tech_blog_01.jpg" alt="" class="img-fluid">
                                                <div class="hovereffect"></div>
                                            </a>
                                        </div><!-- end media -->
                                    </div><!-- end col -->
                                    <div class="blog-meta big-meta col-md-8">
                                        <h4><a href="single.html" title="">Top 10 phone applications and 2017 mobile design awards</a></h4>
                                        <p>Aenean interdum arcu blandit, vehicula magna non, placerat elit. Mauris et pharetratortor. Suspendissea sodales urna. In at augue elit. Vivamus enim nibh, maximus ac felis nec, maximus tempor odio.</p>
                                        <small class="firstsmall"><a class="bg-orange" href="category-01.html" title="">Reviews</a></small>
                                        <small><a href="single.html" title="">21 July, 2017</a></small>
                                        <small><a href="author.html" title="">by Matilda</a></small>
                                        <small><a href="single.html" title=""><i class="fa fa-eye"></i> 1114</a></small>
                                    </div><!-- end meta -->
                                </div><!-- end blog-box -->

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
                        <div class="sidebar">

                            <div class="widget">
                                <div class="banner-spot clearfix">
                                    <div class="banner-img">
                                        <img src="../../../upload/banner_07.jpg" alt="" class="img-fluid">
                                    </div><!-- end banner-img -->
                                </div><!-- end banner -->
                            </div><!-- end widget -->

                            <div class="widget">
                                <div class="banner-spot clearfix">
                                    <div class="banner-img">
                                        <img src="../../../upload/banner_03.jpg" alt="" class="img-fluid">
                                    </div><!-- end banner-img -->
                                </div><!-- end banner -->
                            </div><!-- end widget -->
                        </div><!-- end sidebar -->
                    </div><!-- end col -->
                </div><!-- end row -->
            </div><!-- end container -->
        </section>

        <footer id="footer" class="footer">
        <div class="container">
            <div class="row">
                <div class="col-lg-7">
                    <div class="widget">
                        <div class="footer-text text-left">
                            <a href="index.html"><img src="../../../images/version/tech-footer-logo.png" alt="" class="img-fluid"></a>
                            <p>Tech Blog is a technology related blog, we share science, technology and news.</p>
                            <div class="social">
                                <a href="#" data-toggle="tooltip" data-placement="bottom" title="Facebook"><i class="fa fa-facebook"></i></a>
                                <a href="#" data-toggle="tooltip" data-placement="bottom" title="Twitter"><i class="fa fa-twitter"></i></a>
                                <a href="#" data-toggle="tooltip" data-placement="bottom" title="Instagram"><i class="fa fa-instagram"></i></a>
                                <a href="#" data-toggle="tooltip" data-placement="bottom" title="Google Plus"><i class="fa fa-google-plus"></i></a>
                                <a href="#" data-toggle="tooltip" data-placement="bottom" title="Pinterest"><i class="fa fa-pinterest"></i></a>
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
                                <li><a href="#">Marketing <span>(21)</span></a></li>
                                <li><a href="#">SEO Service <span>(15)</span></a></li>
                                <li><a href="#">Digital Agency <span>(31)</span></a></li>
                                <li><a href="#">Make Money <span>(22)</span></a></li>
                                <li><a href="#">Blogging <span>(66)</span></a></li>
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
                                <li><a href="/privacy-policy.html">Privacy Policy</a></li>
                                <li><a href="/terms-and-conditions.html">T & C</a></li>
                                <li><a href="/sitemap.xml">Sitemap</a></li>
                            </ul>
                        </div><!-- end link-widget -->
                    </div><!-- end widget -->
                </div><!-- end col -->
            </div>

            <div class="row">
                <div class="col-md-12 text-center">
                    <br>
                    <div class="copyright"><i class="fa fa-copyright"></i> Copyright Tech Blog 2020. All Rights Reserved.</div>
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
       categories+="<small><a href="'/blogs/'${_type// /-}'/'${_category// /-}" title="">'$_category'</a></small>"
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
    <meta http-equiv="X-UA-Compatible" content="IE=edge">

    <!-- Mobile Metas -->
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Site Metas -->
    <title>'$title' - Tech Blog</title>
    <meta name="keywords" content="">
    <meta name="description" content="">
    <meta name="author" content="">

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
                <a class="navbar-brand" href="/index.html"><img src="../../../images/version/tech-logo.png" alt=""></a>
                <div class="collapse navbar-collapse" id="navbarCollapse">
                    <ul class="navbar-nav mr-auto">

                    </ul>
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link" href="/blogs">Blogs</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/blogs/Science">Science</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/blogs/Technology">Technology</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/blogs/Social-Media">Social Media</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/blogs/Worldwide">Worldwide</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/blogs/News">News</a>
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
                                    <small><a href="/author.html" title="">by '$author'</a></small>
                                    <small><i class="fa fa-eye"></i> '$views'</small>
                                </div><!-- end meta -->

                                <div class="post-sharing">
                                    <ul class="list-inline">
                                        <li><a href="#" class="fb-button btn btn-primary"><i class="fa fa-facebook"></i></a></li>
                                        <li><a href="#" class="tw-button btn btn-primary"><i class="fa fa-twitter"></i></a></li>
                                        <li><a href="#" class="ln-button btn btn-primary"><i class="fa fa-linkedin"></i></a></li>
                                    </ul>
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

                                <div class="post-sharing">
                                    <ul class="list-inline">
                                        <li><a href="#" class="fb-button btn btn-primary"><i class="fa fa-facebook"></i> <span class="down-mobile">Share on Facebook</span></a></li>
                                        <li><a href="#" class="tw-button btn btn-primary"><i class="fa fa-twitter"></i> <span class="down-mobile">Tweet on Twitter</span></a></li>
                                        <li><a href="#" class="ln-button btn btn-primary"><i class="fa fa-linkedin"></i> <span class="down-mobile">Share on Linkedin</span></a></li>
                                    </ul>
                                </div><!-- end post-sharing -->
                            </div><!-- end title -->

                            <div class="row">
                                <div class="col-lg-12">
                                    <div class="banner-spot clearfix">
                                        <div class="banner-img">
                                            <img src="../../../upload/banner_01.jpg" alt="" class="img-fluid">
                                        </div><!-- end banner-img -->
                                    </div><!-- end banner -->
                                </div><!-- end col -->
                            </div><!-- end row -->

                        </div><!-- end page-wrapper -->
                    </div><!-- end col -->

                    <div class="col-lg-3 col-md-12 col-sm-12 col-xs-12">
                        <div class="sidebar">
                            <div class="widget">
                                <div class="banner-spot clearfix">
                                    <div class="banner-img">
                                        <img src="../../../upload/banner_07.jpg" alt="" class="img-fluid">
                                    </div><!-- end banner-img -->
                                </div><!-- end banner -->
                            </div><!-- end widget -->

                            <div class="widget">
                                <div class="banner-spot clearfix">
                                    <div class="banner-img">
                                        <img src="../../../upload/banner_03.jpg" alt="" class="img-fluid">
                                    </div><!-- end banner-img -->
                                </div><!-- end banner -->
                            </div><!-- end widget -->

                            <div class="widget">
                                <div class="banner-spot clearfix">
                                    <div class="banner-img">
                                        <img src="../../../upload/banner_07.jpg" alt="" class="img-fluid">
                                    </div><!-- end banner-img -->
                                </div><!-- end banner -->
                            </div><!-- end widget -->
                        </div><!-- end sidebar -->
                    </div><!-- end col -->
                </div><!-- end row -->
            </div><!-- end container -->
        </section>

        <footer id="footer" class="footer">
        <div class="container">
            <div class="row">
                <div class="col-lg-7">
                    <div class="widget">
                        <div class="footer-text text-left">
                            <a href="index.html"><img src="../../../images/version/tech-footer-logo.png" alt="" class="img-fluid"></a>
                            <p>Tech Blog is a technology related blog, we share science, technology and news.</p>
                            <div class="social">
                                <a href="#" data-toggle="tooltip" data-placement="bottom" title="Facebook"><i class="fa fa-facebook"></i></a>
                                <a href="#" data-toggle="tooltip" data-placement="bottom" title="Twitter"><i class="fa fa-twitter"></i></a>
                                <a href="#" data-toggle="tooltip" data-placement="bottom" title="Instagram"><i class="fa fa-instagram"></i></a>
                                <a href="#" data-toggle="tooltip" data-placement="bottom" title="Google Plus"><i class="fa fa-google-plus"></i></a>
                                <a href="#" data-toggle="tooltip" data-placement="bottom" title="Pinterest"><i class="fa fa-pinterest"></i></a>
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
                                <li><a href="#">Marketing <span>(21)</span></a></li>
                                <li><a href="#">SEO Service <span>(15)</span></a></li>
                                <li><a href="#">Digital Agency <span>(31)</span></a></li>
                                <li><a href="#">Make Money <span>(22)</span></a></li>
                                <li><a href="#">Blogging <span>(66)</span></a></li>
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
                                <li><a href="/privacy-policy.html">Privacy Policy</a></li>
                                <li><a href="/terms-and-conditions.html">T & C</a></li>
                                <li><a href="/sitemap.xml">Sitemap</a></li>
                            </ul>
                        </div><!-- end link-widget -->
                    </div><!-- end widget -->
                </div><!-- end col -->
            </div>

            <div class="row">
                <div class="col-md-12 text-center">
                    <br>
                    <div class="copyright"><i class="fa fa-copyright"></i> Copyright Tech Blog 2020. All Rights Reserved.</div>
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
