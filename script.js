$(document).ready(()=>{

$("#sign-form").submit((e)=>{
  e.preventDefault();
   
  let size = parseInt($("#size").val());
  let data = $("#data").val();
  
  let arr = data.split(" ");
 
 let allPairs =  findPairs(size, arr)
 
 size="";
 data="";
 arr=[];

 $("#result").html(`<b>Total number of matching pairs of socks: ${allPairs}</b>`);
 
})

function findPairs(size, arr){

   if(size==0 || arr.length==0)
    return 0;

   let socksUniqueMap = new Map();

    for(var i=0;i<arr.length;i++){
    
    if(socksUniqueMap.has(arr[i])){
        socksUniqueMap.set(arr[i], socksUniqueMap.get(arr[i])+1)
    }
    else{
        socksUniqueMap.set(arr[i],1);
    }
}


var eachSocksCount =  socksUniqueMap.values();

let totalPairs = 0;

for(var ele of eachSocksCount){
    totalPairs +=parseInt(ele/2);
}

return totalPairs;
} 

})



