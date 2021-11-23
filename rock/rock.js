<script>
        var getImage1 = document.getElementsByClassName("img-container") [0];
        var getImage2 = document.getElementsByClassName("img-container") [1];
        var getImage3 = document.getElementsByClassName("img-container") [2];

        function imageIn(img) {
            img.style.opacity = "1";
            img.style.visibility = "visible";
            img.style.transition = "opacity .5s";
        }

        function imageOut(img) {
            img.style.opacity = "0";
            img.style.visibility = "hidden";
            img.style.transition = "opacity .5s";
        }