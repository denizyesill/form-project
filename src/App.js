import { useState } from "react";

import "./App.css";
import bitesLogo from './logo.png';
const App = () => {
  const [inputs, setInputs] = useState({});
  


  const handleChange = (event) => {
    console.log(event.target.value);
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputs);
   };

  return (
    <div className="page_container">

     {/* <form> 
        <div className="form-wrapper">
        <label className="form-label">Başlık</label>
        <input className="form-input" />
        </div>
        <div className="form-wrapper">
        <label className="form-label">Başlık</label>
        <input className="form-input" />
        </div>
        </form>  */}
      
      <img src={bitesLogo}  width="272px" height="82px"/>

      <div className="form_section">
        <form onSubmit={handleSubmit} className="form_container">
          <legend>
            <h3>Kişisel Bilgiler</h3>
          </legend>
          <br />

          <label>
            <h5>Ad-Soyad:</h5>
            <input
              type="text"
              name="username"
              value={inputs.username || ""}
              onChange={handleChange}
            />
          </label>

          <label>
            <h5>T.C. Numarası: </h5>
            <input
              type="number"
              name="tc"
              value={inputs.tc || ""}
              onChange={handleChange}
            />
          </label>

          <label>
            <h5>Doğum Tarihi: </h5>
            <input
              type="date"
              name="birthday"
              value={inputs.birthday || ""}
              onChange={handleChange}
            />
          </label>

          
          <label>
          <h5>Cinsiyet: </h5>
              <select 
              name="cinsiyet"
              value={inputs.cinsiyet || ""}
              onChange={handleChange}>
                <option value="erkek">erkek</option>
                <option value="kadın">Kadın</option>
                
              </select>
            </label>


          <label>
            <h5>Adress:</h5>
            <input
            type="text"
            name="adress"
            value={inputs.adress || ""}
            onChange={handleChange}
            />
            </label>

        <legend>
         <h3>İletişim Bilgileri</h3>
        </legend>

        <label>
            <h5>Email:</h5>
            <input
              type="email"
              name="mail"
              value={inputs.mail || ""}
              onChange={handleChange}
            />
          </label>

          <label>
            <h5>Telefon Numarası: </h5>
            <input
              type="number"
              name="telno"
              value={inputs.telno || ""}
              onChange={handleChange}
            />
          </label>

        <legend>
         <h3>Eğitim Bilgileri</h3>
        </legend>

        <label>
            <h5>Üniversite:</h5>
            <input
            type="text"
            name="universite"
            value={inputs.universite || ""}
            onChange={handleChange}
            />
         </label>

         <label>
            <h5>Bölüm:</h5>
           <input
            type="text"
            name="bolum"
            value={inputs.bolum || ""}
            onChange={handleChange}
            />
         </label>

        <legend>
         <h3>Başvuru Yapılan Pozisyon</h3>
        </legend>
            
            <label>
              <select 
              name="pozisyon"
              value={inputs.pozisyon || ""}
              onChange={handleChange}>
                <option value="ik">İK</option>
                <option value="erpuzmanı">ERP Uzmanı</option>
                
              </select>
            </label>

        <legend>
         <h3>Bilgisayar Bilgisi/Yabancı Dil</h3>
        </legend>
       
       <div className="checkbox-wrapper">
        <label className="my-label">Python
       <input type="checkbox" name="python"       onChange={handleChange}   value="python" />
        </label>
           
        <label className="my-label">Python
       <input type="checkbox" name="python"       onChange={handleChange}   value="python" />
        </label>

        <label className="my-label">Python
       <input type="checkbox" name="python"       onChange={handleChange}   value="python" />
        </label>

      
       </div>


        {/* <div className="languages"> */}
        <label>
            <h5>Yabancı Dil:</h5>
            <input
            type="text"
            name="languages"
            value={inputs.languages || ""}
            onChange={handleChange}
            />
            </label>

        {/* </div> */}
        
        <legend>
         <h3>Tecrübeler</h3>
        </legend>

        <label>
            <input
            type="text"
            name="tecrube"
            value={inputs.tecrube || ""}
            onChange={handleChange}
            />
         </label>

        <legend>
         <h3>Referanslar</h3>
        </legend>

        <label>
            <input
            type="text"
            name="referans"
            value={inputs.referans || ""}
            onChange={handleChange}
            />
         </label>

         <legend>
         <h3>Diğer Bilgiler</h3>
        </legend>

        <label>
        <h5>Başarılar/Ödüller:</h5>
            <input
            type="text"
            name="basarı"
            value={inputs.basarı || ""}
            onChange={handleChange}
            />
         </label>

         <label>
        <h5>Hobiler:</h5>
            <input
            type="text"
            name="hobi"
            value={inputs.hobi || ""}
            onChange={handleChange}
            />
         </label>
          
          <button type="submit">submit</button>
        </form>
      </div>
    </div>
  );
};

export default App;
