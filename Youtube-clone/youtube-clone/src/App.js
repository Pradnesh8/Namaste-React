import './App.css';
import Body from './components/Body';
import Navbar from './components/Navbar';
import Sidenav from './components/Sidenav';

function App() {
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
    <div className='flex flex-col'>
      <Navbar />
      <div className='flex'>
        <Sidenav />
        <Body />
      </div>
    </div>
  );
}

export default App;
