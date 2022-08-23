
import React from 'react'
import {Form, Button} from 'semantic-ui-react'

function Question(){
    return (

        <Form className="SelectedForm">
        <div className="formField">
        <h4 style={{marginRight: "10px"}}>Title</h4>
        <input placeholder='Enter a-1 paragraph abstract' />
        </div>
      <Form.Field style={{marginTop: "10px"}}>
        <h4 style={{marginBottom: "10px"}}>Describe your issue</h4>
        <textArea placeholder='' />
      </Form.Field>
      <div className="formField">
          <h4 style={{marginBottom: "10px", marginRight: "10px", marginTop: "10px"}}>Tags</h4>
          <input placeholder='Please add up to 3 tags to describe what your article is about.' />
        </div>
      <Button style={{marginTop: "20px", float:"right", width: "170px"}}>Post</Button>
    </Form>


    )
   
}
export default Question