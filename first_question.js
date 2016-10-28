/*
You are given a two-digit integer n. Return the sum of its digits.

    Example

For n = 29, the output should be
addTwoDigits(n) = 11.

    Input/Output

[time limit] 4000ms (js)
[input] integer n

A positive two-digit integer.

    Constraints:
    10 ≤ n ≤ 99.

    [output] integer

The sum of the first and second digits of the input number.

*/

function addTwoDigits(n) {
        var n = n.toString();
        var result = 0
        for(var i=0; i<n.length; i++){
                    result += parseInt(n[i])
                }
        return result
}
