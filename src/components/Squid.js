import React, { Component } from 'react';
import { Col, Row, Card } from 'react-bootstrap';
import { FaInstagram, FaCommentAlt, FaHeart, FaRegCalendarAlt } from "react-icons/fa";
import './Squid.css';


class Squid extends Component{

  state = {
    files:[],
    index:[],
  }

  componentDidMount() {
    var url="https://us-central1-squid-apis.cloudfunctions.net/test-front-basic";
    fetch(url)
      .then(response => {
        return response.json();
      }).then(d => {
          const files = d.map((cloudData)=>{
            return(
              <div>{cloudData}</div>
            )
        })
            
        const index = files.findIndex(files => files.props)
        this.setState({files: files , index: index });
    })
  }

  render(){
    const {
      files,
    } = this.state;

    return(
      <>
        <Row xs={2} md={4} lg={6} >
          <Col>
            {files.map((files, index) => (
              <div className ="container">
                <div className ="content">
                  <a 
                    href={files.props.children.link} 
                    key={index} 
                    target="_blank"
                    className="container"
                  >
                    <div className ="content-overlay"></div>
                    <img 
                      src={files.props.children.imagens.resolucaoMedia.url} 
                      key={index}
                      className = "content-image"
                      onMouseEnter={this.mouseEnter}
                      onMouseLeave={this.mouseLeave}
                    />
                    <div className="content-details fadeIn-bottom">
                      <p><FaInstagram/></p>
                      <p>{ `@${files.props.children.usuario.username}`}</p>
                      <p><FaHeart/> { `${files.props.children.upvotes}`}</p>
                      <p><FaCommentAlt/> { `${files.props.children.comentarios}`}</p>
                      <p><FaRegCalendarAlt/> { `${files.props.children.criadoEm}`}</p>
                    </div>
                  </a>
                </div>
              </div>
            ))}
          </Col>
        </Row>
      </>
    )

  }
  
}
  
  
  
export default Squid;