import { connect } from 'react-redux';
import { authOperations } from 'store/modules/Platform/modules/Auth';
import Router from './component';

const mapStateToProps = ({ Platform: { Auth } }) => ({
  Auth
});

const mapDispatchToProps = {
  ...authOperations
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Router);
