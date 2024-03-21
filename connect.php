<?php
$servername = "localhost";
$username = "root";
$password = "";  // No password for 'root' user in your setup
$dbname = "Shammys_Factory";
$port = 3308;  // Change this to the correct port number if needed

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname, $port);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} else {
    echo "Connected successfully";
}
