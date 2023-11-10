import { create } from 'zustand';

const userStore = create((set) => ({
    user: null,

    loginAsUser: () => set({ user: 
        { 
            loggedIn: true,
            role: 1 
        } 
    }),

    loginAsAdmin: () => set({ user: 
        { 
            loggedIn: true,
            role: 2 
        } 
    }),

    loginAsSuperAdmin: () => set({ user: 
        { 
            loggedIn: true,
            role: 3 
        } 
    }),

    logout: () => set({ user: null }),

  }));

export default userStore;
