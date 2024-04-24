// import { GetStaticProps } from "next"
// import { NextPageWithLayout } from "./_app"
// import { useAppSelector } from "@/lib/hook/app.hook"
// import { Post } from "@/api/post.api"
// import { CONFIG } from "@/config"
// import styled from "@emotion/styled"
// import PostHeader from "@/component/header/post.header"
// import Footer from "@/component/footer/default.footer"
// import { useEffect } from "react"
// import { useDispatch } from "react-redux"
// import { getPostBySlug } from "@/lib/store/slice/post.slice"


// const DetailPage: NextPageWithLayout = () => {

//     const post = useAppSelector((state) => state.post.selectedPost);

//     useEffect(() => {
//         useDispatch(getPostBySlug(post?.slug))
//     }, [])

//     if (!post) return null;

//     const meta = {
//         title: post.title,
//         date: new Date(post.createdAt).toISOString(),
//         image: post.thumbnail,
//         description: post.summary || "",
//         // type: post.type[0],
//         url: `${CONFIG.SITE.URL}/${post.slug}`,
//     }

//     return (
// <StyledWrapper>
//     <article>
//         {/* {post.category && (
//             <div style={{ marginBottom: "0.5rem" }}>
//                 <Category readOnly={data.status?.[0] === "PublicOnDetail"}>
//                     {category}
//                 </Category>
//             </div>
//         )} */}
//         <PostHeader {...post} />
//         {/* <div>
//             <NotionRenderer recordMap={data.recordMap} />
//         </div> */}
//         <Footer />
//         {/* <CommentBox data={data} /> */}
//     </article>
// </StyledWrapper>
//     )
// }

// DetailPage.getLayout = (page) => {
//     return <>{page}</>
// }

// const StyledWrapper = styled.div`
//   padding-left: 1.5rem;
//   padding-right: 1.5rem;
//   padding-top: 3rem;
//   padding-bottom: 3rem;
//   border-radius: 1.5rem;
//   max-width: 56rem;
//   background-color: ${({ theme }) =>
//     theme.scheme === "light" ? "white" : theme.colors.gray4};
//   box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
//     0 2px 4px -1px rgba(0, 0, 0, 0.06);
//   margin: 0 auto;
//   > article {
//     margin: 0 auto;
//     max-width: 42rem;
//   }
// `

// export default DetailPage



import { Post } from "@/api/post.api"
import FullPostCard from "@/component/card/post/full-post.card"
import Footer from "@/component/footer/default.footer"
import PostHeader from "@/component/header/post.header"
import SearchInput from "@/component/input/search.input"
import CategoryList from "@/component/list/category.list"
import { CONFIG } from "@/config"
import { useAppDispatch, useAppSelector } from "@/lib/hook/app.hook"
import { getPostBySlug, getPosts } from "@/lib/store/slice/post.slice"
import styled from "@emotion/styled"
import { usePathname } from "next/navigation"
import { useEffect } from "react"


export default function Detail() {

    const pathname = usePathname();
    const dispatch = useAppDispatch();

    const post = useAppSelector((state) => state.post.selectedPost);

    useEffect(() => {
        if (pathname) {
            dispatch(getPostBySlug(pathname.replace('/', '')));
        }
    }, [pathname]);

    if (!post) return null;

    // const meta = {
    //     title: post.title,
    //     date: new Date(post.createdAt).toISOString(),
    //     image: post.thumbnail,
    //     description: post.summary || "",
    //     // type: post.type[0],
    //     url: `${CONFIG.SITE.URL}/${post.slug}`,
    // }


    return (
        <StyledWrapper>
            <article>
                <PostHeader {...post} />
                {post.content}
                <Footer />
                {/* <CommentBox data={data} /> */}
            </article>
        </StyledWrapper>
    )
}

const StyledWrapper = styled.div`
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  padding-top: 3rem;
  padding-bottom: 3rem;
  border-radius: 1.5rem;
  max-width: 56rem;
  background-color: ${({ theme }) =>
        theme.scheme === "light" ? "white" : theme.colors.gray4};
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
  margin: 0 auto;
  > article {
    margin: 0 auto;
    max-width: 42rem;
  }
`
