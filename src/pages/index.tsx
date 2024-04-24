
import { Post } from "@/api/post.api"
import FullPostCard from "@/component/card/post/full-post.card"
import SearchInput from "@/component/input/search.input"
import CategoryList from "@/component/list/category.list"
import RootLayout from "@/layout/blog-layout"
import { useAppDispatch, useAppSelector } from "@/lib/hook/app.hook"
import { getPosts } from "@/lib/store/slice/post.slice"
import { ReactElement, useEffect } from "react"
import { NextPageWithLayout } from "./_app"


const IndexPage: NextPageWithLayout = () => {

    const dispatch = useAppDispatch();

    const posts: Post[] = useAppSelector((state: any) => state.post.posts);

    useEffect(() => {
        dispatch(getPosts({})).then(() => {

        });
    }, [])


    return (
        <>
            <div className="tags">
                <CategoryList />
            </div>
            <SearchInput onChange={(e) => { }} />
            <div className="my-2">
                {!posts.length && (
                    <p className="text-gray-500 dark:text-gray-300">Nothing! 😺</p>
                )}
                {posts.map((post) => (
                    <FullPostCard
                        key={post.id}
                        {...post}
                    />
                ))}
            </div>
        </>
    )
}

IndexPage.getLayout = function getLayout(page: ReactElement) {
    return (
        <RootLayout>
            {page}
        </RootLayout>
    )
}

export default IndexPage
