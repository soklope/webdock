import React from 'react'

export default function Replies({ name, content }) {
    return (
      <div>
        <p>
            {name}
        </p>
        <p>
            {content}
        </p>
      </div>
    )
};
