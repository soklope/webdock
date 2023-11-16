import { postArrayDb } from "../dummyDb";
import { create } from "zustand";

const usePostArrayStore = create((set) => ({
    allPosts: postArrayDb,
    sustainAllPosts: postArrayDb,
    statusFilter: [],
    sort: "",
    category: "All Categories",
    searchValue: "",

    setSortValue: (newValue) => {
        set((state) => ({ sort: newValue }));
    },

    setCategoryValue: (newValue) => {
        set((state) => ({ category: newValue }));
    },

    setSearchValue: (newValue) => {
        set((state) => ({ searchValue: newValue }));
    },

    filterAllPosts: () => {
        set((state) => {
          let filteredPosts = [...state.sustainAllPosts];
      
            switch (state.sort) {
                case 'Trending':
                filteredPosts.sort((a, b) => b.numberOfComments - a.numberOfComments);
                break;
        
                case 'Top':
                filteredPosts.sort((a, b) => b.numberOfUpvotes - a.numberOfUpvotes);
                break;
        
                case 'New':
                filteredPosts.sort((a, b) => b.createdAt - a.createdAt);
                break;
            }

            filteredPosts = filteredPosts.filter((post) =>
                (state.category === 'All Categories' || post.category === state.category) &&
                (state.searchValue === '' || post.title.toLowerCase().includes(state.searchValue.toLowerCase())) &&
                (state.statusFilter.length === 0 || state.statusFilter.includes(post.status))
            );

          return { allPosts: filteredPosts };
        });
      },
}));

export default usePostArrayStore;




