import React from "react";

const PostFilter = ({filter, setFilter}) => {
    return (
        <div>
            <MyInput
                value={filter.query}
                onChange={e => setFilter({...filter, query:e.target.value})}
                placeholder="Поиск"
            />
            <MySelect
                value={filter.sort}
                onChange={sortPosts}
                defaultValue="Сортировка"
                options={[
                    { value: 'title', name: 'По названию' },
                    { value: 'body', name: 'По описанию' }
                ]}
            />
        </div>
    )
}

export default PostFilter;