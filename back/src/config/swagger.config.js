import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import swaggerJSDoc from 'swagger-jsdoc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const swaggerOptions = {
    definition: {
        openapi: '3.0.1',
        info: {
            title: 'Alquileres Ya API documentantation',
            description: "Documentantion for the backend application of Alquileres Ya"
        }
    },
    apis: [join(__dirname, '..', 'docs', '*', '*.yaml')]
};

export const specs = swaggerJSDoc(swaggerOptions);
