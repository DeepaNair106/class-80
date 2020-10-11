student_array =[];

function submit()
{
    var display_array =[];

    for (var j =1; j<=4; j++){

        var student_name =document.getElementById("student_"+j).value;
        student_array.push(student_name);
    }

    console.log(student_array);

    var length= student_array.length;

    for (var k =0; k<length; k++){

        display_array.push("<h4>Name: "+student_array[k]+"</h4>");
        
    }
    console.log(display_array);
    document.getElementById("display_name_with_commas").innerHTML=display_array;

    var remove_commas =display_array.join(" ");
    console.log(remove_commas);
    document.getElementById("display_name_without_commas").innerHTML=remove_commas;

    document.getElementById("submit_button").style.display="none";
    document.getElementById("sort_button").style.display="inline-block";
}

function sorting(){

display_sorted_array=[];

student_array.sort();
var length= student_array.length;

for (var k =0; k<length; k++){

    display_sorted_array.push("<h4>Name: "+student_array[k]+"</h4>");
    
}
console.log(display_sorted_array);

var remove_commas =display_sorted_array.join(" ");
    console.log(remove_commas);
    document.getElementById("display_name_without_commas").innerHTML=remove_commas;

}
    
