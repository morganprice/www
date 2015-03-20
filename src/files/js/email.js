function createMailtoLinks() {
    $('a[data-u][href=""]').each(function() {
        var i = $(this);
        //replace # character with . if present in username
        $(this).attr('data-u', $(this).attr('data-u').replace('#', '.'));
        //replace # character with . if subdomain rather than domain before TLD suffix
        $(this).attr('data-d', $(this).attr('data-d').replace('#', '.'));
        //replace # character with . if present in TLD suffix
        $(this).attr('data-t', $(this).attr('data-t').replace('#', '.'));
        i.attr('href', 'mai' + 'lto:' + i.data('u') + '@' + i.data('d') + '.' + i.data('t'));
        if (i.html() == '') {
            i.html(i.data('u') + '@' + i.data('d') + '.' + i.data('t'));
        }
    });
}
$(function() {
    createMailtoLinks();
});
