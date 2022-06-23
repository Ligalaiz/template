window.addEventListener('load', () => {
  const form = document.getElementById('form');
  const nameField = document.getElementById('nameField');
  const emailField = document.getElementById('emailField');
  const descField = document.getElementById('descField');

  const sendForm = async () => {
    try {
      await fetch('https://template-backed-app.herokuapp.com/feedback', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: nameField.value,
          email: emailField.value,
          desc: descField.value,
        }),
      });
    } catch (e) {
      console.log(e.message);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    e.stopPropagation();
    sendForm();
    form.reset();
  };

  if (form) form.addEventListener('submit', handleSubmit);
});
