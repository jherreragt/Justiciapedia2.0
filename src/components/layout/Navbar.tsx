import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, Search, ChevronDown, Home, Building2, Users, UserCircle, Network, FileText, HandHelping, Book, InfoIcon, Scale } from 'lucide-react';
import { NAV_ITEMS, SITE_NAME } from '../../utils/constants';
import Container from '../ui/Container';
import SearchBar from '../ui/SearchBar';

interface NavItem {
  title: string;
  href: string;
  icon?: React.ElementType;
  children?: NavItem[];
}

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mousedown', handleClickOutside);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setActiveDropdown(null);
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  const handleDropdownToggle = (itemTitle: string) => {
    setActiveDropdown(activeDropdown === itemTitle ? null : itemTitle);
  };

  const getIcon = (title: string) => {
    const iconMap: { [key: string]: React.ElementType } = {
      'Inicio': Home,
      'Instituciones de Justicia': Building2,
      'Comisiones de Postulación': Users,
      'Perfiles de Candidatos': UserCircle,
      'Mapas de Poder': Network,
      'Notas de Interés': FileText,
      'Participa': HandHelping,
      'Documentación': Book,
      'Acerca de': InfoIcon,
    };
    return iconMap[title];
  };

  // Enhanced navigation structure with submenus
  const enhancedNavItems: NavItem[] = [
    {
      title: 'Inicio',
      href: '/',
      icon: Home,
    },
    {
      title: 'Sistema Judicial',
      href: '#',
      icon: Building2,
      children: [
        { title: 'Instituciones de Justicia', href: '/instituciones' },
        { title: 'Comisiones de Postulación', href: '/comisiones' },
        { title: 'Perfiles de Candidatos', href: '/candidatos' },
      ],
    },
    {
      title: 'Análisis',
      href: '#',
      icon: Network,
      children: [
        { title: 'Mapas de Poder', href: '/mapas-poder' },
        { title: 'Notas de Interés', href: '/noticias' },
      ],
    },
    {
      title: 'Participación',
      href: '#',
      icon: HandHelping,
      children: [
        { title: 'Cómo Participar', href: '/participa' },
        { title: 'Documentación', href: '/documentacion' },
        { title: 'Acerca de', href: '/acerca' },
      ],
    },
  ];

  const currentPath = window.location.pathname;

  const isActiveLink = (href: string, children?: NavItem[]) => {
    if (href === '/' && currentPath === '/') return true;
    if (href !== '/' && href !== '#' && currentPath.startsWith(href)) return true;
    if (children) {
      return children.some(child => currentPath.startsWith(child.href));
    }
    return false;
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-medium py-2'
          : 'bg-white/98 backdrop-blur-sm shadow-soft py-3'
      }`}
    >
      <Container>
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center group">
            <div className="w-11 h-11 bg-gradient-to-br from-primary-600 to-primary-800 rounded-xl flex items-center justify-center mr-3 group-hover:shadow-medium transition-all duration-300 group-hover:scale-105">
              <Scale size={24} className="text-white" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-primary-800 group-hover:text-primary-900 transition-colors leading-tight">
                {SITE_NAME}
              </span>
              <span className="text-xs text-neutral-600 leading-none hidden sm:block">
                Transparencia Judicial
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1" ref={dropdownRef}>
            {enhancedNavItems.map((item) => {
              const Icon = item.icon;
              const hasChildren = item.children && item.children.length > 0;
              const isActive = isActiveLink(item.href, item.children);

              return (
                <div key={item.title} className="relative">
                  {hasChildren ? (
                    <button
                      onClick={() => handleDropdownToggle(item.title)}
                      className={`flex items-center px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 ${
                        isActive || activeDropdown === item.title
                          ? 'bg-primary-100 text-primary-800 shadow-soft'
                          : 'text-neutral-700 hover:bg-primary-50 hover:text-primary-700'
                      }`}
                    >
                      {Icon && <Icon size={16} className="mr-2" />}
                      {item.title}
                      <ChevronDown 
                        size={16} 
                        className={`ml-1 transition-transform duration-200 ${
                          activeDropdown === item.title ? 'rotate-180' : ''
                        }`} 
                      />
                    </button>
                  ) : (
                    <a
                      href={item.href}
                      className={`flex items-center px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 ${
                        isActive
                          ? 'bg-primary-100 text-primary-800 shadow-soft'
                          : 'text-neutral-700 hover:bg-primary-50 hover:text-primary-700'
                      }`}
                    >
                      {Icon && <Icon size={16} className="mr-2" />}
                      {item.title}
                    </a>
                  )}

                  {/* Dropdown Menu */}
                  {hasChildren && activeDropdown === item.title && (
                    <div className="absolute top-full left-0 mt-2 w-72 bg-white rounded-xl shadow-strong border border-neutral-200 py-2 z-50 animate-slideDown">
                      {item.children!.map((child) => (
                        <a
                          key={child.href}
                          href={child.href}
                          className={`flex items-center px-4 py-3 text-sm transition-colors ${
                            currentPath.startsWith(child.href)
                              ? 'bg-primary-50 text-primary-800 border-r-3 border-primary-600 font-medium'
                              : 'text-neutral-700 hover:bg-neutral-50 hover:text-primary-700'
                          }`}
                          onClick={() => setActiveDropdown(null)}
                        >
                          <div className="w-2 h-2 bg-primary-400 rounded-full mr-3 flex-shrink-0"></div>
                          <div>
                            <div className="font-medium">{child.title}</div>
                            <div className="text-xs text-neutral-500 mt-0.5">
                              {child.title === 'Instituciones de Justicia' && 'Explora las instituciones del sistema'}
                              {child.title === 'Comisiones de Postulación' && 'Procesos de selección activos'}
                              {child.title === 'Perfiles de Candidatos' && 'Candidatos a puestos judiciales'}
                              {child.title === 'Mapas de Poder' && 'Visualiza conexiones y relaciones'}
                              {child.title === 'Notas de Interés' && 'Noticias y análisis actualizados'}
                              {child.title === 'Cómo Participar' && 'Contribuye a la transparencia'}
                              {child.title === 'Documentación' && 'Guías y recursos'}
                              {child.title === 'Acerca de' && 'Conoce más sobre nosotros'}
                            </div>
                          </div>
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Search and Mobile Menu Toggle */}
          <div className="flex items-center space-x-2">
            <button
              className={`p-2.5 rounded-xl transition-all duration-200 ${
                isSearchOpen
                  ? 'bg-primary-100 text-primary-700 shadow-soft'
                  : 'text-neutral-700 hover:bg-neutral-100 hover:text-primary-700'
              }`}
              onClick={toggleSearch}
              aria-label="Buscar"
            >
              <Search size={20} />
            </button>
            <button
              className={`p-2.5 rounded-xl transition-all duration-200 lg:hidden ${
                isMobileMenuOpen
                  ? 'bg-primary-100 text-primary-700 shadow-soft'
                  : 'text-neutral-700 hover:bg-neutral-100 hover:text-primary-700'
              }`}
              onClick={toggleMobileMenu}
              aria-label={isMobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>

        {/* Search Bar */}
        {isSearchOpen && (
          <div className="mt-4 pb-4 animate-slideDown">
            <SearchBar
              placeholder="Buscar candidatos, instituciones, noticias..."
              onSearch={(query) => {
                console.log('Searching for:', query);
                if (query.trim()) {
                  window.location.href = `/buscar?q=${encodeURIComponent(query)}`;
                }
              }}
              className="w-full"
            />
          </div>
        )}
      </Container>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-[73px] bg-white z-40 overflow-y-auto animate-slideDown">
          <Container>
            <div className="py-6 space-y-1">
              {enhancedNavItems.map((item) => {
                const Icon = item.icon;
                const hasChildren = item.children && item.children.length > 0;
                const isActive = isActiveLink(item.href, item.children);

                return (
                  <div key={item.title}>
                    {hasChildren ? (
                      <button
                        onClick={() => handleDropdownToggle(item.title)}
                        className={`w-full flex items-center justify-between py-3 px-4 rounded-xl text-base font-medium transition-all duration-200 ${
                          isActive || activeDropdown === item.title
                            ? 'bg-primary-100 text-primary-800 shadow-soft'
                            : 'text-neutral-900 hover:bg-neutral-50'
                        }`}
                      >
                        <div className="flex items-center">
                          {Icon && <Icon size={20} className="mr-3" />}
                          {item.title}
                        </div>
                        <ChevronDown 
                          size={20} 
                          className={`transition-transform duration-200 ${
                            activeDropdown === item.title ? 'rotate-180' : ''
                          }`} 
                        />
                      </button>
                    ) : (
                      <a
                        href={item.href}
                        className={`flex items-center py-3 px-4 rounded-xl text-base font-medium transition-all duration-200 ${
                          isActive
                            ? 'bg-primary-100 text-primary-800 shadow-soft'
                            : 'text-neutral-900 hover:bg-neutral-50'
                        }`}
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {Icon && <Icon size={20} className="mr-3" />}
                        {item.title}
                      </a>
                    )}

                    {/* Mobile Submenu */}
                    {hasChildren && activeDropdown === item.title && (
                      <div className="ml-4 mt-2 space-y-1 animate-slideDown">
                        {item.children!.map((child) => (
                          <a
                            key={child.href}
                            href={child.href}
                            className={`flex items-center py-2.5 px-4 rounded-lg text-sm transition-colors ${
                              currentPath.startsWith(child.href)
                                ? 'bg-primary-50 text-primary-800 font-medium'
                                : 'text-neutral-600 hover:bg-neutral-50 hover:text-primary-700'
                            }`}
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            <div className="w-1.5 h-1.5 bg-primary-400 rounded-full mr-3 flex-shrink-0"></div>
                            {child.title}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}

              {/* Mobile Search */}
              <div className="pt-4 border-t border-neutral-200 mt-4">
                <SearchBar
                  placeholder="Buscar en JusticiapedIA..."
                  onSearch={(query) => {
                    console.log('Mobile search:', query);
                    if (query.trim()) {
                      window.location.href = `/buscar?q=${encodeURIComponent(query)}`;
                    }
                    setIsMobileMenuOpen(false);
                  }}
                  className="w-full"
                />
              </div>

              {/* Quick Actions */}
              <div className="pt-4 border-t border-neutral-200 mt-4">
                <h3 className="text-sm font-medium text-neutral-500 uppercase tracking-wider mb-3 px-4">
                  Acciones Rápidas
                </h3>
                <div className="space-y-1">
                  <a
                    href="/candidatos"
                    className="flex items-center py-2.5 px-4 text-sm text-neutral-600 hover:bg-neutral-50 hover:text-primary-700 rounded-lg transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <UserCircle size={16} className="mr-3" />
                    Ver Candidatos
                  </a>
                  <a
                    href="/instituciones"
                    className="flex items-center py-2.5 px-4 text-sm text-neutral-600 hover:bg-neutral-50 hover:text-primary-700 rounded-lg transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <Building2 size={16} className="mr-3" />
                    Instituciones
                  </a>
                  <a
                    href="/noticias"
                    className="flex items-center py-2.5 px-4 text-sm text-neutral-600 hover:bg-neutral-50 hover:text-primary-700 rounded-lg transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <FileText size={16} className="mr-3" />
                    Últimas Noticias
                  </a>
                </div>
              </div>
            </div>
          </Container>
        </div>
      )}
    </header>
  );
};

export default Navbar;