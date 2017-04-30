import React, { Component as ReactComponent } from 'react';

export default OriginalComponent => class CollapsibleComponent extends ReactComponent {

  state = {
    openItemId: null
  }

  render() {
    return <OriginalComponent {...this.props} isOpen={this.isOpen} toggleOpen={this.toggleOpen} />;
  }

  isOpen = openItemId => openItemId === this.state.openItemId;

  toggleOpen = openItemId => ev => {
    this.setState(prevState => {
      if (prevState.openItemId === openItemId) {
        return {
          openItemId: null
        }
      }

      return {openItemId};
    })
  }

}