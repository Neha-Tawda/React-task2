const ContactStyle = {width:'500px', position:'absolute',top:'80px', left:'65%',  }
export default function Contactform(){
return(
    <div style={ContactStyle}>
        <h1>Contact-Form</h1>
        <form id="contact_form" action="#" method="POST" enctype="multipart/form-data">
    <div class="row">
      <label class="required" for="name">Your name:</label><br />
      <input id="name" class="input" name="name" type="text" value="" size="30" /><br />
      
    </div>
    <div class="row">
      <label class="required" for="email">Contact No.:</label><br />
      <input id="email" class="input" name="Contact" type="number" value="" size="30" /><br />
      
    </div>
    <div class="row">
      <label class="required" for="email">Your email:</label><br />
      <input id="email" class="input" name="email" type="text" value="" size="30" /><br />
      
    </div>
    
      <button className="btn btn-outline-primary mt-5" >Submit</button>
  </form>
  </div>
)
}