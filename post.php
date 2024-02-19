<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;
require_once "vendor/autoload.php";

// Load Composer's autoloader
//require 'vendor/autoload.php';
    
// Instantiation and passing `true` enables exceptions

$mail = new PHPMailer(true);

       try {
              //Server settings
              $mail->SMTPDebug = SMTP::DEBUG_SERVER;                      // Enable verbose debug output
              $mail->isSMTP();                                            // Send using SMTP
              $mail->Host       = 'ahcvp.kz';                    // Set the SMTP server to send through
              $mail->SMTPAuth   = true;                                   // Enable SMTP authentication
              $mail->Username   = 'info@ahcvp.kz';                     // SMTP username
              $mail->Password   = 'cardiology_admin';                               // SMTP password
              $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;         // Enable TLS encryption; `PHPMailer::ENCRYPTION_SMTPS` also accepted
              $mail->Port       = 993;                                    // TCP port to connect to
          
              //Recipients
              $mail->setFrom('info@ahcvp.kz', 'Mailer');
              $mail->addAddress('gerardinearmstrong@gmail.com');     // Add a recipient
          
              // Content
              $mail->isHTML(false);                                  // Set email format to HTML
              $mail->Subject = 'Here is the subject';
              $mail->Body    = 'This is the HTML message body <b>in bold!</b>';
              $mail->AltBody = 'This is the body in plain text for non-HTML mail clients';
          
              $mail->send();
              echo 'Message has been sent';
          } catch (Exception $e) {
              echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
          }
