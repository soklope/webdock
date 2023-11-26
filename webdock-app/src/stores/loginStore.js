import { create } from 'zustand';

const userStore = create((set) => ({
    user: null,

    loginWithSso: (userId, avatar, username, email) => set({
        user:
        {
            loggedIn: true,
            id: userId,
            avatarURL: avatar,
            name: username,
            mail: email,
        }
    }),

    loginAsUser: () => {
        const user = {
            loggedIn: true,
            admin: false,
        };

        localStorage.setItem('user', JSON.stringify(user));
        set({ user });
    },

    loginAsAdmin: () => {
        const user = {
            loggedIn: true,
            admin: true,
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
