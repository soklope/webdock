export const checkAdmin = (userEmail) => {
    if (userEmail.endsWith("@webdock.io")) {
      return true;
    } else {
      return false;
    }
  }
  