import "./App.css";
import BlogDataTable from "./pages/BlogDataTable";
import Layout from "./components/Layout";

const Content = () => {
  return (
    <Layout>
      <BlogDataTable />
    </Layout>
  );
};

const App = () => (
  <div>
    <Content />
  </div>
);
export default App;
