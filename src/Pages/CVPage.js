import CV from '../Images/2022 CV.pdf'

const CVPage = () => {

   return (
      <div style={{height: '1500px'}}>
         <object data={CV} type="application/pdf" width="100%" height="100%">
            <p>DDrdakova CV</p>
         </object>
      </div>
   )
}

export default CVPage
