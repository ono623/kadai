const a = { x: 1, y:2 }
const b = a
b.x = 10
console.log(b.x)
console.log(a.x)

const animals = ['cat','dog','rabbit']

for(let animal of animals) {
    console.log(animal)
}

const cat = {
    name: 'Simba',
    age: 1,
    sex: 'male'
}
console. log(Object.keys(cat))