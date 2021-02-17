function getAnswers(n) {
    let product = 0;
    let timestables = [];
    for (let i = 0; i < 13; i++) {
        product = n * i;
        timestables.push(product);
    }
    for (let i = 0; i < 13; i++) {
        console.log(timestables[i]);
    }
}
