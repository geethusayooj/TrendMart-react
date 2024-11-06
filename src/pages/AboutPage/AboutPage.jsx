import React from "react";
import "./AboutPage.css";

const AboutPage = () => {
  return (
    <div className="about-page-container">
      <h1>Welcome to TrendMart</h1>

      <section className="section">
        <h2>Why Choose TrendMart?</h2>
        <ul>
          <li>
            <strong>Wide Range of Products:</strong> At TrendMart, we offer an
            extensive and diverse collection of products to meet every need and
            desire. Whether you’re shopping for the latest cutting-edge
            electronics, stylish fashion apparel, timeless jewelry, or home
            essentials that blend functionality with style, we have it all. From
            top-rated gadgets and smart devices to on-trend clothing,
            accessories, and decor, we’ve curated a shopping experience that
            brings you the best of the best across multiple categories. No
            matter what you’re looking for, TrendMart ensures that you find
            exactly what you need – all in one convenient online store.
          </li>
          <li>
            <strong>User-Friendly Interface:</strong> A smooth, easy-to-navigate
            platform for a hassle-free shopping experience.
          </li>
        </ul>
      </section>

      <section className="section">
        <h2>Our Vision</h2>
        <p>
          At TrendMart, we aim to bring the latest trends to a global audience,
          with an emphasis on convenience, security, and customer satisfaction.
          We’re constantly evolving to provide the best online shopping
          experience for our users, with a focus on innovation and future
          growth.
        </p>
      </section>

      <section className="section">
        <h2>Customer Service</h2>
        <p>
          Your satisfaction is our top priority. If you have any questions or
          concerns, our dedicated customer service team is here to assist you.
          We offer:
        </p>
        <ul>
          <li>
            <strong>24/7 Support:</strong> Reach out to our team anytime, and
            we’ll ensure your issues are addressed promptly.
          </li>
          <li>
            <strong>Returns & Refunds:</strong> If you're not satisfied with
            your purchase, we provide easy return and refund processes.
          </li>
          <li>
            <strong>Product Inquiries:</strong> Have questions about a product?
            Our team can help with detailed information and recommendations.
          </li>
          <li>
            <strong>Order Assistance:</strong> Need help tracking your order or
            making changes? We’ve got you covered.
          </li>
        </ul>
        <p>
          At TrendMart, we’re committed to making your shopping experience
          simple, secure, and satisfying.
        </p>
      </section>
    </div>
  );
};

export default AboutPage;
