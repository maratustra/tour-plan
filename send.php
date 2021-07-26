
<?php
// Файлы phpmailer
require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';
require 'phpmailer/Exception.php';

// Переменные, которые отправляет пользователь
$name = $_POST['name'];
$phone = $_POST['phone'];
$message = $_POST['message'];
$email = $_POST['email'];

// Формирование самого письма
if ($email) {
    $title = "Subscribing To Best Tour Plan";
    $body = "
    <b>Email:</b> $email
    ";
} else {
    $title = "Message For Best Tour Plan";
    $body = "
    <h2>New Message</h2>
    <b>Name:</b> $name<br>
    <b>Phone:</b> $phone<br><br>
    <b>Message:</b><br>$message
    ";
}

// Настройки PHPMailer
$mail = new PHPMailer\PHPMailer\PHPMailer();
try {
    $mail->isSMTP();   
    $mail->CharSet = "UTF-8";
    $mail->SMTPAuth   = true;
    //$mail->SMTPDebug = 2;
    $mail->Debugoutput = function($str, $level) {$GLOBALS['status'][] = $str;};

    // Настройки вашей почты
    $mail->Host       = 'smtp.gmail.com'; // SMTP сервера вашей почты
    $mail->Username   = 'alena.y.maramygina@gmail.com'; // Логин на почте
    $mail->Password   = 'pefodlooszaeqenu'; // Пароль на почте
    $mail->SMTPSecure = 'ssl';
    $mail->Port       = 465;
    $mail->setFrom('alena.y.maramygina@gmail.com', 'Алёна Марамыгина'); // Адрес самой почты и имя отправителя

    // Получатель письма
    $mail->addAddress('maratustraa@gmail.com');  
   
// Отправка сообщения
$mail->isHTML(true);
$mail->Subject = $title;
$mail->Body = $body;    

// Проверяем отравленность сообщения
if ($mail->send()) {$result = "success";} 
else {$result = "error";}

} catch (Exception $e) {
    $result = "error";
    $status = "Сообщение не было отправлено. Причина ошибки: {$mail->ErrorInfo}";
}

// Отображение результата
header('Location: thankyou.html');