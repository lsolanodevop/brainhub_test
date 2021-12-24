function App() {
  return (
    <div class="center">
    <div class="box">
      <form class="fbox">
        <img src="https://images.unsplash.com/photo-1494178270175-e96de2971df9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=780&q=80" alt=""></img>
        <label for="fname">First Name</label>
        <input type="text" id="fname" placeholder="First Name"></input>
        <label for="lname">Last Name</label>
        <input type="text" id="lname" placeholder="Last Name"></input>
        <label for="email">Email</label>
        <input type="text" id="email" placeholder="Email"></input>
        <label for="event">Event</label>
        <input type="date" id="event" placeholder="Event"></input>
        <button type="button" class="slide-btn Sbutton" id="submit">Send</button>
      </form>
    </div>
    </div>
  );
}

export default App;
