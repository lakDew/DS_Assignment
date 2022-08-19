// Q1. Write a program to find all pairs of an integer array whose sum is equal to a given number?


// function sumPair(arr,num){
//     let ansArray=[];
    
//     for(let i=0;i<arr.length;i++){
//         for(let a=0;a<arr.length;a++){
            
//             let pairArray=[];
            
//             if(i==a){
//                 continue;
//             }
            
//             if(arr[i]+arr[a]==num){
//                 pairArray.push(arr[i]);
//                 pairArray.push(arr[a]);
//                 ansArray.push(pairArray);
//             }
            
//         }
//     }
//     return ansArray;
// }
// let arr=[0,1,3,4,1,6,3,3,5,7,0,2,5]
// console.log(sumPair(arr,6))


// Q2. Write a program to reverse an array in place? In place means you cannot create a new array. You have to update the original array.


// function reverseArray(arr){
//     let start=0;
//     let end=arr.length-1;
//     let middle=end/2;
    
//     while(start<=middle){
        
//         let temp=arr[start];
//         arr[start]=arr[end];
//         arr[end]=temp;
//         start++;
//         end--;
//     }
//     return arr;
// }
// let arr=[1,2,3,1,0,7,3,3,2,7]
// console.log(reverseArray(arr))

// Q3. Write a program to check if two strings are a rotation of each other?


// function rotation(str1,str2){
//     strArray=str2.split('');
//     for(let a=0;a<=strArray.length;a++){
//         let temp=strArray.pop();
//         strArray.unshift(temp);
//         let rotatedStr2='';
 
//         for(let i=0;i<strArray.length;i++){
//             rotatedStr2+=strArray[i];
//         }
//         if(str1==rotatedStr2){
//             return true
//         }
//     }
//     return false;
//  }
//  console.log(rotation('abcd','cdab'))

// Q4. Write a program to print the first non-repeated character from a string?


// function nonRepeatedChar(str){
//     strArray=str.split('');
   
//     for(let i=0;i<strArray.length;i++){
//       let result=false;
//      for(let a=0;a<strArray.length;a++){
//          if(a==i){
//              continue;
//          }
//          if(strArray[i]==strArray[a]){
//              result=true;
//              break;
//          }
//      }
     
//      if(result==false){
//          return strArray[i];
//      }
     
//     }
//     return 'all characters are repeated';
//  }
//  console.log(nonRepeatedChar('aab'))


// Q5. Read about the Tower of Hanoi algorithm. Write a program to implement it.

// function towerOfHanoi(n, from_rod,  to_rod,  aux_rod)
// {
//         if (n == 0)
//         {
//             return;
//         }
//         towerOfHanoi(n - 1, from_rod, aux_rod, to_rod);
//         document.write("Move disk " + n + " from rod " + from_rod +
//         " to rod " + to_rod);
//         towerOfHanoi(n - 1, aux_rod, to_rod, from_rod);
//     }
  
    
//     var n = 3; 
//     towerOfHanoi(n, 'A', 'C', 'B');



// Q6. Read about infix, prefix, and postfix expressions. Write a program to convert postfix to prefix expression.


// function isOperator(x)
// {

//     switch (x) {
//     case '+':
//     case '-':
//     case '/':
//     case '*':
//         return true;
//     }
//     return false;
// }

// function postToPre(post_exp)
// {
//     let s = [];
//     let length = post_exp.length;
    
//       for (let i = 0; i < length; i++) {
          
//           if (isOperator(post_exp[i])) {
//               let op1 = s[s.length - 1];
//             s.pop();
//             let op2 = s[s.length - 1];
//             s.pop();

//               let temp = post_exp[i] + op2 + op1;

//               s.push(temp);
//         }

//         else {
//               s.push(post_exp[i] + "");
//         }
//     }

//     let ans = "";
//     while (s.length > 0)
//         ans += s.pop();
//     return ans;
// }

// let exp="ABC/-AK/L-*";
// console.log(postToPre(exp))



// Q7. Write a program to convert prefix expression to infix expression.

// function isOperator(x)
// {
//     switch(x)
//     {
//         case '+':
//         case '-':
//         case '*':
//         case '/':
//         case '^':
//         case '%':
//             return true;
//     }
//     return false;
// }

// function convert(str)
// {
//     let stack = [];
//     let l = str.length;
//     for(let i = l - 1; i >= 0; i--)
//     {
//         let c = str[i];

//         if (isOperator(c))
//         {
//             let op1 = stack[stack.length - 1];
//             stack.pop()
//             let op2 = stack[stack.length - 1];
//             stack.pop()
//             let temp = "(" + op1 + c + op2 + ")";
//             stack.push(temp);
//         }
//         else
//         {
//             stack.push(c + "");
//         }
//     }
//     return stack[stack.length - 1];
// }
//  let exp = "*-A/BC-/AKL";
//  console.log(convert(exp))




// Q8. Write a program to check if all the brackets are closed in a given code snippet.

// function checkBracket(str){
//     let arr=str.split('');
//     let result=[];
//     for(let a=0;a<arr.length;a++){
//         if(arr[a]=='['){
//             result.push(arr[a]);
//         }
//         if(arr[a]=='{'){
//             result.push(arr[a]);
//         }
//         if(arr[a]=='('){
//             result.push(arr[a]);
//         }
//         if(arr[a]==']'){
              
//             if(result[result.length-1]=='[')
//             {
//                 result.pop()
//             } 
//             else{
//                   result.push(arr[a]);
//             }
//         }
//         if(arr[a]=='}'){
           
//             if(result[result.length-1]=='{')
//             {
//                 result.pop();
//             }
//             else{
//                 result.push(arr[a]);  
//             }
            
//         }
//         if(arr[a]==')'){
           
//             if(result[result.length-1]=='(')
//             {
//                 result.pop()
//             }
//             else{
//                    result.push(arr[a]); 
//             }
//         }
//         console.log(result)
//     }
    
//     if(result.length==0){
//         return 'balanced';
//     }
//     else{
//         return 'not balanced'
//     }
//   }
//   console.log(checkBracket('{{}[()]}{}{([()])}[]'))


// Q9. Write a program to reverse a stack.

// function reverseStack(stack){
//     let resultStack=[];
//     let length=stack.length;
//     for(let a=0;a<length;a++){
//         let temp=stack.pop();
//         resultStack.push(temp);
//     }
//     return resultStack;
// }

// console.log(reverseStack([2,1,6,3,5,9,4,10,0]))


// Q10. Write a program to find the smallest number using a stack.

// function smallestInStack(stack){
//     let resultStack=[];
//     let length=stack.length;
//     for(let a=0;a<length;a++){
        
//         let temp=stack.pop();
        
//         if(resultStack.length==0){
//             resultStack.push(temp);
//         }
//         if(temp<resultStack[0]){
//             resultStack.pop();
//              resultStack.push(temp);
            
//         }
        
//     }
//     return resultStack;
// }

// console.log(smallestInStack([2,1,-6,3,5,9,4,10,20]))