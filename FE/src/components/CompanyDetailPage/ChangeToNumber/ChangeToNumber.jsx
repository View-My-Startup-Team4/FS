export function ChangeToNumber(stringData) {
  const num = Number(stringData) * 100000000;

  if (isNaN(num)) return stringData;
  else {
    const tmp = { first: "조 ", second: "억 ", third: "만 ", forth: "원 " };
    const first = Math.floor(num / 1000000000000);
    const second = Math.floor((num % 1000000000000) / 100000000);
    const third = Math.floor((num % 100000000) / 10000);
    const forth = Math.floor(num % 10000);
    let result = "";
    if (first !== 0) result = result + first + tmp.first;
    if (second !== 0) result = result + second + tmp.second;
    if (third !== 0) result = result + third + tmp.third;
    if (forth !== 0) result = result + forth + tmp.forth;

    return result;
  }
}
export default ChangeToNumber;
