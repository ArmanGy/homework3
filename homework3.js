//ex1
	const func1 = function (num1, num2, num3){
		return num1+num2-num3
	};
	const a = func1(12,4,7)
	console.log(z)
//ex2
   	const func2 = function (){
	return 7
	};
  	const b = func2()
	console.log(c)
//ex3
	const func3 = function (fName, mName, lName){
	};
	const c = func3(1,2,4)
	console.log(z)
//ex4
	const func4 = function (smallest, medium, longest){
    	if (smallest.length > longest.length){
        	return smallest;
     	}else if (medium.length > longest.length){
        	return medium;
     	}else if (longest.length > smallest.length){
        	return longest;
     	 }
	}
  	const d = func4 ("Joe","Jill","Kevin")
  	console.log(d)
//ex5
	const func5 = function (number1, number2){
    	if (number1 === number2){
   	 return 0;
    	} else if (number1>number2){
     	 return 1;
    	} else if (number1<number2){
    	 return -1
   	 }
	 };
  	const e = func5(22,22)
  	console.log(e)
//ex6
	const func6 = function (a,b){
	    return (a*b)
 	 }
 	 const f = func6(4,3)
 	 console.log(f)
//ex7
	const func7 = function (c,d){
	  return (c/d)
	}
	const g = func7(20,4)
	console.log(g)
//ex8
 	const triangleArea = function(base, height) {
    	const i = func6(base, height)
    	const j = func7(i,2)
    	return j;
  	};
  	const h = triangleArea(20,10)
  	console.log(h);
//ex9

	const numLength = function (number){
	  return number.length
	}; 
        const k = numLength("623")
        console.log(k)
//ex10
	const func8 = function (wordc,wordx,numberrr) {
	const l = wordc.lenght + wordx.lenght;
	 if(l >  numberrr){
	  return 1;
	 } else {
	  return -1;
	 }
	};
	const m = func8("car","table",5)
	console.log(m)
//ex11
	const runStuff = function (base,height,string){
	  if(string === "rectangle"){
	    return base*height;
	  } else if(string === "triangle"){
	    return (base*height)/2;
	  } else {
	    return -1;
	  }
	};
	const n = runStuff(6,3,"rectangle")
	console.log(n)