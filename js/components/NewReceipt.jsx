import { useState } from 'react';

export default function InsertPage() {
  const [nume, setNume] = useState('');
  const [ingrediente, setIngrediente] = useState('');
  const [instructiuni, setInstructiuni] = useState('');

  const insertRecord = (event) => {
    event.preventDefault();
    const ingredienteArray = ingrediente.split(',');

    const data = {
      nume,
      ingrediente: ingredienteArray,
      instructiuni
    };

    fetch('/api/records', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then(() => {
        console.log('New record inserted');
        setNume('');
        setIngrediente('');
        setInstructiuni('');
      });
  };

  return (
    <section>
      <div>
        <h1 style={{ textOrientation: 'center' }}>Adauga propria reteta</h1>
  
        <form>
          <div className="mb-6">
            <label htmlFor="nume">Nume: </label>
            <input
              type="text"
              id="nume"
              className="bg-black-50 border border-black-300 text-black-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-black-700 dark:border-black-600 dark:placeholder-white-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
              value={nume}
              onChange={(e) => setNume(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label htmlFor="ingrediente">Ingrediente</label>
            <input
              type="text"
              id="ingrediente"
              className="bg-black-50 border border-black-300 text-black-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-black-700 dark:border-black-600 dark:placeholder-white-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
              value={ingrediente}
              onChange={(e) => setIngrediente(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label htmlFor="instructiuni">Instructiuni</label>
            <textarea
              id="instructiuni"
              className="bg-black-50 border border-black-300 text-black-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-black-700 dark:border-black-600 dark:placeholder-white-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
              value={instructiuni}
              onChange={(e) => setInstructiuni(e.target.value)}
            />
          </div>
          <button
            type="submit"
            onClick={insertRecord}
            className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
          >
            Submit
          </button>
          <button
            style={{ marginLeft: '30px' }}
            type="submit"
            onClick={() => (window.location.href = 'https://main--marvelous-tulumba-b5b8db.netlify.app//insert')}
            className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800"
          >
            Inapoi la retetele tale
          </button>
        </form>
      </div>
    </section>
  );
  
}