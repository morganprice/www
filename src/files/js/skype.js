function createSkypeLinks() {
    $('a[data-s][href=""]').each(function() {
        var i = $(this);
        //replace # character with . if present in Skype name
        $(this).attr('data-s', $(this).attr('data-s').replace('#', '.'));
        i.attr('href', 'sky' + 'pe:' + i.data('s'));
        if (i.html() == '') {
            i.html(i.data('s'));
        }
    });
}
$(function() {
    createSkypeLinks();
});
