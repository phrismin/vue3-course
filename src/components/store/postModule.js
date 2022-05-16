import axios from "axios";

export const postModule = {
    state: () => ({
        posts: [],
        isPostsLoading: false,
        selectedSort: '',
        searchQuery: '',
        page: 1,
        limit: 10,
        totalPages: 0,
        sortOptions: [
            {value: 'title', name: 'По названию'},
            {value: 'body', name: 'По описанию'},
        ]
    }),
    getters: {
        sortedPosts(state) {
            return [state.posts].sort((post1, post2) => {
                return post1[state.selectedSort]?.localeCompare(post2[state.selectedSort])
            })
        },
        sortedAndSearchedPosts(state, getters) {
            return getters.sortedPosts.filter(post => {
                return post.title.toLowerCase().includes(state.searchQuery.toLowerCase())
            })
        },
    },
    mutations: {
        setPosts(state, posts) {
            state.posts = posts
        },
        setLoading(state, bool) {
            state.isPostsLoading = bool
        },
        setSelectedSort(state, selectedSort) {
            state.selectedSort = selectedSort
        },
        setSearchQuery(state, searchQuery) {
            state.searchQuery = searchQuery
        },
        setTotalPages(state, totalPages) {
            state.totalPages = totalPages
        }
    },
    actions: {
        async fetchPosts() {
            try {
                this.isPostsLoading = true
                const resp = await axios.get('https://jsonplaceholder.typicode.com/posts?', {
                    params: {
                        _page: this.page,
                        _limit: this.limit
                    }
                })
                this.totalPages = Math.ceil(resp.headers['x-total-count'] / this.limit)
                this.posts = resp.data;
            } catch (e) {
                console.log(e)
            } finally {
                this.isPostsLoading = false
            }
        },
        async loadMorePosts() {
            try {
                this.page += 1
                const resp = await axios.get('https://jsonplaceholder.typicode.com/posts?', {
                    params: {
                        _page: this.page,
                        _limit: this.limit
                    }
                })
                this.totalPages = Math.ceil(resp.headers['x-total-count'] / this.limit)
                this.posts = [...this.posts, ...resp.data]
            } catch (e) {
                console.log(e)
            }
        }
    }
}