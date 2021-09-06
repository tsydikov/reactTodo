import PostIdPage from "../components/PostIdPage";
import About from "../pages/About";
import Posts from "../pages/Posts";


export const routes = [
    {path:'/about', compnent: About, exact: true},
    {path:'/posts', compnent: Posts, exact: true},
    {path:'/posts:id', compnent: PostIdPage, exact: true}
]