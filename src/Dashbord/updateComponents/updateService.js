 import { Modal,Button ,Form} from 'react-bootstrap';
 import {serviceUpdate} from '../redux/Services/ServicesAction'
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
const UpdateSer = ({el,_id}) => {
     const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const dispatch = useDispatch()
    const [input, setInput] = useState({
     icon:el.icon, title:el.title,description:el.description 
      });
      const handleChange=(e)=>{
        const {name,value}=e.target
        setInput({
            ...input,
            [name]:value
        })
        console.log("input",input)
    }
      const newData = () => {
        dispatch(serviceUpdate( _id,input.icon,input.title,input.description));
   
      }
     
    return (
        <div>
              <svg    id="modal-up" onClick={handleShow} xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-plus-square-fill" viewBox="0 0 16 16">
  <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm6.5 4.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3a.5.5 0 0 1 1 0z"/>
</svg>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Service</Modal.Title>
        </Modal.Header>
        <Form><Modal.Body>
  <Form.Group className="mb-3" >
    <Form.Label>Icon Class Name</Form.Label>
    <Form.Control type="text" name="icon" placeholder="Enter Icon Class Name" defaultValue={input.icon} onChange={handleChange} />
  
  </Form.Group>

  <Form.Group className="mb-3"  >
    <Form.Label>Titre</Form.Label>
    <Form.Control type="text" name="title" placeholder="Entrer le Titre" defaultValue={input.title}  onChange={handleChange}  />
  </Form.Group>
  <Form.Group className="mb-3"  >
    <Form.Label>Description</Form.Label>
    <Form.Control as="textarea" name="description" rows={3} defaultValue={input.description}  onChange={handleChange} />
  </Form.Group>
 
</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" type="submit"   onClick={newData}>
            Save  
          </Button>
        </Modal.Footer></Form>
      </Modal>
        </div>
    )
}

export default UpdateSer
