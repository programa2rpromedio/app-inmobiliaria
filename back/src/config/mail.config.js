import nodemailer from 'nodemailer';
import { EMAIL, EMAIL_PASSWORD } from './env.config.js';

const gmailTransport = nodemailer.createTransport({
	service: 'gmail',
	port: 587,
	auth: {
		user: EMAIL,
		pass: EMAIL_PASSWORD,
	},
});

export default gmailTransport;