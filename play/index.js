const data = [
        {id:1, name:"RAM", role:["Admin"]},
        {id:2, name:"Sita", role:["user", "manager"]},
];

const newData = {id:3, name:"Shyam", role: ["HR"]}

data.push(newData)
console.log(data)

const adminRole  = data.filter(user => user.role.includes("Admin"));
console.log(adminRole);

const nonAdmin = data.filter(user => !user.role.includes("Admin"));
console.log(nonAdmin);

const updateUser = data.find((user) => user.name === "Sita");
const newUpdate = {...newUpdate, name: "Sita User"};
console.log(newUpdate);

const [a, ...rest] = data;
console.log({rest});