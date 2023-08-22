/**
 * Contains the miscellaneous route handlers.
 * @author Nadduli Daniel <https://github.com/nadduli>
 */
class AppController {
  static getHomepage(request, response) {
    response.status(200).send('Hello Holberton School!');
  }
}

export default AppController;
module.exports = AppController;
