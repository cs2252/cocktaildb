import React from "react";
import {Link} from 'react-router-dom'
export default function Error() {
  return <section className="error-page section"> 
<h1>oops! it's a dead end</h1>
<Link to="/" className="btn btn-primary">
  back Home
</Link>
  </section>
}
