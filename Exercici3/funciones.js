
 const epic = ['a', 'long', 'time', 'ago', 'in a', 'galaxy', 'far far', 'away'];

 let result = epic.reduce((sum, currentValue) => {
   return (`${sum} ${currentValue}`);
})

console.log(result); 