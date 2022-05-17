(function ($, win) {
    $.fn.inViewport = function (cb) {
        return this.each(function (i, el) {
            function visPx() {
                var elH = $(el).outerHeight(),
                    H = $(win).height(),
                    r = el.getBoundingClientRect(),
                    t = r.top,
                    b = r.bottom;
                return cb.call(el, Math.max(0, t > 0 ? Math.min(elH, H - t) : Math.min(b, H)));
            }
            visPx();
            $(win).on("resize scroll", visPx);
        });
    };
}(jQuery, window));
//usage
$(this).inViewport(function (px) {
});
                   
//alternative
$.fn.isOnScreen = function () {

    var win = $(window);

    var viewport = {
        top: win.scrollTop(),
        left: win.scrollLeft()
    };
    viewport.right = viewport.left + win.width();
    viewport.bottom = viewport.top + win.height();

    var bounds = this.offset();
    bounds.right = bounds.left + this.outerWidth();
    bounds.bottom = bounds.top + this.outerHeight();

    return (!(viewport.right < bounds.left || viewport.left > bounds.right || viewport.bottom < bounds.top || viewport.top > bounds.bottom));

};
//usage
if ($('#footer').isOnScreen()) {
}
