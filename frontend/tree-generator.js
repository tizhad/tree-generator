const rootElement = document.querySelector('.tree');
const BASE_URL = 'http://localhost:3000/trees';
const root = [];

getTreeData().then(data => {
    root.push(data)
    }
)

function genAllSelectBoxes(root, rootElement) {
    if (root.nodes.length === 0) {
        return;
    }
    const li = document.createElement('li');
    li.setAttribute('id', root.id)
    const newSelect = document.createElement('select');
    newSelect.addEventListener('change', (event) => handleOptionSelection(newSelect, event));
    const defaultOption = document.createElement('option');
    defaultOption.value = '';
    defaultOption.text = 'Select an item';
    defaultOption.selected = true;
    defaultOption.hidden = true;
    if (root.nodes.length > 1) {
        newSelect.appendChild(defaultOption);
    }

    li.appendChild(newSelect);
    rootElement.appendChild(li);

    let ul = document.createElement('ul');
    li.appendChild(ul);

    for (let i = 0; i < root.nodes.length; i++) {
        const node = root.nodes[i];
        const option = document.createElement('option');
        option.value = node.id;
        option.text = node.name;
        newSelect.appendChild(option);
        genAllSelectBoxes(node, ul);
    }
}

function handleOptionSelection(selectedElement, event) {
    const selectElement = event.target;
    const selectedID = selectElement.value
    const parentLi = selectElement.parentNode

    // reset all select
    document.querySelectorAll('select').forEach(function (el) {
        el.disabled = false
    })

    traverseUp(parentLi, selectedID)
}

function traverseUp(li, selectedID) {
    if (li === undefined || li.tagName !== 'LI') {
        return
    }
    const elementID = li.getAttribute('id')
    const parentUL = li.parentNode
    const childUL = li.querySelector('ul')
    hideIncompatibles(childUL, selectedID)
    traverseUp(parentUL.parentNode, elementID)
}

function hideIncompatibles(ul, id) {
    if (ul === undefined || ul === null || ul.tagName !== 'UL') {
        return
    }

    for (const child of ul.children) {
        const childID = child.getAttribute('id')
        if (childID === id) {
            continue
        }
        const select = child.querySelector('select')
        if (select === null) {
            continue
        }
        select.disabled = true;
        const childUL = child.querySelector('ul')
        hideIncompatibles(childUL, id)
    }
}

getTreeData().then();
