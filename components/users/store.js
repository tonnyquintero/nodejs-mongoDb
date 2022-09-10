const Model = require('./model')

async function getUsers(filterUser) {
    let filter = {}
    if (filterUser !== null) {
        filter = { user: new RegExp(filterUser, "i") }
    };
    const users = await Model.find(filter);
    return users;
}

function addUser (user) {
    const myUser = new Model(user);
    return myUser.save()
}

module.exports = {
    add: addUser,
    list: getUsers,
}