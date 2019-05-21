import { connect } from 'react-redux';
import { authOperations } from 'store/modules/Platform/modules/Auth';
import Login from './component';

const mapStateToProps = ({ Platform }) => ({
  Platform
});

const mapDispatchToProps = {
  ...authOperations
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
