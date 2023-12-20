function Addition(Arr : number[]) : number
{
    var sum : number = 0;
    var i : number = 0;

    for(i=0; i<Arr.length; i++)
    {
        sum = sum + Arr[i];
    }
    return sum;
}

var Marks : number[] = [67,89,77,90,88];
var Result : number = 0;

Result = Addition(Marks);
console.log("Addition is : "+Result);