const { default: axios } = require("axios")


const whatsAppService = {}

whatsAppService.envoyerMessage = async (numero, message) => {
const key = "EAAI1MjXEMb8BO3Cdk06X4ZCZBwII3YXezRUcbNPBDojCPEzFYNIPcywwMZAacwZA9YbxVHv8AtpDz2dGtJPrZBUdXQNk8enNwZClRTO28CCv7lxUqFoetIZCVtGzKDh75FinDF3i6H4T73ShlZCm8eAQY0e0PAzofGFYYuYY680umot5aNZCXQU0BhcpZCsn7w6ZBcWUNvENW3sUQLfalY7fT0ZD"
const configuration = {
    headers:{
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${key}`
    }
}

const data = {
    messaging_product:"whatsapp",
    to:"2250101323228",
    type:"template",
    template:{
        name:"hello_world",
        language:{
            code:"en_US"
        }
    }
}

const result = await axios.post("https://graph.facebook.com/v18.0/246300531889645/messages", JSON.stringify(data), configuration)
console.log(result.data)


}

module.exports = whatsAppService