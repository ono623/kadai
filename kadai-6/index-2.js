const str1 = "abc"
const str2 = "'abc'"
const str3 = '"abc"'
const str4 = '{"a": undefined}'
const str5 = '{"a": 123}'
const str6 = '{a: 123}'

try {
    console.log(JSON.parse(str1))    
} catch (error) {
    console.log(error)
    // abc という文字列は正しい JSON ではないから。
    // 正しくは "abc"
}

// str2 のパース結果
try {
    console.log(JSON.parse(str2))    
} catch (error) {
    console.log(error)
    // 'abc' という文字列は正しい JSON ではないから。
    // 正しくは "abc"
}

// str3 のパース結果
try{
    console.log(JSON.parse(str3))    
} catch (error) {
    console.log(error)
    // "abc" という文字列は正しい　JSON　なのでパースできる。
}

// str4 のパース結果
try {
    console.log(JSON.parse(str4))    
} catch (error) {
    console.log(error)
    // '{"a": undefined}' という文字列は正しい　JSON　ではないから。
}

// str5 のパース結果
try {
    console.log(JSON.parse(str5))    
} catch (error) {
    console.log(error)
    // '{"a": 123}' という文字列は正しい　JSON　ではない。
}

console.log(JSON.parse(str1))
console.log(JSON.parse(str2))
console.log(JSON.parse(str3))
console.log(JSON.parse(str4))
console.log(JSON.parse(str5))
console.log(JSON.parse(str6))