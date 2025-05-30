# JavaScript Methods Practice

This repository contains various exercises and code snippets focused on mastering JavaScript built-in methods. It covers core JavaScript functionalities across arrays, objects, strings, numbers, and utility functions.

---

## 📚 Methods Covered

### ✅ Array Methods
- `.push()` / `.pop()`
- `.shift()` / `.unshift()`
- `.map()`
- `.filter()`
- `.reduce()`
- `.forEach()`
- `.find()` / `.findIndex()`
- `.includes()`
- `.indexOf()` / `.lastIndexOf()`
- `.every()` / `.some()`
- `.sort()`
- `.reverse()`
- `.concat()`
- `.flat()` / `.flatMap()`
- `.slice()` / `.splice()`
- `.join()`

### ✅ Object Methods
- `Object.keys()`
- `Object.values()`
- `Object.entries()`
- `Object.assign()`
- `Object.hasOwn()`
- `Object.freeze()` / `Object.seal()`

### ✅ String Methods
- `.length`
- `.charAt()` / `.charCodeAt()`
- `.slice()` / `.substring()` / `.substr()`
- `.toLowerCase()` / `.toUpperCase()`
- `.trim()` / `.trimStart()` / `.trimEnd()`
- `.split()` / `.join()`
- `.replace()` / `.replaceAll()`
- `.includes()` / `.startsWith()` / `.endsWith()`

### ✅ Number & Math Methods
- `.toFixed()` / `.toPrecision()`
- `parseInt()` / `parseFloat()`
- `Math.round()` / `Math.floor()` / `Math.ceil()`
- `Math.max()` / `Math.min()`
- `Math.random()` / `Math.pow()` / `Math.sqrt()`

### ✅ Utility / Functional
- `typeof`
- `Array.isArray()`
- `JSON.stringify()` / `JSON.parse()`
- `setTimeout()` / `setInterval()`
- Spread operator (`...`)
- Destructuring (`const {name} = obj`)
- Optional chaining (`obj?.prop`)
- Nullish coalescing (`??`)

---

## 🧠 Example Practice

```js
// Get average science score of female students above age 16
const avgScience = students
  .filter(s => s.gender === "Female" && s.age > 16)
  .map(s => s.subjects.science)
  .reduce((sum, val, _, arr) => sum + val / arr.length, 0)
  .toFixed(2);
