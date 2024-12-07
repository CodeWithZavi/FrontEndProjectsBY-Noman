<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>HTML & CSS Practice Projects - CodeWithZavi</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <header class="header">
    <h1>🌟 HTML & CSS Practice Projects</h1>
    <h2>By <span class="highlight">CodeWithZavi</span></h2>
  </header>

  <section class="content">
    <p>Welcome to a curated collection of <strong>10 amazing HTML & CSS practice projects</strong> designed to help you learn and master the foundations of web development.</p>
    <div class="cta-buttons">
      <a href="#" class="btn">View All Projects Live</a>
      <a href="#" class="btn">Download Files</a>
    </div>

    <h3>🚀 Explore the Projects:</h3>
    <ul class="projects-list">
      <li><strong>Tribute Website:</strong> A simple and elegant page to pay homage to your favorite personality or cause.</li>
      <li><strong>Job Application Form:</strong> A responsive and modern job application form template with creative fields and styling.</li>
      <li><strong>Parallax Website:</strong> A stunning website that uses parallax effects for an engaging user experience.</li>
      <li><strong>Landing Page:</strong> A clean and professional landing page, perfect for showcasing products or services.</li>
      <li><strong>Restaurant Website:</strong> A delightful design tailored to food lovers with menus, images, and contact details.</li>
      <li><strong>Music Website:</strong> Vibrant and dynamic design to share or stream music content.</li>
      <li><strong>YouTube Clone:</strong> A replica of YouTube's homepage to practice layout and media embedding.</li>
      <li><strong>JavaScript Documentation:</strong> A technical yet sleek documentation-style webpage, great for learners and reference.</li>
      <li><strong>Blog Website:</strong> A modern blog layout for sharing articles, images, and ideas.</li>
      <li><strong>Portfolio Website:</strong> A personalized and responsive portfolio to showcase your skills and projects.</li>
    </ul>

    <h3>💡 Motivation:</h3>
    <blockquote>“Every expert was once a beginner. The only way to get ahead is to start today.”</blockquote>
    <p>These projects are a testament to the power of consistent practice. They are designed to challenge you, inspire creativity, and fuel your passion for web development.</p>

    <h3>📸 Sneak Peek:</h3>
    <div class="image-preview">
      <img src="https://via.placeholder.com/800x400.png?text=HTML+%26+CSS+Projects+by+CodeWithZavi" alt="Projects Preview">
    </div>

    <h3>🌟 Connect with Me:</h3>
    <p>
      📧 <a href="mailto:codewithzavi@example.com">Email Me</a><br>
      🌐 <a href="#">Visit My Portfolio</a>
    </p>
  </section>

  <footer class="footer">
    <p>Keep learning, keep building, and remember – the best way to predict the future is to create it. <strong>Happy coding! 🎉</strong></p>
  </footer>
</body>
</html>
body {
  font-family: Arial, sans-serif;
  line-height: 1.6;
  margin: 0;
  padding: 0;
  background-color: #f7f7f7;
  color: #333;
}

.header {
  text-align: center;
  padding: 2rem;
  background: linear-gradient(135deg, #ff7eb3, #ff758c);
  color: white;
}

.header h1 {
  font-size: 2.5rem;
  margin: 0;
}

.header h2 {
  font-size: 1.5rem;
  margin: 0.5rem 0;
}

.highlight {
  color: #ffd700;
}

.content {
  max-width: 800px;
  margin: 2rem auto;
  padding: 1rem;
  background: white;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
}

.cta-buttons {
  text-align: center;
  margin: 1rem 0;
}

.btn {
  display: inline-block;
  text-decoration: none;
  color: white;
  background: #0073e6;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  margin: 0 0.5rem;
  transition: background 0.3s;
}

.btn:hover {
  background: #005bb5;
}

.projects-list {
  list-style-type: none;
  padding: 0;
}

.projects-list li {
  margin: 0.5rem 0;
}

blockquote {
  font-style: italic;
  color: #555;
  border-left: 4px solid #ff758c;
  padding-left: 1rem;
  margin: 1rem 0;
}

.image-preview img {
  max-width: 100%;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.footer {
  text-align: center;
  padding: 1rem;
  background: #333;
  color: white;
}
