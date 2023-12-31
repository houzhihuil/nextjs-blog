import Layout from '../../components/layout';
import { getAllPostIds, getPostData } from '../../lib/posts';
// Add this import
import Head from 'next/head';
// Add this import
import Date from '../../components/date';


export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}
 
export default function Post({ postData }) {
    return (
      <Layout>
        {/* Add this <Head> tag */}
      <Head>
        <title>{postData.title}</title>
      </Head>

        {postData.title}
        <br />
        {postData.id}
        <br />
        {/* Replace {postData.date} with this */}
      <Date dateString={postData.date} />
        <br />
      <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </Layout>
    );
  }