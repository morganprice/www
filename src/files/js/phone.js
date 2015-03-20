function createPhoneLinks() {
    $('a[data-c][href=""]').each(function() {
        var i = $(this);
        //replace # character with + if present in prefix
        //$(this).attr('data-c',$(this).attr('data-c').replace('+','.'));
        i.attr('href', 'te' + 'l:' + '/' + "/" + i.data('c') + i.data('p') + i.data('n'));
        if (i.html() == '') {
            i.html('+' + i.data('c') + ' (0)' + i.data('p') + ' ' + i.data('n'));
        }
    });
}
$(function() {
    createPhoneLinks();
});
