
// JavaScript to update the year in the footer
document.getElementById('currentYear').textContent = new Date().getFullYear();

const homeLink = document.getElementById('home_link');
const aboutLink = document.getElementById('about_link');
const worksLink = document.getElementById('works_link');
const emailLink = document.getElementById('email_link');

mainContent = document.getElementById("mainContent");

// Add event listeners to the header links
homeLink.addEventListener('click', function(event) {
    event.preventDefault();
    // Replace main content with new content
    mainContent.innerHTML = "<div class=\"intro_container\">\n" +
        "                    <svg width=\"500\" height=\"500\" viewBox=\"0 0 343 390\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n" +
        "                        <!-- Hair Color -->\n" +
        "                        <path style=\"stroke-dasharray: 1166; stroke-dashoffset: 1166; animation: drawHair 1s forwards 3.5s;\" d=\"M9 160L17 193.5L25.5 190.5L37.5 193.5L49.5 198L59.5 204L66.5 212L72.5 214.5L80.5 212L83 209V204L86.5 193.5L83 178.5L80.5 169L83 156.5L86.5 147.5L96 143.5L138.5 133.5V129.5V124H152H195V120L186.5 116H191L210.5 113V106.5H216H247.5L250.5 104L236 95.5H264L244.5 86.5H287.5L267 79L269.5 76.5H275.5L331.5 73L326.5 69L279.5 56L326.5 53.5L306 46.5L275.5 33.5L306 36.5L301.5 30L269.5 19L216 6.5L163 9L107 19L54 43L17 69L4.5 120L9 160Z\" stroke=\"black\"/>\n" +
        "                        <!-- Skin Color -->\n" +
        "                        <path style=\"stroke-dasharray: 1162; stroke-dashoffset: 1162; animation: drawSkin 1s forwards 3.5s;\" d=\"M305 96L298 76.5H270L285.5 88H255L262.5 96H238L247.5 105.5L214.5 108V113.5L191 117L199 123L170 127.5H166H141L138.5 134L125.5 137.5L107 141L90.5 146.5L83 157.5V174.5L87 197L83 210L73.5 215.5L65 210L54 201L41 193.5L29 190.5L15.5 193.5L9.5 201L3 220.5V239.5L9.5 263.5L21.5 280L41 292L59.5 297.5H73.5L80 306.5L107 329.5L141 353L166 367.5L191 377.5L214.5 383L250.5 386.5L277.5 377.5L293.5 364L313.5 338.5L323 306.5L330 263.5V215.5L323 162L313.5 120L305 96Z\" stroke=\"black\"/>\n" +
        "                        <!-- Outline -->\n" +
        "                        <path style=\"stroke-dasharray: 2696; stroke-dashoffset: 2696; animation: drawStroke 20s forwards;\" d=\"M148.6 179.2C155.855 172.881 163.893 168.743 173.4 166.644C184.245 164.25 194.837 162.807 205.8 165M270.2 152.8C273.848 146.259 282.193 141.159 288.8 138.222C292.714 136.483 296.756 135.128 301.033 134.7C303.461 134.457 306.885 133.608 309.2 134.6M237 209.2C237.679 213.816 240.313 218.573 244.1 221.278C246.586 223.053 249.568 223.788 252.189 225.311C254.893 226.882 257.37 228.821 259.289 231.311C268.908 243.795 259.551 259.259 251.8 269.8M198 320.8C200.48 321.948 203.327 321.663 206 321.556C210.779 321.363 215.51 321.091 220.244 320.356C229.083 318.982 237.995 316.403 246 312.4M299.25 82C302.657 91.539 308.304 99.8723 310.694 109.806C313.805 122.731 317.086 135.714 319.75 148.736C321.92 159.343 324.764 169.683 326.361 180.431C328.006 191.499 328.48 202.734 329.056 213.889C330.121 234.539 328.572 255.071 326.625 275.625L326.595 275.939C324.594 297.062 322.479 319.397 312.75 338.5C308.23 347.376 301.27 356.4 294 363.194C286.352 370.342 278.72 377.658 268.875 381.625C258.913 385.64 249.178 386.767 238.5 386.486C227.059 386.185 216.447 383.358 205.306 381.306C180.86 376.802 157.411 365.269 136.986 351.514C124.994 343.438 113.801 334.664 102.25 326C91.8797 318.222 83.453 309.486 75.25 299.5M74.5 297.5C55.2061 299.429 33.682 292.457 20.2639 278.25C4.10588 261.142 -0.268914 234.196 5.5 211.944C7.97027 202.416 11.9338 194.888 21.75 191.889C29.8216 189.423 40.4094 192.6 47.5 196.5C53.1475 199.606 57.952 202.952 62.5 207.5C64.4426 209.443 66.2744 212.591 69 213.5M16 194.548C14.9413 187.402 12.6686 179.617 10.5 172.75M13 177.5C11.1723 170.417 11.0353 162.891 9.25 155.75M9 157.5C8.89976 153.891 8.05602 150.014 7.19444 146.528C5.88155 141.215 5.32341 135.666 3.5 130.5M5.5 135.5C5.5 127.545 5.71186 119.627 4.5 111.75M5.75 115.75C7.18188 106.045 7.30248 96.2653 8 86.5M9.25 92C12.0815 82.4622 16.2653 73.5425 19.75 64.25M16 75C23.3111 66.4174 31.3322 58.7379 39.5 51M31.5 59.5C35.5881 55.4119 40.7766 52.3221 45.5417 49.0833C52.9723 44.0328 60.0633 38.39 67.25 33M64.5 36.5C68.2285 36.2985 72.513 33.6573 75.7917 32.0972C82.3194 28.9913 88.8195 25.8022 95.25 22.5M93.75 24.75C100.994 21.1279 108.836 17.0548 116.5 14.5M113.75 18C121.865 16.3587 129.777 13.4925 137.75 11.25M136.75 15C146.344 11.2022 156.58 8.55762 166.5 5.75M160.5 10.25C170.869 6.88022 181.824 5.73564 192.25 2.5M176.75 8.5C181.397 8.5 186.052 7.53897 190.639 6.88889C198.893 5.71912 207.144 4.72182 215.25 2.75M197.75 8.5C209.186 7.24672 220.394 5.73739 231.75 3.75M209.25 8.5C221.576 10.1656 233.897 8.83995 246.25 7.75M225 10.75C238.644 12.9551 253.229 12 267 12M245.25 14.25C256.97 15.5695 268.747 16.0959 280.5 17M256.75 17C262.886 17.0916 268.903 18.8835 274.833 20.2917C281.108 21.7816 287.403 23.1166 293.75 24.25M272.667 19.7649C284.589 21.7519 299.948 28.7909 310 35.75M308 37.5C301.255 35.8649 294.426 34.5058 287.5 33.9167C282.761 33.5135 273.748 31.7671 269.5 34.75C278.195 33.2718 287.01 39.5693 295.333 41.9167C308.482 45.6247 321.319 49.8128 333.5 56M265.5 59C267.686 57.8667 270.267 57.571 272.667 57.1944C279.077 56.1883 285.547 55.6385 292.028 55.3611C305.798 54.7716 319.326 55.4807 333 57M271 57.25C279.499 55.6564 289.402 58.8775 297.597 60.6806C312.268 63.9081 326.258 68.3919 339.75 75M338.75 76L338.275 75.9608C315.054 74.0413 289.71 71.9463 267 78.5C264.72 76.1249 268.796 80.2973 269.222 80.5278C275.445 83.8897 282.565 85.4598 289.5 86.5M288.5 88.25C275.216 88.25 261.917 86.9263 248.75 89.25M239.75 88.5C248.602 88.7603 258.081 92.5939 266.25 95.75M267 96.25C255.246 94.7334 242.683 96.9519 231 98.25C239.011 99.1401 245.842 103.114 253.75 104.75M250.5 107C233.067 105.359 215.187 106.749 198 109.75M190.5 110.25C201.589 108.983 212.515 111.336 223 114.75M223.25 115.75C208.858 112.223 192.627 115.527 178.25 117.5C188.601 117.352 192.578 120.616 202.75 122.5M202.75 123.25C193.986 123.25 185.302 124.328 176.542 124.472C163.774 124.682 151.009 123.875 138.25 124.25M133.75 123.75C140.5 122.932 147.129 125.195 153.694 126.444C157.646 127.197 161.622 127.808 165.583 128.5C165.748 128.529 169.942 129.233 169.681 129.625C168.485 131.418 158.457 129.468 156.889 129.361C142.712 128.399 128.716 127.51 114.5 128C124.198 128.856 132.688 131.272 142.25 133.25M141.25 134.25C126.842 136.823 112.072 138.98 98 143M69.75 214.5C83.2303 215.293 86.9776 200.206 84.625 189.75C82.7294 181.325 80.3983 171.337 81.75 162.75C82.4684 158.186 83.146 152.715 86.6111 149.25C91.3581 144.503 97.0712 142.714 103.5 141.75M73.75 297.5C71.8699 297.5 77.5489 297.051 79.25 296.25M50.5 222C45.7608 216.927 38.5339 214.032 31.7778 216.972C22.7872 220.885 22.4299 233.315 23.75 241.5M33 260.5C35.6659 259.026 39.0252 256.69 42.2083 257.972C45.6282 259.35 44.5869 263.842 44.9167 266.75C45.9335 275.717 61.3242 272.886 67.25 273M296.25 77C298.146 79.0919 299.009 81.7682 300.25 84.25\" stroke=\"black\" stroke-width=\"5\" stroke-linecap=\"round\"/>\n" +
        "                        <!-- Left Eyebrow -->\n" +
        "                        <path style=\"stroke-dasharray: 57; stroke-dashoffset: 57; animation: drawStroke 1s forwards;\" d=\"M151 178C155.177 169.507 170.131 166.789 177.972 165.167C186.211 163.462 195.06 163.323 203.25 165.25\" stroke=\"black\" stroke-width=\"10\" stroke-linecap=\"round\"/>\n" +
        "                        <!-- Right Eyebrow -->\n" +
        "                        <path style=\"stroke-dasharray: 46; stroke-dashoffset: 46; animation: drawStroke 1s forwards;\" d=\"M270.75 154C281.533 144.902 296.005 133.205 311 135.25\" stroke=\"black\" stroke-width=\"10\" stroke-linecap=\"round\"/>\n" +
        "                        <!-- Left Eye -->\n" +
        "                        <path style=\"stroke-dasharray: 1; stroke-dashoffset: 1; animation: drawStroke 10s forwards;\" d=\"M182 196.75L181.75 196.25\" stroke=\"black\" stroke-width=\"25\" stroke-linecap=\"round\"/>\n" +
        "                        <!--  Right Eye -->\n" +
        "                        <path style=\"stroke-dasharray: 1; stroke-dashoffset: 1; animation: drawStroke 10s forwards;\" d=\"M296 165.5C296.029 165.73 296.081 165.666 296.25 165.75\" stroke=\"black\" stroke-width=\"25\" stroke-linecap=\"round\"/>\n" +
        "                    </svg>\n" +
        "                    <div id=\"intro-text\">\n" +
        "                        <p>\n" +
        "                            Hello and welcome to my website!\n" +
        "                        </p>\n" +
        "                        <p style=\"animation-delay: 5.25s\">\n" +
        "                            I'm Robert, a dedicated artist\n" +
        "                        </p>\n" +
        "                        <p style=\"animation-delay: 6.5s\">\n" +
        "                            with a compelling drive to share\n" +
        "                        </p>\n" +
        "                        <p style=\"animation-delay: 7.75s\">\n" +
        "                            my creativity with the world!\n" +
        "                        </p>\n" +
        "                        <p style=\"animation-delay: 9s\">\n" +
        "                            Embark on a visual voyage through\n" +
        "                        </p>\n" +
        "                        <p style=\"animation-delay: 10.25s\">\n" +
        "                            my portfolio and step into a world\n" +
        "                        </p>\n" +
        "                        <p style=\"animation-delay: 11.5s\">\n" +
        "                            of boundless creativity!\n" +
        "                        </p>\n" +
        "                    </div>"
});

aboutLink.addEventListener('click', function(event) {
    event.preventDefault();
    // Replace main content with new content
    mainContent.innerHTML = "<p style='margin-left: 300px; margin-top: 300px;'>About Content</p>";
});

worksLink.addEventListener('click', function(event) {
    event.preventDefault();
    // Replace main content with new content
    mainContent.innerHTML = "<p style='margin-left: 300px; margin-top: 300px;'>Works Content</p>";
});

emailLink.addEventListener('click', function(event) {
    event.preventDefault();
    // Replace main content with new content
    mainContent.innerHTML = "<div class=\"email_container\">\n" +
        "        <h1>Contact Me</h1>\n" +
        "        <form action=\"https://api.web3forms.com/submit\" id=\"contact-form\" method=\"post\">" +
        "           <!-- Replace with your Access Key -->\n" +
        "           <input type=\"hidden\" name=\"access_key\" value=\"4844a5c8-d226-4d68-b1ae-555d14c10986\">\n" +
        "            <div class=\"form-group\">\n" +
        "                <label for=\"name\">Name: </label>\n" +
        "                <input type=\"text\" id=\"name\" name=\"name\" required" +
        "                   style=\" line-height: 30px; font-family: writingFont, Arial, sans-serif;" +
        "                     font-size: xx-large; background-color: rgba(0,0,0,0); color: rgba(0,0,0,0.75); width: 500px;\">\n" +
        "            </div>\n" +
        "            <div class=\"form-group\">\n" +
        "                <label for=\"email\">Email:</label>\n" +
        "                <input type=\"email\" id=\"email\" name=\"email\" required" +
        "                   style=\" line-height: 30px; font-family: writingFont, Arial, sans-serif;" +
        "                   font-size: xx-large; background-color: rgba(0,0,0,0); color: rgba(0,0,0,0.75); width: 500px;\">\n" +
        "            </div>\n" +
        "            <div class=\"form-group\">\n" +
        "                <label for=\"subject\">Subject:</label>\n" +
        "                <input type=\"text\" id=\"subject\" name=\"subject\" required" +
        "                   style=\" line-height: 30px; font-family: writingFont, Arial, sans-serif;" +
        "                   font-size: xx-large; background-color: rgba(0,0,0,0); color: rgba(0,0,0,0.75); width: 500px;\">\n" +
        "            </div>\n" +
        "            <div class=\"form-group\">\n" +
        "                <label for=\"message\">Message:</label>\n" +
        "                <textarea id=\"message\" name=\"message\" rows=\"12\" required style=\" " +
        "                   font-family: writingFont, Arial, sans-serif; font-size: x-large;" +
        "               background-color: rgba(0,0,0,0); color: rgba(0,0,0,0.75); border: 5px solid rgba(0,0,0,0.3);" +
        "               width: 800px;\"></textarea>\n" +
        "            </div>\n" +
        "            <button " +
        "           \" type=\"submit\">Send</button>\n" +
        "        </form>\n" +
        "    </div>";
});
