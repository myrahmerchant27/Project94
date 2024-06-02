const firebaseConfig = {
    apiKey: "AIzaSyDZ5weVju_Z8dYYtpcdi5rVzHZPeL5kUWg",
    authDomain: "project94-af36b.firebaseapp.com",
    projectId: "project94-af36b",
    storageBucket: "project94-af36b.appspot.com",
    messagingSenderId: "710090712768",
    appId: "1:710090712768:web:736bda790a51e179316f25",
    measurementId: "G-0W0XDE3HSX"
  };
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

function addUser() {
    user_name = document.getElementById("user_name").value;

    localStorage.setItem("user_name", user_name);
}
function addRoom()
{
    room_name = document.getElementById("room_name").value;

    localStorage.setItem("room_name", room_name);

    window.location = "Kwitter_room.html";
}