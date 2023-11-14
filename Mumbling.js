// Examples:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"


function accum(s) {
	let arr = [];
  let str = "";
  for (let i=0; i<s.length; i++) {
    str += s[i].toUpperCase();
    for (let j=0; j<i; j++) {
      str += s[i].toLowerCase()
    }
    arr.push(str);
    str = "";
  }
  return arr.join("-");
}