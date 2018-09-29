import React, { Component } from 'react';

class Play extends Component {


  constructor(props) {

    super(props);
    this.state = { playFun: "playFun" };
  }

  componentDidMount() {
    console.log("here inside play");



    // grant_type=password&username=john.doe@ep.com&password=password&scope=newell&role=REGISTERED


    
    // $('#oAuthSubmit').click(function(event){
    //   // get relevant form variables
    //   var userName = $('#oAuthUserName').val();
    //   var userPassword = $('#oAuthPassword').val();
    //   var SCOPE = 'mobee';
    //   var ROLE = 'REGISTERED';
    //   // assemble message form of post
    //   var authString = 'grant_type=password&';
    //     authString += 'username=' + userName + '&password=' + userPassword;
    //     authString += '&scope=' + SCOPE + '&role=' + ROLE;
      
    //   // post to server
    //  $.ajax({
    //     type: 'POST',
    //     url: '/cortex/oauth2/tokens',
    //     contentType: 'application/x-www-form-urlencoded;charset=utf-8',
    //     data: authString,
    //     success:function(json, responseStatus, xhr){
    //       // auth header value to be used in subsequent request headers
    //       // this value should be persisted (localStorage) and returned with
    //       // each request
    //       var authReqHeaderString = 'Bearer ' + json.access_token;
    //     },
    //     error:function(response){
    //       // handle exceptions from Cortex:
    //       // handle bad credentials
    //       // handle missing username/password
    //     }
    //   });

    // end of button click
    // });

    console.log("end of compenentDidMount");
  }

  render() {
    return (
      <div className="marginTop15px">
        This is the Play component. Lot of work here. Baseball Mits!
      </div>
    );
  }
}

export default Play;