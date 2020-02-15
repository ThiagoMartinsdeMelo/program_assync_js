function sendEmail(body, recipient, callback)
{
    setTimeout(() => {
        console.log(`
        Recipient: ${recipient}
        ---------------------------
        ${body}
        ---------------------------
        From: Thiago
        `);
        callback('Ok', 5, '8s');
    }, 8000)
}
console.log('Start sending e-mail!');
sendEmail('Hi, welcome!', 'teste@gmail.com', (status, amount, time) => {
    console.log(`
    Status: ${status}
    --------------------------
    Contacts: ${amount}
    --------------------------
    Sending time: ${time}
    `);
    console.log('Everything is OK!');
});
