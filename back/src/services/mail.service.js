import { EMAIL, FRONT_URL } from "../config/env.config.js";
import gmailTransport from "../config/mail.config.js";

class MailService {
    static async sendWelcome({ first_name, email }) {
        try {
            await gmailTransport.sendMail({
                from: `Alquileres Ya <${EMAIL}>`,
                to: email,
                subject: 'Nueva cuenta en Alquileres Ya!',
                html: `
                <html lang="en">
                    <head>
                        <meta charset="UTF-8">
                        <meta name="viewport" content="width=device-width, initial-scale=1.0">
                        <title>Document</title>
                        <style>
                            .main-container{
                                display: flex;
                                padding: 10%;
                                background-color: #ebebeb40;
                                font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
                                line-height: 48px;
                                letter-spacing: 0em;
                                color: #484554;
                                position: relative;
                            }

                            .header{
                                display: flex;
                                gap: 10px;
                                align-items: center;
                                font-size: 1rem;
                                text-decoration: none;
                                color: #484554;
                                border-bottom: 1px solid #ddd;
                            }

                            .header img {
                                height: 4rem;
                            }

                            h1{
                                font-size: 1.8rem;
                                font-weight: 600;
                                text-align: left;
                                color: #373443;
                            }

                            h2{
                                font-size: 1.3rem;
                                font-weight: 500;
                                line-height: 48px;
                                letter-spacing: 0em;
                                text-align: left;
                            }

                            .inner{
                                padding: 1rem 2rem;
                                border-radius: 30px;
                                border: 1px outset #ddd;
                                position: relative;
                                z-index: 1;
                                background-color: #fff;
                            }

                            .link-anchor{
                                margin: auto;
                                cursor: pointer;
                            }

                            .link-button{
                                background-color: #3354FF;
                                color: #fff;
                                padding: 1rem 4rem;
                                border-radius: 9.02px; 
                                border: none;
                                font-size: 1.2rem;
                                cursor: pointer;
                            }

                            .link-button:hover{
                                background-color: #3d5cfa;
                            }
                        </style>
                    </head>
                    <body>
                        <div class="main-container">
                            <div class="inner" >
                                <div class="header" href="#">
                                    <img src="cid:logo" alt="">
                                    <h3>Alquileres Ya</h3>
                                </div>
                                <h1>¡Bienvenido, ${first_name}!</h1>
                                <h2>Has creado una cuenta en Alquileres Ya, el mejor sitio para publicar y conseguir alquileres en Argentina.</h2>
                                <a href="#" class="link-anchor">
                                    <button class="link-button">Ingresar</button>
                                </a>
                                
                            </div>
                        </div>
                    </body>
                </html>
            `,
                attachments: [
                    {
                        filename: 'logo.png',
                        path: '/back/assets/images/logo.png',
                        cid: 'logo'
                    }
                ],
            });
        } catch (error) {
            console.error(error);
        }
    }

    static async sendContact(property, payload) {
        const { title, user_id: user, price, property_pictures, _id } = property
        const { username, email, phone, message } = payload
        await gmailTransport.sendMail({
            from: `Alquileres Ya <${EMAIL}>`,
            to: user.email,
            subject: `Has recibido un mensaje de ${username}`,
            html: `<html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Document</title>
                <style>
                    .main-container{
                        display: flex;
                        padding: 10%;
                        background-color: #ebebeb40;
                        font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
                        letter-spacing: 0em;
                        color: #484554;
                        position: relative;
                    }

                    .inner{
                        padding: 1rem 4rem;
                        border-radius: 30px;
                        border: 1px outset #ddd;
                        position: relative;
                        z-index: 1;
                        background-color: #fff;
                        margin: auto;
                    }

                    .header{
                        display: flex;
                        align-items: center;
                        font-size: 1rem;
                        text-decoration: none;
                        color: #484554;
                        border-bottom: 1px solid #ddd;
                    }

                    .header img {
                        height: 4rem;
                        margin-right: 0.75rem;
                    }

                    h1{
                        font-size: 1.8rem;
                        font-weight: 600;
                        text-align: left;
                        margin: 1rem 0 0 0;
                    }

                    h2{
                        font-size: 1.4rem;
                        font-weight: 500;
                        letter-spacing: 0em;
                        text-align: left;
                        margin: 0;
                    }

                    .property-info{
                        display: flex;
                        margin-top: 1rem;
                    }

                    .property-img-container{
                        width: 15rem;
                        height: 10rem;
                        border-radius: 11px;
                        overflow: hidden;
                    }

                    .property-img{
                        width: 100%;
                        height: 100%;
                        object-fit: cover;
                    }

                    .property-data{
                        margin-left: 1rem;
                    }

                    h3{
                        font-size: 1.6rem;
                        font-weight: bold;
                        margin: auto 0;
                    }

                    h4{
                        font-weight: lighter;
                        font-size: 1.2rem;
                        margin: 0.5rem 0 0 ;
                    }

                    .property-rooms{
                        display: flex;
                        align-items: center;
                        gap: 0.5rem;
                        font-size: 0.8rem;
                    }

                    .property-rooms img{
                        height: 13px;
                        margin: auto 0;
                        margin-right: 0.5rem;
                    }

                    .property-rooms p{
                        margin: 0;
                    }            

                    .value{
                        font-weight: 600;
                        margin: 0.5rem 0 0;
                        font-size: 1.1rem;
                    }

                    .contact-detail{
                        font-size: 1rem;
                    }

                    b{
                        font-size: 1.2rem;
                    }

                    .btn-container{
                        display: flex;
                        margin-top: 2rem;
                    }

                    .link-anchor{
                        cursor: pointer;
                        text-decoration: none;
                    }

                    .contact-btn{
                        background-color: #3354FF;
                        color: #fff;
                        padding: 0.8rem 2rem;
                        border-radius: 9px; 
                        border: none;
                        font-size: 0.9rem;
                        font-weight: 600;
                        cursor: pointer;
                        margin: auto;
                    }

                    .see-property-btn{
                        background-color: #fff;
                        color: #3354FF;
                        padding: 0.8rem 2rem;
                        border-radius: 9px; 
                        border: 1px solid #3354FF;
                        font-weight: 600;
                        font-size: 0.9rem;
                        cursor: pointer;
                        margin-left: 1.5rem;
                    }

                    .contact-btn:hover{
                        background-color: #3d5cfa;
                    }

                    .see-property-btn:hover{
                        background-color: #dbe0ee;
                    }


                    img.house{
                        position: absolute;
                        z-index: -1;
                        bottom: -3%;
                        right: 0%;
                        height: 57%;
                    }

                    img.tree{
                        position: absolute;
                        z-index: -1;
                        bottom: 0;
                        left: 0;
                        height: 50%;
                        filter: brightness(0.3);
                    }
                </style>
            </head>
            <body>
                <div class="main-container">
                    <div class="inner" >
                        <div class="header" href="#">
                            <img src="cid:logo" alt="">
                            <h3>Alquileres Ya</h3>
                        </div>
                        <h1>¡Hola, ${user.first_name}!</h1>
                        <h2>Has recibido una nueva consulta sobre tu propiedad.</h2>
                        <div class="property-info">
                            ${property_pictures.length ?
                    `<div class="property-img-container">
                                    <img src="cid:propertyPicture" alt="" class="property-img">
                                </div>`
                    : '      '
                }
                            <div class="property-data">
                                <h3>${title}</h3>
                                <h4>departamento en alquiler</h4>
                                <div class="property-rooms">                        
                                    <img src="cid:rooms" alt="">
                                    <p>2 ambientes</p>
                                </div>
                                <p class="value">$${price.value} ${price.currency}/mes</p>
                            </div>
                        </div>
                        <p class="contact-detail"><b>Nombre: </b>${username}</p>
                        <p class="contact-detail"><b>Correo electrónico: </b>${email}</p>
                        <p class="contact-detail"><b>Teléfono: </b>${phone}</p>
                        <p class="contact-detail"><b>Consulta: </b>${message}</p>
                        <div class="btn-container">
                            <a href="mailto:${email}" class="link-anchor">
                                <button class="link-button contact-btn">Contactar vía mail</button>
                            </a>
                            <a href="${FRONT_URL}/propiedad/${_id}" class="link-anchor">
                                <button class="link-button see-property-btn">Ver propiedad</button>
                            </a>
                        </div>
                        
                    </div>
                </div>
            </body>
            </html>`,
            attachments: [
                {
                    filename: 'logo.png',
                    path: '/back/assets/images/logo.png',
                    cid: 'logo'
                },
                {
                    filename: 'rooms.png',
                    path: '/back/assets/images/rooms.png',
                    cid: 'rooms'
                },
                {
                    filename: property_pictures[0]?.public_id,
                    path: property_pictures[0]?.url,
                    cid: 'propertyPicture'
                }
            ],
        })
    }

    static async newProperty(property, user) {
        const { title, price, property_pictures, _id } = property
        await gmailTransport.sendMail({
            from: `Alquileres Ya <${EMAIL}>`,
            to: user.email,
            subject: `Has creado una nueva propiedad`,
            html: `<html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Document</title>
                <style>
                    .main-container{
                        display: flex;
                        padding: 10%;
                        background-color: #ebebeb40;
                        font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
                        letter-spacing: 0em;
                        color: #484554;
                        position: relative;
                    }

                    .inner{
                        padding: 1rem 4rem;
                        border-radius: 30px;
                        border: 1px outset #ddd;
                        position: relative;
                        z-index: 1;
                        background-color: #fff;
                        margin: auto;
                    }

                    .header{
                        display: flex;
                        align-items: center;
                        font-size: 1rem;
                        text-decoration: none;
                        color: #484554;
                        border-bottom: 1px solid #ddd;
                    }

                    .header img {
                        height: 4rem;
                        margin-right: 0.75rem;
                    }

                    h1{
                        font-size: 1.8rem;
                        font-weight: 600;
                        text-align: left;
                        margin: 1rem 0 0 0;
                    }

                    h2{
                        font-size: 1.4rem;
                        font-weight: 500;
                        letter-spacing: 0em;
                        text-align: left;
                        margin: 0;
                    }

                    .property-info{
                        display: flex;
                        margin-top: 1rem;
                    }

                    .property-img-container{
                        width: 15rem;
                        height: 10rem;
                        border-radius: 11px;
                        overflow: hidden;
                    }

                    .property-img{
                        width: 100%;
                        height: 100%;
                        object-fit: cover;
                    }

                    .property-data{
                        margin-left: 1rem;
                    }

                    h3{
                        font-size: 1.6rem;
                        font-weight: bold;
                        margin: auto 0;
                    }

                    h4{
                        font-weight: lighter;
                        font-size: 1.2rem;
                        margin: 0.5rem 0 0 ;
                    }

                    .property-rooms{
                        display: flex;
                        align-items: center;
                        gap: 0.5rem;
                        font-size: 0.8rem;
                    }

                    .property-rooms img{
                        height: 13px;
                        margin: auto 0;
                        margin-right: 0.5rem;
                    }

                    .property-rooms p{
                        margin: 0;
                    }            

                    .value{
                        font-weight: 600;
                        margin: 0.5rem 0 0;
                        font-size: 1.1rem;
                    }

                    .contact-detail{
                        font-size: 1rem;
                    }

                    .btn-container{
                        display: flex;
                        margin-top: 2rem;
                    }

                    .link-anchor{
                        cursor: pointer;
                        text-decoration: none;
                    }

                    .contact-btn{
                        background-color: #3354FF;
                        color: #fff;
                        padding: 0.8rem 2rem;
                        border-radius: 9px; 
                        border: none;
                        font-size: 0.9rem;
                        font-weight: 600;
                        cursor: pointer;
                        margin: auto;
                    }

                    .see-property-btn{
                        background-color: #fff;
                        color: #3354FF;
                        padding: 0.8rem 2rem;
                        border-radius: 9px; 
                        border: 1px solid #3354FF;
                        font-weight: 600;
                        font-size: 0.9rem;
                        cursor: pointer;
                        margin-left: 1.5rem;
                    }

                    .contact-btn:hover{
                        background-color: #3d5cfa;
                    }

                    .see-property-btn:hover{
                        background-color: #dbe0ee;
                    }


                    img.house{
                        position: absolute;
                        z-index: -1;
                        bottom: -3%;
                        right: 0%;
                        height: 57%;
                    }

                    img.tree{
                        position: absolute;
                        z-index: -1;
                        bottom: 0;
                        left: 0;
                        height: 50%;
                        filter: brightness(0.3);
                    }
                </style>
            </head>
            <body>
                <div class="main-container">
                    <div class="inner" >
                        <div class="header" href="#">
                            <img src="cid:logo" alt="">
                            <h3>Alquileres Ya</h3>
                        </div>
                        <h1>¡Hola, ${user.first_name}!</h1>
                        <h2>Has agregado una nueva propiedad a tus ofertas de alquiler.</h2>
                        <div class="property-info">
                            ${property_pictures.length ?
                    `<div class="property-img-container">
                                    <img src="cid:propertyPicture" alt="" class="property-img">
                                </div>`
                    : ''
                }
                            <div class="property-data">
                                <h3>${title}</h3>
                                <h4>departamento en alquiler</h4>
                                <div class="property-rooms">                        
                                    <img src="cid:rooms" alt="">
                                    <p>2 ambientes</p>
                                </div>
                                <p class="value">$${price.value} ${price.currency}/mes</p>
                            </div>
                        </div>
                        <p class="contact-detail">¡Mantente alerta a las novedades!</p>
                        <div class="btn-container">
                            <a href="${FRONT_URL}/propiedad/${_id}" class="link-anchor">
                                <button class="link-button see-property-btn">Ver propiedad</button>
                            </a>
                        </div>
                        
                    </div>
                </div>
            </body>
            </html>`,
            attachments: [
                {
                    filename: 'logo.png',
                    path: '/back/assets/images/logo.png',
                    cid: 'logo'
                },
                {
                    filename: 'rooms.png',
                    path: '/back/assets/images/rooms.png',
                    cid: 'rooms'
                },
                {
                    filename: property_pictures[0]?.public_id,
                    path: property_pictures[0]?.url,
                    cid: 'propertyPicture'
                }
            ],
        })
    }
}

export default MailService;
