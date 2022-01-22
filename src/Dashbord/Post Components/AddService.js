import React , { useEffect, useState }from 'react'
import { Modal,Button ,Form} from 'react-bootstrap';
import '../dash.css'
 import { useDispatch} from 'react-redux'
 import {addService} from '../redux/Services/ServicesAction'
const AddService = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const dispatch = useDispatch()
    const [input, setInput] = useState({
        icon:'',title:'',description:'' 
      });
    
    
      const service = () => {
        console.log(input)
        dispatch(
            addService(input.icon, input.title, input.description)
        );
        console.log("inpuuuuuuuuuuuut", input);
      };
    
    return (
        <div>
        
      <svg    id="modal" onClick={handleShow} xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-plus-square-fill" viewBox="0 0 16 16">
  <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm6.5 4.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3a.5.5 0 0 1 1 0z"/>
</svg>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Service</Modal.Title>
        </Modal.Header>
        <Form><Modal.Body>
  <Form.Group className="mb-3" >
    <Form.Label>Icon Class Name</Form.Label>
    <Form.Control type="text" placeholder="Enter Class Name" onChange={(e)=> setInput({...input,icon:e.target.value})} />
  
  </Form.Group>

  <Form.Group className="mb-3"  >
    <Form.Label>Titre</Form.Label>
    <Form.Control type="text" placeholder="Entrer le Titre" onChange={(e)=> setInput({...input,title:e.target.value})}  />
  </Form.Group>
  <Form.Group className="mb-3"  >
    <Form.Label>Description</Form.Label>
    <Form.Control as="textarea" rows={3} onChange={(e)=> setInput({...input,description:e.target.value})} />
  </Form.Group>
 
</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" type="submit"   onClick={service}>
            Save  
          </Button>
        </Modal.Footer></Form>
      </Modal>
        </div>
    )
}

export default AddService
