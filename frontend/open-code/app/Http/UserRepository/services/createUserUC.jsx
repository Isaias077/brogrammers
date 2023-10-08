import React from 'react'

 async function CreateUserUC() {
  const users = await fetch("https://6521d110a4199548356d95af.mockapi.io/api/v1/users")
  return  users.json()
}

export default CreateUserUC;
