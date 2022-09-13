import React, { Component } from "react";
import ContactDataService from "../api/contact.service";

import { Container, Row, Col } from 'react-grid-system';
export default class AddContact extends Component {
  constructor(props) {
    super(props);
    this.onChangeNom = this.onChangeNom.bind(this);
    this.onChangeAdr = this.onChangeAdr.bind(this);
    this.onChangeVille = this.onChangeVille.bind(this);
    this.onChangePays = this.onChangePays.bind(this);
    this.onChangetel = this.onChangetel.bind(this);
    this.onChangedate = this.onChangedate.bind(this);
    this.saveContact = this.saveContact.bind(this);
    this.newContact = this.newContact.bind(this);
    this.state = {
      id: null,
      nom: "",
      adress: "",
      ville: "",
      pays: "",
      telephone: "",
      debut_contrat: new Date().toDateString().slice(0,10),
    };
  }

  onChangeNom(e) {
    this.setState({
      nom: e.target.value
    });
  }

  onChangeAdr(e) {
    this.setState({
      adress: e.target.value
    });
  }

  onChangeVille(e) {
    this.setState({
      ville: e.target.value
    });
  }

  onChangePays(e) {
    console.log(e.target.value)
    this.setState({
      pays: e.target.value
    });
  }

  onChangetel(e) {
    this.setState({
      telephone: e.target.value
    });
  }

  onChangedate(e) {
    this.setState({
      debut_contrat: e.target.value
    });
  }

  saveContact() {
    var data = {
      nom: this.state.nom,
      adress: this.state.adress,
      ville: this.state.ville,
      pays: this.state.pays,
      telephone: this.state.telephone,
      debut_contrat: this.state.debut_contrat
    };

    ContactDataService.create(data)
      .then(response => {
        this.setState({
          id: response.data.id,
          nom: response.data.nom,
          adress: response.data.adress,
          ville: response.data.ville,
          pays: response.data.pays,
          telephone: response.data.telephone,
          debut_contrat: response.data.debut_contrat
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  newContact() {
    this.setState({
      id: null,
      nom: "",
      adress: "",
      ville: "",
      pays: "",
      telephone: "",
      debut_contrat: "",
    });
  }
annuller = () => { 
  document.getElementById("create-course-form").reset();
}

  render() {
    return (
   
      <div className="submit-form"align="left">
           <br/>
           <h4> Ajouter Contact </h4>
           <br/> <br/>
        {this.state.submitted ? (
          <div>
            <h4>You submitted successfully !</h4>
          </div>
        ) : (
          <form align="left"  id="create-course-form">
            <Container style={{ width: 350 }}>
  <Row>
    <Col sm={2}>          
    <label htmlFor="nom" >Nom</label> 

    </Col>
    <Col sm={10}>
    <input
                type="text"
                className="form-control"
                id="nom"
                required
                value={this.state.nom}
                onChange={this.onChangeNom}
                name="nom"
              />    </Col>
  </Row>
  <br/>
  <Row>
    <Col sm={2}>          
    <label htmlFor="adress">Address   </label>

    </Col>
    <Col sm={10}>
              <input type='text' className="form-control"
                id="adresse"
                required
                value={this.state.adress}
                onChange={this.onChangeAdr}
                name="nom" />   </Col>
  </Row> <br/> <Row>
    <Col sm={2}>          
    <label htmlFor="ville">Ville</label>

    </Col>
    <Col sm={10}>
    <input type='text' className="form-control"
                id="ville"
                required
                value={this.state.ville}
                onChange={this.onChangeVille}
                name="ville" />  </Col>
  </Row><br/> <Row>
    <Col sm={2}>          

              <label htmlFor="pays" >Pays</label>
    </Col>
    <Col sm={4}>
    <select onChange={this.onChangePays} value={this.state.pays}>
                <option value="" disabled>Pays</option>
                <option value="Tunisia">Tunisia</option>
                <option value="Algerie">Algerie</option>
                <option value="Libya">Libya</option>
                <option value="Canada">Canada</option>
                <option value="USA">USA</option>
                <option value="Italie">Italie</option>

              </select> </Col>
              <Col sm={2}>          

<label htmlFor="pays" >Poste</label>
</Col>
<Col sm={4}>
<input type='text' className="form-control"
                id="zip"

                name="zip" /> </Col>


  </Row>
  <br/> <Row>
    <Col sm={2}>          
    <label htmlFor="telephone">Telephone</label>

    </Col>
    <Col sm={10}>
    <input type='text' className='form-control' id="telephone"
                required
                value={this.state.telephone}
                onChange={this.onChangetel}
                name="nom" />  </Col>
  </Row><br/><Row>
    <Col sm={2}>          
    <label htmlFor="debut_contrat">Debut contrat</label>

    </Col>
    <Col sm={10}>
    <input type='date' className='form-control'
                id="debut_contrat"
                required
                value={this.state.debut_contrat}
                onChange={this.onChangedate}
                name="debut_contrat" />  </Col>
  </Row><br/><Row>
    <Col sm={6}>          
    <button onClick={this.annuller} className="btn btn-success">
              Anuller
            </button>
          
    </Col>
    <Col sm={6}>
    <button onClick={this.saveContact} className="btn btn-success">
              Confirmer
            </button>
</Col>
  </Row>
</Container>     
       
          </form>
        )}
      </div>
    );
  }
}
