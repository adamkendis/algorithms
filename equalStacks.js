
function equalStacks(h1, h2, h3) {
    let sum = arr => arr.reduce((sum, num) => sum + num);
    let height1 = sum(h1);
    let height2 = sum(h2);
    let height3 = sum(h3);
    let min = Math.min(height1, height2, height3);

    while (true) {
        if (height1 > min) {
            height1 -= h1.shift();
        }
        if (height2 > min) {
            height2 -= h2.shift();
        }
        if (height3 > min) {
            height3 -= h3.shift();
        }
        if (height1 === height2 && height2 === height3) {
            break;
        }
        min = Math.min(height1, height2, height3)
    }    

    return height1;
}