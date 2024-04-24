
import Image from "next/image"
import React from "react"
import styled from "@emotion/styled"
import { CONFIG } from "@/config"
import { formatDate } from "@/lib/helper/date.helper"
import TagList from "../list/tag.list"
import { Post } from "@/api/post.api"

interface Props extends Post {}

const PostHeader: React.FC<Props> = (post) => {
  return (
    <StyledWrapper>
      <h1 className="title">{post.title}</h1>
        <nav>
          <div className="top">
            {/* {post.author && data.author[0] && data.author[0].name && (
              <>
                <div className="author">
                  <Image
                    style={{ borderRadius: "50%" }}
                    src={data.author[0].profile_photo || CONFIG.profile.image}
                    alt="profile_photo"
                    width={24}
                    height={24}
                  />
                  <div className="">{data.author[0].name}</div>
                </div>
                <div className="hr"></div>
              </>
            )} */}
            <div className="date">
              {formatDate(post.createdAt, CONFIG.SITE.LANG)}
            </div>
          </div>
          <TagList tags={post.tags} />
          {post.thumbnail && (
            <div className="thumbnail">
              <Image
                src={post.thumbnail}
                style={{ objectFit: "cover" }}
                fill
                alt={post.title}
              />
            </div>
          )}
        </nav>
    </StyledWrapper>
  )
}

export default PostHeader

const StyledWrapper = styled.div`
  .title {
    font-size: 1.875rem;
    line-height: 2.25rem;
    font-weight: 700;
  }
  nav {
    margin-top: 1.5rem;
    color: ${({ theme }) => theme.colors.gray11};
    > .top {
      display: flex;
      margin-bottom: 0.75rem;
      gap: 0.75rem;
      align-items: center;
      .author {
        display: flex;
        gap: 0.5rem;
        align-items: center;
      }
      .hr {
        margin-top: 0.25rem;
        margin-bottom: 0.25rem;
        align-self: stretch;
        width: 1px;
        background-color: ${({ theme }) => theme.colors.gray10};
      }
      .date {
        margin-right: 0.5rem;

        @media (min-width: 768px) {
          margin-left: 0;
        }
      }
    }
    > .mid {
      display: flex;
      margin-bottom: 1rem;
      align-items: center;
      .tags {
        display: flex;
        overflow-x: auto;
        flex-wrap: nowrap;
        gap: 0.5rem;
        max-width: 100%;
      }
    }
    .thumbnail {
      overflow: hidden;
      position: relative;
      margin-bottom: 1.75rem;
      border-radius: 1.5rem;
      width: 100%;
      background-color: ${({ theme }) => theme.colors.gray4};
      padding-bottom: 66%;

      @media (min-width: 1024px) {
        padding-bottom: 50%;
      }
    }
  }
`
