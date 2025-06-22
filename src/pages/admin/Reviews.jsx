import React, { useState } from 'react';
import AdminLayout from '../../layouts/AdminLayout';
import { FaStar } from 'react-icons/fa';

const Reviews = () => {
  const [reviews, setReviews] = useState([
    {
      id: 1,
      name: 'Ramesh',
      comment: 'The Products I purchased was too good.',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer pellentesque id dui eget venenatis. In hac habitasse platea dictumst. Pellentesque lacinia placerat nisl, non sagittis orci porttitor a. Vivamus non urna eget purus auctor venenatis vel vel sem.',
      rating: 5,
      date: 'December 10, 2023',
      ago: '1 day ago',
    },
    {
      id: 2,
      name: 'Suresh',
      comment: 'The Products I purchased was too good.',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer pellentesque id dui eget venenatis. In hac habitasse platea dictumst. Pellentesque lacinia placerat nisl, non sagittis orci porttitor a. Vivamus non urna eget purus auctor venenatis vel vel sem.',
      rating: 4,
      date: 'December 09, 2023',
      ago: '2 day ago',
    },
  ]);

  const handleReject = (id) => {
    const updated = reviews.filter((r) => r.id !== id);
    setReviews(updated);
  };

  return (
    <AdminLayout>
      <div style={styles.page}>
        <h2 style={styles.title}>Reviews & Ratings</h2>
        {reviews.map((r) => (
          <div key={r.id} style={styles.card}>
            <div style={styles.header}>
              <div>
                <h3 style={styles.name}>{r.name}</h3>
                <p style={styles.date}>{r.date}</p>
                <p style={styles.ago}>{r.ago}</p>
              </div>
              <div style={styles.ratingSection}>
                <div style={styles.stars}>
                  {Array.from({ length: 5 }).map((_, i) => (
                    <FaStar
                      key={i}
                      color={i < r.rating ? '#007f5f' : '#ccc'}
                      size={16}
                    />
                  ))}
                </div>
                <span style={styles.score}>({r.rating}/5)</span>
              </div>
            </div>

            <h4 style={styles.comment}>{r.comment}</h4>
            <p style={styles.description}>{r.description}</p>

            <div style={styles.actions}>
              <button style={styles.reject} onClick={() => handleReject(r.id)}>
                Reject
              </button>
              <button style={styles.approve}>Approve</button>
            </div>
          </div>
        ))}
      </div>
    </AdminLayout>
  );
};

const styles = {
  page: {
    padding: '30px',
    backgroundColor: '#eaf8f3',
    minHeight: '100vh',
    boxSizing: 'border-box',
  },
  title: {
    fontSize: '22px',
    color: '#007f5f',
    fontWeight: 'bold',
    marginBottom: '20px',
  },
  card: {
    backgroundColor: '#fff',
    padding: '20px 25px',
    borderRadius: '12px',
    marginBottom: '20px',
    boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
    borderLeft: '5px solid #007f5f',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '10px',
  },
  name: {
    fontSize: '16px',
    color: '#000',
    marginBottom: 4,
  },
  date: {
    fontSize: '13px',
    color: '#666',
    marginBottom: 2,
  },
  ago: {
    fontSize: '12px',
    color: '#888',
  },
  ratingSection: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
  },
  stars: {
    display: 'flex',
    gap: '2px',
  },
  score: {
    fontSize: '13px',
    color: '#333',
    marginTop: '2px',
  },
  comment: {
    margin: '10px 0 5px',
    fontWeight: 'bold',
    fontSize: '15px',
    color: '#333',
  },
  description: {
    fontSize: '14px',
    color: '#444',
    marginBottom: '15px',
    lineHeight: '1.5',
  },
  actions: {
    display: 'flex',
    justifyContent: 'flex-end',
    gap: '10px',
  },
  approve: {
    backgroundColor: '#004b23',
    color: '#fff',
    border: 'none',
    padding: '8px 16px',
    borderRadius: '6px',
    cursor: 'pointer',
  },
  reject: {
    backgroundColor: '#d00000',
    color: '#fff',
    border: 'none',
    padding: '8px 16px',
    borderRadius: '6px',
    cursor: 'pointer',
  },
};

export default Reviews;
