import Header from '../components/Header';
import ServiceCard from '../components/ServiceCard';

import artIcon from '../assets/artndesign.png';
import animationsIcon from '../assets/animations.png';
import productVideosIcon from '../assets/videoproducts.png';
import collabIcon from '../assets/collabmanagement.png';
import marketingIcon from '../assets/marketing.png';
import socialIcon from '../assets/socialmedia.png';
import communityIcon from '../assets/communitymanagement.png';
import productMgmtIcon from '../assets/productmanagement.png';
import advisoryIcon from '../assets/advisory.png';
import devsupportIcon from '../assets/devsupport.png';

const services = [
  { title: 'Art & Design', icon: artIcon },
  { title: 'Animations', icon: animationsIcon },
  { title: 'Product Videos', icon: productVideosIcon },
  { title: 'Collab Management', icon: collabIcon },
  { title: 'Marketing', icon: marketingIcon },
  { title: 'Social Media Management', icon: socialIcon },
  { title: 'Community Management', icon: communityIcon },
  { title: 'Product Management', icon: productMgmtIcon },
  { title: 'Advisory', icon: advisoryIcon },
  { title: 'Dev support', icon: devsupportIcon }
];

const Services = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />

      <main className="pt-28 pb-20 px-6 sm:px-10">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-lg text-gray-300 mb-10">We build products, communities and creative content that move brands forward.</p>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 lg:gap-12 items-start justify-center">
            {services.map((s) => (
              <div key={s.title} className="flex justify-center">
                <ServiceCard title={s.title} icon={s.icon} />
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Services;
