import { BrowserRouter, Route, Routes as R} from "react-router-dom";

import Produtos from '../pages/Produtos'
import Produto from '../pages/Produto'
import Contato from '../pages/Contato'

import Header from "../components/Header";
import Footer from "../components/Footer";

import '../App.css'

export default function Routes() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header />
      <div className="content">
        <R>
          <Route path="/" element={<Produtos />} exact />
          <Route path="produto/:id" element={<Produto />} />
          <Route path="contato" element={<Contato />} />
        </R>
      </div>
      <Footer />
      </BrowserRouter>
    </div>
  )
}
