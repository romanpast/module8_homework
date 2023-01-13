const xmlString = `
<list>
<student>
  <name lang="en">
    <first>Ivan</first>
    <second>Ivanov</second>
  </name>
  <age>35</age>
  <prof>teacher</prof>
</student>
<student>
  <name lang="ru">
    <first>Петр</first>
    <second>Петров</second>
  </name>
  <age>58</age>
  <prof>driver</prof>
</student>
</list>`
const parser = new DOMParser();
const xmlDOM = parser.parseFromString(xmlString, "text/xml");
const studentNode = xmlDOM.querySelectorAll("student");
let nameNode = xmlDOM.querySelectorAll('name'), i;
let contentArray = []
const parceXML = () => {
  for (i = 0; i < studentNode.length; ++i) {
    let lang = nameNode[i].getAttribute("lang");
    let firstName = nameNode[i].querySelector("first").textContent;
    let secondName = nameNode[i].querySelector("second").textContent;
    let fullName = firstName + " " + secondName;
    let age = studentNode[i].querySelector("age").textContent;
    let prof = studentNode[i].querySelector("prof").textContent;
    let person_info = {
      name: fullName,
      age: age,
      prof: prof,
      lang: lang
    }
    contentArray.push(person_info)
  }
}

parceXML()

let result = {
  list: contentArray
}
console.log(result)

// {
//   list: [
//     { name: 'Ivan Ivanov', age: 35, prof: 'teacher', lang: 'en' },
//     { name: 'Петр Петров', age: 58, prof: 'driver', lang: 'ru' },
//   ]
// }