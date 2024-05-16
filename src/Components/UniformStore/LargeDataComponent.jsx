import React from 'react'

const LargeDataComponent = ({data}) => {
  return (
    <>
     <table>
      <thead>
        <tr>
          <th>Field</th>
          <th>Value</th>
        </tr>
      </thead>
      <tbody>
        {Object.entries(data).map(([key, value]) => (
          <tr key={key}>
            <td>{key}</td>
            <td>{value}</td>
          </tr>
        ))}
      </tbody>
    </table>
    
    </>
  )
}

export default LargeDataComponent