<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Florida Example Plotting Multi Points</title>
    <style type="text/css">
        body {
            color: #5d5d5d;
            font-family: Helvetica, Arial, sans-serif;
        }

        h1 {
            font-size: 30px;
            margin: auto;
            margin-top: 50px;
        }

        .container {
            max-width: 800px;
            margin: auto;
        }
    </style>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js" charset="utf-8"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-mousewheel/3.1.13/jquery.mousewheel.min.js"
            charset="utf-8"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/raphael/2.2.7/raphael.min.js" charset="utf-8"></script>
    <script src="js/jquery.mapael.js" charset="utf-8"></script>
    <script src="js/maps/usa_states.js" charset="utf-8"></script>

    <script type="text/javascript">
        $(function () {
            $(".mapcontainer").mapael({
                map: {
                    // Set the name of the map to display
                    name: "usa_states"
                },
				plots: {
                    "Boca Raton, FL": {
                        value: "2275056",
                        latitude: 26.372827,
                        longitude: -80.098171,
                        href: "#",
                        tooltip: {
                            content: "<span style=\"font-weight:bold;\">Florida (2275056)</span><br />Population : 22868265"
                        }
                    },
					"Miami, FL": {
                        value: "2275056",
                        latitude: 25.7617,
                        longitude: 80.1918,
                        href: "#",
                        tooltip: {
                            content: "<span style=\"font-weight:bold;\">Florida (2175056)</span><br />Population : 22868265"
                        }
                    },
					"Tampa, FL": {
                        value: "2275056",
                        latitude: 27.9506,
                        longitude: 82.4572,
                        href: "#",
                        tooltip: {
                            content: "<span style=\"font-weight:bold;\">Florida (2275056)</span><br />Population : 22868265"
                        }
                    }
				}
            });
        });
    </script>

</head>

<body>
<div class="container">

    <h1>Florida</h1>

    <div class="mapcontainer">
        <div class="map">
            <span>Alternative content for the map</span>
        </div>
    </div>
</div>


</body>
</html>