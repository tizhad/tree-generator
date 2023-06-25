const genAllTrees = require("./tree-generator");
const { test, expect } = require("jest");

test("Should call genAllSelectBoxes function with data", () => {
    // Mock the root and rootElement variables
    const root = { nodes: [] };
    const rootElement = document.createElement("div");

    // Spy on the genAllSelectBoxes function
    const genAllSelectBoxesSpy = jest.spyOn(genAllTrees, "genAllSelectBoxes");

    // Call the function that should trigger genAllSelectBoxes
    genAllTrees.genAllSelectBoxes(root, rootElement);

    // Expect the function to have been called
    expect(genAllSelectBoxesSpy).toHaveBeenCalled();
});
