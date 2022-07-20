export const getMinSquaredNumber = (arr) => {
   if ((!Array.isArray(arr)) && (nums.length == 0)) {
      return null;
    } 
    if (arr.length==0){
              return null;
            }
            else
{
   const value = arr
    .map(num => Math.abs(num)); 

   const min = Math.min(...value);
   return min * min
}
}

