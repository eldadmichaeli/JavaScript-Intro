try {
    let result = riskyOperation();
    console.log(result);
} catch (error) {
    console.error('Error caught:', error.message);
} finally {
    console.log('Operation completed.');
}

function riskyOperation() {
    throw new Error("OOPS Something went wrong!");
}