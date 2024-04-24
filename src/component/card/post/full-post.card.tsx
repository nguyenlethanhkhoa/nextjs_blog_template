'use client'
import Image from "next/image"
import styled from "@emotion/styled"
import { Post } from "@/api/post.api"
import { formatDate } from "@/lib/helper/date.helper"
import { CONFIG } from "@/config"
import TagList from "@/component/list/tag.list"
import { getPostBySlug } from "@/lib/store/slice/post.slice"
import { useAppDispatch } from "@/lib/hook/app.hook"
import { useRouter } from 'next/navigation'

interface Props extends Post { }

const FullPostCard: React.FC<Props> = (post) => {

    const router = useRouter();
    const dispatch = useAppDispatch();
    

    return (
        <StyledWrapper onClick={async () => {
            await dispatch(getPostBySlug(post.slug));
            router.push(`/${post.slug}`);
        }}>
            <article>
                {/* {data.category && (
          <div className="category">
            <Category></Category>
          </div>
        )} */}
                {post.thumbnail && (
                    <div className="thumbnail">
                        <Image
                            src={post.thumbnail}
                            fill
                            alt={post.title}
                            style={{ objectFit: "cover" }}
                        />
                    </div>
                )}
                <div data-thumb={!!post.thumbnail} className="content">
                    <header className="top">
                        <h2>{post.title}</h2>
                    </header>
                    <div className="date">
                        <div className="content">
                            {formatDate(
                                post.createdAt,
                                CONFIG.SITE.LANG
                            )}
                        </div>
                    </div>
                    <div className="summary">
                        <p>{post.summary}</p>
                    </div>
                    <TagList key={post.id} tags={post.tags} />
                </div>
            </article>
        </StyledWrapper>
    )
}

export default FullPostCard

const StyledWrapper = styled(`div`)`

    cursor: pointer;
    article {
        overflow: hidden;
        position: relative;
        margin-bottom: 1.5rem;
        border-radius: 1rem;
        background-color: ${({ theme }) =>
            theme.scheme === "light" ? "white" : theme.colors.gray4};
        transition-property: box-shadow;
        transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        transition-duration: 300ms;

        @media (min-width: 768px) {
            margin-bottom: 2rem;
        }

        :hover {
            box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
                0 4px 6px -2px rgba(0, 0, 0, 0.05);
        }
        > .category {
            position: absolute;
            top: 1rem;
            left: 1rem;
            z-index: 10;
        }

        > .thumbnail {
            position: relative;
            width: 100%;
            background-color: ${({ theme }) => theme.colors.gray2};
            padding-bottom: 66%;

            @media (min-width: 1024px) {
                padding-bottom: 50%;
            }
        }
        > .content {
            padding: 1rem;

            &[data-thumb="false"] {
                padding-top: 3.5rem;
            }
            &[data-category="false"] {
                padding-top: 1.5rem;
            }
            > .top {
                display: flex;
                flex-direction: column;
                justify-content: space-between;

                @media (min-width: 768px) {
                    flex-direction: row;
                    align-items: baseline;
                }
                h2 {
                    margin-bottom: 0.5rem;
                    font-size: 1.125rem;
                    line-height: 1.75rem;
                    font-weight: 500;

                    cursor: pointer;

                    @media (min-width: 768px) {
                        font-size: 1.25rem;
                        line-height: 1.75rem;
                    }
                }
            }
            > .date {
                display: flex;
                margin-bottom: 1rem;
                gap: 0.5rem;
                align-items: center;
                .content {
                    font-size: 0.875rem;
                    line-height: 1.25rem;
                    color: ${({ theme }) => theme.colors.gray10};
                    @media (min-width: 768px) {
                        margin-left: 0;
                    }
                }
            }
            > .summary {
                margin-bottom: 1rem;
                p {
                    display: none;
                    line-height: 2rem;
                    color: ${({ theme }) => theme.colors.gray11};

                    @media (min-width: 768px) {
                        display: block;
                    }
                }
            }
            > .tags {
                display: flex;
                gap: 0.5rem;
            }
        }
    }
`
