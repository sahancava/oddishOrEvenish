var number = 123;

function oddishOrEvenish(number) {
    var list = number.toString().split('');
    var sum = list.reduce((a, b) => Number(a) + Number(b));
    var result = sum < 10 ? sum : oddishOrEvenish(sum);

    if (result % 2 === 0) {
        _result = 'Even';
    } else {
        _result = 'Odd';
    }
    return _result;
}

oddishOrEvenish(number);