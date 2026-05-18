import { useState } from "react";
import { Outlet, useNavigate, useLocation } from "react-router";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { MenuContainer, MenuItem } from "./MenuDock";
import { Plus, X } from "lucide-react";
import { FloatingAiAssistant } from "./FloatingAiAssistant";
import { ScrollToTop } from "./ScrollToTop";

export function Layout() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isAiChatOpen, setIsAiChatOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col relative">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />

      <ScrollToTop />

      {/* Dock at the exact middle of the right hand side / complete right edge */}
      {!isAiChatOpen && (
        <div className="fixed right-4 bottom-4 z-50">
          <MenuContainer>
            {/* First item: always visible menu trigger */}
            <MenuItem>
              {({ isExpanded }) => isExpanded ? (
                <X className="w-5 h-5 md:w-6 md:h-6 text-brand-brown transition-all duration-300" />
              ) : (
                <div className="relative w-full h-full flex items-center justify-center">
                  {/* On mobile: show + icon */}
                  <Plus className="w-5 h-5 md:w-6 md:h-6 text-brand-brown md:hidden animate-fade-in" />
                  {/* On desktop: show Reach Us text */}
                  <span className="hidden md:inline text-sm font-bold text-brand-brown whitespace-nowrap animate-fade-in">
                    Reach Us
                  </span>
                </div>
              )}
            </MenuItem>
            {/* Expandable page navigation items: exactly 3 items in order */}
            <MenuItem 
              icon={<img src="/icons/telephone.png" className="w-6 h-6 md:w-8 md:h-8 object-contain" alt="Call Us" />} 
              onClick={() => window.open("tel:+918334049664", "_self")}
              children={<span className="sr-only">Call Us</span>}
            />
            <MenuItem 
              icon={<img src="/icons/whatsapp.png" className="w-6 h-6 md:w-8 md:h-8 object-contain" alt="WhatsApp" />} 
              onClick={() => window.open("https://wa.me/918334049664", "_blank")}
              children={<span className="sr-only">WhatsApp</span>}
            />
            <MenuItem 
              icon={<img src="/icons/chat.png" className="w-6 h-6 md:w-8 md:h-8 object-contain" alt="AI Chat" />} 
              onClick={() => setIsAiChatOpen(true)}
              children={<span className="sr-only">AI Chat</span>}
            />
          </MenuContainer>
        </div>
      )}

      {/* Floating AI Assistant Chat: visible only when isAiChatOpen is true */}
      {isAiChatOpen && (
        <FloatingAiAssistant 
          isChatOpen={isAiChatOpen} 
          setIsChatOpen={setIsAiChatOpen} 
        />
      )}
    </div>
  );
}
