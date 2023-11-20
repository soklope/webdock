import { create } from 'zustand';

const userStore = create((set) => ({
    user: null,

    loginAsUser: () => {
        const user = {
            loggedIn: true,
            role: 1,
        };

        localStorage.setItem('user', JSON.stringify(user));
        set({ user });
    },

    loginAsAdmin: () => {
        const user = {
            loggedIn: true,
            role: 2,
        };

        localStorage.setItem('user', JSON.stringify(user));
        set({ user });
    },

    loginAsSuperAdmin: () => {
        const user = {
            loggedIn: true,
            role: 3,
        };

        localStorage.setItem('user', JSON.stringify(user));
        set({ user });
    },

    logout: () => {
        localStorage.removeItem('user');
        set({ user: null });
    },
}));

export default userStore;
