//Default export
//--------------
/*
import ui from './module2.mjs';
console.log(ui);
*/
// To find the solution, "node .\module1.mjs"  in the terminal. 
//------------------------------------------------------------------------
//Named Export
//-------------
import dza, {a,b,c,d} from './module2.mjs';//a,b,c,d are the same variable names as in module2.mjs
console.log(dza);
console.log(a);
console.log(b);
console.log(c);
console.log(d);

// Named Export Syntax: import {variable_name1,variable_name2, variable_name3} from './module2.mjs'



