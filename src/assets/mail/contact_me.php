  
<?php
if(empty($_POST['name'])      ||
empty($_POST['email'])     ||
empty($_POST['phone'])     ||
empty($_POST['message'])   ||
!filter_var($_POST['email'],FILTER_VALIDATE_EMAIL))
{
echo "No arguments Provided!";
return false;
}

$name = strip_tags(htmlspecialchars($_POST['name']));
$email_address = strip_tags(htmlspecialchars($_POST['email']));
$phone = strip_tags(htmlspecialchars($_POST['phone']));
$message = strip_tags(htmlspecialchars($_POST['message']));

// Create the email and send the message
$to = 'katie4682@yahoo.com'; // Add your email address in between the '' replacing yourname@yourdomain.com - This is where the form will send a message to.
$email_subject = "Website Contact Form:  $name";
$email_body = "You have received a new message from your website contact form.\n\n"."Here are the details:\n\nName: $name\n\nEmail: $email_address\n\nPhone: $phone\n\nMessage:\n$message";
$headers = "From: noreply@yourdomain.com\n"; // This is the email address the generated message will be from. We recommend using something like noreply@yourdomain.com.
$headers .= "Reply-To: $email_address";   
mail($to,$email_subject,$email_body,$headers);
return true;  
    // $name = $_POST ["name"];
    // $visitor_email = $_POST ["email"];
    // $phone = $_POST ["phone"];
    // $message = $_POST ["message"];


    // $email_subject = "New Form Submission";

    // $email_body = "User Name: $name.\n"."User Email: $visitor_email.\n"."User Phone: $phone.\n"."User Message: $message.\n"; 

    // $to = "katie4682@yahoo.com";

    // $headers = "From: $email_from \r\n";

    // $headers .= "Reply-To: $visitor_email \r\n";

    // mail($to,$email_subject,$email_body,$headers);

    // header("Location: App.js"); 

?>
