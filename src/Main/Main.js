import React from 'react'
import './main.css'
import photo from '../images/1.jpg'

const Main = () => {
    return (
        <main>
            <div className="main-left-wrapper">
                <img className="photo" src={photo}/>
            </div>
            <div className="main-right-wrapper">
           <h3> Адвокат</h3> - свідоцтво про право на заняття адвокатською діяльністю № 9183⁄10 від 31.07.2020.

<h3>Освіта </h3> Вища, закінчила  Національну академію внутрішніх справ (НАВС) за спеціальністю «Правознавство» та здобула освітню кваліфікацію магістр права.
Досвід роботи у сфері права: 10 років.

<h3>Практичний досвід у галузі юриспруденції набула працюючи на різних посадах.</h3>
<p className="main-paragraph">2010 рік є початком відліку моєї професійної діяльності. </p>
<p className="main-paragraph">З березня 2010 року працювала в КП «Житлорембудсервіс» на посаді юрисконсульта.</p>
 	<p className="main-paragraph">У подальшому більше семи років пропрацювала в Деснянському районному суді м. Києва, спочатку на посаді діловода, а з січня 2015 року на посаді помічника судді Деснянського районного суду м. Києва.
З 2018 року працювала в структурі Міністерства оборони України на посаді юрисконсульта. </p>

            </div>
        </main>
    )
}
export default Main