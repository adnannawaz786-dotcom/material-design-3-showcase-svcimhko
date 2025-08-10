import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Layout from '../components/Layout';

export default function Home() {
  const [selectedComponent, setSelectedComponent] = useState('buttons');
  const [isFloatingActionOpen, setIsFloatingActionOpen] = useState(false);
  const [chipStates, setChipStates] = useState({
    filter1: false,
    filter2: true,
    filter3: false
  });

  const components = {
    buttons: {
      title: 'Buttons',
      description: 'Material Design 3 button variants with elevation and state changes',
      content: (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <motion.button
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="bg-primary text-primary-foreground px-6 py-3 rounded-full font-medium shadow-md hover:shadow-lg transition-shadow"
            >
              Filled Button
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="border-2 border-primary text-primary px-6 py-3 rounded-full font-medium hover:bg-primary/10 transition-colors"
            >
              Outlined Button
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="text-primary px-6 py-3 rounded-full font-medium hover:bg-primary/10 transition-colors"
            >
              Text Button
            </motion.button>
          </div>
        </div>
      )
    },
    cards: {
      title: 'Cards',
      description: 'Elevated surfaces with rounded corners and subtle shadows',
      content: (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-surface rounded-3xl p-6 shadow-sm border border-outline-variant"
          >
            <h3 className="text-xl font-semibold mb-2 text-on-surface">Elevated Card</h3>
            <p className="text-on-surface-variant mb-4">
              Cards contain content and actions about a single subject.
            </p>
            <div className="flex gap-2">
              <button className="text-primary font-medium px-4 py-2 rounded-full hover:bg-primary/10">
                Action 1
              </button>
              <button className="text-primary font-medium px-4 py-2 rounded-full hover:bg-primary/10">
                Action 2
              </button>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-surface rounded-3xl p-6 shadow-md border border-outline-variant"
          >
            <div className="w-full h-32 bg-primary/20 rounded-2xl mb-4"></div>
            <h3 className="text-xl font-semibold mb-2 text-on-surface">Media Card</h3>
            <p className="text-on-surface-variant">
              Cards can contain media elements like images or videos.
            </p>
          </motion.div>
        </div>
      )
    },
    chips: {
      title: 'Chips',
      description: 'Compact elements that represent inputs, attributes, or actions',
      content: (
        <div className="space-y-6">
          <div>
            <h4 className="text-lg font-medium mb-3 text-on-surface">Filter Chips</h4>
            <div className="flex flex-wrap gap-2">
              {Object.entries(chipStates).map(([key, isSelected]) => (
                <motion.button
                  key={key}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setChipStates(prev => ({ ...prev, [key]: !prev[key] }))}
                  className={`px-4 py-2 rounded-full border-2 font-medium transition-colors ${
                    isSelected
                      ? 'bg-secondary-container text-on-secondary-container border-secondary-container'
                      : 'border-outline text-on-surface-variant hover:bg-on-surface/8'
                  }`}
                >
                  {isSelected && <span className="mr-2">✓</span>}
                  Filter {key.slice(-1)}
                </motion.button>
              ))}
            </div>
          </div>
          <div>
            <h4 className="text-lg font-medium mb-3 text-on-surface">Assist Chips</h4>
            <div className="flex flex-wrap gap-2">
              <button className="px-4 py-2 rounded-full border border-outline text-on-surface-variant hover:bg-on-surface/8">
                Weather
              </button>
              <button className="px-4 py-2 rounded-full border border-outline text-on-surface-variant hover:bg-on-surface/8">
                Nearby
              </button>
              <button className="px-4 py-2 rounded-full border border-outline text-on-surface-variant hover:bg-on-surface/8">
                Restaurants
              </button>
            </div>
          </div>
        </div>
      )
    },
    navigation: {
      title: 'Navigation',
      description: 'Navigation components including rails, bars, and drawers',
      content: (
        <div className="space-y-6">
          <div>
            <h4 className="text-lg font-medium mb-3 text-on-surface">Navigation Bar</h4>
            <div className="bg-surface-container rounded-2xl p-4 border border-outline-variant">
              <div className="flex justify-around">
                {['Home', 'Search', 'Library', 'Profile'].map((item, index) => (
                  <motion.button
                    key={item}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className={`flex flex-col items-center p-2 rounded-2xl ${
                      index === 0 ? 'bg-secondary-container text-on-secondary-container' : 'text-on-surface-variant'
                    }`}
                  >
                    <div className="w-6 h-6 bg-current rounded mb-1 opacity-60"></div>
                    <span className="text-xs font-medium">{item}</span>
                  </motion.button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )
    },
    fab: {
      title: 'Floating Action Button',
      description: 'Primary action button that floats above content',
      content: (
        <div className="space-y-6">
          <div className="relative">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsFloatingActionOpen(!isFloatingActionOpen)}
              className="bg-primary-container text-on-primary-container w-14 h-14 rounded-2xl shadow-lg hover:shadow-xl transition-shadow flex items-center justify-center font-bold text-xl"
            >
              {isFloatingActionOpen ? '×' : '+'}
            </motion.button>
            <AnimatePresence>
              {isFloatingActionOpen && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8, y: 10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.8, y: 10 }}
                  className="absolute top-16 left-0 space-y-2"
                >
                  {['Edit', 'Share', 'Delete'].map((action) => (
                    <motion.button
                      key={action}
                      whileHover={{ scale: 1.05 }}
                      className="bg-surface text-on-surface px-4 py-2 rounded-full shadow-md border border-outline-variant flex items-center gap-2 whitespace-nowrap"
                    >
                      <div className="w-4 h-4 bg-current opacity-60 rounded"></div>
                      {action}
                    </motion.button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      )
    }
  };

  return (
    <Layout>
      <div className="min-h-screen bg-background">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-on-background mb-4">
              Material Design 3
            </h1>
            <p className="text-xl text-on-background/70 max-w-2xl mx-auto">
              Explore the latest Material Design components with dynamic theming,
              improved accessibility, and expressive design tokens.
            </p>
          </motion.div>

          <div className="flex flex-col lg:flex-row gap-8">
            <motion.nav
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="lg:w-64 flex-shrink-0"
            >
              <div className="bg-surface rounded-3xl p-4 shadow-sm border border-outline-variant">
                <h2 className="text-lg font-semibold mb-4 text-on-surface px-4">Components</h2>
                <div className="space-y-1">
                  {Object.entries(components).map(([key, component]) => (
                    <motion.button
                      key={key}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => setSelectedComponent(key)}
                      className={`w-full text-left px-4 py-3 rounded-2xl font-medium transition-colors ${
                        selectedComponent === key
                          ? 'bg-secondary-container text-on-secondary-container'
                          : 'text-on-surface-variant hover:bg-on-surface/8'
                      }`}
                    >
                      {component.title}
                    </motion.button>
                  ))}
                </div>
              </div>
            </motion.nav>

            <motion.main
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex-1"
            >
              <div className="bg-surface rounded-3xl p-8 shadow-sm border border-outline-variant">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={selectedComponent}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.2 }}
                  >
                    <h2 className="text-3xl font-bold text-on-surface mb-2">
                      {components[selectedComponent].title}
                    </h2>
                    <p className="text-on-surface-variant mb-8">
                      {components[selectedComponent].description}
                    </p>
                    {components[selectedComponent].content}
                  </motion.div>
                </AnimatePresence>
              </div>
            </motion.main>
          </div>
        </div>
      </div>
    </Layout>
  );
}