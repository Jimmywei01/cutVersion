const ptd = ["serge", "jovi", "tori", "harper"]
const fae = ["allen", "nick", "queenie"]

// 1. Add Terry in 'ptd'
// 2. check if maggie is in the list 'fae'
// 3. make a new list called 'globalList' with 'ptd' and 'fae' members
// 4. in 'globalList', replace 'harper' with 'eason'

// 1
ptd.push("Terry")
console.log(ptd)
// 2
// fae.findIndex("maggie")
// console.log(fae)

// 3
const globalList = [...ptd, ...fae]
// console.log(globalList)

// 4
// globalList.replace("harper", "eason")
// console.log(globalList)
globalList.splice(3, 4, "eason")
console.log(globalList)
