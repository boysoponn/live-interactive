import React, { Component } from 'react';
import _ from 'lodash';
import '../css/master.css';
import config from '../config';
import Input from './selectInput';
import VideoLink from './detail/input';
import Preview from './selectPreview';
import Select from './select';
import ShowButton from './detail/showButton';
import imgSelect1 from '../image/1.png';
import imgSelect2 from '../image/2.png';
import Grid from '@material-ui/core/Grid';

const shop=[
    {id: 0, name: 'jean', price:500 ,img :'https://www.stickpng.com/assets/images/580b57fbd9996e24bc43bf39.png'},
    {id: 1, name: 'shoe', price:1400, img :'https://s1.r29static.com/bin/shop/83a/x/2196108/image.png'},
    {id: 2, name: 'T-shirt', price:900, img :'https://purepng.com/public/uploads/large/purepng.com-t-shirtt-shirtfabrict-shapegramnets-1421526429337ircsl.png'}
  ];

class Master extends Component {
state={  
  data:null,
  shop:shop,
  status:"false",
  select:"A", 
  title1:"",
  description1:"",
  product1:1,
  title2:"",
  description2:"",
  product2:1,
  videoLink:""
}

  componentDidMount(){
    let dbCon = config.database().ref('production1/');
    dbCon.on('value', async (snapshot) => { 
      const snapshotValue = snapshot.val(); 
      let data = _(snapshotValue).value();
      this.setState({
        data:data
      })
      if(data !== null){
        this.setState({
          videoLink:data.videoLink,
          status:data.status,
          select:data.select,
          title1:data.popup1.title,
          description1:data.popup1.description,
          product1:data.popup1.product,

          title2:data.popup2.title,
          description2:data.popup2.description,
          product2:data.popup2.product,
        })
      }
    })
  }

  create=()=>{
    let dbCon = config.database().ref('production1/');
    dbCon.update({
      status:false,
      select:"A",
      videoLink:"https://www.facebook.com/bentoweb/videos/708174836278787/",
      popup1:{
        title:"title",
        description:"Lorem ipsum dolor sit amet, cu alia theophrastus per. Mollis democritum his ut. Eum in quaeque volutpat. Et qui maiorum consectetuer.",
        product:1,
      },
      popup2:{
        title:"title",
        description:"Lorem ipsum dolor sit amet, cu alia theophrastus per. Mollis democritum his ut. Eum in quaeque volutpat. Et qui maiorum consectetuer.",
        product:1
      }
    }); 
  }

  save=()=>{
    let dbCon = config.database().ref('production1/');
    dbCon.update({
      select:this.state.select,
      videoLink:this.state.videoLink
    }); 
    dbCon.child('popup1').update({
      title:this.state.title1,
      description:this.state.description1,
      product:this.state.product1,
    }); 
    dbCon.child('popup2').update({
      title:this.state.title2,
      description:this.state.description2,
      product:this.state.product2,
    }); 
  }

  show=()=>{
    let change = !this.state.status;
    let dbCon = config.database().ref('production1/');
    dbCon.update({
      status:change
    }); 
  }

  onChangeValue=state=>(e)=>{
    this.setState({
      [state]:e.target.value
    })
  }


  render() {
    return (
      <Grid container>
        <Grid 
          item xs={12}
          container
          direction="row"
          justify="center"
          alignItems="center"
        >
          <Preview
            {...this.state}
          />  
        </Grid>
        <Grid item xs={9}>
          <Grid container>
            <Grid item xs={12}>
              <Grid item xs={12}
                container
                direction="row"
                justify="center"
                alignItems="center"
              >
                <VideoLink
                label="Link"
                placeholder={"Video Link"}
                onChange={this.onChangeValue('videoLink')}
                value={this.state.videoLink}
                /> 
              </Grid>
              <Grid container>
                <Grid item xs={12}      
                  container
                  direction="row"
                  justify="center"
                  alignItems="center"
                >
                  <Select img={imgSelect1} checked={this.state.select === 'A'} value="A" onChange={this.onChangeValue('select')}/>
                  <Select img={imgSelect2} checked={this.state.select === 'B'} value="B" onChange={this.onChangeValue('select')}/>
                </Grid>
              </Grid>
              <Grid item xs={12}>
                <Input 
                  {...this.state} 
                  shop={this.state.shop} 
                  onChangeProduct1={this.onChangeValue('product1')}
                  onChangeTitle1={this.onChangeValue('title1')}
                  onChangeDescription1={this.onChangeValue('description1')}

                  onChangeProduct2={this.onChangeValue('product2')}
                  onChangeTitle2={this.onChangeValue('title2')}
                  onChangeDescription2={this.onChangeValue('description2')}
                />
              </Grid>
              <Grid item xs={12}
                container
                direction="row"
                justify="center"
                alignItems="center"
              >
                 <ShowButton label="SAVE" onClick={this.save}/>
              </Grid>
            </Grid>  
          </Grid>
        </Grid>
        <Grid 
          item xs={3}
          container
          direction="row"
          justify="center"
          alignItems="center"
        >
          <ShowButton label={!this.state.status?"SHOW":"HIDDEN"} onClick={this.show}/>
        </Grid>
      </Grid>
    );
   }
  }

  export default Master;