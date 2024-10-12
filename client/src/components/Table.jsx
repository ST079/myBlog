import "./Table.css";
const Table = ({ header, body }) => {
  return (
    <div>
      <table>
        <thead>
          <tr>
            {header.map((heads, index) => {
              return (
                <th className="px-4 text-center" key={index}>
                  {heads}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {body.length > 0 ? (
            body.map((item, index) => {
              return (
                <tr key={index}>
                  {header.map((head, index) => {
                    return <td key={index}>{item[head]}</td>;
                  })}
                </tr>
              );
            })
          ) : (
            <tr>
              <td colSpan={header.length}>Sorry couldnt find any data</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
