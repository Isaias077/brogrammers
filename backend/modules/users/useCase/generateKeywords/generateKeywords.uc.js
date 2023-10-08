import fetch from "node-fetch";

class GenerateKeywordsUc {
    async exec({motivation, description, title, topic}){

            let resulted;

            const raw = JSON.stringify({
                "model": "gpt-3.5-turbo",
                "messages": [
                    {
                        "role": "user",
                        "content": "Se necesita generar etiquetas generales para una base de datos basada en el siguiente texto sobre avances científicos en medicina regenerativa y clonación terapéutica. Además de palabras clave relacionadas con la ciencia y la medicina, también se deben considerar aspectos éticos y legales. Proporciona tres palabras clave, lo más generalistas posible, que reflejen tanto los avances científicos como los dilemas éticos involucrados en el texto a continuacion. Cada etiqueta debe constar de una sola palabra:"
                    }
                ]
            });

            const requestOptions = {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Bearer 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"
                },
                body: raw,
                redirect: 'follow'
            };

            await fetch("http://api.openai.com/v1/chat/completions", requestOptions)
                .then(response => response.text())
                .then(result => {
                    console.log({result})
                    resulted = result
                })
                .catch(error => console.log('error', error));

            console.log({resulted})
            return resulted;
    }
}

export default GenerateKeywordsUc;
