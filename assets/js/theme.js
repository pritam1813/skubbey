(function ($) {
  "use strict";

  /*---WOW active js ---- */
  new WOW().init();
  if (window.location.href.indexOf('submitted=true') !== -1) {
    console.log("run")
    $('.submitted').show();}

  function responsiveheader() {
    var this_window_width = $(window).width();
    if (this_window_width <= 991) {
      $(".header-center").insertBefore(".search-content");
    } else if (this_window_width <= 1199 && this_window_width >= 992) {
      $(".header-center").insertAfter(".header-inner");
    } else {
      $(".header-center").insertBefore(".header-right");
    }
    if (this_window_width <= 767) {
      $('.banner3').insertBefore('.banner2');
    }
  else{
      $('.banner3').insertAfter('.banner2');
    }
  }
  
  function set_service_item_height(){
    var windowsize = $(window). width();
    if(windowsize > 425){
      var highestBox = 0; 
      $('.service-item .service').each(function(){  
        if($(this).height() > highestBox){
          highestBox = $(this).height();
        }
      });
      $('.service-item .service').height(highestBox);
    }
  }
  $(document).ready(function () {
    // set column+content
    updateColumnsAndContent();

    // responsive header
    responsiveheader();

    // responsive footer
    footerExplanCollapse();

    clickEventsInCategoryPage();

    // set_cart_scroll();
    // set same service height
    set_service_item_height();

    $(window).resize(function () {
      // set column+content
      updateColumnsAndContent();
    });
  });

  $(window).resize(function () {
    responsiveheader();
    // set same service height
    set_service_item_height();
  });
 

  $(".search-content .search-btn-outer").on("click", function () {
    $(this).toggleClass("active");
    $(".header-search").slideToggle("2000");

  });
  $("#remove-themability_megamenu").click(function () {
    $("body").removeClass("active");
    $(".themability_megamenu-wrapper").removeClass(
      "themability_megamenu-active"
    );
    return false;
  });
  // Hide Search Dropdown On Scroll
  $(window).scroll(function () {
    $(".ui-autocomplete.ui-widget-content").hide();
  });

  // main slider
  var owl = $(".owl-carousel-banner");
  owl.owlCarousel({
    margin: 0,
    loop: true,
    nav: true,
    navText: [
      '<i class="home-demo fa fa-angle-left">',
      '<i class="home-demo fa fa-angle-right">',
    ],
    dots: true,
    autoplay: true,
    animateOut: "fadeOut",
    autoplayTimeout: 3000,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 1,
      },
    },
  });
    // Product-Page Add and Minus 
    $(document).on('click', '.plus, .minus', function (e) {
      e.preventDefault();
      var parent = $(this).parents('.product-btn-quantity');
      var quantity = parent.find('[name="quantity"]');
      var val = quantity.val();
      if ($(this).hasClass('plus')) {
        val = parseInt(val) + 1;
      } else {
        if (val == 1) {
          val = 1;
        } else {
          val = val >= 1 ? parseInt(val) - 1 : 0;
        }
      }
      quantity.val(val);
      quantity.trigger("change");
      return false;
    })
  // product carousel
  var owl_categorys = $(".products-carousel");
  owl_categorys.owlCarousel({
    margin: 30,
    loop: false,
    items: 7,
    nav: true,
    navText: [
      '<i class="fa fa-angle-left"></i>',
      '<i class="fa fa-angle-right"></i>',
    ],
    dots: true,
    autoplay: false,
    autoplayTimeout: 3000,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        margin: 10,
      },
      300: {
        items: 1,
        margin: 10,
      },
      425: {
        items: 2,
        margin: 10,
      },
      768: {
        items: 3,
        margin: 10,
      },

      1000: {
        items: 3,
      },
      1400: {
        items: 4,
      },
    },
  });
  var owl_category2 = $(".slideTestimonial");
  owl_category2.owlCarousel({
    loop: true,
    items: 4,
    margin: 30,
    dots: true,
    nav: true,
    autoplay: false,
    navText: [
      '<i class="testimonial fa fa-angle-left"></i>',
      '<i class="testimonial fa fa-angle-right"></i>',
    ],
    autoplayTimeout: 2000,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 2,
      },
    },
  });
  // blog 
  var owl_category = $('.blog-carousel');
  owl_category.owlCarousel({
    margin: 30,
    loop: true,
    items: 5,
    nav: true,
    navText: ['<i class="testimonial fa fa-angle-left">', '<i class="testimonial fa fa-angle-right">'],
    dots: true,
    autoplay: false,
    animateOut: 'fadeOut',
    autoplayTimeout: 3000,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
      768:{
        items:2,
      },
      800: {
        items: 2,
        margin:10,
      },
      1000: {
        items: 2,

      },
      1192: {
        items: 2,
      },

      1200: {
        items: 2,
      },
      1400: {
        items: 3,
      }
    }
  });
  // manufacturer
    // blog banners
    var owl_category3 = $('.banner_slider');
    owl_category3.owlCarousel({
      margin: 30,
      loop: true,
      items: 8,
      nav: false,
      navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
      dots: true,
      autoplay: true,
      autoplayTimeout: 2000,
      responsiveClass: true,
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 1,
        },
        767:
        {
          items: 3
        },
        1000: {
          items: 6,
  
        }
      }
    });
     // additional
  var owl_category5 = $('.additional');
  owl_category5.owlCarousel({
    margin: 20,
    loop: false,
    items: 6,
    nav: true,
    navText: ['<i class="additional fa fa-angle-left"></i>', '<i class="additional fa fa-angle-right"></i>'],
    dots: true,
    autoplay: false,
    autoplayTimeout: 3000,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
      300: {
        items: 2,
      },
      400: {
        items: 2,
      },
      700: {
        items: 3,
        margin: 5,
      },
      800: {
        items: 2,
      },
      900: {
        items: 2,
      },

      1000: {
        items: 4,
      },
    }
  });
  var owl_category4 = $('.product-carousel');
  owl_category4.owlCarousel({
    margin: 30,
    loop: false,
    items: 6,
    nav: true,
    navText: ['<i class="testimonial fa fa-angle-left"></i>', '<i class="testimonial fa fa-angle-right"></i>'],
    dots: true,
    autoplay: false,
    autoplayTimeout: 3000,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        margin: 10,

      },
      300: {
        items: 1,
        margin: 10,
      },
      400: {
        items: 2,
        margin: 10,
      },
      600: {
        items: 3,
        margin: 10,
      },

      1000: {
        items: 4
      },
      1400: {
        items: 4,
      },
    }
  });
  // cart 
  function set_cart_scroll() {
   var header_height = $("header").height();
   var screen_height = $(window).height();
   var cart_list_height = $("#cart .dropdown-menu .table-striped").height();
   var cart_total_height = $("#cart .dropdown-menu li+li").height();
   var cart_div_height = parseInt(cart_list_height) + parseInt(cart_total_height) + 10;
   var cart_div_max_height = parseInt(screen_height) - parseInt(header_height);
   var cart_total_pro = jQuery('.cart-content-product table tr').length;

   if (screen_height < cart_div_height) {
     $("#cart .dropdown-menu").css({ "overflow-y": "unset", "max-height": "unset" });
     $("ul.dropdown-menu.header-cart-toggle").addClass("scroll_cart_dropdown").css({ "overflow-y": "auto", "max-height": cart_div_max_height + "px" });
   } else {
     $("ul.dropdown-menu.header-cart-toggle").removeClass("scroll_cart_dropdown").css({ "overflow-y": "unset", "max-height": "unset" });
     $("#cart .dropdown-menu ul").css({ "overflow-y": "auto", "max-height": "240px" });
   }
 }


 $(document).ready(function () {
   $(document).on('click', '#cart button.btn.btn-inverse', function () {
     set_cart_scroll();
   });
 })
    // loader
    $(window).on("load", function () {
      $('.loader').fadeOut('slow', function () {
        $(this).remove();
      });
    });
    jQuery(document).on("click", "#product-manufacturer .manufacturer-tags a", function (event) {
      if (this.hash !== "") {
        event.preventDefault();
        var hash = this.hash;
        var header_height = jQuery('nav#top').height() + jQuery('header').height() + 180;
        jQuery('html,body').animate({
          scrollTop: jQuery(hash).offset().top - (header_height)
        },800, function () {
  
        });
        return;
      }
    });
    
     // Product-Page onclick to open reviwe section
     $(document).ready(function () {
      $(".write-review").on('click', function (event) {
        $('a[href=\'#tab-review\']').tab('show');
        $('body,html').animate({
          scrollTop: $('.propage-tab').offset().top
        }, 500);
        return false;
      })
    })

   // Product-Page onclick to open reviwe section
   $(document).ready(function () {
    $(".write-review").on('click', function (event) {
      $('a[href=\'#tab-review\']').tab('show');
      $('body,html').animate({
        scrollTop: $('.propage-tab').offset().top
      }, 500);
      return false;
    })
  })
  // Product-Page onclick to shows image
  jQuery(".additional a.elevatezoom-gallery").click(function (e) {
    e.preventDefault();
    var this_img_src = jQuery(this).attr("data-zoom-image");
    jQuery("#prozoom").attr("src", this_img_src);
    return;
  });
      /*----------
      Category page click events
      ----------*/
  function clickEventsInCategoryPage() {
    $('.box-category .toggled').on('click', function (e) {
      e.preventDefault();
      if ($(window).width() < 992) {
        $(this).toggleClass('active');
        $(this).parent().find('ul.parent').toggleClass('active').slideToggle('slow');
      }
    });
   

    $('#column-left .box-content .toggled').on('click', function (e) {
      e.preventDefault();
      if ($(window).width() < 992) {
        $(this).toggleClass('active');
        if ($(this).parent().find('ul').length != 0) {
          $(this).parent().find('ul').toggleClass('active').slideToggle('slow');
        } else {
          $(this).parent().find('.filter_box').toggleClass('active').slideToggle('slow');
          $(this).parent().find('.block_box').toggleClass('active').slideToggle('slow');
        }
      }
    });

    $('#column-right .box-content .toggled').on('click', function (e) {
      e.preventDefault();
      if ($(window).width() < 992) {
        $(this).toggleClass('active');
        if ($(this).parent().find('ul').length != 0) {
          $(this).parent().find('ul').toggleClass('active').slideToggle('slow');
        } else {
          $(this).parent().find('.filter_box').toggleClass('active').slideToggle('slow');
          $(this).parent().find('.block_box').toggleClass('active').slideToggle('slow');
        }
      }
    });
  }



  $(function () {
    $(".parent .fa.fa-plus").remove();
    $(".parent .toggled").append("<i class='fa fa-plus'></i>");
    $('.parent .toggled').click(function (e) {
      e.preventDefault();
      if (!$(this).parent().hasClass('active')) {
        $('+ ul', $('a.list-group-item.main-item')).slideUp();
        $('a.list-group-item.main-item').removeClass('active');
      }
      $(this).parent().toggleClass('active');
      $('+ ul', $(this).parent()).slideToggle('slow');
      return false;
    });
  });
    // Product List
    $('#button-list').on('click', function () {
      var element = this;
  
      $('#product-list').attr('class', 'row row-cols-1 product-list');
  
      $('#button-grid').removeClass('active');
      $('#button-list').addClass('active');
  
      localStorage.setItem('display', 'list');
    });
  
    // Product Grid
    $('#button-grid').on('click', function () {
      var element = this;
  
      // What a shame bootstrap does not take into account dynamically loaded columns
      $('#product-list').attr('class', 'row row-cols-2 row-cols-sm-2 row-cols-md-3 row-cols-lg-3 row-cols-xl-3');
  
      $('#button-list').removeClass('active');
      $('#button-grid').addClass('active');
  
      localStorage.setItem('display', 'grid');
    });
    

  // header
  $(document).ready(function () {
    var headerfixed = 1;
    if (headerfixed == 1) {
      $(window).scroll(function () {
        var windows_height = jQuery(window).height();
        if ($(this).scrollTop() > windows_height) {
          $("header").addClass("header-fixed");
          var scroll_header_height = $("header").height();
          $("body").css({ "padding-top": scroll_header_height + "px" });
        } else {
          $("header").removeClass("header-fixed");
          $("body").css({ "padding-top": "0px" });
        }
      });
    } else {
      $("header").removeClass("header-fixed");
      $("body").css({ "padding-top": "0px" });
    }
  });
  function clickEventsInCategoryPage() {
    $(".box-category .toggled").on("click", function (e) {
      e.preventDefault();
      if ($(window).width() < 992) {
        $(this).toggleClass("active");
        $(this)
          .parent()
          .find("ul.parent")
          .toggleClass("active")
          .slideToggle("slow");
      }
    });

    $("#column-left .box-content .toggled").on("click", function (e) {
      e.preventDefault();
      if ($(window).width() < 992) {
        $(this).toggleClass("active");
        if ($(this).parent().find("ul").length != 0) {
          $(this).parent().find("ul").toggleClass("active").slideToggle("slow");
        } else {
          $(this)
            .parent()
            .find(".filter_box")
            .toggleClass("active")
            .slideToggle("slow");
          $(this)
            .parent()
            .find(".block_box")
            .toggleClass("active")
            .slideToggle("slow");
        }
      }
    });

    $("#column-right .box-content .toggled").on("click", function (e) {
      e.preventDefault();
      if ($(window).width() < 992) {
        $(this).toggleClass("active");
        if ($(this).parent().find("ul").length != 0) {
          $(this).parent().find("ul").toggleClass("active").slideToggle("slow");
        } else {
          $(this)
            .parent()
            .find(".filter_box")
            .toggleClass("active")
            .slideToggle("slow");
          $(this)
            .parent()
            .find(".block_box")
            .toggleClass("active")
            .slideToggle("slow");
        }
      }
    });
    
  }
  /*----------
   Update column & content in responsive
   -----------*/
  function updateColumnsAndContent() {
    if ($(window).width() < 992) {
      $("#column-left, #column-right").insertAfter("#content");

      // left, right
      $(
        "#column-left .box-category .toggle-open, #column-right .box-category .toggle-open, #column-left .box-content .toggle-open, #column-right .box-content .toggle-open"
      ).remove();
      $(
        "#column-left .box-category h3, #column-right .box-category h3, #column-left .box-content h3, #column-right .box-content h3"
      ).append(
        "<span class='toggle-open'><i class='fa fa-chevron-down'></i></span>"
      );
      $(
        "#column-left ul.parent, #column-right ul.parent, #column-left .block_box, #column-right .block_box, #column-left .box-content ul, #column-right .box-content ul, #column-left .filter_box, #column-right .filter_box"
      ).hide();

      // footer
      if ($(".footer-top .toggle-open").length == 0) {
        $(".footer-top h5").append(
          "<span class='toggle-open'><i class='fa fa-chevron-down'></i></span>"
        );
        $(".footer-top ul.list-unstyled").hide();
      }
    } else {
      $("#column-right").insertAfter("#content");
      $("#column-left").insertBefore("#content");

      // left, right
      $(
        "#column-left .box-category .toggle-open, #column-left .box-content .toggle-open"
      ).remove();
      $(
        "#column-right .box-category .toggle-open, #column-right .box-content .toggle-open"
      ).remove();
      $(
        "#column-left ul.parent, #column-right ul.parent, #column-left .block_box, #column-right .block_box, #column-left .box-content ul, #column-right .box-content ul, #column-left .filter_box, #column-right .filter_box"
      ).show();

      // footer
      $(".footer-top .toggle-open").remove();
      $(".footer-top ul.list-unstyled").show();
    }
  }
 
  /*----------
  Footer Toggle
  ----------*/
  function footerExplanCollapse() {
    $(".footer-top h5").addClass("toggled");
    $(".footer-top .toggled").on("click", function (e) {
      e.preventDefault();
      if ($(window).width() < 992) {
        $(this).toggleClass("active");
        $(this).parent().find("ul").toggleClass("active").toggle("slow");
      }
    });
  }
  $(document).ready(function () {
    // Back to top
    backToTop();
  });

  // Scroll to Top 
  function backToTop() {
    //Check to see if the window is top if not then display button
    $(".scrollToTop").hide();
    $(window).scroll(function () {
      if ($(this).scrollTop() > 250) {
        $('.scrollToTop').fadeIn();
      } else {
        $('.scrollToTop').fadeOut();
      }
    });
    //Click event to scroll to top
    $('.scrollToTop').on('click', function () {
      $('html, body').animate({ scrollTop: 0 }, 800);
      return false;
    });
  }

})(jQuery);


