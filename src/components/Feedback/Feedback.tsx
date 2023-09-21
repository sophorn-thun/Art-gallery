import { useState } from 'react';
import styles from './Feedback.module.css';

interface Props {
  imageId: string;
}
function FeedbackForm({ imageId }: Props) {
  const [feedback, setFeedback] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Here, you might want to save the feedback to a database, context, or elsewhere
    console.log(`Feedback for image ${imageId}: ${feedback}`);
  };

  return (
    <form onSubmit={handleSubmit} className={styles['feedback-form']}>
      <textarea
        value={feedback}
        onChange={(e) => setFeedback(e.target.value)}
        placeholder="Share your thoughts..."
      />
      <button type="submit">Save</button>
    </form>
  );
}

export default FeedbackForm;
