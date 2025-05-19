import { Link } from 'wouter';

function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white dark:bg-darkBackground p-4">
      <div className="text-center">
        <div className="text-9xl font-bold text-primary mb-4">404</div>
        <h1 className="text-3xl font-bold text-secondary dark:text-white mb-6">Sayfa Bulunamadı</h1>
        <p className="text-gray-600 dark:text-gray-400 mb-8">
          Aradığınız sayfa mevcut değil veya kaldırılmış olabilir.
        </p>
        <Link href="/">
          <a className="inline-flex items-center px-6 py-3 rounded-lg bg-primary text-white font-medium hover:bg-primary/90 transition-colors">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-5 w-5 mr-2" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M10 19l-7-7m0 0l7-7m-7 7h18" 
              />
            </svg>
            Ana Sayfaya Dön
          </a>
        </Link>
      </div>
    </div>
  );
}

export default NotFound;