const e = require('express');
const Model = require('./model');

function addMessage (message) {
    //list.push(message);
    const myMessage = new Model(message);
    myMessage.save()

}

async function getMessages(filterUser) {
    return new Promise((resolve, reject) => {
        let filter = {}
    if (filterUser !== null) {
        filter = { user: new RegExp(filterUser, "i") }
    }
        Model.find(filter)
        .populate('user')
        .exec((error, populated) => {
            if(error) {
                reject(error);
                return false;
            }
            resolve(populated)
        })
    })
    
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