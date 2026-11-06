import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { CraftMap } from './components/CraftMap';
import { CraftCatalog } from './components/CraftCatalog';
import { WorkshopHub } from './components/WorkshopHub';
import { ArtisanRegistry } from './components/ArtisanRegistry';
import { CraftQuiz } from './components/CraftQuiz';
import { CraftDetailModal } from './components/CraftDetailModal';
import { Footer } from './components/Footer';
import { CRAFT_VILLAGES } from './data/craftsData';
import { CraftVillage } from './types/craft';

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('overview');
  const [selectedCraft, setSelectedCraft] = useState<CraftVillage | null>(null);
  const [selectedWorkshopId, setSelectedWorkshopId] = useState<string>('pottery');

  const handleOpenWorkshop = (craftId?: string) => {
    if (craftId) {
      setSelectedWorkshopId(craftId);
    }
    setActiveTab('workshops');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigate = (tab: string) => {
    setActiveTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF7F2] text-stone-900 selection:bg-amber-200 selection:text-amber-950">
      {/* Top Bar Navigation */}
      <Navbar
        activeTab={activeTab}
        onNavigate={handleNavigate}
        onOpenWorkshop={() => handleOpenWorkshop('pottery')}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {activeTab === 'overview' && (
          <div>
            <HeroSection
              onExploreMap={() => handleNavigate('map')}
              onOpenWorkshop={() => handleOpenWorkshop('pottery')}
              onExploreCatalog={() => handleNavigate('catalog')}
            />

            {/* Interactive Craft Map Section */}
            <CraftMap
              onSelectCraft={(craft) => setSelectedCraft(craft)}
              onOpenWorkshop={(id) => handleOpenWorkshop(id)}
            />

            {/* Virtual Workshop Teaser / Hub Section */}
            <div className="bg-[#F4EFE6]/70 border-y border-stone-200 py-6">
              <WorkshopHub initialWorkshop={selectedWorkshopId} />
            </div>

            {/* Craft Catalog Section */}
            <CraftCatalog
              onSelectCraft={(craft) => setSelectedCraft(craft)}
              onOpenWorkshop={(id) => handleOpenWorkshop(id)}
            />

            {/* Master Artisans & Living Treasures */}
            <ArtisanRegistry />

            {/* Knowledge Quiz & Certification */}
            <CraftQuiz />
          </div>
        )}

        {activeTab === 'map' && (
          <div className="py-8">
            <CraftMap
              onSelectCraft={(craft) => setSelectedCraft(craft)}
              onOpenWorkshop={(id) => handleOpenWorkshop(id)}
            />
          </div>
        )}

        {activeTab === 'catalog' && (
          <div className="py-8">
            <CraftCatalog
              onSelectCraft={(craft) => setSelectedCraft(craft)}
              onOpenWorkshop={(id) => handleOpenWorkshop(id)}
            />
          </div>
        )}

        {activeTab === 'workshops' && (
          <div className="py-8">
            <WorkshopHub initialWorkshop={selectedWorkshopId} />
          </div>
        )}

        {activeTab === 'artisans' && (
          <div className="py-8">
            <ArtisanRegistry />
          </div>
        )}

        {activeTab === 'quiz' && (
          <div className="py-8">
            <CraftQuiz />
          </div>
        )}
      </main>

      {/* Dossier Detail Modal */}
      <CraftDetailModal
        craft={selectedCraft}
        onClose={() => setSelectedCraft(null)}
        onOpenWorkshop={(id) => handleOpenWorkshop(id)}
      />

      {/* Footer */}
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}
