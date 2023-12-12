import React from "react";

import "./SinglePostContent.scss";

export default function SinglePostContent({ postDate }) {
  return (
    <div>
      {/* postContent} */}
      {/* google escape characters for formatting and getting breaks in tekst */}
      {/* style: white-space: something, mike forklarede det */}
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, cum iste?
        Libero quas et quaerat dignissimos explicabo eligendi autem ducimus
        veritatis. Quaerat, sit? Ut animi omnis ipsa, veritatis enim minima?
        <br />
        <br />
        Provident perspiciatis nobis labore nemo rem voluptates maxime
        reprehenderit cupiditate voluptatibus ducimus, nulla quisquam tempore
        molestias ea officia cum vero perferendis fuga maiores temporibus illum
        iusto mollitia. Dolore dolorem, placeat temporibus assumenda ex
        dignissimos laboriosam itaque ullam veniam, aut fugiat incidunt. 
        <br />
        <br />
        Iste facere illum adipisci dolorem possimus sunt iusto vero eos optio
        aperiam, commodi alias dignissimos natus saepe reiciendis ipsam magni
        inventore labore. At earum quibusdam in quisquam nulla architecto
        pariatur beatae qui. 
      </p>
      <div className="content-meta-container">
      {/* reply to post moved to CommentSection.jsx */}
      </div>
    </div>
  );
}
