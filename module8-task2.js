const jsonString = `{
  "list": [
   {
    "name": "Petr",
    "age": "20",
    "prof": "mechanic"
   },
   {
    "name": "Vova",
    "age": "60",
    "prof": "pilot"
   }
  ]
 }`
const data = JSON.parse(jsonString);
const name = data.name
let contentArray = []
const parceJSON = () => {
  for (i = 0; i < data.list.length; ++i) {
    let name = data.list[i].name;
    let age = data.list[i].age;
    let prof = data.list[i].prof;
    let person_info = {
      name: name,
      age: age,
      prof: prof
    }
    contentArray.push(person_info)
  }
}
parceJSON()
let result = {
  list: contentArray
}
console.log(result)