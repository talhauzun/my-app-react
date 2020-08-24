import React, { useMemo } from 'react';
import { useTable } from 'react-final-table';

const columns = [
  { name: 'id', 
    hidden: true
  },
  {
    name: 'first_name',
    label: 'First Name',
    render: ({ value }) => (
      <><span role="img" aria-label="mage">🧙</span>{value}</>
    )
  },
  {

    name: 'last_name',
    label: 'Last Name',
  },
];

const data = [
  {
    id: 1,
    first_name: 'Talha',
    last_name: 'Uzun',
  },
  {
    id: 2,
    first_name: 'Burcu v5',
    last_name: 'Ayaz v3',
  },
];

function App() {

  const memoColumns = useMemo(() => columns, []);
  const memoData = useMemo(() => data, []);

  const { headers, rows, selectRow, selectedRows } = useTable(memoColumns, memoData, {
    selectable: true,
  });
  
  return (
    <>
    <table>
      <thead>
        <tr>
          <th></th>
          {headers.map((header, idx) => (
            <th key={idx}>{header.label}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, idx) => (
          <tr key={idx}>
            <td>
              <input type="checkbox" onChange={(e) => {
                  selectRow(row.id)
                }} 
              />
            </td>
            {row.cells.map((cell, idx) => (
              <td key={idx}>{cell.render()}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
    <pre>
      <code>
        {JSON.stringify(selectedRows, null, 2)}
      </code>
    </pre>
    </>
  );
}

export default App;