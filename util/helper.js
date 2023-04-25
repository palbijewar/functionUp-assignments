function date() {
    console.log(new Date().getDate());
    console.log(new Date().getMonth());
}

function batchInfo() {
    console.log("Technetium, fn-tec-74VPN, Hey my name is Pal and the topic for today is Nodejs module system");
}

module.exports.date = date;
module.exports.batchInfo = batchInfo;