import validator from 'validator';

(() => {
  const form = document.querySelector('.form') as HTMLFormElement;
  const errorClass = 'show-error-message';

  function showErrorMessage(field: HTMLInputElement, message: string): void {
    field.parentElement?.classList.add(errorClass);
    const spanElement = field.nextElementSibling as HTMLSpanElement;

    spanElement.innerHTML = message;
  }

  function hideErrorMessage(field: HTMLInputElement): void {
    field.parentElement?.classList.remove(errorClass);
  }

  function usernameValidator(
    username: string,
    usernameElement: HTMLInputElement
  ): boolean {
    const isValid = username.length > 3;

    if (!isValid)
      showErrorMessage(
        usernameElement,
        'Username must be at least 3 characters long'
      );

    return isValid;
  }

  function emailValidator(
    email: string,
    emailElement: HTMLInputElement
  ): boolean {
    const isValid = validator.isEmail(email);

    if (!isValid)
      showErrorMessage(emailElement, 'Email address must be valid');

    return isValid;
  }

  function passwordValidator(
    password: string,
    passwordElement: HTMLInputElement
  ): boolean {
    const isValid = validator.isStrongPassword(password);

    if (!isValid)
      showErrorMessage(
        passwordElement,
        'Password must be at least 6 characters long and must have letters, numbers or special characters'
      );

    return isValid;
  }

  function passwordIsEqualValidator(
    password: string,
    password_confirmation: string,
    passwordConfirmationElement: HTMLInputElement
  ): boolean {
    const isValid = validator.equals(password, password_confirmation);

    if (!isValid)
      showErrorMessage(
        passwordConfirmationElement,
        'Password confirmation must be equal to password'
      );
    return isValid;
  }

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const formSubmited = event.currentTarget as HTMLFormElement;

    const username = formSubmited.querySelector(
      '.username'
    ) as HTMLInputElement;
    const email = formSubmited.querySelector('.email') as HTMLInputElement;
    const password = formSubmited.querySelector(
      '.password'
    ) as HTMLInputElement;
    const password2 = formSubmited.querySelector(
      '.password2'
    ) as HTMLInputElement;

    const formData = new FormData(formSubmited);

    hideErrorMessage(username);
    hideErrorMessage(email);
    hideErrorMessage(password);
    hideErrorMessage(password2);

    if (
      usernameValidator(String(formData.get('username')), username) &&
      emailValidator(String(formData.get('email')), email) &&
      passwordValidator(String(formData.get('password')), password) &&
      passwordIsEqualValidator(
        String(formData.get('password')),
        String(formData.get('password2')),
        password2
      )
    ) {
      console.log('You are logged in successfully');
    }
  });
})();
