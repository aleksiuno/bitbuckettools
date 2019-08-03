$(document).ready(function () {
    const SUMMARY_CONTAINER_CLASS = 'ul.commit-files-summary';
    const LINES_ADDED_CLASS = '.lines-added';
    const LINES_REMOVED_CLASS = '.lines-removed';

    let idSummary = '#js-total-lines';

    appendSummary(
        SUMMARY_CONTAINER_CLASS,
        LINES_ADDED_CLASS,
        LINES_REMOVED_CLASS,
        idSummary
    );

    /**
     *
     * @param container
     * @param linesAddedClass
     * @param linesRemovedClass
     * @param idSummary
     */
    function appendSummary(container, linesAddedClass, linesRemovedClass, idSummary) {
        if ($(idSummary).length !== 0) {
            $(idSummary).remove();
        }

        let totalAdded = 0;
        let totalRemoved = 0;

        $(linesAddedClass).each(function () {
            totalAdded += parseInt($(this).html().trim().slice(1));
        });
        $(linesRemovedClass).each(function () {
            totalRemoved += parseInt($(this).html().trim().slice(1));
        });

        $(container).append(buildSummaryHTML(idSummary, totalAdded, totalRemoved, (totalAdded + totalRemoved)));
    }

    /**
     *
     * @param id
     * @param totalAdded
     * @param totalRemoved
     * @param total
     * @returns {string}
     */
    function buildSummaryHTML(id, totalAdded, totalRemoved, total) {
        return '<div id="'+id+'">' +
            '<hr style="margin: 0">\n' +
            '<li>\n' +
            '    <div class="commit-file-diff-stats">\n' +
            '        <span class="lines-added">+' + totalAdded + '</span>\n' +
            '        <span class="lines-removed">-' + totalRemoved + '</span>\n' +
            '    </div>\n' +
            '    <p style="margin:0; color: #399839;">Total: <span style="background-color: #cfc">' + total + '</span></p>\n' +
            '</li>' +
            '</div>';
    }
});
