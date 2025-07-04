import React from 'react';

const Footer = () => (
  <footer style={{
    background: '#f8f9fa',
    padding: '1rem',
    textAlign: 'center',
    fontSize: '0.9rem',
    borderTop: '1px solid #eaeaea',
    marginTop: '2rem'
  }} >
    <div>
      Created by <strong>Tristan Robichaud</strong> & <strong>Zachary Shewan</strong> &middot;
      <a href="https://github.com/UOttawa-Project-Sharing/seg3525-assignment4" target="_blank" rel="noopener noreferrer">
           GitHub Repository
      </a>
    </div>
    <div style={{ color: '#888', marginTop: '0.5rem' }}>
      This is a mock website for demonstration purposes only.
    </div>
  </footer>
);

export default Footer;
