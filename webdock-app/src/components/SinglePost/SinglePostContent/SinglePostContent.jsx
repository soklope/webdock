import React from "react";

import "./SinglePostContent.scss";

export default function SinglePostContent({ postContent }) {
  
  return (
    <div>
      {/* important when using dangerouslySetInnerHTML, to sanitize data in database. It opens xss vulnerabilities */}
      <p dangerouslySetInnerHTML={{ __html: postContent }}></p> 
      
      {/* <p>
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
       */}
    </div>
  );
}