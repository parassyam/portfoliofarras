/*-----------------------------------------------------------------------------------
/*
/* Init JS
/*
-----------------------------------------------------------------------------------*/

jQuery(document).ready(function($) {
/*----------------------------------------------------*/
/* FitText Settings
------------------------------------------------------ */

setTimeout(function() {
  $('h1.responsive-headline').fitText(1, { minFontSize: '40px', maxFontSize: '90px' });
}, 100);

   gsap.from("#logofsa", {
      duration: 1,
      x: -100,
      opacity: 0,
      ease: "power4.out",
      delay: 0.5,
      onComplete: function () {
        // Callback untuk memulai animasi putar dan skala
        gsap.to("#logofsa", {
          duration: 5, // Durasi putaran (5 detik)
          rotation: 360, // 360 derajat (1 putaran)
          repeat: -1, // Mengulang animasi secara tak terbatas
          transformOrigin: "center",
          ease: "linear"
        });
    
        gsap.to("#logofsa", {
          duration: 3, // Durasi animasi skala (3 detik)
          scale: 1.2, // Besaran skala yang diinginkan
          yoyo: true, // Animasi akan balik mundur
          repeat: -1, // Mengulang animasi skala secara tak terbatas
          transformOrigin: "center",
          ease: "power1.inOut"
        });
      }
    });
    

 /*----------------------------------------------------*/
/* About Section
------------------------------------------------------ */  
  const aboutLink = document.getElementById("about-link");
   const aboutSectionTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#about",
        scrub: 1,
        pin: true,
        start: "top top",
        end: "+=200%"
      }
    });
    
    aboutSectionTimeline.from(".aboutme", {
      opacity: 0,
      x: -100,
      ease: "none"
    });

    aboutSectionTimeline.to(".aboutme", {
      opacity: 0,
      x: -100,
      ease: "none"
    });
    
/*----------------------------------------------------*/
/* Education Section
------------------------------------------------------ */

const educationSectionTimeline = gsap.timeline({
   scrollTrigger: {
     trigger: "#resume", // Gantilah trigger sesuai kebutuhan
     scrub: 1,
     pin: true,
     start: "top top",
     end: "+=200%"
   }
 });
 educationSectionTimeline.from(".text-wrapper", {
   x: 100, // Geser dari kanan
   opacity: 0, // Mulai dari tidak ada
   ease: "none"
 });

 educationSectionTimeline.from(".education-1", {
   opacity: 0,
   x: 100, // Geser elemen dari kanan
   ease: "none"
 });
 
 educationSectionTimeline.from(".education-2", {
   opacity: 0,
   x: 100, // Geser elemen dari kanan
   ease: "none"
 });
 

/* Experience Section
------------------------------------------------------ */
// Inisialisasi animasi menggunakan GSAP dan ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Animasi untuk elemen "Experience"
const experienceSectionTimeline = gsap.timeline({
  scrollTrigger: {
    trigger: "#experience",
    scrub: 1,
    pin: true,
    start: "top top",
end: "+=800%"  }
});

// Fungsi untuk membuat animasi pada elemen "Experience"
function animateExperience(experienceSelector, fade = true) {
  if (fade) {
    experienceSectionTimeline.from(experienceSelector, {
      opacity: 0, // Efek fade-in
      ease: "none"
    });
  } else {
    experienceSectionTimeline.from(experienceSelector, {
      opacity: 0,
      x: 100, // Geser elemen dari kanan
      ease: "none"
    });
  }
}

// Animasi teks "Experience" pertama tanpa efek fade
animateExperience(".text-experience", false); // Tidak ada efek fade

// Panggil fungsi animateExperience untuk elemen "Experience" yang lain
animateExperience(".experience-1");
animateExperience(".experience-2");
animateExperience(".experience-3");
animateExperience(".experience-4");


/*PROJECTS------------------------------------------------------------*/

const projectsSectionTimeline = gsap.timeline({
   scrollTrigger: {
     trigger: "#projects",
     scrub: 1,
     pin: true,
     start: "top top",
     end: "+=800%"   }
 });
 
 // Fungsi untuk membuat animasi pada elemen "projects"
 function animateProjects(projectsSelector, fade = true) {
   if (fade) {
      projectsSectionTimeline.from(projectsSelector, {
       opacity: 0, // Efek fade-in
       ease: "none"
     });
   } else {
      projectsSectionTimeline.from(projectsSelector, {
       opacity: 0,
       x: 100, // Geser elemen dari kanan
       ease: "none"
     });
   }
 }
 
 // Animasi teks "projects" pertama tanpa efek fade
 animateProjects(".projects", false); // Tidak ada efek fade
 
 // Panggil fungsi animateprojects untuk elemen "projects" yang lain
 animateProjects(".projectsemua");


/*Skills------------------------------------------------------------*/

const textskillSectionTimeline = gsap.timeline({
   scrollTrigger: {
     trigger: "#skill",
     scrub: 1,
     pin: true,
     start: "top top",
     end: "+=500%"
   }
 });
 
 // Fungsi untuk membuat animasi pada elemen "projects"
 function animateTextSkill(textskillSelector, fade = true) {
   if (fade) {
      textskillSectionTimeline.from(textskillSelector, {
       opacity: 0, // Efek fade-in
       ease: "none"
     });
   } else {
      textskillSectionTimeline.from(textskillSelector, {
       opacity: 0,
       x: 100, // Geser elemen dari kanan
       ease: "none"
     });
   }
 }
 
 // Animasi teks "projects" pertama tanpa efek fade
 animateTextSkill(".textskill", false); // Tidak ada efek fade
 
 // Panggil fungsi animateprojects untuk elemen "projects" yang lain
 animateTextSkill(".gambar");




// PORTFOLIO................................................................

// Membuat timeline animasi
const CheckOutSectionTimeline = gsap.timeline({
  scrollTrigger: {
    trigger: "#portfolio", // Gantilah trigger sesuai kebutuhan
    scrub: 1,
    pin: true,
    start: "top top",
    end: "+=200%",
  },
});

// Animasi elemen dengan class "CheckOut"
CheckOutSectionTimeline.from(".CheckOut", {
  y: "-100%", // Memulai dari luar layar sebelah kanan
  opacity: 0, // Mulai dari tidak terlihat
  ease: "bounce.out", // Efek bounce
});



// AWARDS................................................................
// Membuat timeline animasi
const JuaraMenangSectionTimeline = gsap.timeline({
  scrollTrigger: {
    trigger: "#awards", // Gantilah trigger sesuai kebutuhan
    scrub: 1,
    pin: true,
    start: "top top",
    end: "+=200%",
  },
});

// Animasi elemen dengan class "CheckOut"
JuaraMenangSectionTimeline.from(".JuaraMenang", {
  x: "-100%", // Memulai dari luar layar sebelah kanan
  opacity: 0, // Mulai dari tidak terlihat
  ease: "bounce.out", // Efek bounce
});






/*----------------------------------------------------*/
/* Smooth Scrolling
------------------------------------------------------ */

   $('.smoothscroll').on('click',function (e) {
	    e.preventDefault();

	    var target = this.hash,
	    $target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 800, 'swing', function () {
	        window.location.hash = target;
	    });
	});

// Fungsi untuk memeriksa apakah elemen ada dalam tampilan saat menggulir
function isElementInViewport(el) {
   const rect = el.getBoundingClientRect();
   return (
     rect.top >= 0 &&
     rect.left >= 0 &&
     rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
     rect.right <= (window.innerWidth || document.documentElement.clientWidth)
   );
 }
 
 // Fungsi untuk menambahkan kelas animasi saat elemen masuk dalam tampilan
 function addAnimationOnScroll() {
   const elements = document.querySelectorAll('.animate-on-scroll');
   elements.forEach((element) => {
     if (isElementInViewport(element)) {
       element.classList.add('animated'); // Tambahkan kelas "animated" untuk memicu animasi
     }
   });
 }
 
 // Tambahkan event listener untuk menggulir dan panggil fungsi
 window.addEventListener('scroll', addAnimationOnScroll);
 
 // Panggil fungsi saat halaman dimuat untuk memeriksa elemen yang mungkin sudah dalam tampilan
 window.addEventListener('load', addAnimationOnScroll);

 
 
/*----------------------------------------------------*/
/* Highlight the current section in the navigation bar
------------------------------------------------------*/

	var sections = $("section");
	var navigation_links = $("#nav-wrap a");

	sections.waypoint({

      handler: function(event, direction) {

		   var active_section;

			active_section = $(this);
			if (direction === "up") active_section = active_section.prev();

			var active_link = $('#nav-wrap a[href="#' + active_section.attr("id") + '"]');

         navigation_links.parent().removeClass("current");
			active_link.parent().addClass("current");

		},
		offset: '35%'

	});

// Wrap every letter in a span
var textWrapper = document.querySelector('.ml14 .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.ml14 .line',
    scaleX: [0,1],
    opacity: [0.5,1],
    easing: "easeInOutExpo",
    duration: 900
  }).add({
    targets: '.ml14 .letter',
    opacity: [0,1],
    translateX: [40,0],
    translateZ: 0,
    scaleX: [0.3, 1],
    easing: "easeOutExpo",
    duration: 800,
    offset: '-=600',
    delay: (el, i) => 150 + 25 * i
  }).add({
    targets: '.ml14',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });
  
/*----------------------------------------------------*/
/*	Make sure that #header-background-image height is
/* equal to the browser height.
------------------------------------------------------ */

   $('header').css({ 'height': $(window).height() });
   $(window).on('resize', function() {

        $('header').css({ 'height': $(window).height() });
        $('body').css({ 'width': $(window).width() })
   });


/*----------------------------------------------------*/
/*	Fade In/Out Primary Navigation
------------------------------------------------------*/

   $(window).on('scroll', function() {

		var h = $('header').height();
		var y = $(window).scrollTop();
      var nav = $('#nav-wrap');

	   if ( (y > h*.20) && (y < h) && ($(window).outerWidth() > 768 ) ) {
	      nav.fadeOut('fast');
	   }
      else {
         if (y < h*.20) {
            nav.removeClass('opaque').fadeIn('fast');
         }
         else {
            nav.addClass('opaque').fadeIn('fast');
         }
      }

	});


/*----------------------------------------------------*/
/*	Modal Popup
------------------------------------------------------*/

    $('.item-wrap a').magnificPopup({

       type:'inline',
       fixedContentPos: false,
       removalDelay: 200,
       showCloseBtn: false,
       mainClass: 'mfp-fade'

    });

    $(document).on('click', '.popup-modal-dismiss', function (e) {
    		e.preventDefault();
    		$.magnificPopup.close();
    });


/*----------------------------------------------------*/
/*	Flexslider
/*----------------------------------------------------*/
   $('.flexslider').flexslider({
      namespace: "flex-",
      controlsContainer: ".flex-container",
      animation: 'slide',
      controlNav: true,
      directionNav: false,
      smoothHeight: true,
      slideshowSpeed: 7000,
      animationSpeed: 600,
      randomize: false,
   });

/*----------------------------------------------------*/
/*	contact form
------------------------------------------------------*/

   $('form#contactForm button.submit').click(function() {

      $('#image-loader').fadeIn();

      var contactName = $('#contactForm #contactName').val();
      var contactEmail = $('#contactForm #contactEmail').val();
      var contactSubject = $('#contactForm #contactSubject').val();
      var contactMessage = $('#contactForm #contactMessage').val();

      var data = 'contactName=' + contactName + '&contactEmail=' + contactEmail +
               '&contactSubject=' + contactSubject + '&contactMessage=' + contactMessage;

      $.ajax({

	      type: "POST",
	      url: "inc/sendEmail.php",
	      data: data,
	      success: function(msg) {

            // Message was sent
            if (msg == 'OK') {
               $('#image-loader').fadeOut();
               $('#message-warning').hide();
               $('#contactForm').fadeOut();
               $('#message-success').fadeIn();   
            }
            // There was an error
            else {
               $('#image-loader').fadeOut();
               $('#message-warning').html(msg);
	            $('#message-warning').fadeIn();
            }

	      }

      });
      return false;
   });


});

