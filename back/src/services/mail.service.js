import { EMAIL, EMAIL_PASSWORD } from "../config/env.config.js";
import gmailTransport from "../config/mail.config.js";

class MailService {
  static async sendWelcome(user) {
    const { first_name, email } = user
    try {
        await gmailTransport.sendMail({
            from: `Alquileres Ya <${EMAIL}>`,
            to: email,
            subject: 'Nueva cuenta en Alquileres Ya!',
            html: `
                <div class="main-container" style="display: flex; padding: 10%; background-color: #ebebeb40; font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif; line-height: 48px;letter-spacing: 0em; color: #484554;">
                    <div class="inner" style="box-shadow: 0px 2px 5px 0px #3b3b3b40; padding: 1rem 2rem; border-radius: 30px;" >
                        <div class="header" href="#" style="display: flex; gap: 10px; align-items: center; font-size: 1rem; text-decoration: none; color: #484554; border-bottom: 1px solid #ddd;">
                            <img src="cid:logo" alt="" style="height: 4rem;">
                            <h3 style="margin-left: 1rem">Alquileres Ya</h3>
                        </div>
                        <h1 style="font-size: 2rem; font-weight: 600; text-align: left; color: #111">¡Bienvenido, ${first_name}!</h1>
                        <h2 style="font-size: 1.5rem; font-weight: 500; line-height: 48px; letter-spacing: 0em; text-align: left;">Has creado una cuenta en Alquileres Ya, el mejor sitio para publicar y conseguir alquileres en Argentina.</h2>
                        <a href="#" class="link-anchor" style="margin: auto; cursor: pointer;">
                            <button class="link-button" style="background-color: #3354FF; color: #fff; padding: 1rem 4rem; border-radius: 9.02px; border: none; font-size: 1.2rem; cursor: pointer;">Ingresar</button>
                        </a>
                    </div>
                </div>
            `,
            attachments: [
                {
                    filename: 'logo.png',
                    path: 'assets/images/logo.png',
                    cid: 'logo'
                }
            ],
        });
    } catch (error) {
        console.error(error);
    }
  }
}

export default MailService;
