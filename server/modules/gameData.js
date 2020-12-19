
function dataStorage(req , dataHistory){
    console.log('data storage:', req);

    dataHistory.push(req);
    return dataHistory;
}
module.exports = dataStorage;