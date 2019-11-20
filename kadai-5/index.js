const profile = {
    firstName: 'Nadoka',
    familyname: 'Shinohara',
    age: 20,
    major: 'literature',
    hobby: 'cooking',
    job: 'student',
    families: '2 stuffed animals',
 };

const keys = Object.keys(profile);

 for (let i = 0; i < keys.length; i = i + 1) {
     const key = keys[i];
     const value = profile[key];
     const text = "私の"　+ key + "は、"　+ value + "です。"
     console.log(text);
     
 }