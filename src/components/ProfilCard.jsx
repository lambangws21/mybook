import PropTypes from 'prop-types';

const ProfileCard = ({ name, role, image }) => {
  return (
    <div className="profile-card  bg-white shadow-lg rounded-lg p-6 text-center">
      <img src={image} alt={name} className="w-[130px] h-[132px] rounded-full mx-auto mb-4" />
      <h2 className="text-2xl font-semibold mb-2">{name}</h2>
      <p className="text-gray-600">{role}</p>
    </div>
  );
};

ProfileCard.propTypes = {
  name: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default ProfileCard;
