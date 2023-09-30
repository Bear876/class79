var studentarray=[];
function submit()
{
    var name1= document.getElementById("studentname1").value;
    var name2= document.getElementById("studentname2").value;
    var name3= document.getElementById("studentname3").value;
    var name4= document.getElementById("studentname4").value;

    studentarray.push(name1);
    studentarray.push(name2);
    studentarray.push(name3);
    studentarray.push(name4);

    console.log(studentarray);

    document.getElementById("display_name").innerHTML=studentarray;
    document.getElementById("submitbutton").style.display="none";
    document.getElementById("sortbutton").style.display="block";
}
function sorting()
{
    studentarray.sort()
    console.log(studentarray);
    document.getElementById("display_name").innerHTML=studentarray;
}