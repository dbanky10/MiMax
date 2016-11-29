var findMinMax = module.exports = function(arg){
   var maximum = arg[0];
   var minimum = arg[0];
   for (var i = 0; i < arg.length; i++){
       if (arg[i] > maximum){
           maximum = arg[i];
       }
       if (arg[i] < minimum){
           minimum = arg[i];
       }
   }
   if (minimum === maximum){
       return [maximum];
   }
   else{
   return [minimum, maximum];
   }
}