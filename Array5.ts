var Marks : number[] = [11,21,51,101,111];

console.log("Number of elements in the array are : "+Marks.length);

console.log("Array traversal using for loop");

var i : number = 0;

for(var i=0; i < Marks.length; i++)
{
    console.log(Marks[i]);
}

console.log("Array traversal using while loop");
i=0;
while(i < Marks.length)
{
    console.log(Marks[i]);
    i++;
}

console.log("Array traversal using do while loop");
i = 0;
do
{
    console.log(Marks[i]);
    i++;
}while(i < Marks.length);


