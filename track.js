let pets = [
    { name: "Max", type: "dog", bornOn: 2018 },
    { name: "Angel", type: "cat", bornOn: 2015 },
    { name: "Jasper", type: "dog", bornOn: 2016 }
  ];
  
  const getAge=(pet) => 
  {return new Date().getFullYear() - pet.bornOn;}
  

  let petsWithAge = pets.map((pet)=>{
    pet.age = getAge(pet)
   
  });
  console.log(petsWithAge);
  
  let dogs = pets.find((pet)=> {
    return pets.type=="dogs"
    });
  console.log(dogs);
  let jasper=
  pets.find((pet)=> {
    return pets.name=="jasper"
  });
  console.log("Jasper is " + jasper.age + " years old");