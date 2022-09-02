import React from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
import Codes from "../../Helpers/Codes"
import { useEffect, useState } from 'react'
import Form from "react-bootstrap/Form"
import axios from "axios";
const StaffForm = (props) => {
    const [supplier, setSupplier] = useState({})
    const [loading, setLoading] = useState(true)
    const [formErrors, setFormErrors] = useState({})
  const navigate=useNavigate();
    const {id} = useParams();
    useEffect(() => {
      setLoading(true)
      axios.request({
        method: 'get',
        headers: {
          "Content-Type": "multipart/form-data",
          "Authorization": `Bearer ${JSON.parse(localStorage.getItem("authTokens")).access}`
        },
        url: `https://dev.api.superlink.awuraplc.org/staff/supplier/${id}/`
      }).then(res => {
        console.log(res.data)
        setSupplier(res.data)
      })
    }, [])
      const handleSubmit = (event) => {
      event.preventDefault();
      const data = {   
        "profile_picture": event.target.profile_picture.files[0],
        "birthdate": event.target.birthdate.value,
        "identification_card": event.target.identification_card.files[0]
    }
      axios.request({
        method: 'patch',
        headers: {
          "Content-Type": "multipart/form-data",
          "Authorization": `Bearer ${JSON.parse(localStorage.getItem("authTokens")).access}`
        },
        url: `https://dev.api.superlink.awuraplc.org/staff/supplier/${id}/`,
        data
      }).then(res => {
        console.log(res);
        navigate(-1)
      }).catch(error => {
        if (error.response) {
          setFormErrors(error.response.data);
        }
      })
    }
    return (
        <section>
            <div class="Employewrapper">
                <div class="title">
                supplier registration
                </div>
                <form class="form" onSubmit={handleSubmit} encType='multipart/form-data'>
                    <Form.Group class="inputfield">
                        <Form.Label for="file">Profile Picture</Form.Label>
                        <div style={{ width: "100%" }}>
                            <Form.Control isInvalid={formErrors ? formErrors.profile_picture : null} defaultValue={supplier ? supplier.profile_picture : null} required type="file" id="file" accept="image/*" class="input" name='profile_picture' />
                            <Form.Control.Feedback type="invalid">
                            {formErrors ? formErrors.profile_picture : null}
                            </Form.Control.Feedback>
                        </div>
                    </Form.Group>
                    <Form.Group class="inputfield">
                        <Form.Label>Birthdate</Form.Label>
                        <div style={{ width: "100%" }}>
                        <Form.Control isInvalid={formErrors ? formErrors.birthdate : null} defaultValue={supplier ? supplier.birthdate : null} required type="date" class="input" name='birthdate' />
                        <Form.Control.Feedback type="invalid">
                        {formErrors ? formErrors.birthdate : null}
                            </Form.Control.Feedback>
                        </div>
                    </Form.Group>
                    <Form.Group class="inputfield">
                        <Form.Label for="file">Id Card</Form.Label>
                        <div style={{ width: "100%" }}>
                        <Form.Control isInvalid={formErrors ? formErrors.identification_card : null} required type="file" id="file" accept="image/*" class="input" name='identification_card' />
                        <Form.Control.Feedback type="invalid">
                        {formErrors ? formErrors.identification_card : null}
                            </Form.Control.Feedback>
                        </div>
                    </Form.Group>
                    <div className="inputfield">
                        <button className="btn"> update </button>
                    </div>
                    <Link to="/supplier" className='btn'>Back to supplier</Link>
                </form>
            </div>
        </section>
    )
}
export default StaffForm;