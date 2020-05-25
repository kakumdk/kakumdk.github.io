
##### Write Blogs
pwd=$(pwd)
blogscontent=$pwd/blogs-content
blogs=$pwd/blogs

files=`ls $blogscontent`
for file in $files
do
   filepath=$blogscontent'/'$file
   title=`jq -r '.title' $filepath`
   created=`jq -r '.created' $filepath`
   author=`jq -r '.author' $filepath`
   views=`jq -r '.views' $filepath`
   content=`jq -r '.content' $filepath`
   type=`jq -r '.type' $filepath`
   category=`jq -r '.category' $filepath`
   banner=`jq -r '.banner' $filepath`
   ## Blogs index page
   blogsfolderpath=$blogs
   mkdir -p $blogsfolderpath
   blogsfilepath=$blogsfolderpath'/'index.html
   echo "Blogs" > $blogsfilepath
   ## Types
   IFS=',' read -ra type_array <<< "$type"
   for _type_i in "${type_array[@]}"
   do
     _type=`echo $_type_i | sed -e 's/^[[:space:]]*//'`
     blogsfolderpath=$blogs'/'${_type// /-}
     mkdir -p $blogsfolderpath
     ## Types index page
     blogsfilepath=$blogsfolderpath
     echo ${_type// /-} > $blogsfilepath'/'index.html
     ## Category
     IFS=',' read -ra category_array <<< "$category"
     for _category_i in "${category_array[@]}"
     do
       _category=`echo $_category_i | sed -e 's/^[[:space:]]*//'`
       blogsfolderpath=$blogs'/'${_type// /-}'/'${_category// /-}
       mkdir -p $blogsfolderpath
       ## Categories index page
       echo ${_category// /-} > $blogsfolderpath'/'index.html
       ## Article
       blogspath=$blogsfolderpath'/'$file
       blogsfilepath=${blogspath/%.json}.html
       echo $title > $blogsfilepath
     done
   done
done
