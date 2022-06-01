<script type='text/javascript'>
function calculate(){
    var lengthInFeet = document.getElementById("lengthInFeet").value;   //get the length in feet
    var widthInFeet = document.getElementById("widthInFeet").value; //get the width in feet
    var distanceBetween = document.getElementById("distanceBetween").value;  //get the distance between each plant in inches
    
    //calculate the square feet and print it into the div
    var area = (lengthInFeet*widthInFeet);
    document.getElementById("squareFeet").innerHTML = area;
    document.getElementById("squareFeetTri").innerHTML = area;

    //calculate the number of trees
    document.getElementById("numberOfPlants").innerHTML = (area)/(Math.pow(distanceBetween,2)) + " trees";
    document.getElementById("numberOfPlantsTri").innerHTML = (area)/(Math.pow(distanceBetween,2)) * 1.15 + " trees";

    //print out the distance between each plant in inches
    document.getElementById("plantDistance").innerHTML = distanceBetween + " feet";
    document.getElementById("plantDistanceTri").innerHTML = distanceBetween + " feet";

    //register that the function worked in the JS console
    console.log("function executed");

};

var form = document.getElementById("calculator");
function handleForm(event) { event.preventDefault(); } 
form.addEventListener('submit', handleForm);
</script>