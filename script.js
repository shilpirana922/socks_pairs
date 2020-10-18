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
// find all pairs of socks
function findPairs(size, arr){

    // if size is zero then return zero pairs
   if(size==0 || arr.length==0)
    return 0;

    // map for finding the count of socks for a unique color 
   let socksUniqueMap = new Map();

    for(var i=0;i<arr.length;i++){
    // if socks already present then increase the count

    if(socksUniqueMap.has(arr[i])){
        socksUniqueMap.set(arr[i], socksUniqueMap.get(arr[i])+1)
    }
    else{
        //otherwises add the socks
        socksUniqueMap.set(arr[i],1);
    }
}

// get the array of all values
var eachSocksCount =  socksUniqueMap.values();

let totalPairs = 0;
// count the pairs by dividin them for two
for(var ele of eachSocksCount){
    totalPairs +=parseInt(ele/2);
}
// return total number of pairs
return totalPairs;
} 

})



