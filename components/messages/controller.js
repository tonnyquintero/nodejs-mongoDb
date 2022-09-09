

function addMessage(user, message) {
    return new Promise((resolve, reject) => {

        if (!user || !message) {
            console.error('[message controller] No hay usuario o mensaje')
            return reject('Los datos son incorrectos');
        }

    const fullMessage = {
        user: user,
        message: message,
        date: new Date()
    }
    console.log(fullMessage)
    resolve(fullMessage)
    });

    
}

module.exports = {
    addMessage,
}