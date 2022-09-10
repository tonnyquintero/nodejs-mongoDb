const Model = require('./model');

function addMessage (message) {
    //list.push(message);
    const myMessage = new Model(message);
    myMessage.save()

}

async function getMessages(filterUser) {
    let filter = {}
    if (filterUser !== null) {
        filter = { user: new RegExp(filterUser, "i") }
    };
    const messages = await Model.find(filter);
    return messages;
}

async function updateText(id, message) {
    const foundMessage = await Model.findById(id);
    foundMessage.message = message;
    const newMessage = await foundMessage.save();
    return newMessage;
}

function removeMessage(id) {
    return Model.deleteOne({
        _id: id
    })
}

module.exports = {
    add: addMessage,
    list: getMessages,
    updateText: updateText,
    remove: removeMessage,
    // get
    // update
    // delete
}