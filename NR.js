console.log("NR");
let jeson = "https://catfact.ninja/fact";
 async function fact (){
 let f = await axios.get(jeson);
  return f.data.fact;
}
let h3 = document.querySelector('h3');
let btn = document.querySelector('button');
btn.addEventListener("click" , async()=>{
   let fac = await fact();
   h3.innerText = fac;
})
