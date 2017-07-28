'use strict';

document.addEventListener('DOMContentLoaded', function(evt) {
    initIsotope();
});

function initIsotope() {
    let grid = document.querySelector('.grid'),
        gridItem = grid.querySelectorAll('.grid-item'),
        iso = new Isotope(grid, {
            itemSelector: '.grid-item',
            masonry: {
                columnWidth: '.grid-item',
                isFitWidth: true
            }
        });

    // Isotope filter
    let selectors = document.querySelector('.selectors'),
        allSelector = Array.from(selectors.querySelectorAll('.selector'));
    selectors.onclick = function(evt) {
        // remove all active initially
        allSelector.forEach(function(node) {
            node.classList.remove('active');
        });

        // filter and add active class
        if (evt.target !== null) {
            evt.target.classList.add('active');
            iso.arrange({
                filter: evt.target.getAttribute("data-filter")
            });
        }
    };
}
