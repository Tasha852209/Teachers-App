const togglePassword = (toggle, setInput, setIcon) => {
  if (toggle === 'password') {
    setIcon(true);
    setInput('text');
  } else {
    setIcon(false);
    setInput('password');
  }
};

export default togglePassword;
