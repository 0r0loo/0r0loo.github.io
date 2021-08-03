import React, { FunctionComponent, useMemo } from 'react';
import styled from '@emotion/styled';
import Introduction from 'components/main/Introduction';
import CategoryList, { CategoryListProps } from 'components/main/CategoryList';
import PostList, { PostType } from 'components/main/PostList';
import { graphql } from 'gatsby';
import { PropfileImageProps } from 'components/main/ProfileImage';
import queryString, { ParsedQuery } from 'query-string';
import Template from 'components/common/Template';

interface IndexPageProps {
  location: {
    search: string;
  };
  data: {
    site: {
      siteMetadata: {
        title: string;
        description: string;
        siteUrl: string;
      };
    };
    allMarkdownRemark: {
      edges: PostType[];
    };
    file: {
      publicURL: string;
      childImageSharp: {
        fluid: PropfileImageProps['profileImage'];
      };
    };
  };
}

const IndexPage: FunctionComponent<IndexPageProps> = function ({
  location: { search },
  data: {
    site: {
      siteMetadata: { title, description, siteUrl },
    },
    allMarkdownRemark: { edges },
    file: {
      publicURL,
      childImageSharp: { fluid },
    },
  },
}) {
  const parsed: ParsedQuery<string> = queryString.parse(search);
  const selectedCategory: string =
    typeof parsed.category !== 'string' || !parsed.category
      ? 'All'
      : parsed.category;

  const categoryList = useMemo(
    () =>
      edges.reduce(
        (
          list: CategoryListProps['categoryList'],
          {
            node: {
              frontmatter: { categories },
            },
          }: PostType,
        ) => {
          categories.forEach(category => {
            if (list[category] === undefined) list[category] = 1;
            else list[category]++;
          });
          list['All']++;
          return list;
        },
        { All: 0 },
      ),
    [],
  );

  return (
    <>
      <Template
        title={title}
        description={description}
        url={siteUrl}
        image={publicURL}
      >
        <Introduction profileImage={fluid} />
        <CategoryList
          selectedCategory={selectedCategory}
          categoryList={categoryList}
        />
        <PostList selectedCategory={selectedCategory} posts={edges} />
      </Template>
    </>
  );
};

export default IndexPage;

export const queryPostList = graphql`
  query queryPostList {
    site {
      siteMetadata {
        title
        description
        siteUrl
      }
    }
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date, frontmatter___title] }
    ) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            title
            summary
            date(formatString: "YYYY.MM.DD.")
            categories
            thumbnail {
              childImageSharp {
                fluid(
                  maxWidth: 768
                  maxHeight: 200
                  fit: INSIDE
                  quality: 100
                ) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }
      }
    }
    file(name: { eq: "profile-image" }) {
      publicURL
      childImageSharp {
        fluid(maxWidth: 120, maxHeight: 120, fit: INSIDE, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;
