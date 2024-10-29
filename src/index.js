import React from 'react';
import { createRoot } from 'react-dom/client';

// Définir la structure JSX pour une carte de profil unique
const CarteProfil = ({ nom, description, competences }) => (
  <div className="profile-card">
    <h2>{nom}</h2>
    <p>{description}</p>
    <ul>
      {competences.map((competence, index) => (
        <li key={index}>{competence}</li>
      ))}
    </ul>
  </div>
);

// Données de profil
const profils = [
  { nom: 'Jane Doe', description: 'Développeuse Web de Berlin', competences: ['JavaScript', 'React', 'CSS'] },
  { nom: 'John Smith', description: 'Ingénieur Frontend de Hambourg', competences: ['HTML', 'CSS', 'JavaScript'] },
  { nom: 'Emily Johnson', description: 'Designer UI/UX de Munich', competences: ['Figma', 'Adobe XD', 'CSS'] }
];

// Composant principal App
const App = () => (
  <div>
    {profils.map((profil, index) => (
      <CarteProfil 
        key={index}
        nom={profil.nom}
        description={profil.description}
        competences={profil.competences}
      />
    ))}
  </div>
);

// Initialiser et rendre l'application
const app = document.getElementById('app');
const root = createRoot(app);
root.render(<App />);

