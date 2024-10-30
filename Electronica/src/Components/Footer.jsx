// Importaciones necesarias 
import React from 'react';

const Footer = () => {
    return (
        <footer className="container-fluid py-4 bg-dark text-light"> {/* Fondo oscuro con texto claro */}
            <div className="container d-flex justify-content-between align-items-center">
                <p className="mb-0">
                    © 2024 Company, Inc. · <a href="#" className="text-decoration-none text-info">Privacy</a> · <a href="#" className="text-decoration-none text-info">Terms</a> {/* Derechos de autor y enlaces */}
                </p>
                <p className="mb-0">
                    <a href="#" className="text-decoration-none text-info">Back to top</a> {/* Enlace para volver al inicio */}
                </p>
            </div>
        </footer>
    );
};

// Exportación del componente
export default Footer;
