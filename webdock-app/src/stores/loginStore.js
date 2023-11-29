import { create } from 'zustand';

const userStore = create((set) => ({
    user: null,

    setUserState: (userData) => set({
        user: userData
    }),
    
    logout: () => {
        localStorage.removeItem('user');
        set({ user: null });
    },

    // loginAsUser: () => {
    //     const user = {
    //         loggedIn: true,
    //         admin: false,
    //     };

    //     localStorage.setItem('user', JSON.stringify(user));
    //     set({ user });
    // },

    // loginAsAdmin: () => {
    //     const user = {
    //         loggedIn: true,
    //         admin: true,
    //     };

    //     localStorage.setItem('user', JSON.stringify(user));
    //     set({ user });
    // },
}));

export default userStore;
