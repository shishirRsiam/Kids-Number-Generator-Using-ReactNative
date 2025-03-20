const numberToText = (number) => {
    const ones = [
        '', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten', 'Eleven', 'Twelve',
        'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen'
    ];

    const tens = [
        '', '', 'Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety'
    ];

    const thousands = ['', 'Thousand', 'Million', 'Billion'];

    if (number === 0) return 'Zero';

    let result = '', i = 0;

    while (number > 0) {
        if (number % 1000 !== 0) {
            result = helper(number % 1000) + thousands[i] + ' ' + result;
        }
        number = Math.floor(number / 1000);
        i++;
    }

    return result.trim();

    function helper(num) {
        if (num === 0) return '';
        if (num < 20) return ones[num] + ' ';
        if (num < 100) return tens[Math.floor(num / 10)] + ' ' + helper(num % 10);
        return ones[Math.floor(num / 100)] + ' Hundred ' + helper(num % 100);
    }
};

export default numberToText;