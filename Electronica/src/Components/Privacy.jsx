import React from 'react';
import '../Privacy.css';

const Privacy = () => {
  return (
    <div className="privacy-container">
      <h1 className="privacy-title">Data Protection Policy</h1>
      
      <section className="privacy-section">
        <p><strong>Controller:</strong> Banco Santander, S.A., with CIF: A-39000013</p>
        <p>Registered Office: Paseo de Pereda, 9-12, Santander</p>
        <p>This website is for informational purposes only, and no personal data are collected. If personal data are requested on any microsite, the data subject will be informed in compliance with applicable regulations.</p>
      </section>

      <section className="privacy-section">
        <h2>Basic Information on Data Protection</h2>
        <p><strong>Data Controller:</strong> Banco Santander, S.A.</p>
        <p><strong>Postal address:</strong> Avda. de Cantabria s/n, 28660 Boadilla del Monte</p>
        <p><strong>Data Protection Officer's Contact:</strong> privacidad@gruposantander.es</p>
        <p><strong>Purposes and Legal Basis:</strong> Managing requested services or legal compliance.</p>
        <p><strong>Recipients:</strong> No data disclosed to third parties.</p>
        <p><strong>Rights:</strong> Rights to object, access, portability, rectification, restriction, and erasure.</p>
      </section>

      <section className="privacy-section">
        <h2>Further Information on Data Protection</h2>
        <p>
          Banco Santander, S.A. (the "Bank") complies with GDPR (Regulation EU 2016/679), safeguarding personal information provided by data subjects when requesting services. The Bank has security measures to prevent data loss, misuse, alteration, unauthorized access, or theft.
        </p>

        <h3>I. Who is the Data Controller?</h3>
        <p>Name: Banco Santander S.A., CIF: A-39000013</p>
        <p>Postal Address: Avda de Cantabria, s/n, 28660 Boadilla del Monte (Madrid)</p>

        <h3>II. Data Protection Officer</h3>
        <p>
          To ensure GDPR compliance, the Data Protection Officer can be contacted at <a href="mailto:privacidad@gruposantander.es">privacidad@gruposantander.es</a>.
        </p>

        <h3>III. Purposes and Legal Basis for Data Processing</h3>
        <p>To manage requests via a microsite or comply with legal obligations.</p>

        <h3>IV. Data Retention Period</h3>
        <p>Data will be stored for the period necessary for managing the service and then locked for claim purposes.</p>

        <h3>V. Data Disclosure</h3>
        <p>No data will be disclosed to third parties or transferred internationally.</p>

        <h3>VI. Data Subject Rights</h3>
        <p>
          Subjects may exercise rights such as access, rectification, erasure, restriction, and objection by contacting <a href="mailto:privacidad@gruposantander.es">privacidad@gruposantander.es</a> or C/ Juan Ignacio Luca de Tena, 11-13, 28027 Madrid.
        </p>

        <h3>Privacy in Santander</h3>
        <p>
          Santander complies with data protection regulations, with a governance model that ensures regulatory standards. Designated data protection officers oversee compliance at each unit.
        </p>

        <h3>Corporate Governance Model</h3>
        <p>
          Santander’s data protection governance model ensures consistency with corporate standards, inspired by GDPR and EU rights for personal data protection. Group entities follow these standards, ensuring compliance with local regulations.
        </p>

        <h3>Data Processing</h3>
        <p>
          Personal data are processed strictly for specified purposes, with transparency on purpose, legal basis, recipients, data retention, and rights. Any data collected from third-party sources will indicate the data origin.
        </p>

        <h3>Why We Process Your Data</h3>
        <p>
          Processing is based on contractual necessity, legal compliance, express consent, and legitimate interest.
        </p>

        <h3>Data Protection Measures</h3>
        <p>
          Santander applies technical and organizational measures, such as pseudonymization, encryption, and confidentiality protocols, to protect data from unauthorized access, accidental loss, or damage.
        </p>

        <h3>Third-Party Processing</h3>
        <p>
          Third-party service providers with access to data are vetted for compliance with GDPR. Contracts mandate data protection measures, processing limitations, and data return or deletion upon contract termination.
        </p>

        <h3>International Data Transfers</h3>
        <p>
          If data are processed outside the European Economic Area, Santander ensures GDPR-level protection through appropriate safeguards.
        </p>

        <h3>Data Protection Officer Training</h3>
        <p>
          Santander’s staff receives regular data protection training to ensure compliance.
        </p>

        <h3>Your Rights</h3>
        <p>
          Data subjects have rights to access, data portability, rectification, erasure, processing restriction, objection, and automated decision exclusion. They can revoke consent at any time.
        </p>

        <h3>Handling Breaches</h3>
        <p>
          Santander has a zero-tolerance policy on breaches. Non-compliance may result in disciplinary action or legal consequences. Breaches are assessed by governing bodies for appropriate measures.
        </p>
      </section>
    </div>
  );
};

export default Privacy;
