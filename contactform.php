<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Retrieve form data
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $subject = htmlspecialchars($_POST['subject']);
    $message = htmlspecialchars($_POST['message']);

    // Recipient email
    $to = "artbyshammy9@gmail.com"; // your email address
    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "Content-Type: text/html; charset=UTF-8\r\n";

    // Email content
    $emailBody = "
        <html>
        <head>
            <title>Contact Form Submission</title>
        </head>
        <body>
            <h2>Contact Form Submission</h2>
            <p><strong>Name:</strong> $name</p>
            <p><strong>Subject:</strong> $subject</p>
            <p><strong>Email:</strong> $email</p>
            <p><strong>Message:</strong></p>
            <p>$message</p>
        </body>
        </html>
    ";

    // Send email
    if (mail($to, $subject, $emailBody, $headers)) {
        echo "<script>alert('Thank you! Your message has been sent successfully.'); window.location.href = 'contact.html';</script>";
    } else {
        echo "<script>alert('Sorry, something went wrong. Please try again later.'); window.location.href = 'contact.html';</script>";
    }
} else {
    // Redirect if accessed directly
    header("Location: contact.html");
    exit;
}
?>
