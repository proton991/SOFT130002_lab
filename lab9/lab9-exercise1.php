<html lang="en">
<head>
    <title>Exercise 1</title>
</head>
<body>
<h1>Regular HTML section (outside &lt;?php ... ?&gt; tags)</h1>
<p>You can type regular HTML here and it will show up</p>
<hr>
<h1>PHP section (inside &lt;?php ... ?&gt; tags)</h1>
<?php
//Wednesday, February 26th , 2014 15:43:22
$date = date("l, M dS, Y H:i:s");
echo "This page was generated: " . $date . "<hr/>";

$remaining = 366 - date("z");
echo "There are ". $remaining . " days left in the year";


?>
</body>
</html>