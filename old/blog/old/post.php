<html>

<head>
    <title>HNRQNDRD</title>

    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css" integrity="sha384-rwoIResjU2yc3z8GV/NPeZWAv56rSmLldC3R/AZzGRnGxQQKnKkoFVhFQhNUwEyJ"
        crossorigin="anonymous">
    <link href="https://fonts.googleapis.com/css?family=Work+Sans" rel="stylesheet">
    <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN"
        crossorigin="anonymous">
    <link href="../../hnrqndrd.css" rel="stylesheet">

    <script src="https://code.jquery.com/jquery-3.1.1.slim.min.js" integrity="sha384-A7FZj7v+d/sdmMqp/nOQwliLvUsJfDHW+k9Omg/a/EheAdgtzNs3hpfag6Ed950n"
        crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/tether/1.4.0/js/tether.min.js" integrity="sha384-DztdAPBWPRXSA/3eYEEUWrWCy7G5KFbe8fFjk5JAIxUYHKkDx6Qin1DkWx51bBrb"
        crossorigin="anonymous"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/js/bootstrap.min.js" integrity="sha384-vBWWzlZJ8ea9aCX4pEW3rVHjgjt7zpkNpZk+02D9phzyeVkE+jo0ieGizqPLForn"
        crossorigin="anonymous"></script>
</head>

<body>
    <?php
        $successLoad = true;
        if (isset($_GET['id'])) {
            //echo $_GET['id'];
            
            $dir = 'posts/'; 
            $filename = $_GET['id'];
            $lines = file($dir . $filename . '.txt');
            $plainText = nl2br(file_get_contents($dir . $filename . '.txt'));
        }else{
            // Fallback behaviour goes here
            $successLoad = false;
        }
    ?>
    <div class="main-div" id="blog-div">
        <div class="jumbotron shadow">
            <div class="row">
                <div class="col">
                    <div data-href="http://hnrqndrd.com/blog" class="clickable can-hover">  
                        <h3>Blog</h3>
                    </div>
                </div>
                <div class="col">
                    <div data-href="http://hnrqndrd.com" class="clickable can-hover">  
                        <h3>Henrique Andrade</h3>
                    </div>
                </div>
            </div>
            <h1><?php if($successLoad) echo substr($lines[0], 9, -2); else echo "Not found!"; ?></h1>
        </div>

        <div class="content">
            <div id="sourceTA" class="white-box rounded shadow">
                <?php if ($successLoad) echo $plainText; ?>
            </div>
        </div>
    </div>
</body>
    
<script src="https://cdnjs.cloudflare.com/ajax/libs/showdown/1.7.2/showdown.min.js"></script>
<script type="text/javascript" src="../../hnrqndrd.js"></script>

</html>