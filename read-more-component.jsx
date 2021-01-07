import React, { useState } from "react";

const Exemple = ({ text }) => {
  const [readMore, setReadMore] = useState(false);
  return (
    <article>
      <p>
        {readMore ? text : `${text.substring(0, 200)}...`}
        <button onClick={() => setReadMore(!readMore)}>
          {readMore ? "show less" : "read more"}
        </button>
      </p>
    </article>
  );
};

export default Exemple;
