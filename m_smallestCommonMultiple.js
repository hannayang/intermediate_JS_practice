function smallestCommons(arr) {
    var range = [];
    for (var i = Math.max(arr[0], arr[1]); i >= Math.min(arr[0], arr[1]); i--) {
    range.push(i);
    }

    // can use reduce() in place of this block  如果知道几个数字的最小公倍数的求法（与最大最约数的关系），那么就容易很多了。这其实更是一个数学问题。
    var lcm = range[0];
    for (i = 1; i < range.length; i++) {
    var GCD = gcd(lcm, range[i]);
    lcm = (lcm * range[i]) / GCD;
    }
    return lcm;

    function gcd(x, y) {    // Implements the Euclidean Algorithm  这块的程序是用一个编好的即用code来解决gcd的问题。
    if (y === 0)
        return x;
    else
        return gcd(y, x%y);
    }
}

// test here
console.log(smallestCommons([18,23]));