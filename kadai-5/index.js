const profile = {
    firstName: 'Nadoka',
    familyname: 'Shinohara',
    age: 20,
    major: 'literature',
    hobby: 'cooking',
    job: 'student',
    families: 'nothing',
 };

const keys = Object.keys(profile);

 for (let index = 0; index < keys.length; index++) {
     const key = keys[i];
     const value = profile[key];
     const text = "私の"　+ key + "は、"　+ value + "です。"
     console.log(text);
     
 }
