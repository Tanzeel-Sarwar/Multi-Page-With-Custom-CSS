import Layout from '../components/layout'
import Image from 'next/image'

export default function About() {
  return (
    <Layout>
      <h1>About Us</h1>
      <div className="flex-container">
        <div className="flex-item mb-1">
          <Image
            src="/public/images/download.jpeg"
            alt="About Us"
            width={300}
            height={300}
          />
        </div>
        <div className="flex-item">
          <p className="mb-1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore
            magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat.
          </p>
          <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>
    </Layout>
  )
}