function getId()
{
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(5)
        }, 1500);
    });
}

function getEmail()
{
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('test@gmail.com');
        }, 2000);
    });
}

function sendEmail(body, recipient)
{
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            var itsError = false;
            console.log('Send E-mail');
            if (!itsError) {
                resolve({time: 6, to: 'test@gmail.com'}); // Promisse ok
            } else {
                reject('Queue full'); // No promisse
            }
        }, 4000);
    });
}

sendEmail('hello', 'test@gmail.com').then(({time, to}) => {
    console.log(`
        Time: ${time}
        ------------------
        To: ${to}
    `);
}).catch((erro) => {
    console.log("Sorry, didn't run" + erro);
});

getId().then((id) => {
    getEmail(id).then((email) => {
        sendEmail('Hi, how are you', email).then(() => {
            console.log('E-mail sent to user with ID: ' + id);
        }).catch(err => {
            console.log(err);
        });
    });
});