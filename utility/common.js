function sum1(a, b) {
    return a + b;
}
function sum2(a, b) {
    return a + b;
}
function ConsoleLogHelper (data) {
    if (process.env.ENV_NAME === 'production') return;
    console.log(data);
}
const callApiLogin = (params, header = []) => {
    return 'callApiLogin value';
};
exports.callApiLogin = callApiLogin;
exports.sum1 = sum1;
exports.sum2 = sum2;
exports.ConsoleLogHelper = ConsoleLogHelper;