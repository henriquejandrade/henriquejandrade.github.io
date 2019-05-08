<!DOCSTYLE html>
<html>

<head>
    <title>Blog | HNRQNDRD</title>

    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css" integrity="sha384-rwoIResjU2yc3z8GV/NPeZWAv56rSmLldC3R/AZzGRnGxQQKnKkoFVhFQhNUwEyJ"
        crossorigin="anonymous">
    <link href="https://fonts.googleapis.com/css?family=Work+Sans" rel="stylesheet">
    <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN"
        crossorigin="anonymous">
    <link href="../hnrqndrd.css" rel="stylesheet">

    <script src="https://code.jquery.com/jquery-3.1.1.slim.min.js" integrity="sha384-A7FZj7v+d/sdmMqp/nOQwliLvUsJfDHW+k9Omg/a/EheAdgtzNs3hpfag6Ed950n"
        crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/tether/1.4.0/js/tether.min.js" integrity="sha384-DztdAPBWPRXSA/3eYEEUWrWCy7G5KFbe8fFjk5JAIxUYHKkDx6Qin1DkWx51bBrb"
        crossorigin="anonymous"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/js/bootstrap.min.js" integrity="sha384-vBWWzlZJ8ea9aCX4pEW3rVHjgjt7zpkNpZk+02D9phzyeVkE+jo0ieGizqPLForn"
        crossorigin="anonymous"></script>
</head>

<body>
    <div class="main-div" id="blog-div">
        <div class="jumbotron shadow">
            <div data-href="http://hnrqndrd.com/" class="clickable can-hover">
                <h3>Henrique Andrade</h3>
            </div>
            <h1>Blog</h1>
        </div>

        <div class="content">
            <div class="content-more rounded shadow">Beta version</div>

            <?php
                foreach (glob("posts/*.txt") as $file) 
                {
                    $lines = file($file);

                    $title = substr($lines[0], 9, -2);
                    $date = substr($lines[1], 9, -2);
            ?>

            <?php $getparam = "post.php?id=" . pathinfo($file)['filename']; ?>
            <!-- Post Header Layout -->
            <div data-href=<?php echo $getparam ?> class="white-box rounded shadow clickable can-hover">
                <p class="subtitle"><?php echo $title ?></p>
                <p><?php echo $date ?></p>
            </div>

            <?php } ?>
        </div>
    </div>
    <script type="text/javascript" src="../hnrqndrd.js"></script>
</body>

</html>