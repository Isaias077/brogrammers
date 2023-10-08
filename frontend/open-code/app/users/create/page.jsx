

"use client"

import { FileUploader } from '@aws-amplify/ui-react'; 
import '@aws-amplify/ui-react/styles.css'

    import React from 'react'
    import {Input} from "@nextui-org/react";
    import {Textarea} from "@nextui-org/react";
    import {Button} from "@nextui-org/react";
function page() {
      return (
        <div className="space-y-12 w-screen text-center p-5">
            <h1>Complete your Profile!</h1>
            <Input
      isRequired
      type="email"
      label="Email"
      defaultValue="junior@nextui.org"
      className="max-w-md"
    />
     <Input
      isRequired
      type="text"
      label="label1"
      defaultValue="junior@nextui.org"
      className="max-w-md"
    /> <Input
    isRequired
    type="text"
    label="label1"
    defaultValue="junior@nextui.org"
    className="max-w-md"
  /> <Input
  isRequired
  type="text"
  label="label1"
  defaultValue="junior@nextui.org"
  className="max-w-md"
/>
    <Input
      isRequired
      type="text"
      label="label1"
      defaultValue="junior@nextui.org"
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
    <Button color='primary'>Sumbit</Button>
        </div>
      )
    }
    
    export default page