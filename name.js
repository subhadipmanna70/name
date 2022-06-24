
 const name="roni"


 function uppercase(text){
     const upper=text.toUpperCase();
     console.log(upper);
 }
 
uppercase(name);


console.log("i am roni "+"new");
console.log(`i am ${name}`);

const arr=["eat","sleep","code","repeat"];
console.log(arr[0]);

arr.push("new");
arr.pop();
console.log(arr);
console.log(arr.indexOf("eat"));

const user = {
name: "Subhadip",
age: 23, 
purchases: ["phone","car","house"],
sayName: function(){
console.log(this.name);
}
};

user.sayName();


 const names = ["roni","subhadip","messi"];
 for (n of names){
    if(n==="messi"){
    
        console.log(`here present ${n}`);
    break;
    }
    else{
        console.log("messi is not there");
    }
 }
