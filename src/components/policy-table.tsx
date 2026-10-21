import type { ReactNode } from 'react';

interface PolicyTableProps {
  headers: string[];
  rows: ReactNode[][];
}

// Meant to sit inside a PolicySection, which sets the text size and colour.
// The wrapper scrolls horizontally so the table never widens the page on phones.
export default function PolicyTable({ headers, rows }: PolicyTableProps) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-[32rem] border-collapse text-left">
        <thead>
          <tr style={{ borderBottom: '1px solid #d4d4d8' }}>
            {headers.map((header) => (
              <th key={header} className="py-2 pr-4 align-bottom" style={{ fontWeight: 600 }}>
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((cells, rowIndex) => (
            <tr key={rowIndex} style={{ borderBottom: '1px solid #e4e4e7' }}>
              {cells.map((cell, cellIndex) => (
                <td key={cellIndex} className="py-2 pr-4 align-top">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
