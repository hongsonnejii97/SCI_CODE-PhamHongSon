$(document).ready(function () {
    //menu icon animation
    $('.navIcon').click(function () {
        $('.navIcon').toggleClass('change');
        $('.sidebar').toggleClass('sidebarShow');
    });
    //Tab Block Content
    $('ul.tabs li').click(function () {
        var tab_id = $(this).attr('data-tab');

        $('ul.tabs li').removeClass('current');
        $('.tab-content').removeClass('current');

        $(this).addClass('current');
        $("#" + tab_id).addClass('current');
    })

});

// Tab Object
// var $tabs = $('.tabs .tab');
// $tabs.click(function (event) {
//   var selectedClass = 'active';
//   $('.tabs .tab,.tabs .tab img').removeClass(selectedClass);
//   $(event.target).addClass(selectedClass);
// });

$('.tabs .tab ').click(function () {
    $(this).parent().find('.tab').removeClass('active');
    $(this).addClass('active');
})

// efect show Blog Landing Page
$(window).scroll(function () {
    $(".run").each(function () {
        var pos = $(this).offset().top;

        var winTop = $(window).scrollTop();
        if (pos < winTop + 600) {
            $(this).addClass("runslide");
        }
    });
});

//menu fix
$(document).scroll(function () {
    scoll_top = $(document).scrollTop();
    height_header = $('header').height() + 100;
    if (scoll_top >= height_header) {
        $("header").addClass("menufix");
    } else {
        $("header").removeClass("menufix");
    }
});
