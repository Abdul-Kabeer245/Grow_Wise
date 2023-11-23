class Navbar extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <style>
      //  Styling for the navbar component 
      *{
        padding: 0;
        margin: 0;
        text-decoration: none;
        list-style: none;
        box-sizing: border-box;
      }
    
      nav{
        background: #33661e;
        height: 75px;
        width: 100%;

      }
      label.logo{
        color: white;
        font-size: 35px;
        line-height: 80px;
        padding: 0 100px;
        font-weight: bold;
      }
      nav ul{
        float: right;
        margin-right: 30px;
      }
      nav ul li{
        display: inline-block;
        line-height: 80px;
        margin: 0 5px;
      }
      nav ul li a{
        color: white;
        font-size: 17px;
        padding: 25px 25px;
        border-radius: 3px;
        text-transform: uppercase;
      }
      nav a:hover {
        background-color: #008000;
        box-sizing: border-box;
        color: #333;
        
    }
    
    /* Styling for the submenu */
    nav .Sub_Services {
        display: none;
        position: absolute;
        background-color: #33661e;
        z-index: 1;
    }
    
    nav .Sub_Services ul{
        margin: 0;
        padding: 0;
        
    }
    
    nav .Sub_Services ul li{
        margin: 0;
        padding: 5px;
    }
    
    
    nav .Sub_Services ul li a {
        color: white;
        text-decoration: none;
        display: block;
        text-align: center;
        padding: 0;
    }
    
    
    nav li:hover .Sub_Services {
        display: block;
        width: 200px;
        color: #333;
        
    }
    
    
    nav .Sub_Services a:hover {
        background-color:#008000;
      }
      .checkbtn{
        font-size: 30px;
        color: white;
        float: right;
        line-height: 80px;
        margin-right: 40px;
        cursor: pointer;
        display: none;
      }
      #check{
        display: none;
      }

      .desc-hidden{
        display:none;
      }

      // #service-hidden{
      //   display:block;
      // }

      @media (max-width: 1080px){
        label.logo{
          font-size: 30px;
          padding-left: 50px;
        }
        nav ul li a{
          font-size: 16px;
        }
    
      }
      @media (max-width: 980px){
        label.logo{
          font-size: 20px;
          padding-left: 70px;
        }
        nav ul li a{
          font-size: 14px;
        }
        
      }
      @media (max-width: 880px){
        .checkbtn{
          display: block;
        }

      

        nav ul{
          position: fixed;
          width: 100%;
          height: 100vh;
          background:#33661e ;
          top: 80px;
          left: -100%;
          text-align: center;
          transition: all .5s;
          z-index:100;
        }
        nav ul li{
          display: block;
          margin: 50px 0;
          line-height: 30px;
    
        }
        nav ul li a{
          font-size: 20px;
          
        }
         #check:checked ~ ul{
          left: 0;
        } 
        nav .Sub_Services ul{
          position: relative;
          display:block;
          width: 100%;
          left:0;
          height:auto;
          
        } 

        .desc-hidden{
          display:block;
        }

      

        nav li:hover .Sub_Services {
<<<<<<< HEAD
          display: block;
          color: #333;
          margin: 67px;
=======
          display: none;
          position:relative;
          width:100%;
          height:auto;
          
          
          color: #333;
          
          // margin: 67px;
         
>>>>>>> cc22b1ac6dfc5107305950141737581f1dbd999b
          margin-top: 0;
          text-align: center;
      }

        #service-hidden{
          display:none;
        }
      
      }
      </style>
  <nav>
    <input type="checkbox" id="check">
    <label for="check" class="checkbtn">
      <i class="fas fa-bars"></i>
    </label>
    <label class="logo">GrowWise</label>
    <ul>
    <!-- Navigation links -->
      <li><a href="#">Home</a></li>
      <li id="service-hidden"><a>Services</a>
          <div class="Sub_Services">
              <ul>
                  <li><a href="">disease identifier</a></li>
                  <li><a href="">crop recommender</a></li>
                  <li><a href="">plant information</a></li>  
              </ul>
          </div>
        </li>
        <li class="desc-hidden"><a href="">disease identifier</a></li>
        <li class="desc-hidden"><a href="">crop recommender</a></li>
        <li class="desc-hidden"><a href="">plant information</a></li>  
      <li><a href="#">About us</a></li>
      <li><a href="#">Contact us</a></li>
      <li><a href="#">FAQs</a></li>
    </ul>
  </nav>

    `;
  }
}
 // Define the custom element
customElements.define('navbar-component', Navbar);

// Include this component in your HTML file by using the following script:
// <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"/>