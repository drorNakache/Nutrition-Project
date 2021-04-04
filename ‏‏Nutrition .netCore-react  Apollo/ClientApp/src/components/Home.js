import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class Home extends Component {
  displayName = Home.name

  render() {
    return (
      <div>
        <body id="top">
        <div className="wrapper row1" >
  <header id="header" className="hoc clear">
    <div id="logo" className="fl_left"> 
 
      <h1 className="logoname"><a href="index.html">Smart<span>L</span>ife </a>  App</h1>
 
    </div>
    <nav id="mainav" className="fl_right"> 
 {/* <!-- ################################################################################################ --&gt;
 */}
      <ul className="clear">
        <li className="active"><a href="">Home</a></li>
          <li><a class="drop" href="#">Pages</a>
          <ul>
            <li><a href="https://images.app.goo.gl/GSpMutv8SUVGZF1C7">Gallery</a></li>
            <li><a href="pages/full-width.html">Full Width</a></li>
            <li><a href="pages/sidebar-left.html">Sidebar Left</a></li>
            <li><a href="pages/sidebar-right.html">Sidebar Right</a></li>
            <li><a href="pages/basic-grid.html">Basic Grid</a></li>
            <li><a href="pages/font-icons.html">Font Icons</a></li>
          </ul>
        </li>
        <li><a class="drop" href="#">Dropdown</a>
          <ul>
            <li><a href="#">Level 2</a></li>
            <li><a class="drop" href="#">Level 2 + Drop</a>
              <ul>
                <li><a href="#">Level 3</a></li>
                <li><a href="#">Level 3</a></li>
                <li><a href="#">Level 3</a></li>
              </ul>
            </li>
            <li><a href="#">Level 2</a></li>
          </ul>
        </li> 
        <li><a href="https://images.app.goo.gl/GSpMutv8SUVGZF1C7"> Nutrition Pyramid</a></li>
        <li><a href="https://en.wikipedia.org/wiki/Nutritional_epidemiology#Nutritional_Science"> Science</a></li>
        <li><a href="https://www.newswise.com/articles/national-nutrition-month-eat-nutrient-rich-foods-for-vitamins-minerals">  News</a></li>
      </ul>
 {/* <!-- ################################################################################################ --&gt;
 */}
    </nav>
  </header>
</div>
 {/* <!-- ################################################################################################ --&gt;
 */}

<div className="bgded overlay"  style={{
         backgroundImage: `url("https://ichef.bbci.co.uk/images/ic/1280xn/p088g9c6.jpg")` }} >  
  <div id="pageintro" class="hoc clear"> 
 {/* <!-- ################################################################################################ --&gt;
 */}
    <article>
      <h3 class="heading">The Nutrition Project </h3>
      <p>change your life by following your Eating customs</p>
      <Link to={'./Counter'}> <footer><a className="btn" >New User</a></footer></Link>
    </article>
 
  </div >

  <div className="wrapper row3">
  <main className="hoc container clear"> 
  <section  id="introblocks">
      <ul className="nospace group btmspace-80 elements elements-four">
        <li class="one_quarter">
          <article> <Link to={"./Check"}><i class="fas fa-hand-rock"></i></Link>
            <h6 class="heading">Your general details</h6>
            <p>Such as name, year of birth, height and weight.</p>
          </article>
        </li>
        <li class="one_quarter">
          <article><a href="#"><i class="fas fa-dove"></i></a>
            <h6 class="heading">Choose your destination</h6>
            <p>Typing goals, on a weekly level.</p>
          </article>
        </li>
        <li class="one_quarter">
          <article><a href="#"><i class="fas fa-history"></i></a>
            <h6 class="heading"> Daily update  </h6>
            <p> Enter meal data during the day. </p>          </article>
        </li>
        <li class="one_quarter">
          <article><a href="#"><i class="fas fa-heartbeat"></i></a>
            <h6 class="heading">Nutritional value of foods</h6>
            <p>Learn about the nutritional values ​​of foods.</p>
          </article>
        </li>
      </ul>
    </section>

    <section class="group shout">
 <div className="clear">  </div>
 
    </section>

    <div class="clear"></div>
    </main>
    </div >
    <div class="bgded overlay light"     style={{
         backgroundImage: `url("https://www.ed2go.com/binaries/content/gallery/ed2go/products/16174.jpg")` }}>
  <section id="services" class="hoc container clear"> 
{/*     <!-- ################################################################################################ -->
 */}   
  <div class="sectiontitle">
      <p class="nospace font-xs">Information analysis</p>
      <h6 class="heading font-x2">Discover your accomplishments</h6>
    </div>
    <ul class="nospace group elements elements-three" style={{ textAlign: "center",
    margin: "auto",
    padding: "0px"}} >
     
      
      <li class="one_third" style={{ listStyleType: "none"}}>
        <article ><a href="#"><i class="fas fa-sliders-h"></i></a>
          <h6 class="heading">Graphic display</h6>
          <p>View and search for weekly data in the form of tabs.</p>
        </article>
      </li>

      

      <li class="one_third">
        <article><a href="#"><i class="fas fa-table"></i></a>
          <h6 class="heading">Analyzes and machine learning</h6>
          <p>Perform every week Calculate the average consumption of each of the food components.</p>
        </article>
      </li>
  
      <li class="one_third">
        <article><a href="#"><i class="fas fa-hourglass-half"></i></a>
          <h6 class="heading">Predicting results</h6>
          <p>Predict your weight according to your eating habits</p>
        </article>
      </li>
    </ul>
{/*     <!-- ################################################################################################ -->
 */} 
  </section>
</div>
  </div>






  <div class="wrapper row5">
  <div id="copyright" class="hoc clear"> 
{/*     <!-- ################################################################################################ -->
 */}    <p class="fl_left">Dror Nakash &copy; 2021 - All Rights Reserved - <a href="#">The Nutrition Project</a></p>
    <p class="fl_right">Template by <a target="_blank" href="https://www.os-templates.com/" title="Free Website Templates">OS Templates</a></p>
{/*     <!-- ################################################################################################ -->
 */}  </div>
</div>
{/* <!-- ################################################################################################ -->
<!-- ################################################################################################ -->
<!-- ################################################################################################ --> */}
<a id="backtotop" href="#top"><i class="fas fa-chevron-up"></i></a>
</body>
  </div>
    );
  }
}
