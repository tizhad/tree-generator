// defining an endpoint to return all trees data
app.get("/trees", (req: any, res: any) => {
    console.log('here')
    console.log(res)
    res.send(treesData);
});
