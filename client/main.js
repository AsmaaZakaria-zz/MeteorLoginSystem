if(Meteor.isClient){

  Template.register.events({
    "submit form": function(event, template){
      event.preventDefault();
      var username = event.target.username.value;
      var password = event.target.password.value;
      console.log("username -->", username);
      console.log("password -->", password);
      console.log("register success !!");
      Accounts.createUser({
        email: username,
        password: password,
      });
    }
  });

  Template.login.events({
    "submit form": function(event, template){
      event.preventDefault();
      var username = event.target.username.value;
      var password = event.target.password.value;
      console.log("username -->", username);
      console.log("password -->", password);
      console.log("login success !!");
      Meteor.loginWithPassword(username, password);
    }
  });

  Template.home.events({
    "click .logout": function(event){
      event.preventDefault();
      Meteor.logout();
      console.log("logout out !!");
    }
  });
  
}
