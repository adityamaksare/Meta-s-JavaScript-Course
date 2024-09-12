function conactStrings(strA, strB) {
    return strA + strB;
}

conactStrings("abc", "def") //expected output is "abcdef" and output is correct

conactStrings(1, 2) //output We want is 12 but is 3 due to some mistake.


// testing code with jest
expect(conactStrings("abc", "def")).toBe("abcdef");