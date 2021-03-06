import React from 'react';
//css libs
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../node_modules/font-awesome/css/font-awesome.min.css';
import '../../node_modules/bootstrap-social/bootstrap-social.css'
//css
import '../App.css';
//js
import '../../node_modules/jquery/dist/jquery.slim.min.js'
import '../../node_modules/popper.js/dist/umd/popper.min.js';
import "../../node_modules/bootstrap/dist/js/bootstrap.min.js";
import $ from 'jquery';
//NavBar
import NavBar from './Navbar';
//footer
import Footer from './Footer';
//sign in modal
import SignIn from './SignIn';
import SignUp from './SignUp';
//helper functions
import { activateNavBar, initalize,} from '../helperFunctions.js';

class Creator extends React.Component{

  componentDidMount(){
    activateNavBar(1);
    initalize();
  }
  render(){
    return(
      <div>
      <NavBar/>

      <SignIn/>
      <SignUp/>

      <header class = "jumbotron">
          <div class = "container">
              <div class = "row row-header">
                  <div class = "col-12">
                      <h1>Creator</h1>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex vero consectetur saepe perspiciatis? Provident, doloremque optio dolore voluptatum recusandae dolorum animi quae explicabo, pariatur soluta aut eveniet suscipit sit! Voluptas facilis rem rerum neque repudiandae, impedit animi sint. Saepe, perspiciatis.</p>
                  </div>
              </div>
              <div class = "jumbotron">
                <div class = "row row-header">
                  <div class = "col-12">
                    <div class = "video-link-label-wrapper">
                      <h2 class = "video-link-label">Paste Video Link</h2><br></br>
                    </div>
                    <input class="form-check-input creator-link" type="text" placeholder = "Enter YouTube URL"/>
                  </div>
                </div>
              </div>
              <div class = "row row-header">
                <div id = "creator-workspace" class = "col-10 offset-1">
                  <div class = "paste-text">
                    <p>Drag and drop a video file into this area</p>
                  </div>
                </div>
              </div>
              <div id = "submitFile" class = "submitFile jumbotron">
                <h2 id = "fileSelect">
                  <u>Select File from Computer</u>
                </h2>
                <form>
                  <label id = "selectFile" for="myfile">Select a file:</label>
                  <input type="file" id="myfile" name="myfile"></input>
                  <input type="submit" value="Submit"></input>
                </form>
              </div>
          </div>
      </header>
      <Footer/>
      </div>
    )
  }
}

export default Creator;
