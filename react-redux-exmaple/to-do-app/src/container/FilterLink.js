import { connect } from 'react-redux'
import { setVisibilityFilter } from '../features/filters/filtersSlice'
import Link from '../components/Link'

const mapDispatchToProps = { setVisibilityFilter }

const mapStateToProps = (state, ownProps) => ({
  active: ownProps.filter === state.visibilityFilter
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Link)