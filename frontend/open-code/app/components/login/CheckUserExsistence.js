export async function CheckUserExistence(idUser) {
    let statusCode = null;
    let responseServer = {
      response: "",
      status: 500,
    };
    await fetch(`${process.env.DB_HOST}/users/${idUser}`)
      .then((response) => {
        statusCode = response.status;
        return response.json();
      })
      .then((responseJSON) => {
        responseServer = { response: responseJSON, status: statusCode };
      });
    return responseServer;
  }