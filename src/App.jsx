import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HomeScreen from './screens/HomeScreen';
import RocketListScreen from './screens/RocketListScreen';
import DragonListScreen from './screens/DragonListScreen';
import LaunchListScreen from './screens/LaunchListScreen';
import RocketDetailScreen from './screens/RocketDetailScreen';
import DragonDetailScreen from './screens/DragonDetailScreen';
import LaunchDetailScreen from './screens/LaunchDetailScreen';
import { LandpadListScreen } from './screens/LandpadListScreen';
import LandpadDetailScreen from './screens/LandpadDetailScreen';
import { LaunchdpadListScreen } from './screens/LaunchpadListScreen';
import LaunchpadDetailScreen from './screens/LaunchpadDetailScreen';
import { ShipListScreen } from './screens/ShipListScreen';
import ShipsDetailScreen from './screens/ShipDetailScreen';

const App = () => {
  return (
    <>
      <Header />
      <main className='container my-3'>
        <Routes>
          <Route path='/' element={<HomeScreen />} />
          <Route path='/rockets' element={<RocketListScreen />} />
          <Route path='/rockets/:id' element={<RocketDetailScreen />} />
          <Route path='/dragons' element={<DragonListScreen />} />
          <Route path='/dragons/:id' element = {<DragonDetailScreen/>} />
          <Route path='/launches' element={<LaunchListScreen />} />
          <Route path='/launches/:id' element = {<LaunchDetailScreen />}></Route>
          <Route path='/landpads' element = {<LandpadListScreen />} ></Route>
          <Route path='/landpads/:id' element = {<LandpadDetailScreen />}></Route>
          <Route path='/launchpads' element = {< LaunchdpadListScreen/>}></Route>
          <Route path='/launchpads/:id' element={<LaunchpadDetailScreen/>}></Route>
          <Route path='/ships' element={<ShipListScreen/>}></Route>
          <Route path='/ships/:id' element={<ShipsDetailScreen/>}></Route>
        </Routes>
      </main>
    </>
  );
};

export default App;
