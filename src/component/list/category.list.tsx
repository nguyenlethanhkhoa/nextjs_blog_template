import styled from "@emotion/styled"
import { useRouter } from "next/router"
import React, { useEffect } from "react"
import { getCategories } from "@/lib/store/slice/category.slice"
import { useAppDispatch, useAppSelector } from "@/lib/hook/app.hook"
import { Category } from "@/api/category.api"

type Props = {}

const CategoryList: React.FC<Props> = () => {
    const router = useRouter()
    const dispatch = useAppDispatch();

    const categories: Category[] = useAppSelector((state: any) => state.category.categories);

    useEffect(() => {
        dispatch(getCategories({}));
    }, [])

    const currentCategoryId = router.query.tag || undefined

    const handleClickTag = (value: any) => {

    }

    return (
        <StyledWrapper>
            <div className="top">
                🏷️ Category
            </div>
            <div className="list">
                {categories.map((category) => (
                    <a
                        key={category.id}
                        // data-active={category.id === currentCategoryId}
                        onClick={() => handleClickTag(category.id)}
                    >
                        {category.name}
                    </a>
                ))}
            </div>
        </StyledWrapper>
    )
}

export default CategoryList

const StyledWrapper = styled.div`
  .top {
    display: none;
    padding: 0.25rem;
    margin-bottom: 0.75rem;

    @media (min-width: 1024px) {
      display: block;
    }
  }

  .list {
    display: flex;
    margin-bottom: 1.5rem;
    gap: 0.25rem;
    overflow: scroll;

    scrollbar-width: none;
    -ms-overflow-style: none;
    ::-webkit-scrollbar {
      width: 0;
      height: 0;
    }

    @media (min-width: 1024px) {
      display: block;
    }

    a {
      display: block;
      padding: 0.25rem;
      padding-left: 1rem;
      padding-right: 1rem;
      margin-top: 0.25rem;
      margin-bottom: 0.25rem;
      border-radius: 0.75rem;
      font-size: 0.875rem;
      line-height: 1.25rem;
      color: ${({ theme }) => theme.colors.gray10};
      flex-shrink: 0;
      cursor: pointer;

      :hover {
        background-color: ${({ theme }) => theme.colors.gray4};
      }
      &[data-active="true"] {
        color: ${({ theme }) => theme.colors.gray12};
        background-color: ${({ theme }) => theme.colors.gray4};

        :hover {
          background-color: ${({ theme }) => theme.colors.gray4};
        }
      }
    }
  }
`
