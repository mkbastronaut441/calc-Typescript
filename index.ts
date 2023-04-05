export{}

import { question } from "readline-sync";

type operator='+' | '-' | '*' | '/';
function main(): void{

    const firstStr: string=question("Enter first number:\n");
    const operator:string=question("Enter operator:\n");
    const secondtStr: string=question("Enter second number:\n");
    
    const validInput: boolean=isNumber(firstStr)&& isOperator(operator)&& isNumber(secondtStr);

    if(validInput){
        const firstNum: number=parseInt(firstStr);
        const secondNum: number=parseInt(secondtStr);
        const result= calculate(firstNum, operator as operator, secondNum);
        console.log(result);
    } 
    else{
        console.log('\ninvalid input\n')
        main()
    }
}

function calculate(firstNum:number,operator:string,secondNum:number){
    switch(operator){
        case'+':
          return firstNum+secondNum;
        case'-':
          return firstNum-secondNum;
        case'*':
          return firstNum*secondNum;
          case'/':
          return firstNum/secondNum;  
    }
}

function isOperator(operator: string):boolean{
    switch(operator){

        case "+" :
        case "-" :
        case "*" :
        case "/" :
            return true;

        default:
            return false;
    }
}

function isNumber(str: string): boolean
{
    const maybeNum=parseInt(str);
    const isNum: boolean=!isNaN(maybeNum);
    return isNum;
}
main();