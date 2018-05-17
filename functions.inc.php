<?php

function generateLink($url, $label, $class) {
   $link = '<a href="' . $url . '" class="' . $class . '">';
   $link .= $label;
   $link .= '</a>';
   return $link;
}


function outputPostRow($number)  {
    include("travel-data.inc.php");
    echo "<div class=\"row\">";
    echo '<div class="col-md-4">'.'<a href="post.php?id='.${"userId".$number}.'"'.' class="">'.'<img src="images/'.${"thumb".$number}.'"'
    .' alt='.${"title".$number}.' class="img-responsive"/></a></div>';
    echo '<div class="col-md-8">';
    echo '<h2>'.${"title".$number}.'</h2>';
    echo '<div class="details">Posted by ';
    echo '<a href="user.php?id='.${"userId".$number}.'"'.' class="">'.${"userName".$number}.'</a>';
    echo '<span class="pull-right">'.${"date".$number}.'</span>';
    echo '<p class="ratings">'. constructRating(${"reviewsRating".$number}) .' '.${"reviewsNum".$number}.' Reviews</p></div>';
    echo '<p class="excerpt">'.${"excerpt".$number}.'</p>';
    echo '<p><a href="post.php?id='.${"userId".$number}.'"'.' class="btn btn-primary btn-sm">Read more</a></p>';
    echo '</div>';
    echo '</div><hr/>';
}
/*
 * <div class="row">
    <div class="col-md-4"><a href="post.php?id=1" class=""><img src="images/8710320515.jpg"
                                                                alt="Ekklisia Agii Isidori Church"
                                                                class="img-responsive"/></a></div>
    <div class="col-md-8"><h2>Ekklisia Agii Isidori Church</h2>
        <div class="details">Posted by <a href="user.php?id=2" class="">Leonie Kohler</a><span class="pull-right">2/8/2017</span>
            <p class="ratings"><img src="images/star-gold.svg" width="16"/><img src="images/star-gold.svg"
                                                                                width="16"/><img
                        src="images/star-gold.svg" width="16"/><img src="images/star-white.svg" width="16"/><img
                        src="images/star-white.svg" width="16"/> 15 Reviews</p></div>
        <p class="excerpt">At the end of the hot climb up to the top Lycabettus Hill you are greeted with the oasis that
            is the Ekklisia Agii Isidori church.</p>
        <p><a href="post.php?id=1" class="btn btn-primary btn-sm">Read more</a></p></div>
</div>
<hr/>*/
/*
  Function constructs a string containing the <img> tags necessary to display
  star images that reflect a rating out of 5
*/
function constructRating($rating) {
    $imgTags = "";
    
    // first output the gold stars
    for ($i=0; $i < $rating; $i++) {
        $imgTags .= '<img src="images/star-gold.svg" width="16" />';
    }
    
    // then fill remainder with white stars
    for ($i=$rating; $i < 5; $i++) {
        $imgTags .= '<img src="images/star-white.svg" width="16" />';
    }    
    
    return $imgTags;    
}
?>
<!--
<div class="row">
    <div class="col-md-4"><a href="post.php?id=1" class=""><img src="images/8710320515.jpg"
                                                                alt="Ekklisia Agii Isidori Church"
                                                                class="img-responsive"/></a></div>
    <div class="col-md-8"><h2>Ekklisia Agii Isidori Church</h2>
        <div class="details">Posted by <a href="user.php?id=2" class="">Leonie Kohler</a><span class="pull-right">2/8/2017</span>
            <p class="ratings"><img src="images/star-gold.svg" width="16"/><img src="images/star-gold.svg"
                                                                                width="16"/><img
                        src="images/star-gold.svg" width="16"/><img src="images/star-white.svg" width="16"/><img
                        src="images/star-white.svg" width="16"/> 15 Reviews</p></div>
        <p class="excerpt">At the end of the hot climb up to the top Lycabettus Hill you are greeted with the oasis that
            is the Ekklisia Agii Isidori church.</p>
        <p><a href="post.php?id=1" class="btn btn-primary btn-sm">Read more</a></p></div>
</div>
<hr/>
<div class="row">
    <div class="col-md-4"><a href="post.php?id=3" class=""><img src="images/8710247776.jpg" alt="Santorini Sunset"
                                                                class="img-responsive"/></a></div>
    <div class="col-md-8"><h2>Santorini Sunset</h2>
        <div class="details">Posted by <a href="user.php?id=5" class="">Frantisek Wichterlova</a><span
                    class="pull-right">9/9/2017</span>
            <p class="ratings"><img src="images/star-gold.svg" width="16"/><img src="images/star-gold.svg"
                                                                                width="16"/><img
                        src="images/star-gold.svg" width="16"/><img src="images/star-gold.svg" width="16"/><img
                        src="images/star-gold.svg" width="16"/> 38 Reviews</p></div>
        <p class="excerpt">Every evening as the sun sets in Fira, it seems that everyone who is not drinking or eating
            is rushing with their camera to the most picturesque locations in order to capture that famous Aegean
            sunset.</p>
        <p><a href="post.php?id=3" class="btn btn-primary btn-sm">Read more</a></p></div>
</div>
<hr/>
<div class="row">
    <div class="col-md-4"><a href="post.php?id=9" class=""><img src="images/8710289254.jpg" alt="Looking towards Fira"
                                                                class="img-responsive"/></a></div>
    <div class="col-md-8"><h2>Looking towards Fira</h2>
        <div class="details">Posted by <a href="user.php?id=13" class="">Edward Francis</a><span class="pull-right">10/19/2017</span>
            <p class="ratings"><img src="images/star-gold.svg" width="16"/><img src="images/star-gold.svg"
                                                                                width="16"/><img
                        src="images/star-white.svg" width="16"/><img src="images/star-white.svg" width="16"/><img
                        src="images/star-white.svg" width="16"/> 3 Reviews</p></div>
        <p class="excerpt">The steamer Mongolia, belonging to the Peninsular and Oriental Company, built of iron, of two
            thousand eight hundred tons burden, and five hundred horse-power, was due at eleven o'clock a.m. on
            Wednesday, the 9th of October, at Suez.</p>
        <p><a href="post.php?id=9" class="btn btn-primary btn-sm">Read more</a></p></div>
</div>
<hr/>
--!>
