// Imediately Invoked Function IIFE


(function chai(){
  console.log("DB Connected")
  // Named IIFE
})();


((user) =>{
  console.log(`${user} is logged in`)
  // Unnamed IIFE
})("Ayush")