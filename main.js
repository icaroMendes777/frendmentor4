

function accordionToggle(id)
{
	
	const accordBodies = document.querySelectorAll(".accordion_body");
	const fullId = '#accordion_body'+id;
	const content = document.querySelector(fullId);
	const title = document.querySelector("#acordion_title"+id);
	const allTitles = document.querySelectorAll(".accordion_title");
	const arrow = document.querySelector('#arrow'+id);
	const allArrow = document.querySelectorAll('.arrow');
		
	///toggle in all the accordions in case there is one open already
		accordBodies.forEach((div) => {
		  div.style.maxHeight = '0px';
		});

		allArrow.forEach((el) => {
		  el.style.transform = 'rotate(90deg)';
		});
		
		allTitles.forEach((el) => {
		  el.style.fontWeight = '300';
		  
		});

		///open the desired section 
		if(content.clientHeight === 0){
			title.style.fontWeight = "700";
			content.style.maxHeight = content.scrollHeight + "px";
			window.setTimeout(()=>{ arrow.style.transform = 'rotate(270deg)';}, 400);
			
		}else{
			content.style.maxHeight = '0px';
		}	
}
