import React, { useState, useEffect } from 'react';
import { Card } from 'antd';
import bassLogo from "./assets/images/bass-logo.jpg";
import "./App.css";

import { Account } from '@src/generated';


function App() {
  const [count, setCount] = useState(0);


  const [account, setAccount] = useState<Account>(null);
  useEffect(() => {
    Account.retrieve((fields) => {
      return {
        select: [
          ...fields.select('id', 'name', 'website'),
          fields.subQuery('contacts', (cFields) => {
            return {
              select: cFields.select('id', 'name', 'email', 'phone'),
            };
          }),
        ],
        limit: 1,
      };
    }).then((accs) => {
      if (accs.length > 0) {
        setAccount( accs[0] );
      }
    });
  }, []);


  return (
    <div className="App">
      <Card>
        <a href="https://github.com/ChuckJonas/bad-ass-salesforce-stack" target="_blank">
          <img src={bassLogo} className="logo react" alt="isa-fiish" />
        </a>
      </Card>
      <h1>Hello B.A.S.S. App</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the B.A.S.S.logo to learn more
      </p>
      
      <p>Account: {account?.name}</p>
      
    </div>
  );
}

export default App;
