const firstArray = [{id:"1", name:"McDonalds", class:"Wendys",color:"red",seccolr:"blue",}]
const secondArray = [{ id:"2",name:"Taco Bell", class:"Chick-fil-A",color:"purple", seccolr:"purpal",}]
   const obj=[];
   const newarray=[]
 for (i=0;i<firstArray.length;i++){
 	for(j=0;j<secondArray.length;j++){
 		if(firstArray[i].color==secondArray[j].color){
         obj.push(firstArray[i].color);
          // var z = Object.assign( {}, firstArray[i].color, firstArray[i].seccolr );
          //  console.log(z);

         //firstArray.push(obj)
      	//secondArray.pop(obj);
         
 		}
 	}


var result = firstArray.reduce((obj,current)=>{
    (obj['color'] = obj['color']||[]).push(current.color);
    (obj['seccolr'] = obj['seccolr']||[]).push(current.seccolr);
    return obj;
},{});

 	 firstArray[i].newcolr = firstArray[i].color;
     
 }



 
console.log(result);





