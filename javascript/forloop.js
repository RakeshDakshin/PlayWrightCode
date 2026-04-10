for (let i=0;i<=5;i++)
{
    console.log(i);
}

//for loop with Array

const fruits=["apple","mango","jackfruit"];

for (let i=0;i<fruits.length;i++)
{
 console.log(fruits[i]);
}

// for loop with object(key)

const student={
    name:"Rakesh",
    Age: 30,
    City: "vellore"
};

for(let key in student)
{
    console.log(key + ":" + student[key]);
}