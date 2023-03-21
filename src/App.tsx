import { useState } from 'react';
import alignedCodeLogo from './assets/aligned-code.svg';
import reactLogo from './assets/react.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className='App'>
      <div>
        <a href='https://alignedcode.com' target='_blank' rel='noreferrer'>
          <img src={alignedCodeLogo} className='logo' alt='Aligned Code logo' />
        </a>
        <a href='https://reactjs.org' target='_blank' rel='noreferrer'>
          <img src={reactLogo} className='logo react' alt='React logo' />
        </a>
      </div>
      <h1 className='title'>Awesome React Template</h1>
      <p>
        Opinionated React Template with ESLint, Prettier and TypeScript
        configured
      </p>
      <div className='card'>
        <button
          type='button'
          onClick={() => setCount((prevState) => prevState + 1)}
        >
          count is {count}
        </button>
        <p>
          Start creating your awesome project by editing{' '}
          <code>src/App.tsx</code>
        </p>
      </div>
      <p className='read-the-docs'>
        Click on the logos to find out more.{' '}
        <a
          className='link'
          href='https://github.com/alignedcode/awesome-react-template/blob/main/README.md'
          target='_blank'
          rel='noreferrer'
        >
          Learn more
        </a>{' '}
        about the template
      </p>
    </div>
  );
}

export default App;
