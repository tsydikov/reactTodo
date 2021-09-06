export const useSortedPosts = (posts, sort) => {
    const sortedPosts = useMemo(() => {
        if (ort) {
          return [...posts].sort((a, b) => a[sort].localeCompare(b[sort]))
        }
        return posts;
      }, [sort, posts])

      return sortedPosts;
}

export const usePosts = (posts, sort, query) => {
    const sortedPosts = useSortedPosts(posts, sort)
    const sortedAndSerchedPosts = useMemo(() => {
        return sortedPosts.filter(post => post.title.toLowerCase().includes(query))
      }, [query, sortedPosts])
    
    return sortedAndSerchedPosts;
}