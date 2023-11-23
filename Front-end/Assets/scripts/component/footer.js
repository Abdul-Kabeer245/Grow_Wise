class Footer extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
        <style>
        footer {
            background:#926829;
            color: white;
        }
        
        .container {
            display: flex;
            justify-content: space-evenly;
            flex-direction: row;
        }
        
        .logo{
            font-size: 30px;
            margin-right: 450;
        }
        
        h1 { 
            margin-left: 50px;
            margin-top: 15px; /* Reduced margin-top */
        }
        
        .quick-links h3 {
            margin-top: 25px;
            text-align: center;
            padding-left: 0px;
        }
        
        .quick-links li {
            text-align: center;
            list-style-type: none; /* Reduced padding */
            position: relative;
            padding: 0px;
        }
        
        .findus h3{
            margin-top: 25px;
            text-align: center;
        }
        .social-icons {
            text-align: center;
            padding: 5px;
        }
        
        .social-icons li {
            display: inline-block;
            padding: 10px;
        }
        
        .social-icons i {
            color: white;
        }
        
        a {
            text-decoration: none;
            color: white;
        }
        
        .bottom-bar {
            text-align: center;
        }
        
        .bottom-bar hr{
            width: 100%;
        }
        .bottom-bar p {
            color: white;
            margin: 0;  
        }
        </style>
        <footer>
        <div class="container">
            <div class="logo" >
                <h1>Grow Wise</h1>
            </div>
            <div class="quick-links">
                <h3>Quick Links</h3>
                 <ul>
                    <li><a href="">Home</a></li>
                    <li><a href="">ABOUT US</a></li>
                    <li><a href="">SERVICES</a></li>
                    <li><a href=""> FAQs</a></li>
                    <li><a href="">CONTACT US</a></li>
                 </ul>
            </div>
            <div class="findus">
                <h3>Find Us at</h3>
                <ul class="social-icons">
                 <li><a href=""><i class="fab fa-facebook"></i></a></li>
                 <li><a href=""><i class="fab fa-twitter"></i></a></li>
                 <li><a href=""><i class="fab fa-instagram"></i></a></li>
                 <li><a href=""><i class="fab fa-linkedin"></i></a></li>
                </ul>
                </div>
        </div>
        <div class="bottom-bar">
            <hr>
            <p>&copy; 2023 your company . All rights reserved</p>
        </div>
    </footer>
      `;
    }
  }
  
  customElements.define('footer-component', Footer);