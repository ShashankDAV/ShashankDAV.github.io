<?php
$servername = "sql6.freesqldatabase.com";
$username = "sql6587096";
$password = "eTghpWCSJ8";
$db = "sql6587096";

$conn = mysqli($servername, $username, $password, $db);

if($_POST['submit'])
{
    $name = $_POST['name'];
    $email = $_POST['email'];
    
    $query = "INSERT INTO form VALUES ('$name','$email')";
    $data = mysqli_query($conn, $query);
    
    if($data)
    {
       <script>alert("Pass")</script>
       echo "Successful";
}
    else
    {
      <script>alert("Fail")</script>
      echo "Not successful";
}
}
?>
