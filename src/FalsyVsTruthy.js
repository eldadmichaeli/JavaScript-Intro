const values = [false, 0, '', null, undefined, NaN, true, 1, 'non-empty string'];

values.forEach(value => {
    if (value) {
        console.log(`${value} is truthy`);
    } else {
        console.log(`${value} is falsy`);
    }
});
