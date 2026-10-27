import { Helmet } from "react-helmet-async";
import BlogsHeader from "@/components/blogs/BlogsHeader";
import LaunchApp from "@/components/blogs/LaunchApp";
import TrendingReviews from "@/components/blogs/TrendingReviews";

const BlogsPage = () => (
  <>
    <Helmet>
      <title>AQuadic Blog | Software and Product Insights</title>
      <meta name="description" content="Read AQuadic articles and practical insights on software, product design, web development, and mobile apps." />
      <link rel="canonical" href="https://aquadic.com/blogs" />
    </Helmet>
    <div>
      <BlogsHeader />
      <TrendingReviews />
      <LaunchApp />
    </div>
  </>
);

export default BlogsPage;
