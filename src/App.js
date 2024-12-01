import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Helmet } from "react-helmet";
import { LandingPage } from "./pages/landingPage";

function App() {
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Bug Bug Consulting",
    url: "https://www.bugbug.com",
    logo: "https://www.bugbug.com/logo.png",
    sameAs: ["https://www.facebook.com/bugbugconsulting", "https://twitter.com/bugbugconsulting"],
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Helmet>
                <title>Bug Bug Consulting - AI Solutions for Agriculture</title>
                <meta
                  name="description"
                  content="Bug Bug Consulting pioneers eco-conscious, AI-driven solutions for insect monitoring in agriculture. Our cutting-edge tools blend sophisticated artificial intelligence with an organic, earth-inspired approach, creating sustainable practices that benefit both crop yields and the environment."
                />
                <meta name="keywords" content="Bug Bug Consulting, AI, eco-conscious solutions, insect monitoring, sustainable agriculture, artificial intelligence" />
                <script type="application/ld+json">{JSON.stringify(schemaMarkup)}</script>
              </Helmet>
              <LandingPage />
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
