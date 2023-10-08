export async function CheckUserExistence(idUser) {
    let statusCode = null;
    let responseServer = {
      response: "",
      status: 500,
    };
    await fetch(`https://6521d110a4199548356d95af.mockapi.io/api/v1/users/${idUser}`)
      .then((response) => {
        statusCode = response.status;
        return response.json();
      })
      .then((responseJSON) => {
        responseServer = { response: responseJSON, status: statusCode };
      });
    return responseServer;
  }