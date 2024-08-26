export const checkValidData = (email, password, name="") => {
  const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(
    email
  );
  const isPasswordValid = /^(?=.*?[a-z])(?=.*?[0-9]).{8,16}$/.test(
    password
  );

  if (!isEmailValid) return "Incorrect Email ";
  if (!isPasswordValid)
    return "Incorrect Password ";

  return null;
};
