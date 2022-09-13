import React, { Component } from "react";
import ContactDataService from "../api/contact.service";
import { Container, Row, Col } from 'react-grid-system';

export default class Contact extends Component {
  constructor(props) {
    super(props);
    this.onChangeNom = this.onChangeNom.bind(this);
    this.onChangeAdresse = this.onChangeAdresse.bind(this);
    this.onChangeVille = this.onChangeVille.bind(this);
    this.onChangePays = this.onChangePays.bind(this);
    this.onChangetel = this.onChangetel.bind(this);
    this.onChangedate = this.onChangedate.bind(this);
    this.getContact = this.getContact.bind(this);
    this.updateContact = this.updateContact.bind(this);
    this.deleteContact = this.deleteContact.bind(this);
    

    this.state = {
      currentContact: {
        id: null,
        nom: "",
        adress: "",
        ville: "",
        pays: "",
        telephone: "",
        debut_contrat: "",
      },
      message: ""
    };
  }

  componentDidMount() {
    this.getContact(this.props.match.params.id);
  }

  onChangeNom(e) {
    const nom = e.target.value;

    this.setState(function (prevState) {
      return {
        currentContact: {
          ...prevState.currentContact,
          nom: nom
        }
      };
    });
  }

  onChangeAdresse(e) {
    const adress = e.target.value;

    this.setState(prevState => ({
      currentContact: {
        ...prevState.currentContact,
        adress: adress
      }
    }));
  }
  onChangeVille(e) {
    const ville = e.target.value;

    this.setState(prevState => ({
      currentContact: {
        ...prevState.currentContact,
        ville: ville
      }
    }));
  }
  onChangePays(e) {
    const pays = e.target.value;

    this.setState(prevState => ({
      currentContact: {
        ...prevState.currentContact,
        pays: pays
      }
    }));
  }
  onChangetel(e) {
    const telephone = e.target.value;

    this.setState(prevState => ({
      currentContact: {
        ...prevState.currentContact,
        telephone: telephone
      }
    }));
  }
  onChangedate(e) {
    const debut_contat = e.target.value;

    this.setState(prevState => ({
      currentContact: {
        ...prevState.currentContact,
        debut_contat: debut_contat
      }
    }));
  }

  getContact(id) {
    ContactDataService.get(id)
      .then(response => {
        this.setState({
          currentContact: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }


  updateContact() {
    ContactDataService.update(
      this.state.currentContact.id,
      this.state.currentContact
    )
      .then(response => {
        console.log(response.data);
        this.setState({
          message: "The tutorial was updated successfully!"
        });
      })
      .catch(e => {
        console.log(e);
      });
  }

  deleteContact() {
    ContactDataService.delete(this.state.currentContact.id)
      .then(response => {
        console.log(response.data);
        this.props.history.push('/contacts')
      })
      .catch(e => {
        console.log(e);
      });
  }

  render() {
    const { currentContact } = this.state;

    return (
      <div>
                    <h4>Contact</h4>

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
                  value={currentContact.nom}
                  onChange={this.onChangeTitle}
                />    </Col>
  </Row>
  <br/>
  <Row>
    <Col sm={2}>          
    <label htmlFor="adress">Address   </label>

    </Col>
    <Col sm={10}>
    <input
                  type="text"
                  className="form-control"
                  id="adress"
                  value={currentContact.adress}
                  onChange={this.onChangeAdresse}
                />  </Col>
  </Row> <br/> <Row>
    <Col sm={2}>          
    <label htmlFor="ville">Ville</label>

    </Col>
    <Col sm={10}>
    <input
                  type="text"
                  className="form-control"
                  id="ville"
                  value={currentContact.pays}
                  onChange={this.onChangeVille}
                />
     </Col>
  </Row><br/> <Row>
    <Col sm={2}>          

              <label htmlFor="pays" >Pays</label>
    </Col>
    <Col sm={4}>
    <select onChange={this.onChangePays} value={currentContact.pays}>
                <option value="" disabled>Pays</option>
                <option value="Tunisia">Tunisia</option>
                <option value="Algerie">Algerie</option>
                <option value="Canada">Canada</option>
                <option value="USA">USA</option>
                <option value="Italie">Italie</option>

              </select>
                </Col>
            


  </Row>
  <br/> <Row>
    <Col sm={2}>          
    <label htmlFor="telephone">Telephone</label>

    </Col>
    <Col sm={10}>
    <input
                  type="text"
                  className="form-control"
                  id="telephone"
                  value={currentContact.telephone}
                  onChange={this.onChangetel}
                />   </Col>
  </Row><br/><Row>
    <Col sm={2}>          
    <label htmlFor="debut_contrat">Debut contrat</label>

    </Col>
    <Col sm={10}>
    <input type='date' className='form-control'
                id="debut_contrat"
                value={currentContact.debut_contrat}
                onChange={this.onChangedate}
                name="debut_contrat" />
   </Col>
  </Row><br/><Row>
    <Col sm={6}>          
    <button  onClick={this.deleteContact}className="btn btn-danger">
              Delete
            </button>
          
    </Col>
    <Col sm={6}>
    <button onClick={this.updateContact} className="btn btn-success">
              update
            </button>
</Col>
  </Row>
</Container>     
       
          </form>
          <p>{this.state.message}</p>


       
      </div>
    );
  }
}
