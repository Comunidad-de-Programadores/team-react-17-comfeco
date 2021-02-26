type errorMsg = "La cuenta ya existe" | "Contraseña erronea" | "Cuenta no existente"

const displayError = (errorCode: string): errorMsg => {
  switch (errorCode) {
    case "auth/email-already-in-use":
      return "La cuenta ya existe"
      break
    case "auth/wrong-password":
      return "Contraseña erronea"
      break
    case "auth/user-not-found":
      return "Cuenta no existente"
      break
  }
}

export default displayError
