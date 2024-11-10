import Layout from '../components/layout'

export default function Home() {
  return (
    <Layout>
      <h1>Welcome to My Website</h1>
      <div className="grid">
        <div className="card">
          <h2>Feature 1</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className="card">
          <h2>Feature 2</h2>
          <p>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
        <div className="card">
          <h2>Feature 3</h2>
          <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>
        </div>
      </div>
    </Layout>
  )
}