
import './Loading.css'; // Pour le style

const Loading = () => {
  return (
    <div className="loading-container">
      <div className="loading-icon">
        {/* Utilisation d'une icône FontAwesome */}
        <i className="fas fa-spinner fa-spin"></i>
      </div>
    </div>
  );
};

export default Loading;
