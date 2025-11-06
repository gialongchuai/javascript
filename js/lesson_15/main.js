
const elementTabs = document.querySelector('.tabs');
const elementTabContent = document.querySelector('.tab-content');

const elementTabItems = elementTabs.querySelectorAll('.tab-item');
const elementTabPanes = elementTabContent.querySelectorAll('.tab-pane');

var elementLine = elementTabs.querySelector('.line');
var elementTabActive = elementTabs.querySelector('.active');

elementLine.style.left = elementTabActive.offsetLeft + 'px';
elementLine.style.width = elementTabActive.offsetWidth + 'px';

elementTabItems.forEach(function(elementTabItem, index) {
    var elementPane = elementTabPanes[index];

    elementTabItem.onclick = function() {
        var activeTabItem = elementTabs.querySelector('.active');

        activeTabItem.classList.remove('active');

        elementTabItem.classList.add('active');

        var activeTabPane = elementTabContent.querySelector('.active');
        activeTabPane.classList.remove('active');
        elementPane.classList.add('active');

        elementLine.style.left = elementTabItem.offsetLeft + 'px';
        elementLine.style.width = elementTabItem.offsetWidth + 'px';
    }
})

