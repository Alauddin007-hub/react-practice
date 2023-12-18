<?php 

    require 'db_connection.php';

    $abc = json_decode(file_get_contents("php://input"));

    // print_r($abc);

    if(isset($abc->data->name) && !empty(trim($abc->data->name) && isset($abc->data->email) && !empty($abc->data->email))
    ){
        $name = $abc->data->name;
        $email = $abc->data->email;
    
        $sql = "INSERT INTO user VALUES(NULL, '$name', '$email', now())";
            $add = mysqli_query($db_conn, $sql);
    
            if(mysqli_affected_rows($db_conn) > 0) {
                echo json_encode(["msg"=>"Successfully Inserted"]);
                return;
            } else {
                echo json_encode(["msg"=>"Server Problem. Please Try Again"]);
                return;
            }
    } else {
        echo json_encode(["msg"=>"Please fill all the required fields!"]);
        return;
    
    }

    
  
?>