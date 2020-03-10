/*   9.	Realizar un función recursiva que retorne como salida el resultado de la suma 1 + 3 + 5 + 7 + 9 + N.  */
/*function sum(nums) {
        if (nums.length === 0) {
            return 0;
        } else {
            const [first, ...rest] = nums;
            return first + sum(rest);
        }
     }
    
    sum([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]); 
    console.log(nums);*/

    function range(start,end,step){
    
        var array = [];
        for (var i=start; i<= end; i=i+step){
            array.push(i);
        }
        return array;
    }
    console.log(range(3,10,2));
