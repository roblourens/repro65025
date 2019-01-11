async function asyncFn() {
    return Promise.resolve('foo');
}

async function asyncFn1() {
    await asyncFn();
    return asyncFn2();
}

async function asyncFn2() {
    await asyncFn();
    return asyncFn3();
}

async function asyncFn3() {
    await asyncFn();
}

asyncFn1().then(() => {
    console.log(`done`);
});
