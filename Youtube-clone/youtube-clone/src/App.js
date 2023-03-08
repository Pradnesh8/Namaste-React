import { useContext, useState } from 'react';
import './App.css';
import Body from './components/Body';
import Navbar from './components/Navbar';
import Sidenav from './components/Sidenav';
import AppContext from './utils/AppContext';
function App() {
  const appContext = useContext(AppContext);
  const [theme, setTheme] = useState(appContext.theme);
  /**
   * Navbar
   *    SideNavIcon
   *    Logo
   *    Search
   *    mic Icon(voice search)
   *    addVideoButton
   *    Notification
   *    Profile
   * SideNav
   *    tabs - divided
   *        1) Home
   *           Shorts
   *           Subscriptions
   *        2) Library
   *           History
   *        3)Explore
    *          Trending
    *          Shopping
    *          Music
    *          Movies
    *          Live
    *          Gaming
    *          News  
    *          Sports
    *          Learning
    *          Fashion & Beauty
   * Body 
   *    TopBar- Badges 
   *        All | MUsic | Dubbing | Gaming | Drama | Comedy
   *    VideoContainer
   *        VideoCard / AD VideoCard
   *            Thumbnail
   *            videoTitle
   *            Views
   *            timestamp
   *            channelname
   *            channelDisplayPicture         
   * */

  return (
    // For toggling theme => theme state
    <AppContext.Provider value={{ theme: theme, setTheme: setTheme }}>
      <div className='flex flex-col'>
        <Navbar />
        <div className='flex'>
          <Sidenav />
          <Body />
        </div>
      </div>
    </AppContext.Provider>
  );
}

export default App;
