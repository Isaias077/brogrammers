import fetch from "node-fetch";

class GenerateKeywordsUc {
  async exec({ motivation, description, title, topic }) {
    let resulted;

    const raw = JSON.stringify({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "user",
          content: `Se necesita generar etiquetas generales para una base de datos basada en el siguiente
     texto. Además de palabras clave relacionadas con ${topic}, también se deben considerar aspectos éticos y legales. Proporciona tres palabras clave, lo más generalistas posible, que reflejen tanto los avances científicos como los dilemas éticos involucrados en el texto a continuacion. Cada etiqueta debe constar de una sola palabra. Aqui tienes unos datos que te ayudaran con el contexto del proyecto: Titulo: ${title} Texto: ${description} Tema: ${topic} Motivacion (el porque se hace el proyecto): ${motivation}`,
        },
      ],
    });

    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization:
        `Bearer ${process.env.OPENAI_API_KEY}`,
      },
      body: raw,
      redirect: "follow",
    };

    await fetch("https://api.openai.com/v1/chat/completions", requestOptions)
      .then((response) => response.text())
      .then((result) => {
        console.log({ result });
        resulted = result;
      })
      .catch((error) => console.log("error", error));

    console.log({ resulted });
    return resulted;
  }
}

export default GenerateKeywordsUc;
