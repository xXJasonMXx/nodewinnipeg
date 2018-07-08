const longText = function (text1, text2) {
    if (text1.length > text2.length) {
        console.log(text1);
    }

    if (text2.length > text1.length) {
        console.log(text2);
    }

    if (text2.length == text1.length) {
        console.log('same # characters');
    }
}

longText('mello', 'hello');