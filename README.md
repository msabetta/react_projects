# React Projects

Benvenuto in **React Projects**! Questo repository contiene una raccolta di progetti di esempio realizzati con **React** durante l'attività lavorativa. L'obiettivo è fornire esempi pratici e funzionanti, partendo dalle basi fino ad applicazioni più complesse.

## 📁 Struttura del Progetto

Al momento, il repository contiene il seguente progetto iniziale:

*   **`helloworld/`**: Directory che contiene un semplice progetto "Hello, World!" per iniziare con React.
*   **File principali nella root**:
    *   `App.jsx`: Il componente principale dell'applicazione.
    *   `main.js`: Il punto di ingresso che renderizza l'app nel DOM.
    *   `package.json` e `package-lock.json`: Gestione delle dipendenze e degli script npm.
    *   `.vscode/`: Configurazioni specifiche per l'editor Visual Studio Code.

## 🚀 Come Iniziare

### Prerequisiti
*   **Node.js** (che include **npm**) installato sul sistema. Puoi scaricarlo da [nodejs.org](https://nodejs.org/).

### Installazione ed Esecuzione del Progetto Hello World

1.  **Clona il repository**:
    ```bash
    git clone https://github.com/msabetta/react_projects.git
    cd react_projects
    ```

2.  **Installa le dipendenze** (assicurati di essere nella directory principale del progetto, dove si trova `package.json`):
    ```bash
    npm install
    ```

3.  **Avvia l'applicazione in modalità sviluppo**:
    ```bash
    npm start
    ```
    Questo comando avvierà il server di sviluppo e aprirà automaticamente l'app nel browser all'indirizzo `http://localhost:3000`. La pagina si ricaricherà automaticamente se modifichi il codice.

## 📦 Progetti Inclusi

### 1. Hello World React (`/`)

Questo progetto dimostra la struttura minima di un'applicazione React. Include:

*   **`main.js`**: Il file di entry point che monta l'applicazione React nel DOM.
    ```javascript
    import React from 'react';
    import ReactDOM from 'react-dom/client';
    import App from './App';

    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
    ```

*   **`App.jsx`**: Il componente principale che viene renderizzato. Al momento mostra un semplice messaggio di benvenuto.
    ```jsx
    function App() {
      return (
        <div>
          <h1>Hello, World!</h1>
          <p>Benvenuto nel mio primo progetto React!</p>
        </div>
      );
    }

    export default App;
    ```

## 🛠️ Tecnologie Utilizzate

*   **React**: Libreria JavaScript per la creazione di interfacce utente.
*   **JavaScript (ES6+)**: Linguaggio di programmazione principale.
*   **JSX**: Estensione sintattica per scrivere HTML all'interno di JavaScript.
*   **npm**: Gestore di pacchetti per le dipendenze.
*   **Create React App** (presumibilmente): Configurazione zero per avviare velocemente un progetto React.

## 📚 Prossimi Sviluppi

Questo repository è in evoluzione. Nei prossimi commit potrebbero essere aggiunti:

*   Esempi con componenti a stato e hooks (`useState`, `useEffect`).
*   Gestione del routing con **React Router**.
*   Esempi di chiamate API e gestione dati asincroni.
*   Progetti più complessi con contesto e reducer (`useContext`, `useReducer`).

## 🤝 Contributi

Se hai suggerimenti, miglioramenti o nuovi esempi da aggiungere, sentiti libero di aprire una **Issue** o una **Pull Request**. I contributi sono sempre benvenuti!

