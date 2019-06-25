import React from "react";
import "./App.css";
import { NavLink } from "react-router-dom";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Courses from "./Courses";
import Home from "./Home";

const App = () => (
    <BrowserRouter>
    {/* Search start */}
        <div><Search/></div>
    {/* Search end */}
        <div>
        <div className="NavContainer">
            <button className="NavButton">
                <NavLink to="/home">Home</NavLink>
            </button>

            <button className="NavButton">
                <NavLink to={{ pathname: "/courses" }}>Link to courses</NavLink>
            </button>

        </div>
            <Switch>
                <Route exact path="/courses" component={Courses} />
                <Route exact path="/home" component={Home} />
            </Switch>
        </div>
    </BrowserRouter>
);

export default App;

//search+jumbotron
const Search=()=>{
    return(<div>
        <div>
        <iframe width="420" height="315" src="https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1"/>
        </div>

        <div class="example">
  <input type="text" placeholder="Search.." name="search"/>
  <button type="submit">Search</button>
        </div>

    </div>);
}

//calendar
const Calendar=()=>{
  return(<table border='1'  bordercolor='#FFFF00' cellspacing='0' cellpadding='0' align=center>
<tr><td><table cellspacing='0' cellpadding='0' align=center width='100' border='1'><tr><td  align=center bgcolor='#ffff00'><font size='2' face='Tahoma'> <a href='html_calendar.php?prm=06&chm=-1' rel="nofollow"><</a></font> </td><td colspan=5 align=center bgcolor='#ffff00'><font size='2' face='Tahoma'>Jun 2019 </font> </td><td  align=center bgcolor='#ffff00'><font size='2' face='Tahoma'> <a href='html_calendar.php?prm=06&chm=1' rel="nofollow">></a>  </font></td></tr><tr><td><font size='2' face='Tahoma'><b>Sun</b></font></td><td><font size='2' face='Tahoma'><b>Mon</b></font></td><td><font size='2' face='Tahoma'><b>Tue</b></font></td><td><font size='2' face='Tahoma'><b>Wed</b></font></td><td><font size='2' face='Tahoma'><b>Thu</b></font></td><td><font size='2' face='Tahoma'><b>Fri</b></font></td><td><font size='2' face='Tahoma'><b>Sat</b></font></td></tr><tr><td> </td><td> </td><td> </td><td> </td><td> </td><td> </td><td valign=top><font size='2' face='Tahoma'>1
<br>
 </font></td></tr><tr><td valign=top><font size='2' face='Tahoma'>2
<br>
 </font></td><td valign=top><font size='2' face='Tahoma'>3
<br>
 </font></td><td valign=top><font size='2' face='Tahoma'>4
<br>
 </font></td><td valign=top><font size='2' face='Tahoma'>5
<br>
 </font></td><td valign=top><font size='2' face='Tahoma'>6
<br>
 </font></td><td valign=top><font size='2' face='Tahoma'>7
<br>
 </font></td><td valign=top><font size='2' face='Tahoma'>8
<br>
 </font></td></tr><tr><td valign=top><font size='2' face='Tahoma'>9
<br>
 </font></td><td valign=top><font size='2' face='Tahoma'>10
<br>
 </font></td><td valign=top><font size='2' face='Tahoma'>11
<br>
 </font></td><td valign=top><font size='2' face='Tahoma'>12
<br>
 </font></td><td valign=top><font size='2' face='Tahoma'>13
<br>
 </font></td><td valign=top><font size='2' face='Tahoma'>14
<br>
 </font></td><td valign=top><font size='2' face='Tahoma'>15
<br>
 </font></td></tr><tr><td valign=top><font size='2' face='Tahoma'>16
<br>
 </font></td><td valign=top><font size='2' face='Tahoma'>17
<br>
 </font></td><td valign=top><font size='2' face='Tahoma'>18
<br>
 </font></td><td valign=top><font size='2' face='Tahoma'>19
<br>
 </font></td><td valign=top><font size='2' face='Tahoma'>20
<br>
 </font></td><td valign=top><font size='2' face='Tahoma'>21
<br>
 </font></td><td valign=top><font size='2' face='Tahoma'>22
<br>
 </font></td></tr><tr><td valign=top><font size='2' face='Tahoma'>23
<br>
 </font></td><td valign=top><font size='2' face='Tahoma'>24
<br>
 </font></td><td valign=top><font size='2' face='Tahoma'>25
<br>
 </font></td><td valign=top><font size='2' face='Tahoma'>26
<br>
 </font></td><td valign=top><font size='2' face='Tahoma'>27
<br>
 </font></td><td valign=top><font size='2' face='Tahoma'>28
<br>
 </font></td><td valign=top><font size='2' face='Tahoma'>29
<br>
 </font></td></tr><tr><td valign=top><font size='2' face='Tahoma'>30
<br>
 </font></td></tr></table></td></tr></table>

 <p>Koks kursas vyksta informacija</p>);
}

//categoryList1
const CategoryList1=()=>{
  return(<div class="cart1">
	<div class="imageC">Image</div>
	<div class="titleC">Kurso pavadinimas</div>
	<div class="ratingC">reitingas</div>
	<div class="kainaC">kurso kaina</div>
	<div class="infoC">Laikas,data,vieta</div>
</div>);
}

//categoryList2
const CategoryList2=()=>{
  return(<div class="cart1">
	<div class="imageC">Image</div>
	<div class="titleC">Kurso pavadinimas</div>
	<div class="ratingC">reitingas</div>
	<div class="kainaC">kurso kaina</div>
	<div class="infoC">Laikas,data,vieta</div>
</div>
<div class="cart2">
	<div class="infoDaugiauC">
		<h3>Lygis</h3>
		<h3>Lektorius</h3>
		<h3>Kalendorius</h3>
		<h3>Sertifikatas</h3>
		<h3>Atsiliepimai</h3>
		<h3>Top skilai</h3>
	</div>
</div>);
}


//signIn info
const SingInLogIn=()=>{
  return(<h2>Tabs</h2>
<p>Click on the buttons inside the tabbed menu:</p>

<div class="tab">
  <button class="tablinks" onclick="openCity(event, 'London')">Registracija</button>
  <button class="tablinks" onclick="openCity(event, 'Paris')">Prisijungimas</button>

</div>

<div id="London" class="tabcontent">
  <form action="/action_page.php">
  <div class="container">
    <h1>Register</h1>
    <p>Please fill in this form to create an account.</p>
    <hr>

    <label for="email"><b>Email</b></label>
    <input type="text" placeholder="Enter Email" name="email" required>

    <label for="psw"><b>Password</b></label>
    <input type="password" placeholder="Enter Password" name="psw" required>

    <label for="psw-repeat"><b>Repeat Password</b></label>
    <input type="password" placeholder="Repeat Password" name="psw-repeat" required>
    <hr>
    <p>By creating an account you agree to our <a href="#">Terms & Privacy</a>.</p>

    <button type="submit" class="registerbtn">Register</button>
  </div>

  <div class="container signin">
    <p>Already have an account? <a href="#">Sign in</a>.</p>
  </div>
</form>
</div>

<div id="Paris" class="tabcontent">
  <h2>Responsive Social Login Form</h2>

<div class="container">
  <form action="/action_page.php">
    <div class="row">
      <h2 style="text-align:center">Login with Social Media or Manually</h2>
      <div class="vl">
        <span class="vl-innertext">or</span>
      </div>

      <div class="col">
        <a href="#" class="fb btn">
          <i class="fa fa-facebook fa-fw"></i> Login with Facebook
         </a>
        <a href="#" class="twitter btn">
          <i class="fa fa-twitter fa-fw"></i> Login with Twitter
        </a>
        <a href="#" class="google btn"><i class="fa fa-google fa-fw">
          </i> Login with Google+
        </a>
      </div>

      <div class="col">
        <div class="hide-md-lg">
          <p>Or sign in manually:</p>
        </div>

        <input type="text" name="username" placeholder="Username" required>
        <input type="password" name="password" placeholder="Password" required>
        <input type="submit" value="Login">
      </div>

    </div>
  </form>
</div>

<div class="bottom-container">
  <div class="row">
    <div class="col">
      <a href="#" style="color:white" class="btn">Sign up</a>
    </div>
    <div class="col">
      <a href="#" style="color:white" class="btn">Forgot password?</a>
    </div>
  </div>
</div>
</div>
<script>
function openCity(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}
</script>

);
}

