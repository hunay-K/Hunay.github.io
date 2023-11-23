history.scrollRestoration = "manual"; // auto

var random_no;
var loading_percent_no = 0;
function loading(){
    random_no = Math.random();
    random_no = String(random_no);
    random_no = random_no.substring(2,3);
    random_no = Number(random_no);
 }
function loading_start(){
    var $loading_cover = $(".loading_cover");
    var repeat = setInterval(function(){
        if(loading_percent_no >= 200){
            $(".loading_cover span").css({opacity: "0"});
        }
        if(loading_percent_no >= 250){
            $(".loading_cover .studio").css({opacity: "1"});
        }
        if(loading_percent_no >= 350){
            $loading_cover.fadeOut(500, function(){
                $(this).remove();
                $("body").removeClass("scroll_lock");
            })
            clearInterval(repeat);
            }
        else{
            loading();
        }
        loading_percent_no += random_no;
    }, 50);
}

var current_scroll, wh;
function showwhatever(el, current_scroll, wh){
    var el_offset_t = el.offset().top;
    if(current_scroll > el_offset_t - wh){
        el.parent().removeClass("wait_scroll");
        el.remove();
    };
};

function doSomething(scrollPos){
    var wh = $(window).height();
    current_scroll = (scrollPos+100);
    $(".show_trigger").each(function(){
        showwhatever($(this), current_scroll, wh);
    });
};

document.addEventListener('scroll', function(e) {
        window.requestAnimationFrame(function() {
            doSomething(window.scrollY);
        });
});

var portfolio_array = [
    /*"a태그로 연결할 폴더이름", "프로젝트 종류", "프로젝트 이름", "프로젝트 기간", "기간", "사용한 툴", "툴", "만드는데 쓰인 지식", "지식"*/
    ["valorant", "Responsive Web", "VALORANT", "Project Period", "10 Days, Personal Project", "Tools", "Adobe Photoshop,<br>HTML, CSS, jQuery", "Scope", "Web Design,<br>Front-end Development,<br>Responsive Web", "Completed", "2022"],
    ["financial", "PHP Sync DataBase", "Budget Project", "Project Period", "7 Days, Personal Project", "Tools", "HTML, CSS, jQuery,<br>PHP, Mysql, PHPMyAdmin,<br>Ajax", "Scope", "Web Design,<br>Front-end Development,<br>Data Base Management", "Completed", "2023"],
    ["somnium", "Fullpage Web", "SOMNIUM ARTS", "Project Period", "11 Days, Personal Project", "Tools", "Adobe Photoshop,<br>Adobe Illustrator,<br>HTML, CSS, jQuery", "Scope", "Web Design,<br>Front-end Development,<br>Full Page Web", "Completed", "2022"],
    ["parmigiani", "Responsive Web", "PARMIGIANI FLEURIER", "Project Period", "12 Days, Personal Project", "Tools", "Adobe Photoshop,<br>Adobe Illustrator,<br>HTML, CSS, jQuery", "Scope", "Web Design,<br>Front-end Development,<br>Responsive Web", "Completed", "2022"],
    ["mcdonald", "Promotion Site", "MCDONALD'S", "Project Period", "9 Days, Team Project(20%)", "Tools", "Adobe Photoshop,<br>Adobe Illustrator,<br>HTML, CSS, jQuery", "Scope", "Web Design,<br>Front-end Development", "Completed", "2022"]
]

$(window).load(function(){
    loading_start();
    
    var porfol_length = ($("#portfolio .width_con ul.pofol li").length - 1);
    for(i = 0; i < porfol_length; i++){
        $("#portfolio .width_con ul.pofol li").eq(i).append("<div class='show'><a class='go_site' href='javascript:;' target='_blank'><img class='thumbnail' src='img/img_portfolio_"+(i+1)+".jpg' alt='"+portfolio_array[i][0]+"' title='"+portfolio_array[i][0]+"'></a></div><div class='hide'><a class='style_guide' href='img/style_guide/style_guide_"+(i)+".jpg' target='_blank'>Style Guide</a><div class='text_box'><h3></h3><h2></h2><div class='period'><h4></h4><h5></h5></div><div class='tools'><h4></h4><h5></h5></div><div class='scope'><h4></h4><h5></h5></div><div class='completed'><h4></h4><h5></h5></div></div></div>")
    }
    
    for(i = 0; i < porfol_length; i++){
        $("#portfolio .width_con ul.pofol li").eq(i).find("a.go_site").attr("href", "portfolio/"+portfolio_array[i][0]);
        $("#portfolio .width_con ul.pofol li").eq(i).find("h3").html(portfolio_array[i][1]);
        $("#portfolio .width_con ul.pofol li").eq(i).find("h2").html(portfolio_array[i][2]);
        $("#portfolio .width_con ul.pofol li").eq(i).find(".period h4").html(portfolio_array[i][3]);
        $("#portfolio .width_con ul.pofol li").eq(i).find(".period h5").html(portfolio_array[i][4]);
        $("#portfolio .width_con ul.pofol li").eq(i).find(".tools h4").html(portfolio_array[i][5]);
        $("#portfolio .width_con ul.pofol li").eq(i).find(".tools h5").html(portfolio_array[i][6]);
        $("#portfolio .width_con ul.pofol li").eq(i).find(".scope h4").html(portfolio_array[i][7]);
        $("#portfolio .width_con ul.pofol li").eq(i).find(".scope h5").html(portfolio_array[i][8]);
        $("#portfolio .width_con ul.pofol li").eq(i).find(".completed h4").html(portfolio_array[i][9]);
        $("#portfolio .width_con ul.pofol li").eq(i).find(".completed h5").html(portfolio_array[i][10]);
    }
    
    var img_count = $(".gly").attr("data-count");
    var selected = "";
    $(".gallery_con .viewer").append("<a href='img/gallery/img_portfolio_gl_1.jpg' title='open in new tab' target='_blank'><img alt='gallery1' src='img/gallery/img_portfolio_gl_1.jpg'></a>");
    for(i = 1; i <= img_count; i++){
        if(i == 1){
            selected = "selected";
        }else{
            selected = "";
        }
        $(".gallery_con .list ul").append("<li><img class='"+selected+"' alt='gallery"+i+"' title='gallery"+i+"' src='img/gallery/img_portfolio_gl_"+i+".jpg'></li>");
    }
    $(".gly").click(function(){
        $(".gallery_cover, .gallery_con").addClass("on");
        $("body").addClass("scroll_lock");
    });
    $(".gallery_cover, .gallery_con i").click(function(){
        $(".gallery_cover, .gallery_con").removeClass("on");
        $("body").removeClass("scroll_lock");
    });
    $(document).on("click", ".gallery_con .list li", function(){
        $(".gallery_con .list img").removeClass("selected");
        $(this).find("img").addClass("selected");
        var src = $(this).find("img").attr("src"),
            alt = $(this).find("img").attr("alt");
        $(".gallery_con .viewer").fadeOut(200, function(){
            $(this).fadeIn(100).find("img").attr("src", src).attr("alt", alt);
            $(this).fadeIn(100).find("a").attr("href", src);
            $(".gallery_con .viewer_con").scrollTop(0);
        });
    });
});

$(function(){
    $(document).on('click', 'a[href^="#"]', function(event){
        event.preventDefault();
        $("html,body").stop().animate({
            scrollTop: $($.attr(this, 'href')).offset().top - 60
        }, 1000,'easeInOutCubic');
    });
});