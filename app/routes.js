module.exports = function(app) {
  /**
   * API routes
   */
  app.get('/', function(req, res) {
      res.json({
        message: 'Welcome to Your App'
      })
  });
  
  /**
   * Health Check route 
   * */  
  app.get('/health', function(req, res) {
    res.json({
      status: 'Healthy'
    })
});
};
