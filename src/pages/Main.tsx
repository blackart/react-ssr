import * as React from 'react';
import {Link} from 'react-router-dom';

class Main extends React.Component {
    render() {
        return (
          <div>
              <nav>
                  <ul>
                      <li><Link to='/'>Main</Link></li>
                      <li><Link to='/page1'>Page 1</Link></li>
                      <li><Link to='/page2'>Page 2</Link></li>
                  </ul>
              </nav>
          </div>
        );
    }
}

export default Main;
