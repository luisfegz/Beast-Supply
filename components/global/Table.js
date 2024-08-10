export default function Table(props) {
    return (
      <table className="w-full">
        <thead>
          <tr>
            {props.columns.map((column, index) => (
              <th
                key={index}
                className="text-left uppercase text-gray-400 font-semibold text-xs"
              >
                {column}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {props.data.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cell, cellIndex) => (
                <td key={cellIndex} className="border-t border-gray-200">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
  