import React, { useEffect, useState } from 'react'
import PostService from './API/PostService';
import PostFilter from './components/PostFilter';
import PostForm from './components/PostForm';
import PostList from './components/PostList'
import { useFetching } from './hooks/useFetching';
import { usePosts } from './hooks/usePosts';
import './styles/App.css'
import MyButton from './UI/button/MyButton';
import Loader from './UI/Loader/Loader';
import MyModal from './UI/MyModal/MyModal';
import Pagination from './UI/pagination/Pagination';
import { getPagesArray, getPagesCount } from './utils/pages';

function App() {
  
  return (
    <div >
      WORk
    </div>
  );
}

export default App;
