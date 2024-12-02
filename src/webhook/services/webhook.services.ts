import fetch from 'node-fetch'
import dotenv from 'dotenv'
dotenv.config()

export class WebHookServices {
    /**
     * Método para Enviar mensagens pelo Webhook
     * @param {string} message - Mensagem a ser enviada
     * @returns {object} Retorna o status da resposta do webhook
     * @throws {Error} Se a Requisição falar
     */
    async SendMenssage (message: Object) {         
        const contentBody = JSON.stringify(message)        

        try {
            const sendFetch = await fetch(`${process.env.URL_WEBHOOK_NOTIFICATION}`, {
                method: "POST",
                headers: {
                    "content-Type": "application/json"
                },
                body: contentBody
            })
            const response = await sendFetch.json()          
            return response
        } catch (error: any) {                     
            return error
        }
    }
}