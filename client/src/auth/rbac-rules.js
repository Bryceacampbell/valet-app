const rules = {
    visitor: {
      static: [ "home-page:visit"]
    },
    writer: {
      static: [
        "home-page:visit",
        "dashboard-page:visit"
      ],
      dynamic: {
        "posts:edit": ({userId, postOwnerId}) => {
          if (!userId || !postOwnerId) return false;
          return userId === postOwnerId;
        }
      }
    },
    admin: {
      static: [
        "home-page:visit",
        "dashboard-page:visit",
        "admin-page:visit",
      ]
    }
  };
  
  export default rules;