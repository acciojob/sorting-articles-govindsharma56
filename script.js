//your JS code here. If required
 let ul=document.createElement('ul');
let band=['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog']
   band.sort((a,b)=>{
	     let aWord=a.split(' ');
	     let bWord=b.split(' ');
    if (aWord[0] === "A" || aWord[0] === "An" || aWord[0] === "The"){
		     aWord=aWord.slice(1);
             }
	if(bWord[0] === "A" || bWord[0] === "An" || bWord[0] === "The"){
		   bWord=bWord.slice(1);
     }
	   return aWord.join(' ').localeCompare(bWord.join(' '));
)};
   band.map((item)=>{
	    let li=document.createElement('li');
      li.textContent=item;
   ul.append(li);

})
document.body.append(ul);



 