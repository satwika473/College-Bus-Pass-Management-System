import './Home.css';
export const Home=()=>{return(
  <>
  
    <meta charSet="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />

    <link
      href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap"
      rel="stylesheet"
    />
 
    {/* Navbar */}
    
      <div className='mymain'> 
    {/* Hero Section */}
    <section className="hero">
      <h1>NEC COLLEGE BUS MANAGEMENT SYSTEM</h1>
      <p>Experienced &amp; Reliable Service, since 1998</p>
      <a href="#about" className="btn">
        Know More
      </a>
    </section>
    {/* Mission & Vision Section */}
    <section id="mission-vision" className="mission-vision">
      <div className="container">
        <div className="section-header">
          <h2>Mission &amp; Vision</h2>
        </div>
        <div className="content">
          <div className="mission">
            <h3>Mission</h3>
            <p>Our mission is to revolutionize the process of issuing bus passes for college students by providing a secure, user-friendly, and transparent digital platform. We aim to simplify and speed up the application, verification, and approval process, minimizing paperwork and reducing manual errors. By enabling real-time access to relevant information, we foster accountability and trust among students, department coordinators, and administrators.</p>
            <img
              src="https://i.postimg.cc/d0MYmQsn/pngtree-portrait-of-businessman-double-exposure-effect-with-hong-kong-city-skyline-photo-image-23109.jpg"
              alt="Mission Image"
            />
          </div>
          <div className="vision">
            <h3>Vision</h3>
            <p>We envision creating a seamless and sustainable bus pass management system that bridges the gap between students, college administration, and transportation services. Our goal is to set new standards for efficiency, inclusivity, and accessibility in campus transportation. By leveraging technology and innovation, we aspire to build a centralized system that evolves with institutional needs and promotes a greener future.</p>
            <img
              src="https://i.postimg.cc/qRnknhHk/S2-E-Culture-500-Sull-Culture-10-Things-1290x860-1.jpg"
              alt="Vision Image"
            />
          </div>
        </div>
      </div>
    </section>
    <meta charSet="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>About Us</title>
    <link rel="stylesheet" href="styles.css" />
    {/* About Us Section */}
    <section id="about" className="about-us">
      <div className="container">
        <h1 >About Us</h1>
        <p>Established in 1998, Narasaraopeta Engineering College, the first technical education institution in the region, has been excelling in research and entrepreneurship ever since its inception. In the last two decades, it has given hundreds of engineers and leaders to the nation.</p>
        <p>Coming to this project, We are a team dedicated to simplifying and enhancing the process of managing bus passes for college students. Understanding the challenges of traditional, paper-based systems, we have developed a digital solution that streamlines the application, verification, and approval process. Our platform connects students, department coordinators, and administrators, ensuring seamless communication and efficient operations.</p>
        <p>With a focus on user-friendliness, security, and eco-conscious practices, our system reduces administrative workload while providing students with a hassle-free way to access their bus passes. By integrating real-time updates, centralized management, and customizable features, we aim to make transportation management more efficient and sustainable for colleges.Our commitment is to deliver innovative solutions that empower institutions, enhance the student experience, and contribute to a greener, smarter future.</p>
      </div>
    </section>
    <meta charSet="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Our Services</title>
    <link rel="stylesheet" href="styles.css" />
    {/* Our Services Section */}
    <section id="services" className="our-services">
      <div className="container">
        <h1 >Our Services</h1>
        <p>
          Explore our wide range of services aimed at enhancing digital platform for managing bus passes, tailored to meet the needs of students, department coordinators, and administrators. Our services include:
        </p>
        <div className="services-grid">
          <div className="service-item">
            <h2>Student Portal</h2>
            <p>Secure login for students to apply for bus passes.
                 Easy-to-fill forms for pass applications.
                 Real-time status updates on application progress.
                 Access to view and download issued bus passes.</p>
          </div>
          <div className="service-item">
            <h2>Coordinator Portal</h2>
            <p>A dedicated login for department coordinators.
Verification of student details and eligibility.
Forwarding verified applications to administrators for final approval.

            </p>
          </div>
          <div className="service-item">
            <h2>Admin Portal</h2>
            <p>
Full administrative control over the system.
Issuance of bus passes to approved students.
Management of bus routes, bus schedules, and the number of buses available.
CRUD operations for all data, ensuring accurate and up-to-date information.
            </p>
          </div>
          <div className="service-item">
            <h2>Centralized Management</h2>
            <p>
            Streamlined communication between students, coordinators, and administrators.
            A unified platform for tracking and managing all pass-related activities.            </p>
          </div>
        </div>
      </div>
    </section>
    <section id="services" className="our-services">
      <div className="container">
        <h1 >Contact Us</h1>
        
        <div className="services-grid">
          <div className="service-item">
            <h2>Bus InCharge</h2>
            <p>Name: Ravi</p>
            <p>Contact Number: 912345678</p>
          </div>
          <div className="service-item">
          <h2>Office InCharge</h2>
            <p>Name: Ramu</p>
            <p>Contact Number: 912345678</p>
          </div>
          
          </div>
          </div>
          </section>
          {/* Our Services Section */}


   </div>
  </>
  )}