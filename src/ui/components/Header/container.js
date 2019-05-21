import { connect } from 'react-redux';
import { authOperations } from 'store/modules/Platform/modules/Auth';
import Header from './component';

const mapStateToProps = ({ Platform: { User } }) => ({
  User
});

const mapDispatchToProps = {
  ...authOperations
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
