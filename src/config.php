<?php
    require_once '../vendor/autoload.php';

    session_start();

    $client_id = "595049452262-3alrt56pfqhb54d7bl2cq68qn9c4i144.apps.googleusercontent.com";
    $clientSecret = "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";
    $redirectUrl = "http://localhost:3000/src/html/AfterLogin.html";

    $client = new Google_Client();
    $client->setClientId($client_id);
    $client->setClientSecret($clientSecret);
    $client->setRedirectUri($redirectUrl);
    $client->addScope("email");
    $client->addScope("profile");

    $hostname = "localhost";
    $username = "postgres";
    $password = "543210";
    $database = "sportrevive";

    $conn = pg_connect("host=$hostname dbname=$database user=$username password=$password");
?>
