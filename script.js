
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
        "                    <svg width=\"500\" height=\"500\" viewBox=\"0 0 500 500\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n" +
        "                        <path style=\"stroke-dasharray: 1224; stroke-dashoffset: 1224; animation: drawStroke 3s forwards;\"\n" +
        "                              d=\"M275.333 80.6667C260.46 78.0717 245.913 76.3424 230.796 77.7778C210.714 79.6846 191.673 86.221\n" +
        "                          174.296 96.4074C125.762 124.858 90.1859 176.218 73.6111 229.296C64.5698 258.25 61.3334 287.15\n" +
        "                          64.8333 317.296C68.0879 345.328 74.8467 372.505 90.463 396.315C104.499 417.716 123.942 437.914 147.278\n" +
        "                          449.13C173.927 461.938 205.263 466.039 234.519 463.889C288.125 459.948 340.952 436.56 379.333\n" +
        "                          398.815C419.973 358.848 442.394 300.631 439.852 243.741C437.633 194.086 415.043 144.969 375.815\n" +
        "                          113.741C356.728 98.5465 333.956 88.3041 310.185 83.0741C289.678 78.5622 269.168 78.5805 248.333 79\"\n" +
        "                              stroke=\"black\" stroke-width=\"15\" stroke-linecap=\"round\" stroke-opacity=\"0.75\"/>\n" +
        "                        <path style=\"stroke-dasharray: 1; stroke-dashoffset: 1; animation: drawStroke 1s forwards; animation-delay: 2.75s\"\n" +
        "                              d=\"M189 238.333C188.564 238.361 188.187 238.427 188.667 238.667\" stroke=\"black\" stroke-width=\"35\"\n" +
        "                              stroke-linecap=\"round\" stroke-opacity=\"0.75\"/>\n" +
        "                        <path style=\"stroke-dasharray: 1; stroke-dashoffset: 1; animation: drawStroke 1s forwards; animation-delay: 3.25s\"\n" +
        "                              d=\"M295.333 230C295.011 229.426 294.428 229.381 295 229.667\" stroke=\"black\" stroke-width=\"35\"\n" +
        "                              stroke-linecap=\"round\" stroke-opacity=\"0.75\"/>\n" +
        "                        <path style=\"stroke-dasharray: 58; stroke-dashoffset: 58; animation: drawStroke 1s forwards; animation-delay: 3.5s\"\n" +
        "                              d=\"M226 348.333C234.398 348.176 242.81 346.075 251.148 345.074C261.872 343.787 272.607 342.595\n" +
        "                          283.333 341.333\" stroke=\"black\" stroke-width=\"15\" stroke-linecap=\"round\" stroke-opacity=\"0.75\"/>\n" +
        "                    </svg>\n" +
        "                    <div id=\"intro-text\">\n" +
        "                        <p>\n" +
        "                            Hello and welcome to my website!\n" +
        "                        </p>\n" +
        "                        <p style=\"animation-delay: 7s\">\n" +
        "                            I'm Robert, a dedicated artist\n" +
        "                        </p>\n" +
        "                        <p style=\"animation-delay: 9.5s\">\n" +
        "                            with a compelling drive to share\n" +
        "                        </p>\n" +
        "                        <p style=\"animation-delay: 12.5s\">\n" +
        "                            my creativity with the world.\n" +
        "                        </p>\n" +
        "                        <p style=\"animation-delay: 15s\">\n" +
        "                            Embark on a visual voyage through\n" +
        "                        </p>\n" +
        "                        <p style=\"animation-delay: 18s\">\n" +
        "                            my portfolio and step into a world\n" +
        "                        </p>\n" +
        "                        <p style=\"animation-delay: 21s\">\n" +
        "                            of boundless creativity!\n" +
        "                        </p>\n" +
        "                    </div>";
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
        "                <label for=\"name\">Name:</label>\n" +
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
        "            <button style=\" font-family: writingFont, Arial, sans-serif; font-size: xxx-large; " +
        "            opacity: 0.75; background-color: rgba(0, 0, 0, 0.3); border-radius: 5px; padding: 10px;" +
        "            margin-top: 20px;" +
        "           \" type=\"submit\">Send</button>\n" +
        "        </form>\n" +
        "    </div>";
});
