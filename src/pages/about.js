import React from "react"
import { Link } from "gatsby"
import Header from "../components/header";

export default () => (
  <div style={{ color: `teal` }}>
    <Header name="Thamizh" />
    <Link to="/contact">contact</Link>
    <p>Such wow. Very React.</p>
  </div>
)