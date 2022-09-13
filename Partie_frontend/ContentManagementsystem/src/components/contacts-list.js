import React, { Component } from "react";
import TutorialDataService from "../api/contact.service";
import { Link } from "react-router-dom";
import AddContact from "./ajouter-contact";


export default class ContactsList extends Component {
  constructor(props) {
    super(props);
    this.onChangeSearchTitle = this.onChangeSearchTitle.bind(this);
    this.retrieveContrats = this.retrieveContrats.bind(this);
    this.refreshList = this.refreshList.bind(this);
    this.setActiveTutorial = this.setActiveTutorial.bind(this);

    this.state = {
      contats: [],
      currentContrat: null,
      currentIndex: -1,
      searchTitle: ""
    };
  }

  componentDidMount() {
    this.retrieveContrats();
  }

  onChangeSearchTitle(e) {
    const searchTitle = e.target.value;

    this.setState({
      searchTitle: searchTitle
    });
  }

  retrieveContrats() {
    TutorialDataService.getAll()
      .then(response => {
        this.setState({
          contats: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  refreshList() {
    this.retrieveContrats();
    this.setState({
      currentContrat: null,
      currentIndex: -1
    });
  }

  setActiveTutorial(tutorial, index) {
    this.setState({
      currentContrat: tutorial,
      currentIndex: index
    });
  }



  render() {
    const { contats, currentContrat, currentIndex } = this.state;
 
    return (
      <div className="list row">  

         <AddContact/>

        <div className="col-md-6">
         <br/>  
         <div className="col-md-8">
          <h4> Liste Des Contacts </h4>
          
          <ul className="list-group">
            {contats &&
              contats.map((tutorial, index) => (
                <li
                  className={
                    "list-group-item " +
                    (index === currentIndex ? "active" : "")
                  }
            
                >
                            <Link
                to={"/contacts/" + tutorial.id }
                className="btn "
              >
                  {tutorial.nom}
              </Link>
                
                  
                </li>
              ))}
          </ul>

        </div>
        </div>
      </div>
    );
  }
}
