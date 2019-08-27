
function encryption(s) {
    s = s.split(' ').join();
    let columns = Math.ceil(Math.sqrt(s.length));
    let substrings = [];

    for (let i = 0; i < s.length; i += columns) {
        substrings.push(s.substring(i,i+columns))
    }

    let result = '';
    
    for (let i = 0; i < columns; i++) {
        let encrypted = '';
        substrings.forEach(str => {
            if (str[i]) {
                encrypted += str[i];
            }
        });
        result += encrypted + ' ';
    }

    return result;

}