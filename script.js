$(document).ready(function () {
    // 1. Initialize AOS Animations
    AOS.init({
        duration: 1000,
        easing: 'ease-in-out',
        once: true,
        mirror: false
    });

    // 2. Sticky Navbar on Scroll
    $(window).on("scroll", function () {
        if ($(this).scrollTop() > 80) {
            $(".navbar").addClass("sticky");
        } else {
            $(".navbar").removeClass("sticky");
        }
    });

    // 3. Smooth Scrolling for Navigation Links
    $('a[href*="#"]').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top - 70
        }, 800);
        
        // Close Mobile Menu after click
        $('#nav-toggle').prop('checked', false);
    });

    // 4. Set Current Year in Footer
    $("#year").text(new Date().getFullYear());

    // 5. Reservation Form Submit Animation
    $("#res-form").on("submit", function(e) {
        e.preventDefault();
        const btn = $(this).find('button');
        btn.html('<i class="fas fa-spinner fa-spin"></i> Processing...');
        
        setTimeout(() => {
            btn.css('background', '#28a745').text('Reservation Confirmed!');
            $(this).trigger("reset");
        }, 2000);
    });
});