import { connect } from 'react-redux';
import { authOperations } from 'store/modules/Platform/modules/Auth';
import MainLayout from './component';

const mapStateToProps = ({
  Platform: {
    Auth: { isLogined }
  }
}) => ({
  isLogined
});

const mapDispatchToProps = {
  ...authOperations
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainLayout);
