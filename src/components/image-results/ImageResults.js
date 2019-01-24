import React, { Component } from 'react';
import PropTypes from 'prop-types';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';

import IconButton from '@material-ui/core/IconButton';
import Icon from '@material-ui/core/Icon';
import Dialog from '@material-ui/core/Dialog';
import Button from '@material-ui/core/Button';

class ImageResults extends Component {
  state = {
    open: false,
    currentImg: ''
  }

  handleOpen = img => {
    this.setState({open: true, currentImg: img});
  }
  handleClose = () => {
    this.setState({open: false});
  }
  render() {
    let imageListContent;

    //const images: this.props.images destructured below
    const { images } = this.props;
    let amount = 28;
    if(images) {
      imageListContent = (
        <GridList cols={4}>
          {images.slice(0,amount).map(img => (
            <GridListTile key={img.data[0].nasa_id} >
            <img src={img.links[0].href} alt={img.data[0].title}/>
              <GridListTileBar
              title={img.data[0].title}
              subtitle={
                <span>
                  by <strong>{img.data[0].secondary_creator}</strong>
                </span>}
                actionIcon={
                  <IconButton onClick={() => this.handleOpen(img.links[0].href)}>
                    <Icon color="primary">zoom_in</Icon>
                  </IconButton>
                }
              />
            >
              
            </GridListTile>
          ))}
        </GridList>

      )
    } else {
      imageListContent = null;
    }
    const actions = [
      <Button label="Close" primary={true} onClick={this.handleClose}></Button>
    ]
    return (
      <div>
        {imageListContent}
        <Dialog 
          actions={actions}
          disableBackdropClick={false}
          open={this.state.open}
          onClose={this.handleClose}
        >
        <img src={this.state.currentImg} alt="" style={{width:'100%'}} />
        </Dialog>
      </div>
    );
  }
}

ImageResults.propTypes = {
  images: PropTypes.array.isRequired
}

export default ImageResults;