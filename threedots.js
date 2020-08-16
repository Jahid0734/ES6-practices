const age = [25,15,16,24,23,84,45];
const age2 = [42,56,45,35];
const age3 = [12,63,45,45,52,19]
const allAge = age.concat(age2);
const allAge2 = [...age, ...age2, 5 , ...age3]
// console.log(allAge2);

const business = 650;
const minister = 350;
const sochib = 360;
const takapoisa = [650, 550, 850,950];
const maximum2 = Math.max(...takapoisa)
const maximum = Math.max(business, minister, sochib);
console.log(maximum2)