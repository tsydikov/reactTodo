import React from "react";

const PostFilter = ({filter, setFilter}) => {
    return (
        <div>
            <MyInput
                value={seachQuery}
                onChange={e => setSerchQuery(e.target.value)}
                placeholder="Поиск"
            />
            <MySelect
                value={selectedSort}
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