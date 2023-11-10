import { create } from 'zustand';

const useModalStore = create((set) => ({
    modalIsOpen: false,

    toggleModal: () => {
        set((state) => ({ modalIsOpen: !state.modalIsOpen }));
    },
}));

export default useModalStore;