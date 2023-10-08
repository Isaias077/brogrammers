import GenerateKeywordsUc from "../generateKeywords.uc.js";

class GenerateKeywordsCtrl {
    async exec(req,res){
        const params = req.params;

        const uc = new GenerateKeywordsUc();

        const result = await uc.exec(params)

        console.log({result})

        res.send({result});

    }
}

export default GenerateKeywordsCtrl
