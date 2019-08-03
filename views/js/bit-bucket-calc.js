$(document).on('click', '.commit-file-diff-stats',function () {
    var $linesAdded = $('.lines-added');
    var $linesremoved = $('.lines-removed');
    var totalAdded = 0;
    var totalRemoved = 0;
    $linesAdded.each(function () {
        totalAdded += parseInt($(this).html().trim().slice(1));
    });
    $linesremoved.each(function () {
        totalRemoved += parseInt($(this).html().trim().slice(1));
    });

    alert('Total added: ' + totalAdded + '; \nTotal removed: ' + totalRemoved +  '; \nTotal: ' + (totalAdded + totalRemoved) + ';');
});
