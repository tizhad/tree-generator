const BASE_URL = 'http://localhost:3000/trees';

async function getTreeData() {
    const root = [];

    fetch(BASE_URL)
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to fetch data');
            }
            return response.json();
        })
        .then(data => {
            root.push(data);
            genAllSelectBoxes(root[0], rootElement)
        })
        .catch(error => {
            console.error(error.message);
        });
}
