document.getElementById("contactForm").addEventListener("submit", async function (e) {
  e.preventDefault();
  const name = this.name.value;
  const email = this.email.value;
  const message = this.message.value;
  const msg = document.getElementById("responseMsg");

  try {
    const res = await fetch('/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message })
    });

    const data = await res.json();
    msg.textContent = data.message;
    msg.style.color = data.success ? 'green' : 'red';
    if (data.success) this.requestFullscreen();
  } catch (err) {
    msg.testContent = "Server error!";
    msg.style.color = 'red';
  }
});