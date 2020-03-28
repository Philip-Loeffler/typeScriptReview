var myName: string = "philip";
var myAge: number = 30;
var canVote: boolean = true;
// any is a dynamic type that will change based off the data that we give it. 
var anything: any = "yo"
//as in you see this not throwing an error
anything = 30;

//conversions 
//parse int is what we use when we want to turn a string into a number. for instance this "five" will become 5
var stringToNum: number = parseInt('5');
// and for converting to a string we use tostring, which wil convert any data type to a string for us
var NumToString: number = 5;
NumToString.toString();
//interfaces
//super hero would be a complex data type
//when defining your interface it will contain certain data types
interface superHero {
realName: string;
superName: string; 
}

//superman is off type superhero 
var superMan: superHero = {
    realName: "clark kent",
    superName: "Superman"

}