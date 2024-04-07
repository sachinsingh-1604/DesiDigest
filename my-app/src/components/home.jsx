import ScrollableFeed from '../components/ScrollableFeed.js';
import FollowerPanel from '../components/FollowerPanel.js';
import StickyButton from './StickyButton.js';
import { Link } from 'react-router-dom';

const Home = () => {

    return (<>
        <ScrollableFeed />
        <FollowerPanel />
        <Link to='/post'> <StickyButton /></Link>
    </>);
}

export default Home;