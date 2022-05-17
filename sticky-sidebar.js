    //sticky el is child of the holder. Holder keeps the height of the container to avoid re-posititioing of the next elements
    function makeSticky(stickyElement, holder) {
        var prevScrollTop = 0,
            currentScrollTop = $(this).scrollTop(),
            wrapper = holder,
            holder_height = holder.outerHeight(),
            holder_width = holder.width();
        holder.css('height', holder_height);
        defaultPreviewPosition = wrapper.offset().top;
        if (currentScrollTop >= prevScrollTop) {
            $(stickyElement).addClass('sticky');
            stickyElement.css('width', holder_width);
        }
        if (currentScrollTop < defaultPreviewPosition) {
            $(stickyElement).removeClass('sticky');
            stickyElement.css('width', 'auto');
        }
        prevScrollTop = currentScrollTop;
    }
    var side_navigation = $('.table-of-contents'),
        side_navigation_holder = $('.table-of-contents--desktop');
    $(document).scroll(function () {
        if ($(document).innerWidth() >= 993) {
            if ($('.single-post').length) makeSticky(side_navigation, side_navigation_holder);
        }
    });
