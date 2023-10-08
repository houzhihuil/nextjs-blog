// pages/posts/[id].js
import Layout from '../../components/layout';
import { useRouter } from 'next/router';
import Head from 'next/head';

function PostPage() {
  const router = useRouter();
  const { id } = router.query; // Access the value of 'id' from the query object

  return (
    <Layout>
      <Head>
        <title>Article: {id}</title>
      </Head>
    <div>
      <h1>Post ID: {id}</h1>
      {/* Rest of your component */}
    </div>
    </Layout>
  );
}

export default PostPage;
 




 