import MailService from "../services/mail.service.js";
import PropertiesService from "../services/properties.service.js"

export default class MailController{
    static async contactMail(req, res, next){
        const payload = req.body
        const { pid } = req.params
        try {
            const property = await PropertiesService.getPropertyById(pid)
            const emailSent = await MailService.sendContact(property, payload)
            res.status(200).json(emailSent);
        } catch (error) {
            next(error)
        }
    }
}

