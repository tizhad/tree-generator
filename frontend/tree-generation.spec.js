const {test, expect, spyOn, describe, beforeEach} = require('jest');
const { genAllSelectBoxes, handleOptionSelection } = require('./tree-generator');
const { getTreeData } = require('./get-data.service');

describe('tree generation tests', () => {
    let rootElement;

    beforeEach(() => {
        rootElement = document.createElement('li');
        document.body.appendChild(rootElement);
    });

    test('Should call genAllSelectBoxes function with data', async () => {
        const root = {id: 'root', name: 'test', nodes: []};
        const genAllSelectBoxesSpy = spyOn(window, 'genAllSelectBoxes');
        await getTreeData();

        genAllSelectBoxes(root, rootElement);

        expect(genAllSelectBoxesSpy).toHaveBeenCalled();
    });
});

