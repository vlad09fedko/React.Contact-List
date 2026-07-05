export const createEmptyContact = () => ({
    id: null,
    fName: '',
    lName: '',
    email: '',
    phone: '',
  });

export function putToStorage(contacts) {
    localStorage.setItem('contacts', JSON.stringify(contacts));
}
