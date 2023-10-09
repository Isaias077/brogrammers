

"use client"

import { FileUploader } from '@aws-amplify/ui-react'; 
import '@aws-amplify/ui-react/styles.css'

    import React from 'react'
    import {Input} from "@nextui-org/react";
    import {Textarea} from "@nextui-org/react";
    import {Button} from "@nextui-org/react";
    const handleSumnbit = (e)=> {
       e.preventdefault();
       const title = e.target.title.value;
       const name = e.target.name.value;
       const topic = e.target.topic.value;
       const objective = e.target.objective.value;
       const motive = e.target.motive.value;
        console.log("se sube")
       fetch('https://6521d110a4199548356d95af.mockapi.io/api/v1/proyects', {
        method: 'POST',
        body: {title,name,topic,objective,motive}
       })
       .then(Response => console.log(Response))
    }
function page() {
      return (
        <div className="space-y-12 w-screen text-center p-5">
            <h1>Complete your Profile!</h1>
            <form onSubmit={handleSumnbit}>
            <Input
      isRequired
      type="text"
      name='name'
      label="Nombre"
      defaultValue="My project"
      className="max-w-md"
    />
     <Input
      isRequired
      type="text"
      label="Title"
      defaultValue="research of nothing"
      className="max-w-md"
      name='title'
    /> <Input
    isRequired
    type="text"
    label="topic"
    name='topic'
    defaultValue="Biology"
    className="max-w-md"
  /> <Input
  isRequired
  type="text"
  name='objective'
  label="Objective"
  defaultValue="Looking for noything"
  className="max-w-md"
/>
    <Input
      isRequired
      type="text"
      label="Motive"
      name='motive'
      defaultValue="No more nothing"
      className="max-w-md"
    />
<Textarea
      
      label="Description"
      labelPlacement="outside"
      placeholder="Enter your description"
      defaultValue="NextUI is a React UI library that provides a set of accessible, reusable, and beautiful components."
      className="max-w-md"
    />
    <FileUploader
      acceptedFileTypes={['pdf','txt',"image/*"]}
      accessLevel="public"
    />
    <Button color='primary' type='sumbit'>Sumbit</Button>
    </form>
        </div>
      )
    }
    
    export default page